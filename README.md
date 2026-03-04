<!-- TODO: Replace with your hero banner image -->
<!-- ![QuickMenu Banner](https://user-images.githubusercontent.com/YOUR_BANNER_IMAGE.png) -->

# QuickMenu

The graph-powered radial menu for Unreal Engine.

Press **V** to open a fully customizable pie menu. Design your menus visually with a node graph editor, add context-aware switching, submenus, and 40+ built-in action types.

## How to use

Get the plugin on the [**FAB Marketplace**](https://www.fab.com) <!-- TODO: Replace with actual FAB listing URL -->

Read the [**Getting Started**](https://github.com/Bassounet/QuickMenu-Plugin/wiki/Getting-Started) guide

Check the [**FAQ**](https://github.com/Bassounet/QuickMenu-Plugin/wiki/FAQ) for common questions

Visit the [**Website**](https://quickmenuplugin.com) | Join the [**Discord**](https://discord.gg/bThEnFzy)

## Features

- **Graph-Based Configuration** -- Design your menus visually with a powerful node graph editor. Drag, drop, and connect nodes to build your ideal workflow.
- **Context-Aware Menus** -- Menus adapt automatically based on your selection, editor mode, active tab, and more. 48+ editor contexts supported.
- **40+ Built-in Action Types** -- Viewport, transform, play, build, spawn, blueprint operations, material, sequencer, Niagara, PCG, and more.
- **Submenus & Navigation** -- Nest menus with SubMenu nodes, navigate between wheels with GoToWheel.
- **Live Editing** -- Add or remove actions directly from the pie menu at runtime without restarting the editor.
- **Python Integration** -- Write custom Python actions with inline code execution, dynamic labels, and visibility conditions.
- **Keyboard Shortcuts** -- Configurable hotkeys and node spawn shortcuts for power users.
- **Full Source Code** -- Complete C++ source included. Extend with your own action node types.

## Compatible Engine Versions

| Engine Version | Plugin Version | Support |
|:-:|:-:|:-:|
| UE 5.7 | 1.0 | :white_check_mark: |
| UE 5.6 | 1.0 | :white_check_mark: |
| UE 5.5 | 1.0 | :white_check_mark: |
| UE 5.4 | 1.0 | :white_check_mark: |
| UE 5.3 | 1.0 | :white_check_mark: |
| UE 5.2 | 1.0 | :white_check_mark: |
| UE 5.1 | 1.0 | :white_check_mark: |
| UE 5.0 | 1.0 | :white_check_mark: |
| UE 4.27 | 1.0 | :white_check_mark: |

## Changelog

**Version 1.0** -- Initial release
> - 40+ action node types across 15 categories
> - Graph-based menu editor with Root, Switch, WheelOutput, and SubMenu nodes
> - 5 Switch node types: EditorContext (48 contexts), EditorMode, SelectionCount, ActorClass, BlueprintContext
> - Radial pie menu widget with nested rings (up to 4 levels, 12 wedges per ring)
> - Live editing: add/remove actions directly from the pie menu
> - Context-aware menus with automatic switching
> - Quick Menu Panel (dockable tab with shortcuts and console)
> - Python custom code actions (optional, requires Python plugin)
> - Multi-version compatibility: UE 4.27 -- 5.7
> - Configurable hotkey (default: V)
> - Material-based pie rendering with vertex fallback

## License

[MIT License](LICENSE) -- Copyright (c) 2026 Gregoire
