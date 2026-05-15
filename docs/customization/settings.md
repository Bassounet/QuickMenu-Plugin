# Project Settings

Found at: **Edit → Project Settings → Plugins → Quick Menu**

*Since 1.0.4*, settings are organized under clearer grouped categories — `Primary Binding`, `Hotkeys`, `Interaction`, `Behavior`, `Appearance`, `Console`. The Quick Menu Panel's Settings tab mirrors this exact same object — there's no longer a separate handcrafted UI in the panel.

## Primary Binding

| Setting | Default | Description |
|---------|---------|-------------|
| **Active Graph** *(Legacy)* | `QM_MasterDefault` | Migrated into `Hotkey Bindings` on first launch. Kept as read-only reference |
| **Open Menu Key** *(Legacy)* | V | Migrated into `Hotkey Bindings` on first launch |
| **Edit Wheel Key** | E | Hotkey to jump from pie menu to graph editor for the current wheel |

## Hotkeys

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable Custom Gesture Hotkeys** *(1.0.4)* | **false** | When off, the Tap/Hold/Drag gesture resolution is disabled and the runtime falls back cleanly to the legacy `Open Menu Key` + `Active Graph` path. The bindings list stays editable but visually dimmed with an inline notice. Defaults to off while the gesture system stabilizes |
| **Hotkey Bindings** | 1 entry (V, Hold → Active Graph) | List of `(Key, Gesture, Graph)` bindings. Same key can trigger multiple gestures routing to different graphs — see [Keyboard Shortcuts → Hotkey Bindings & Gestures](shortcuts.md#hotkey-bindings-gestures) |
| **Node Spawn Shortcuts** | W, S, C | Key + node class pairs for quick node creation in the graph editor |

## Interaction

| Setting | Default | Description |
|---------|---------|-------------|
| **Activation Mode** | Click and Release | When the hovered wedge executes |
| **Wheel Edit Mode Activation** *(1.0.4)* | Toggle | Whether `Alt` **toggles** [Wheel Edit Mode](pie-menu.md#wheel-edit-mode-1-0-4) (press once to enter, again to exit) or activates it only **while held** |

## Behavior

| Setting | Default | Description |
|---------|---------|-------------|
| **Offer Create Wheel** | true | Show "Create Wheel" panel when no wheel matches the current context |
| **Allow Wheel During Play In Editor** | true | When enabled, hotkeys open the pie menu even while PIE is running. Disable to let the game receive the keypress |

## Appearance

| Setting | Default | Description |
|---------|---------|-------------|
| **Force Neutral Gray Wedges** | **true** *(changed in 1.0.3)* | Overrides per-category wedge colors with a uniform editor-style gray. Disable to restore colored wedges |
| **Gray Separator Darkness** | 3.0 | Darkness of wedge separator lines when neutral gray mode is on (0.25–3.0) |
| **Icon Size Multiplier** | 1.1 | Scale factor for pie menu wedge icons (0.5–3.0) |
| **Wheel Size Multiplier** | 1.4 | Scale factor for the overall pie menu size (0.5–2.0). Also adjustable live via mouse wheel while the menu is open in pie mode |
| **Wedge Gap** | 0 px | Pixel gap between adjacent wedges (0–20). Adjustable live via middle-mouse drag on the wheel. Pie mode only |
| **List Menu Distance** *(1.0.4)* | 0 | Absolute pixel offset that pushes/pulls list-style menus and radial-button rings toward/away from the wheel center. Clamp widened to ±10000. In list / radial-button layouts this is adjustable live via the **mouse wheel** while the menu is open (previously this gesture resized the wheel) |

!!! info "Per-graph wheel rotation"
    Rotation is stored **per-wheel** on the [WheelOutput](../nodes/structural.md#wheeloutput) node (`Rotation (°)`, `Snap to Angle`, `Snap Angle Degrees`), not as a global appearance setting. Adjust it from the inline `SpinBox` on the node or with **Shift + Middle-drag** while the wheel is open.

## Console

| Setting | Default | Description |
|---------|---------|-------------|
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
