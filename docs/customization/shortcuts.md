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

## Graph Editor — Navigation

| Key | Action |
|-----|--------|
| **Escape** | Exit focus mode or subgraph |
| **Backspace** | Navigate back to parent graph |
| **Shift+Space** | Jump directly to root graph |
| **Ctrl+F** | Find in graph (search nodes by name) |
| **Ctrl+E** | Toggle preview panel |

## Graph Editor — Node Spawn (Hold + Click)

Hold the key, then click on the canvas to spawn a node at that position:

| Key | Spawns |
|-----|--------|
| **W + Click** | WheelOutput node |
| **S + Click** | SubMenu node |
| **C + Click** | Switch: Editor Context node |

These are the defaults — fully customizable in **Project Settings → Quick Menu → Node Spawn Shortcuts**. You can add your own key → node class mappings.

## Graph Editor — Node Operations

| Key | Action |
|-----|--------|
| **C** | Create group comment around selected nodes |
| **H** | Toggle compact/expanded display on selected node |
| **F2** | Rename selected wheel |
| **Shift+C** | Connect selected action nodes to selected WheelOutput/SubMenu (auto-wires them) |
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

**Shift+C** does the same for existing nodes: select actions + a WheelOutput → Shift+C → all wired up.
