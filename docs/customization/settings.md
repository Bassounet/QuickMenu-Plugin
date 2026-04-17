# Project Settings

Found at: **Edit → Project Settings → Plugins → Quick Menu**

| Setting | Default | Description |
|---------|---------|-------------|
| **Hotkey Bindings** | 1 entry (V, Hold → Active Graph) | List of `(Key, Gesture, Graph)` bindings. Same key can trigger multiple gestures routing to different graphs — see [Keyboard Shortcuts → Hotkey Bindings & Gestures](shortcuts.md#hotkey-bindings-gestures) |
| **Active Graph** *(Legacy)* | `QM_MasterDefault` | Migrated to Hotkey Bindings on first launch. Kept as read-only reference |
| **Open Menu Key** *(Legacy)* | V | Migrated to Hotkey Bindings on first launch |
| **Edit Wheel Key** | E | Hotkey to jump from pie menu to graph editor for the current wheel |
| **Activation Mode** | Click and Release | When the hovered wedge executes |
| **Node Spawn Shortcuts** | W, S, C | Key + node class pairs for quick node creation in the graph editor |
| **Offer Create Wheel** | true | Show "Create Wheel" panel when no wheel matches the current context |
| **Allow Wheel During Play In Editor** | true | When enabled, hotkeys open the pie menu even while PIE is running. Disable to let the game receive the keypress |
| **Force Neutral Gray Wedges** | **true** *(changed in 1.0.3)* | Overrides per-category wedge colors with a uniform editor-style gray. Disable to restore colored wedges |
| **Gray Separator Darkness** | 3.0 | Darkness of wedge separator lines when neutral gray mode is on (0.25–3.0) |
| **Icon Size Multiplier** | 1.1 | Scale factor for pie menu wedge icons (0.5–3.0) |
| **Wheel Size Multiplier** | 1.4 | Scale factor for the overall pie menu size (0.5–2.0). Also adjustable live via mouse wheel while the menu is open |
| **Wedge Gap** | 0 px | Pixel gap between adjacent wedges (0–20). Adjustable live via middle-mouse drag on the wheel |
| **Custom Console Commands** | Empty | User-defined console commands available in the Quick Menu panel |

## Activation Modes

- **Click and Release** (default) — hover over wedge, release mouse/key to execute
- **Click Only** — click on wedge to execute
- **Release Only** — release the V key to execute whatever is hovered

## Node Spawn Shortcuts

Each entry has:
- **Key** — the key to hold
- **Display Name** — shown in the Quick Menu Panel shortcuts tab
- **Node Class Path** — the class to spawn

Default shortcuts: W → WheelOutput, S → SubMenu, C → Switch: Editor Context.

## Custom Console Commands

Each entry has:
- **Command** — the console command string
- **Description** — shown in the Quick Menu Panel
- **Is Toggle** — whether the command toggles on/off
- **Default Value** — initial value for toggle commands
