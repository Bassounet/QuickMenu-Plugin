<img width="1920" height="1080" alt="Quick Menu" src="https://github.com/user-attachments/assets/a44dc0bf-1d10-4fc7-9c5e-f61f038cdc2b" />

# Quick Menu

The graph-powered radial menu for Unreal Engine.

Press **V** to open a fully customizable pie menu. Design your menus visually with a node graph editor, add context-aware switching, submenus, and 44+ built-in action types.

<p align="center">
  <a href="https://docs.quickmenuplugin.com">
    <img src="docs/img/Showcase.gif" alt="Quick Menu Showcase" width="800"/>
  </a>
</p>

## Get Started

<!-- TODO: Replace with actual FAB listing URL -->
Get the plugin on the [**FAB Marketplace**](https://www.fab.com)

Read the [**Getting Started**](https://docs.quickmenuplugin.com/getting-started/installation/) guide

Check the [**Troubleshooting**](https://docs.quickmenuplugin.com/troubleshooting/common-issues/) for common questions

[**Website**](https://quickmenuplugin.com) | [**Docs**](https://docs.quickmenuplugin.com) | [**Discord**](https://discord.gg/YYc2v8k5BA) | [**YouTube**](https://youtube.com) <!-- TODO: Replace with actual YouTube channel URL -->

## Features

- **Graph-Based Configuration** — Design your menus visually with a powerful node graph editor. Drag, drop, and connect nodes to build your ideal workflow.
- **Context-Aware Menus** — Menus adapt automatically based on your selection, editor mode, active tab, and more. 61+ editor contexts supported.
- **44+ Built-in Action Types** — Viewport, transform, play, build, spawn, blueprint operations, material, sequencer, Niagara, PCG, and more.
- **Submenus & Navigation** — Nest menus with SubMenu nodes, navigate between wheels with GoToWheel.
- **Live Editing** — Add or remove actions directly from the pie menu without restarting the editor.
- **Python Integration** — Write custom Python actions with inline code execution, dynamic labels, and visibility conditions.
- **Quick Menu Panel** — Dockable editor tab with shortcut editor, built-in docs, and console commands.
- **Keyboard Shortcuts** — Hold+click node spawning, auto-wiring with Shift+C, and configurable hotkeys.
- **Full Source Code** — Complete C++ source included. Extend with your own action node types.

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

## Support

- **Docs:** [docs.quickmenuplugin.com](https://docs.quickmenuplugin.com)
- **Discord:** [Join the server](https://discord.gg/bThEnFzy)
- **Bugs:** [Report an issue](https://github.com/Bassounet/QuickMenu-Plugin/issues/new?template=bug_report.yml)
- **Features:** [Request a feature](https://github.com/Bassounet/QuickMenu-Plugin/issues/new?template=feature_request.yml)
- **AI Help:** Paste [llms-full.txt](https://docs.quickmenuplugin.com/llms-full.txt) into ChatGPT/Claude with your question

## Changelog

**Version 1.0** — Initial release
> - 44+ action node types across 15 categories
> - Graph-based menu editor with Root, Switch, WheelOutput, and SubMenu nodes
> - 5 Switch node types: EditorContext (61 contexts), EditorMode, SelectionCount, ActorClass, BlueprintContext
> - Radial pie menu widget with nested rings (up to 4 levels, 12 wedges per ring)
> - Live editing: add/remove actions directly from the pie menu
> - Context-aware menus with automatic switching
> - Quick Menu Panel (dockable tab with shortcuts and console)
> - Python custom code actions (optional, requires Python plugin)
> - Multi-version compatibility: UE 4.27 – 5.7
> - Configurable hotkey (default: V)
> - Material-based pie rendering with vertex fallback

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to report bugs, request features, and get help.

## License

[MIT License](LICENSE) — Copyright (c) 2026 Gregoire
