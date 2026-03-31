# Changelog

All notable changes to Quick Menu will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/).

---

## [1.0.1] - 2026-03-31

### Reported
- Submenu indicator line not following zoom in preview wheel
- Copy-paste between graphs losing exec pin connections
- "Remove Unused Pins" not working on switch nodes
- "Remove Unused Pins" targeting wrong graph with multiple assets open
- Switch nodes allowing duplicate Default cases / 0 selection count
- Graph operations losing focus when multiple QuickMenu graphs are open

### Added
- Resizable pie menu — mouse wheel scales the wheel while open (0.5x–2.0x)
- "Wheel Size" multiplier in Quick Menu panel settings
- Node search by action/operation name with tree-view hierarchy in right-click menu
- "Can't find your action? Request it!" Discord link in node spawner
- Quick Menu panel auto-docks on first plugin activation
- Graph watermark showing "ROOT" or subgraph name (like Blueprint editor)

### Fixed
- Submenu indicator white line now follows zoom correctly
- Copy-paste preserves all exec pin connections between nodes
- "Remove Unused Pins" works on all switch node types
- Actions now target the correct graph editor when multiple assets are open
- Switch nodes no longer allow duplicate Default/Defaults cases
- Selection Count switch: removed 0 from cases, Default pin shows "(0 selection)"
- Duplicate case warning now shows which specific cases are duplicated

### Changed
- "Back to Root" navigation now focuses on the subgraph node in the parent graph
- Toolbar button shows "QuickMenu" text with LogoGray2 icon
- Mouse wheel cycling on all switch node dropdown menus

### Docs
- Updated llms-full.txt

---

## [1.0.0] - 2026-03-26

### Added

- Radial pie menu with V-key activation across all editor contexts
- 44+ built-in editor actions (spawn, viewport, transform, actor, editor, blueprint, specialized, utility)
- Visual graph editor for building custom wheel layouts
- Context-aware wheel system (49+ editor contexts auto-detected)
- Sub-menu support with unlimited nesting
- Keyboard shortcut customization
- Python scripting API for custom actions
- C++ extensibility for advanced integrations
- Multi-version support (UE 5.0 - 5.7)
- Quick Menu Panel for browsing and managing wheels
- Content Browser integration
- Project Settings page for global configuration
