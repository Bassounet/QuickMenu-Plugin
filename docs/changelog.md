# Changelog

All notable changes to Quick Menu will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/).

---

## [1.0.2] - 2026-04-10

### Added
- **Wedge gap control** — adjustable pixel spacing between wedges (0–20 px) in Settings, also tunable live via middle-mouse drag on the wheel (shows "GAP X.X" in center)
    <div style="display: flex; gap: 10px; align-items: start; flex-wrap: wrap;">
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 400px; max-height: 400px;">
    <source src="/img/changelog/ADD_GapSizeable.mp4" type="video/mp4">
    </video>
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 400px; max-height: 400px;">
    <source src="/img/changelog/ADD_GapSizeableWheelMouse.mp4" type="video/mp4">
    </video>
    </div>

- **Neutral gray wedge mode** — "Force Neutral Gray Wedges" setting overrides all category colors with a uniform editor-style gray, with adjustable separator darkness
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ADD_ForceGreyWheel.mp4" type="video/mp4">
    </video>

- **Interactive live wheel preview** in the Settings tab — real-time preview of the active wheel (or a demo wheel), updates instantly as you change appearance settings
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ADD_PreviewWheelSettings.mp4" type="video/mp4">
    </video>

- **Level Editor docked panel** — Quick Menu panel now registers as a Level Editor tab and auto-docks on first launch instead of floating as a nomad tab

- **Appearance settings persistence** — Wedge Gap, Gray Mode, Separator Darkness, Wheel Size, and Icon Size are saved per-project and persist across editor sessions

### Fixed
- **"Select All Lights" selecting nothing** — replaced deprecated `ALight::StaticClass()` with component-based detection (`ULightComponentBase`)

- **Graph operations targeting wrong editor** — Align, Collapse, Remove Unused Pins, etc. now resolve the correct graph editor based on keyboard focus when multiple assets are open

- **Hover color too washed out** — hover color changed from muted blue `(55, 120, 190)` to a flat vivid blue `(0, 88, 204)`

### Changed
- Quick Menu panel uses Level Editor tab manager instead of global nomad tab spawner
- Volume gradient overlay on wedges removed in favor of flat colors for a cleaner look
- Wheel size is now persisted on scroll (no longer resets when reopening the menu)

---

## [1.0.1] - 2026-03-31

### Reported
- Node search not finding actions by operation name
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ISSUE_SearchNodeTreeView.mp4" type="video/mp4">
    </video>

- Submenu indicator line not following zoom in preview wheel
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ISSUE_SubmenuWhiteEdges.mp4" type="video/mp4">
    </video>

- Copy-paste between graphs losing exec pin connections
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ISSUE_CopyPasteNoLink.mp4" type="video/mp4">
    </video>
    <img src="/img/changelog/ISSU_CopyPasteNoLink.png" alt="Copy paste issue screenshot" style="max-width: 600px; max-height: 400px;">

- "Remove Unused Pins" not working on switch nodes
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ISSUE_RemoveUnusedPinSwitchNotWorkingOuputPin.mp4" type="video/mp4">
    </video>

- "Remove Unused Pins" targeting wrong graph with multiple assets open

- Switch nodes allowing duplicate Default cases / 0 selection count

- Graph operations losing focus when multiple QuickMenu graphs are open
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/ISSUE_BackToRootNoFocus.mp4" type="video/mp4">
    </video>

### Added
- Resizable pie menu — mouse wheel scales the wheel while open (0.5x–2.0x)
    <div style="display: flex; gap: 10px; align-items: start; flex-wrap: wrap;">
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 400px; max-height: 400px;">
    <source src="/img/changelog/FIX_ResizableWheel.mp4" type="video/mp4">
    </video>
    <img src="/img/changelog/FIX_WheelResizable.png" alt="Resizable wheel settings" style="max-width: 200px; max-height: 400px;">
    </div>

- "Wheel Size" multiplier in Quick Menu panel settings

- Node search by action/operation name with tree-view hierarchy in right-click menu
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_SearchNodeTreeView.mp4" type="video/mp4">
    </video>

- "Can't find your action? Request it!" Discord link in node spawner
- Quick Menu panel auto-docks on first plugin activation

- Graph watermark showing "ROOT" or subgraph name (like Blueprint editor)
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_Watermark.mp4" type="video/mp4">
    </video>


### Fixed
- Submenu indicator white line now follows zoom correctly
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_SubmenuWhiteEdges.mp4" type="video/mp4">
    </video>

- Copy-paste preserves all exec pin connections between nodes
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_CopyPasteNoLink.mp4" type="video/mp4">
    </video>

- "Remove Unused Pins" works on all switch node types
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_RemoveUnusedPinSwitchNotWorkingOuputPin.mp4" type="video/mp4">
    </video>

- Actions now target the correct graph editor when multiple assets are open

- Switch nodes no longer allow duplicate Default/Defaults cases
    <img src="/img/changelog/FIX_ISSUE_MultipleDefaultFixQMMasterDefault.png" alt="Multiple Default fix" style="max-width: 600px; max-height: 400px;">

- Selection Count switch: removed 0 from cases, Default pin shows "(0 selection)"
    <img src="/img/changelog/FIX_ISSUE_0DefaultSwitchNodeSelectionCounte.png" alt="0 Default switch node selection count fix" style="max-width: 600px; max-height: 400px;">

- Duplicate case warning now shows which specific cases are duplicated

- Switch nodes no longer output on duplicate pins
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_SwitchMultipleOutputSamePin.mp4" type="video/mp4">
    </video>

### Changed
- "Back to Root" navigation now focuses on the subgraph node in the parent graph
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/FIX_BackToRootNoFocus.mp4" type="video/mp4">
    </video>

- Toolbar button shows "QuickMenu" text with LogoGray2 icon
    <img src="/img/changelog/FIX_ISSUE_QuickMenuToolbarButton.png" alt="QuickMenu toolbar button" style="max-width: 600px; max-height: 400px;">

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
