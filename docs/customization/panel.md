# Quick Menu Panel

The Quick Menu Panel is a dockable editor tab that serves as a central hub for configuration and support.

**Open it:** Window → Quick Menu Panel (auto-opens on first plugin activation)

![Quick Menu Panel](/img/QuickMenuPanel.png)

## Header (hero card, redesigned in 1.0.5)

A tinted card containing three rows:

- **Row 1 — brand:** 44 px logo, bold `Quick Menu Panel` title, dim subtitle `vX.Y.Z · RELEASE`.
- **Row 2 — controls:** bordered toolbar block grouping `Graph: <active-graph picker>`, `+ New` (creates a graph and opens it), `↗ Open` (opens the active graph). A vertical separator is followed by the active wheel chip (`Wheel: <name | None>`).
- **Row 3 — links:** inline `Discord  GitHub  Docs  Website`, plus the `Report Bug` button (opens GitHub Issues).

The standalone `Active Wheel:` row and the duplicated bottom footer (logo + title + open-key reminder + duplicated links) were removed in 1.0.5; all that information now lives in the header.

## Drag-reorderable tabs *(1.0.5)*

Every tab can be grabbed and dragged to reorder. Hovering shows an open-hand cursor and a subtle background highlight; dragging swaps to a closed-hand cursor with a floating decorator (the tab label) following the mouse. Drop targets show a thin accent line on the left or right edge depending on the cursor X position within the target tab, so you can insert between any two tabs.

The order is persisted per project in `EditorPerProjectUserSettings.ini` under `[QuickMenuPanel] TabOrder=…` and gracefully handles future tab additions (any unknown tab id is appended at the end).

## Tab 1 — Shortcuts

Lists all keyboard shortcuts organized by section (Pie Menu, Node Spawn, Graph Editor).

- Each shortcut has an **editable key binding badge** — click it, press a new key to rebind
- **Reset button** appears when a binding has been changed from default
- Node Spawn shortcuts show the hold+click shortcuts (W, S, C by default)

See [Keyboard Shortcuts](shortcuts.md) for the full list.

## Tab 2 — Docs

Built-in documentation of all node types and action types.

- Organized by category, browsable in-editor
- No need to leave the editor to look up what a node does

## Tab 3 — Console Commands

A searchable list of console commands with one-click Run buttons.

**Sources:**

- **From Active Graph** — lists all ConsoleCommand action nodes found in the active graph
- **Predefined categories** — Performance Stats, Rendering Stats, Engine Stats, Memory & Objects, Visualization Toggles, Rendering Settings, Framerate, Cleanup & Misc (**55 predefined commands** covering `stat`, `show`, `r.`, `sg.`, `t.MaxFPS`, `slomo`, and more)
- **Custom commands** — user-defined commands from Project Settings

**Features:**

- Toggle commands on/off
- Commands with configurable values display **editable fields** (not just Run buttons), allowing direct value editing from the panel
- CVar state capture and reset to initial values
- Search/filter across all commands
- Add/remove custom commands

## Tab 4 — Plugin settings *(renamed in 1.0.5)*

*Previously "Settings". Renamed to **Plugin settings** in 1.0.5 to disambiguate from Unreal's own `Edit → Project Settings → Plugins → Quick Menu` window.*

The tab **mirrors the Project Settings object directly** — the same underlying `UQuickMenuSettings` instance, with no separate handcrafted UI. Every setting you can change in `Edit → Project Settings → Plugins → Quick Menu` is editable here too, organized under the same groups:

- **Primary Binding** — Active Graph (Legacy), Open Menu Key (Legacy), Edit Wheel Key
- **Hotkeys** — Enable Custom Gesture Hotkeys, Hotkey Bindings, Node Spawn Shortcuts
- **Interaction** — Activation Mode, Wheel Edit Mode Activation
- **Behavior** — Offer Create Wheel, Allow Wheel During Play In Editor
- **Appearance** — Force Neutral Gray Wedges, Gray Separator Darkness, Icon Size Multiplier, Wheel Size Multiplier, Wedge Gap, List Menu Distance
- **Console** — Custom Console Commands

**Full-height layout (1.0.5):** the vertical splitter that previously shared this tab with the live preview has been removed. The property editor now uses the entire tab height with its own scroll view. The live preview moved to its own dedicated tab (see Tab 5 below). A `Reset Wheel Appearance` button restores the appearance overrides to defaults.

**Settings persist across editor restarts (1.0.5):** all write paths route through `TryUpdateDefaultConfigFile()` on the `defaultconfig` `UQuickMenuSettings` class, so every `UPROPERTY(config)` (open-menu hotkey, active wheel, hotkey gestures, node spawn shortcuts, "Show Add Button In Wheel", "Allow Wheel During Play In Editor", custom console commands, etc.) is now correctly written to `Config/DefaultEditor.ini` and survives editor restarts.

See [Project Settings](settings.md) for the full reference.

## Tab 5 — Live Preview *(new in 1.0.5)*

A dedicated top-level tab hosting the live wheel preview at full tab height. Sits between `Plugin settings` and `About` by default (but can be dragged anywhere).

- **Source picker** in the section header: `Demo` (stable showcase) or `Active Graph`
- Refreshes automatically when entering the tab
- Read-only interaction — for appearance tuning, not navigation

## Tab 6 — About

Plugin overview, author credit, version string, and quick links to Docs, GitHub, and Support.

## Support Links

| Link | URL |
|------|-----|
| Discord | [discord.gg/YYc2v8k5BA](https://discord.gg/YYc2v8k5BA) |
| GitHub | [github.com/Bassounet/QuickMenu-Plugin](https://github.com/Bassounet/QuickMenu-Plugin) |
| Wiki | [github.com/Bassounet/QuickMenu-Plugin/wiki](https://github.com/Bassounet/QuickMenu-Plugin/wiki) |

Report bugs via GitHub Issues. Join Discord for community support and feature requests.
