# Keyboard Shortcuts

All shortcuts are customizable in the Quick Menu Panel (Window → Quick Menu Panel → Shortcuts tab).

## Pie Menu

| Key | Action |
|-----|--------|
| **V** (configurable) | Open pie menu at cursor |
| **Left Click** | Execute hovered wedge |
| **Right Click** | Go back to parent menu / dismiss |
| **Escape** | Close menu |
| **Mouse Wheel** | Zoom pie menu |
| **Ctrl+Z** | Undo last action (refreshes menu) |
| **Ctrl+Y** | Redo (refreshes menu) |
| **E** (configurable) | Jump to graph editor for current wheel |

## Hotkey Bindings & Gestures

Since 1.0.3, the same key can trigger **different gestures** — each bound to a different graph. Configure under **Project Settings → Quick Menu → Hotkey Bindings**.

| Gesture | Trigger |
|---------|---------|
| **Tap** | Press and release within `TapThresholdMs` (default 200 ms) without dragging. Opens the menu in sticky mode (stays open until clicked) |
| **Hold** | Press longer than `TapThresholdMs`. Release executes the hovered wedge (classic press-hold-release flow) |
| **Drag** | Press and move the mouse beyond `DragPixelThreshold` (default 8 px) before releasing |

Each binding maps `(Key, Gesture)` → a specific graph.

**Example setup:**

- `V` + **Tap** → `QM_Favorites` (a small wheel with your most-used actions)
- `V` + **Hold** → `QM_MasterDefault` (the full context-aware wheel)

!!! tip "Legacy migration"
    If you used Quick Menu 1.0.2 or earlier, your `Open Menu Key` + `Active Graph` settings are automatically migrated to a single `Hold` binding on first launch. The legacy fields remain visible in Project Settings as read-only for reference, but new configuration should go through **Hotkey Bindings**.

## Graph Editor — Navigation

| Key | Action |
|-----|--------|
| **Escape** | Exit focus mode or subgraph |
| **Backspace** | Navigate back to parent graph |
| **Shift+Space** | Jump directly to root graph |
| **Ctrl+F** | Find in graph (search nodes by name) |
| **Ctrl+E** | Toggle preview panel |
| **Ctrl+L** | Auto-layout selected nodes |
| **Alt+E** | Create comment around selection, auto-named from SubMenu/WheelOutput, random color |

## Graph Editor — Node Spawn (Hold + Click)

Hold the key, then click on the canvas to spawn a node at that position:

| Key | Spawns |
|-----|--------|
| **W + Click** | WheelOutput node |
| **S + Click** | SubMenu node |
| **C + Click** | Switch: Editor Context node |

These are the defaults — fully customizable in **Project Settings → Quick Menu → Node Spawn Shortcuts**. You can add your own key → node class mappings.

<div class="video-container">
<video autoplay="true" loop="true" muted="true" playsinline="true">
<source src="/img/ShortcutShiftC_ClicS.mp4" type="video/mp4">
</video>
</div>

## Graph Editor — Node Operations

| Key | Action |
|-----|--------|
| **C** | Create group comment around selected nodes |
| **H** | Toggle compact/expanded display on selected node |
| **F2** | Rename selected wheel |
| **Ctrl+C** | Connect selected action nodes to selected WheelOutput/SubMenu (auto-wires them) |
| **=** | Add a menu pin to selected WheelOutput/SubMenu |
| **-** | Remove last menu pin from selected WheelOutput/SubMenu |
| **Shift+Ctrl+N** | Create new wheel category |
| **Shift+Ctrl+A** | Select all wheels in wheel list |

## Graph Editor — Standard Editing

| Key | Action |
|-----|--------|
| **Ctrl+Z / Ctrl+Y** | Undo / Redo |
| **Delete** | Delete selected nodes |
| **Ctrl+A** | Select all |
| **Ctrl+C / Ctrl+X / Ctrl+V** | Copy / Cut / Paste |
| **Ctrl+D** | Duplicate |

## Smart Auto-Wiring

When you spawn a WheelOutput or SubMenu with nodes already selected:

1. Quick Menu detects your selected action/submenu nodes
2. Automatically grows the new node's menu pins to match
3. Wires them in visual order (top-to-bottom, left-to-right)

This means: select 5 action nodes → press **W + click** → instant wheel with all 5 connected.

**Ctrl+C** does the same for existing nodes: select actions + a WheelOutput → Ctrl+C → all wired up.

<div class="video-container">
<video autoplay="true" loop="true" muted="true" playsinline="true">
<source src="/img/SmartAutoWiringWClick.mp4" type="video/mp4">
</video>
</div>
