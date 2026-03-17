(function () {
  'use strict';

  const SECTIONS = [
    { icon: '🏠', label: 'Home', url: '/', color: '#7c4dff' },
    { icon: '🚀', label: 'Getting Started', url: '/getting-started/installation/', color: '#651fff' },
    { icon: '📦', label: 'Nodes', url: '/nodes/structural/', color: '#448aff' },
    { icon: '🎨', label: 'Customize', url: '/customization/graph-editor/', color: '#40c4ff' },
    { icon: '🐍', label: 'Python', url: '/customization/python-examples/', color: '#69f0ae' },
    { icon: '🔧', label: 'Troubleshoot', url: '/troubleshooting/common-issues/', color: '#ffd740' },
    { icon: '💬', label: 'Discord', url: 'https://discord.gg/BQG6KZJY', color: '#5865F2' },
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

    // Animated banner — catchy AF
    const banner = document.createElement('div');
    banner.id = 'qm-pie-banner';
    banner.innerHTML = `
      <div class="qm-banner-content">
        <div class="qm-banner-glow"></div>
        <span class="qm-banner-text">
          🎯 <strong>Try it now!</strong> Hold
          <span class="qm-key-wrapper">
            <span class="qm-key-ring"></span>
            <kbd class="qm-key">V</kbd>
          </span>
          anywhere on this page to open the Quick Menu
          <span class="qm-banner-arrow">↗</span>
        </span>
        <span class="qm-banner-close">✕</span>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #qm-pie-banner {
        position: fixed; bottom: 20px; left: 50%; z-index: 100000;
        transform: translateX(-50%) translateY(120px) scale(0.9);
        transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s;
        display: none; pointer-events: auto; opacity: 0;
      }
      .qm-banner-content {
        position: relative; overflow: hidden;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        border: 1px solid rgba(124, 77, 255, 0.4);
        border-radius: 16px; padding: 14px 40px 14px 24px;
        box-shadow: 0 8px 32px rgba(124, 77, 255, 0.3), 0 0 60px rgba(124, 77, 255, 0.1);
        font-family: system-ui; font-size: 14px; color: #e0e0ff;
        white-space: nowrap;
      }
      .qm-banner-glow {
        position: absolute; top: -50%; left: -20%; width: 140%; height: 200%;
        background: conic-gradient(from 0deg, transparent, rgba(124,77,255,0.15), transparent, rgba(68,138,255,0.15), transparent);
        animation: qm-glow-spin 4s linear infinite;
      }
      @keyframes qm-glow-spin { to { transform: rotate(360deg); } }
      .qm-banner-text { position: relative; z-index: 1; }
      .qm-banner-text strong { color: #fff; font-size: 15px; }
      .qm-key-wrapper {
        position: relative; display: inline-block; margin: 0 4px; vertical-align: middle;
      }
      .qm-key-ring {
        position: absolute; inset: -4px; border-radius: 10px;
        border: 2px solid rgba(124, 77, 255, 0.6);
        animation: qm-ring-pulse 1.5s ease-in-out infinite;
      }
      @keyframes qm-ring-pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0; }
      }
      .qm-key {
        display: inline-block; padding: 3px 12px; font-size: 16px; font-weight: 900;
        font-family: system-ui; color: #fff; letter-spacing: 1px;
        background: linear-gradient(180deg, #7c4dff 0%, #651fff 100%);
        border-radius: 6px; border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 0 2px 8px rgba(124,77,255,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
        animation: qm-key-bounce 2s ease-in-out infinite;
      }
      @keyframes qm-key-bounce {
        0%, 100% { transform: translateY(0); }
        30% { transform: translateY(-3px); }
        50% { transform: translateY(0); }
        70% { transform: translateY(-2px); }
      }
      .qm-banner-arrow {
        display: inline-block; margin-left: 6px; font-size: 16px;
        animation: qm-arrow-bounce 1s ease-in-out infinite alternate;
      }
      @keyframes qm-arrow-bounce {
        from { transform: translate(0, 0); }
        to { transform: translate(3px, -3px); }
      }
      .qm-banner-close {
        position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
        cursor: pointer; opacity: 0.4; font-size: 14px; padding: 4px 8px;
        z-index: 2; transition: opacity 0.2s;
      }
      .qm-banner-close:hover { opacity: 1; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(banner);

    function dismissBanner() {
      banner.style.transform = 'translateX(-50%) translateY(120px) scale(0.9)';
      banner.style.opacity = '0';
      setTimeout(function () { banner.style.display = 'none'; }, 600);
      sessionStorage.setItem('qm-banner-dismissed', '1');
    }

    banner.querySelector('.qm-banner-close').addEventListener('click', function (e) {
      e.stopPropagation();
      dismissBanner();
    });

    // Dismiss on first V press
    document.addEventListener('keydown', function onFirstV(e) {
      if (e.key === 'v' || e.key === 'V') {
        dismissBanner();
        document.removeEventListener('keydown', onFirstV);
      }
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
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
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
      ctx.fillStyle = baseColor;
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
      ctx.font = isHovered ? '24px system-ui' : '22px system-ui';
      ctx.fillStyle = '#fff';
      ctx.fillText(SECTIONS[i].icon, lx, ly - 12);

      // Label below
      ctx.font = isHovered ? 'bold 14px system-ui' : '13px system-ui';
      ctx.fillStyle = '#fff';
      ctx.fillText(SECTIONS[i].label, lx, ly + 14);

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
    ctx.font = 'bold 14px system-ui';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
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

  // Show banner after delay
  setTimeout(function () {
    const b = document.getElementById('qm-pie-banner');
    if (b && !sessionStorage.getItem('qm-banner-dismissed')) {
      b.style.display = 'block';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          b.style.transform = 'translateX(-50%) translateY(0) scale(1)';
          b.style.opacity = '1';
        });
      });
    }
  }, 1500);
})();
