# Changelog

All notable changes to Quick Menu will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/).

---

## [1.0.4] - 2026-05-12

### Reported
- Pie wheel order felt rigid — no way to rearrange wedges visually or rotate the whole wheel
- List-mode submenus didn't react to cursor direction the way pie submenus do
- `Open Asset` could freeze or crash the editor when picking heavy assets (Levels especially)
- Comment / Graph Op shortcuts could land on the wrong editor when multiple graphs were open
- Rebinding the main wheel key sometimes didn't take effect at runtime
- 5 separate Switch types cluttered the node menu and forced users to pick one upfront
<!-- TODO video: 1.0.4/ISSUE_WheelOrderRigid.mp4 -->

### Added — Actions
- **Create Asset** — new action that spawns a new asset (Material, Level Sequence, Blueprint Class, etc.) into the focused Content Browser folder, with an inline factory-class picker matching the Content Browser's "Add" menu
    <!-- TODO video: 1.0.4/ADD_CreateAsset.mp4 -->
- **Property Matrix** *(Experimental)* — bulk-edit selected Content Browser assets or selected actors in Unreal's Property Matrix toolkit
    <!-- TODO image: 1.0.4/ADD_PropertyMatrix.png -->
- **Searchable Show Flag picker** — `Show Flag` nodes now expose a hierarchical tree picker with name search, aligned with the viewport `Show` menu
    <!-- TODO video: 1.0.4/ADD_ShowFlagPicker.mp4 -->
- **Custom Python icon support** — `Custom Code (Python)` nodes now get the same icon picker as every other action (brush, custom texture, title-bar preview)
    <!-- TODO image: 1.0.4/ADD_CustomPythonIcon.png -->
- **Unified Switch node** — single node replaces the 5 specialized Switch types. Each case can mix any predicate (Editor Context / Editor Mode / Blueprint Context / Selection Count / Actor Class) and is picked through one cross-category searchable combo. *The 5 legacy Switch types still work — they're kept around so existing graphs stay intact and will be removed in a future release.*
    <!-- TODO video: 1.0.4/ADD_UnifiedSwitch.mp4 -->
- **Graph Op actions work in every graph editor** — `Auto-Layout Graph`, `Align Horizontal/Vertical`, `Auto Name & Color Comments`, `Create Comment Around Selection` now operate on the focused graph regardless of editor type (Blueprint, Niagara, AnimBP, Material, …)
    <!-- TODO video: 1.0.4/ADD_GraphOpAnyEditor.mp4 -->

### Added — Customization & Wheel Layout
This release ships a major customization pass focused on **arranging the wheel exactly how you want it** — rotate it, reorder wedges in place, and reshape list-mode menus.

- **Per-graph wheel rotation** — each `WheelOutput` now has a `Rotation (°)` property. Rotate any open wheel live with **Shift + Middle-drag** (hold `Ctrl` for ×0.1 fine mode), reset with **Shift + Double-middle-click**. Optional snap mode + snap angle (0 = auto `360°/N`). A `SpinBox` on the `WheelOutput` node stays in sync with the runtime gesture
    <!-- TODO video: 1.0.4/ADD_WheelRotation.mp4 -->
- **Wheel Edit Mode (drag-and-drop reorder)** — press **Alt** with the wheel open to enter Edit Mode. Drag any wedge to swap it with another; the source slot empties, the target lights up orange, valid drops pulse, submenus stay closed. Works for both pie and list/radial-button layouts
    <!-- TODO video: 1.0.4/ADD_WheelEditMode.mp4 -->
- **Click-drag reorder in the asset preview** — same drag-to-swap is available directly in the live wheel preview inside the graph editor, no Alt toggle needed
    <!-- TODO video: 1.0.4/ADD_PreviewClickDrag.mp4 -->
- **`Wheel Edit Mode Activation` setting** — choose whether Alt **toggles** Edit Mode (press once to enter, again to exit) or **holds** it (active only while pressed)
- **`Enable Custom Gesture Hotkeys` toggle** — turn off the Tap/Hold/Drag resolution and fall back to the legacy `Open Menu Key` + `Active Graph` path. Defaults to off while the gesture system stabilizes; the bindings list stays visible but dimmed with an inline notice
- **List-mode interactions inverted** — middle-mouse drag now **scales** buttons (live `SCALE x.xx` readout), mouse wheel **adjusts distance to center**. Pie mode behavior is unchanged (middle-drag still controls Wedge Gap)
    <!-- TODO video: 1.0.4/ADD_ListModeInteractions.mp4 -->
- **`List Menu Distance` setting** — new appearance slider that pushes/pulls list-style menus and radial-button rings toward/away from the wheel center. Clamp widened to ±10000 (was ±200)
- **Submenu navigation by mouse wheel** — scrolling inside an open submenu now cycles its options instead of resizing the wheel, with a 250 ms sticky window so cursor jitter doesn't override your pick
- **Directional hover for list submenus** — list-mode submenus now react to cursor direction the same way pie submenus do (point toward the list to select by Y projection; go back toward center to exit)

### Changed
- **Quick Menu Panel now mirrors Project Settings directly** — the settings tab uses the same `UQuickMenuSettings` object instead of a separate handcrafted UI; no more divergence between the two
- **Unified settings hierarchy** — plugin settings are regrouped under `Primary Binding`, `Hotkeys`, `Interaction`, `Behavior`, `Appearance`, `Console` for a cleaner Project Settings page
- **Quick Menu graph comments use the engine-default comment widget** — full parity with Blueprint / Niagara / Material comments (resize handles, contained-node move, title bar context menu, color picker, font size). Existing comments keep all their data — only the rendering changes
- **`List Menu Distance` is now an absolute pixel offset** — previously multiplied by `WheelScale`, so resizing the wheel secretly shifted list menus. Resize and distance are now fully independent
- **Primary binding sync tightened** — the legacy `OpenMenuKey` / `ActiveGraph` pair stays in sync with the primary `HotkeyBindings` entry, so editor-facing fields and gesture bindings can't drift apart

### Fixed
- **Main wheel shortcut rebinding** — changing the primary wheel key now updates the actual editor command binding, so the new shortcut works immediately
- **`Open Asset` freeze on heavy assets** — the picker no longer force-loads the chosen asset just to remember its reference (paths are stored, loading happens lazily on click)
- **`Open Asset` crash / long freeze on Levels (`UWorld`)** — `LoadMap` now runs one frame after the wheel dismisses, with the engine's own progress dialog suppressed (no more stacked modal over the still-open wheel)
- **`BP Add Node` spawn position** — Blueprint nodes added via the wheel now spawn at the cursor position in the focused Blueprint graph, not at the upper-left of the view
- **`Graph Op > Create Comment Around Selection`** — comment now lands in the graph the user is actually looking at, with selection captured from that same graph
- **Comment shortcuts (`C`, `Alt+E`) hitting the wrong editor** — both now consult the focused QM editor instead of the last-active binding, fixing routing when multiple QM graphs are open
- **Rotation honored in radial-button (list) layout** — radial buttons and their hover hit detection now respect the ring's rotation (previously stuck at fixed cardinal angles)
- **Rotation `SpinBox` losing focus mid-drag** — the inline rotation field on `WheelOutput` no longer rebuilds the graph node on each tick, so dragging the slider works as expected
- **Scrollable icon dropdown crash** — `SQMScrollableCombo` no longer risks a use-after-free when picking an icon while the graph rebuilds
- **SubMenu custom icon rendering** — `SubMenu` headers now resolve `QuickMenu.*` brushes through `FQuickMenuStyle`, so picker icons render correctly on the node itself
- **Show Flag runtime resolution** — flags resolve by Unreal show-flag name at runtime instead of being restricted to the legacy hardcoded enum set

---

## [1.0.3] - 2026-04-17

### Reported
- Play In Viewport / Play In New Viewport opening in the wrong viewport when a Blueprint or asset editor was focused — PIE always dropped into the Level Editor viewport regardless of where the action was triggered from
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/1.0.3/ISSUE_PlayViewport-PlayNewViewport.mp4" type="video/mp4">
    </video>

### Added
- **BP Add Node action** — new action node that spawns an arbitrary Blueprint node via a searchable picker (31,000+ spawnable actions). Removes the need for a separate action node per Blueprint node type
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/1.0.3/ADD_BPAddNode.mp4" type="video/mp4">
    </video>
    <div style="display: flex; gap: 10px; align-items: start; flex-wrap: wrap; margin-top: 8px;">
    <img src="/img/changelog/1.0.3/ADD_BPAddNode1.png" alt="BP Add Node picker — searchable Blueprint action list" style="max-width: 400px;">
    <img src="/img/changelog/1.0.3/ADD_BPAddNode2.png" alt="BP Add Node inline properties" style="max-width: 400px;">
    </div>

- **Open Asset action** — new action node that opens any referenced asset in its editor (Blueprint, Material, Level, Widget, Niagara, DataTable, etc.). The wedge uses the asset thumbnail as its icon automatically
    <img src="/img/changelog/1.0.3/ADD_OpenAsset.png" alt="Open Asset node with inline asset picker and right-click spawn menu" style="max-width: 800px;">

- **Inline property panel on graph nodes** — action node properties (color, name, type-specific options, asset picker, Blueprint action picker) are now edited directly on the node in the graph instead of in the Details panel. Visible in the BP Add Node and Open Asset screenshots above

- **Gesture-based hotkey system** — the same key can bind multiple gestures (`Tap`, `Hold`, `Drag`) to different graphs, with per-binding `TapThresholdMs` and `DragPixelThreshold`. Legacy `Open Menu Key` + `Active Graph` are auto-migrated to the new `Hotkey Bindings` array on first launch
    <img src="/img/changelog/1.0.3/ADD_GestureHotkeys.png" alt="Project Settings — Hotkey Bindings array with Hold and Tap entries" style="max-width: 800px;">

- **Wheel usable during Play In Editor** — new `Allow Wheel During Play In Editor` setting (default on). When disabled, hotkeys pass through to the running game
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/1.0.3/ADD_WheelInPIE.mp4" type="video/mp4">
    </video>

### Fixed
- **Play In Viewport / Play In New Viewport routing** — `Play Op` actions now start the PIE session in the correct viewport based on the active editor context (Blueprint editor, asset editor, or Level Editor). Previously every variant defaulted to the Level Editor viewport
    <video autoplay="true" loop="true" muted="true" playsinline="true" style="max-width: 600px; max-height: 400px;">
    <source src="/img/changelog/1.0.3/FIX_PlayViewport-PlayNewViewport.mp4" type="video/mp4">
    </video>

- **Viewport toggles targeting wrong viewport** — `Set View Mode` (Lit, Unlit, Wireframe, Detail Lighting…) now acts on the currently focused viewport. When a Blueprint editor is open it toggles its internal viewport; otherwise it falls back to the Level Editor viewport. Previously the toggle always applied to the Level Editor regardless of focus

- **Subgraph exec connections lost during compat graph packaging** — `ImportNodesFromText` resolved `LinkedTo` pins in text order, silently dropping links to Subgraph `ExecIn` pins created later via `PostPasteNode`. A new `RepairSubgraphExecLinks` pass re-parses the snapshot text and manually reconnects the lost links

- **Fake enum variants in right-click node search** — `TFieldIterator<FEnumProperty>` was surfacing inherited `UEdGraphNode` enums (`EnabledState`, `AdvancedPinDisplay`) as phantom action variants (Enabled / Disabled / Development Only / Hidden / No Pins / Shown), most visible on `BP Add Node`. Now filtered to only action-specific enums

### Changed
- Default for `Force Neutral Gray Wedges` flipped to `true` (the neutral editor-style look is now the default; per-category colors can still be re-enabled in Settings)
- `Open Menu Key` + `Active Graph` settings are now marked as **Legacy** and read-only once migrated to `Hotkey Bindings`

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
