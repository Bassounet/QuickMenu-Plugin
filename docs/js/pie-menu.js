(function () {
  'use strict';

  const SECTIONS = [
    { icon: '🏠', label: 'Home', url: '/', color: '#7c4dff' },
    { icon: '🚀', label: 'Getting Started', url: '/getting-started/installation/', color: '#651fff' },
    { icon: '🧠', label: 'Concepts', url: '/concepts/graph-system/', color: '#536dfe' },
    { icon: '📦', label: 'Nodes', url: '/nodes/structural/', color: '#448aff' },
    { icon: '🎨', label: 'Customize', url: '/customization/graph-editor/', color: '#40c4ff' },
    { icon: '⌨️', label: 'Shortcuts', url: '/customization/shortcuts/', color: '#18ffff' },
    { icon: '🐍', label: 'Python', url: '/customization/python-examples/', color: '#69f0ae' },
    { icon: '🔧', label: 'Troubleshoot', url: '/troubleshooting/common-issues/', color: '#ffd740' },
    { icon: '🔄', label: 'Refresh', url: null, color: '#ff6e40' },
  ];

  const INNER_RADIUS = 60;
  const OUTER_RADIUS = 160;
  const LABEL_RADIUS = 115;

  let overlay = null;
  let canvas = null;
  let ctx = null;
  let hoveredIndex = -1;
  let centerX = 0;
  let centerY = 0;
  let isOpen = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  function createOverlay() {
    overlay = document.createElement('div');
    overlay.id = 'qm-pie-overlay';
    overlay.style.cssText =
      'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;cursor:default;display:none;';

    canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;';
    overlay.appendChild(canvas);
    ctx = canvas.getContext('2d');

    // Animated banner
    const banner = document.createElement('div');
    banner.id = 'qm-pie-banner';
    banner.innerHTML = '<span style="margin-right:8px;font-size:16px;">⌨️</span> Press <kbd style="background:rgba(255,255,255,0.15);padding:2px 8px;border-radius:4px;font-weight:bold;font-family:system-ui;border:1px solid rgba(255,255,255,0.2);">V</kbd> anywhere to try the Quick Menu navigation';
    banner.style.cssText =
      'position:fixed;bottom:0;left:0;width:100%;z-index:100000;' +
      'background:linear-gradient(135deg, #7c4dff 0%, #536dfe 50%, #448aff 100%);' +
      'color:#fff;padding:10px 20px;font-size:13px;font-family:system-ui;' +
      'text-align:center;cursor:pointer;pointer-events:auto;' +
      'transform:translateY(100%);transition:transform 0.5s cubic-bezier(0.16,1,0.3,1),opacity 0.4s;' +
      'box-shadow:0 -2px 10px rgba(0,0,0,0.2);display:none;';

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText =
      'position:absolute;right:16px;top:50%;transform:translateY(-50%);' +
      'cursor:pointer;opacity:0.6;font-size:14px;padding:4px 8px;';
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dismissBanner();
    });
    banner.appendChild(closeBtn);

    // Pulse animation on the V key
    const style = document.createElement('style');
    style.textContent = `
      @keyframes qm-pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
      #qm-pie-banner kbd { animation: qm-pulse 2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    document.body.appendChild(banner);

    function dismissBanner() {
      banner.style.transform = 'translateY(100%)';
      setTimeout(function () { banner.style.display = 'none'; }, 500);
      sessionStorage.setItem('qm-banner-dismissed', '1');
    }

    // Dismiss on first V press
    function onFirstV() {
      if (banner.style.display !== 'none') dismissBanner();
      document.removeEventListener('keydown', onFirstV);
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'v' || e.key === 'V') onFirstV();
    });

    // Track mouse position globally
    document.addEventListener('mousemove', function (e) {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    });

    overlay.addEventListener('mousemove', onMouseMove);
    overlay.addEventListener('click', onMouseClick);
    overlay.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      closeMenu();
    });

    document.body.appendChild(overlay);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function openMenu(x, y) {
    if (isOpen) return;
    isOpen = true;
    centerX = x;
    centerY = y;
    resizeCanvas();
    overlay.style.display = 'block';
    hoveredIndex = -1;
    draw();
  }

  function closeMenu() {
    if (!isOpen) return;
    isOpen = false;
    overlay.style.display = 'none';
  }

  function getWedgeIndex(mx, my) {
    const dx = mx - centerX;
    const dy = my - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < INNER_RADIUS || dist > OUTER_RADIUS + 30) return -1;

    let angle = Math.atan2(dy, dx);
    if (angle < 0) angle += Math.PI * 2;

    const sliceAngle = (Math.PI * 2) / SECTIONS.length;
    const offset = -Math.PI / 2 - sliceAngle / 2;
    let adjusted = angle - offset;
    if (adjusted < 0) adjusted += Math.PI * 2;

    return Math.floor(adjusted / sliceAngle) % SECTIONS.length;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dim background
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const sliceAngle = (Math.PI * 2) / SECTIONS.length;
    const startOffset = -Math.PI / 2 - sliceAngle / 2;

    const GAP = 0.06; // radians gap between wedges
    const CORNER_RADIUS = 8; // rounded corners

    for (let i = 0; i < SECTIONS.length; i++) {
      const a0 = startOffset + i * sliceAngle + GAP / 2;
      const a1 = a0 + sliceAngle - GAP;
      const isHovered = i === hoveredIndex;

      const r = isHovered ? OUTER_RADIUS + 10 : OUTER_RADIUS;

      // Wedge with all 4 corners rounded
      ctx.beginPath();
      const cr = CORNER_RADIUS;
      const oca = cr / r;           // outer corner angle offset
      const ica = cr / INNER_RADIUS; // inner corner angle offset

      // Point helper
      const px = (angle, radius) => centerX + Math.cos(angle) * radius;
      const py = (angle, radius) => centerY + Math.sin(angle) * radius;

      // Corner 1: outer-start (inner→outer at a0)
      ctx.moveTo(px(a0 + oca, r), py(a0 + oca, r));

      // Outer arc
      ctx.arc(centerX, centerY, r, a0 + oca, a1 - oca);

      // Corner 2: outer-end (outer→inner at a1)
      ctx.quadraticCurveTo(px(a1, r), py(a1, r), px(a1, r - cr), py(a1, r - cr));
      ctx.lineTo(px(a1, INNER_RADIUS + cr), py(a1, INNER_RADIUS + cr));

      // Corner 3: inner-end (radial→inner arc at a1)
      ctx.quadraticCurveTo(px(a1, INNER_RADIUS), py(a1, INNER_RADIUS), px(a1 - ica, INNER_RADIUS), py(a1 - ica, INNER_RADIUS));

      // Inner arc (reversed)
      ctx.arc(centerX, centerY, INNER_RADIUS, a1 - ica, a0 + ica, true);

      // Corner 4: inner-start (inner arc→radial at a0)
      ctx.quadraticCurveTo(px(a0, INNER_RADIUS), py(a0, INNER_RADIUS), px(a0, INNER_RADIUS + cr), py(a0, INNER_RADIUS + cr));
      ctx.lineTo(px(a0, r - cr), py(a0, r - cr));

      // Corner 1 finish: radial→outer arc at a0
      ctx.quadraticCurveTo(px(a0, r), py(a0, r), px(a0 + oca, r), py(a0 + oca, r));

      ctx.closePath();

      const baseColor = SECTIONS[i].color;
      ctx.fillStyle = isHovered ? baseColor : hexToRgba(baseColor, 0.7);
      ctx.fill();

      // Border
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label
      const midAngle = (a0 + a1) / 2;
      const lx = centerX + Math.cos(midAngle) * LABEL_RADIUS;
      const ly = centerY + Math.sin(midAngle) * LABEL_RADIUS;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Icon above
      ctx.font = isHovered ? '18px system-ui' : '16px system-ui';
      ctx.fillStyle = isHovered ? '#fff' : 'rgba(255,255,255,0.9)';
      ctx.fillText(SECTIONS[i].icon, lx, ly - 9);

      // Label below
      ctx.font = isHovered ? 'bold 11px system-ui' : '10px system-ui';
      ctx.fillStyle = isHovered ? '#fff' : 'rgba(255,255,255,0.85)';
      ctx.fillText(SECTIONS[i].label, lx, ly + 10);

      ctx.restore();
    }

    // Center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, INNER_RADIUS - 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(20,20,20,0.9)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Center text
    ctx.font = 'bold 11px system-ui';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Quick Menu', centerX, centerY);
  }

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function onMouseMove(e) {
    const newIndex = getWedgeIndex(e.clientX, e.clientY);
    if (newIndex !== hoveredIndex) {
      hoveredIndex = newIndex;
      overlay.style.cursor = newIndex >= 0 ? 'pointer' : 'default';
      draw();
    }
  }

  function navigateHovered() {
    if (hoveredIndex < 0) return;
    const section = SECTIONS[hoveredIndex];
    if (section.url === null) {
      window.location.reload();
    } else {
      window.location.href = section.url;
    }
  }

  function onMouseClick(e) {
    if (hoveredIndex < 0) {
      closeMenu();
      return;
    }
    navigateHovered();
    closeMenu();
  }

  // Keyboard — hold V to open, release V to execute + close (like Unreal)
  document.addEventListener('keydown', function (e) {
    if (e.repeat) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
    if (document.querySelector('.md-search__input:focus')) return;

    if (e.key === 'v' || e.key === 'V') {
      if (!isOpen) {
        openMenu(lastMouseX || window.innerWidth / 2, lastMouseY || window.innerHeight / 2);
      }
      e.preventDefault();
    }

    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      e.preventDefault();
    }
  });

  document.addEventListener('keyup', function (e) {
    if (e.key === 'v' || e.key === 'V') {
      if (isOpen) {
        if (hoveredIndex >= 0) {
          navigateHovered();
        }
        closeMenu();
        e.preventDefault();
      }
    }
  });

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createOverlay);
  } else {
    createOverlay();
  }

  // Show banner after a short delay on first visit
  setTimeout(function () {
    const b = document.getElementById('qm-pie-banner');
    if (b && !sessionStorage.getItem('qm-banner-dismissed')) {
      b.style.display = 'block';
      // Trigger slide-up animation
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          b.style.transform = 'translateY(0)';
        });
      });
    }
  }, 1500);
})();
