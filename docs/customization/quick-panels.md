# Quick Panels *(1.0.6)*

Quick Panels are small dockable toolbars that keep your favorite actions visible while you work. The wheel stays for hotkey-driven flow — panels are for the tools you want on screen all the time ("Lighting Tools", "Placement Tools", …).

They reuse the exact same action system as the wheel: labels, icons, colors, Python actions, sequences, and visibility conditions all come from your graph nodes.

**Open them:** Quick Menu Panel → **Panels** tab

## Starter panels

On first run, four panels are created automatically:

| Panel | Contents |
|-------|----------|
| **Viewport Essentials** | Lit / Unlit / Wireframe / Detail Lighting, Perspective / Top / Front views, Show Collision |
| **Placement Tools** | Spawn Cube / Sphere / Cylinder / Plane, Reset Transform, Align to Floor, Pivot to Center, Toggle Snap, Grid Size ± |
| **Lighting Tools** | Lighting Only, Detail Lighting, Light Complexity, Env Light Mixer, Build Lighting, Reflection Captures, Show Post Process |
| **Optimization** | Shader Complexity, LOD Coloration, Stat FPS / Unit / GPU, Profile GPU, Quality Low / Epic |

Their actions live in a generated `/Game/QuickMenu/QM_PanelActions` graph — open it in the graph editor to customize anything. Deleting a starter panel is permanent; it won't come back on restart.

## Docking

Each panel is a **nomad tab**: it opens as a floating window above the editor and can be docked anywhere, exactly like a native Unreal panel (next to Details, under the Outliner, as a tab in any dock area). Position and docking are saved with the editor layout, so panels come back where you left them.

## Adding actions

Three ways to fill a panel:

1. **`+ Add Action`** — a Blueprint-style picker (collapsed categories, search box with instant keyboard focus):
    - **From Active Graph** — the actions, submenus, and sequences already configured in your active graph.
    - **The full action catalog** — every built-in action type. Picking one creates a fresh, unconnected node in the active graph (parked below your layout, undoable, fully editable) and pins it to the panel. Unconnected nodes never show in the wheel.
2. **Drag & drop from the wheel** — open the wheel, click-drag any wedge past a few pixels and carry it out (works from pie wedges, radial buttons, list rows, and submenu items). The panel highlights while you hover it; drop to pin. Nothing can accidentally execute during the drag.
3. **Import** a `.qmpanel` file (see below).

## Live sync with the graph

Panel buttons reference the **live graph nodes** — nothing is copied:

- Rename an action, change its icon or its operation → the button updates.
- Python visibility conditions apply: actions whose condition doesn't match the current context render **disabled** (grayed with a tooltip), not hidden.
- Buttons re-resolve their action at click time, so they always act on your current selection / editor context.
- If a source node is deleted, the button shows `Missing action` with a one-click remove.

## Editing actions from the panel

**Right-click any button:**

- **Edit Action…** — opens the same inline property editor as the wheel's right-click (label, icon, color, operation, Python code, …) in a small window.
- **Remove from Panel** — unpins the button. The action node stays in the graph.

## Sharing panels

- **Export** (disk icon in the Panels tab) writes a portable **`.qmpanel`** JSON file: the panel name plus references to its actions (graph asset path + node id).
- **Import** recreates the panel from a file, with a notification showing how many actions resolved.

Since entries reference graph assets by path, teammates working on the same project can import your panels and get working buttons immediately. If a referenced graph is missing, the affected buttons show `Missing action` instead of breaking the import.

## Tips

- SubMenu nodes pinned to a panel become **dropdown buttons** (nested submenus become nested menus).
- Sequence nodes run their whole action chain from a single button.
- Panels left open when you close the editor reopen automatically with your layout.
