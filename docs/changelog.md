# Changelog

All notable changes to Quick Menu will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/).
Each version includes a **Reported** section listing what was detected/reported, followed by the actions taken.


---

## [1.0.6] - 2026-07-09

### Reported
- Users wanted floating/dockable custom button panels reusing the wheel's graph/action system — reuse action nodes, Custom Python actions, Sequence nodes, icons, labels, colors, and visibility conditions, but displayed as always-visible toolbars ("Lighting Tools", "Optimization Tools", "Placement Tools"); radial menus stay for hotkeys, panels keep tools visible (user feature request)
- While rotating or resizing the wheel / list with the middle-mouse gestures, actions stayed hoverable and could fire on hotkey release or click — tuning the wheel could accidentally trigger whatever slid under the cursor
- The `Icon Size` multiplier bottomed out at 0.5 in the Quick Menu panel; icons could not be fully hidden. Same floor applied to the in-wheel radial-button scale gesture
- Scaling `Radial Button Size` grew the button background but not its content — the label stayed at a fixed 11pt and the icon followed the wheel scale instead of the button scale
- Vertical gaps between radial-button rows were much larger than horizontal ones: buttons sat on a perfect circle whose radius was tied to the (invisible in list mode) pie outer radius × `Wheel Size`, so large wheel scales inflated list-mode spacing
- The center EDIT hub scaled with `Wheel Size` in pie mode but stayed frozen in list mode; users wanted the list-mode scroll to also resize the hub, independently from the pie-mode size
- Wheel labels were hard-coded bold; users wanted a regular font by default with bold as an option
- Radial-button cells drew a drop shadow that could not be disabled
- The graph editor's right-click action menu opened with every category expanded, unlike Blueprint's collapsed-until-search behavior

### Added
- **Quick Panels** — pin any action into small dockable toolbars that stay visible while you work:
  - Panels are **nomad dock tabs**: they float above the editor by default and dock anywhere like any native panel; position/docking persists with the editor layout
  - New **`Panels` tab** in the Quick Menu panel: create, rename inline, open/close, delete (with confirm), export, import
  - **Live sync with the graph** — button labels, icons, and Python visibility conditions track their source nodes (context-hidden actions render disabled, not hidden); actions re-resolve at click time so they use the current editor context; deleted nodes show a removable `Missing action` row
  - **Blueprint-style add menu** (`SGraphActionMenu`): instant search focus, a `From Active Graph` section listing configured actions/submenus/sequences, and the **full 48-action catalog** — picking a catalog entry creates a fresh, unconnected, auto-labeled node in the active graph (parked below the graph, undoable, never affects the wheel)
  - **Drag & drop from the wheel** — click-drag any wedge (pie, radial-button, list, and submenu items) past 8 px to carry it out of the wheel with an icon+label decorator and drop it on any panel (drop highlight); the wheel stays open during the drag, nothing can fire mid-drag, and a successful drop dismisses the wheel
  - **Right-click a panel button** → `Edit Action…` opens the same inline property editor as the wheel's right-click (new window-hosted mode), `Remove from Panel` unpins the button without touching the graph
  - **Export / Import `.qmpanel`** — panels serialize to a portable JSON file (name + graph/node references) for sharing between teammates on the same project, with success/failure notifications
  - **4 starter panels present by default** (`Viewport Essentials`, `Placement Tools`, `Lighting Tools`, `Optimization`) — seeded once per project on first run, backed by a generated, fully editable `/Game/QuickMenu/QM_PanelActions` graph (no shipped `.uasset`, so no cross-version asset issues); deleting a starter panel is permanent
  - New module dependencies: `Json`, `DesktopPlatform`
- **`Text Size Multiplier`** (0–3) — scales all menu label text (wedges, radial buttons, list rows); measurements follow so button/list widths stay consistent
- **`Bold Text` toggle** — wheel labels now render Regular by default; opt back into bold from the panel or Project Settings
- **`Button Drop Shadows` toggle** — radial-button cells and list panels draw flat by default; shadows are opt-in
- **`Center Button Size` multiplier** (0.25–3) — scales the center EDIT hub on top of the mode scale; the pencil glyph and label scale along
- **`List Hub Size` multiplier** — the hub has its own size while a list/radial-button layout is active; scrolling in list mode adjusts distance and hub together without touching the pie-mode wheel size

### Changed
- **`Icon Size` and `Radial Button Size` minimums relaxed from 0.5 to 0** across the panel spinboxes, Project Settings clamps, widget setters, and in-wheel gestures — 0 hides wedge icons entirely
- **Radial button content scales proportionally** — font, icon, and paddings follow `RadialButtonSizeMultiplier`; measurement and rendering share the same scaled font so truncation and hit-testing stay consistent
- **Radial button orbit tightened** — anchored to the center hub instead of the pie outer radius (so `Wheel Size` no longer inflates list-mode spacing), arc packing reduced to 65% of the widest button, and buttons now sit on a **vertically squashed ellipse** (×0.7) to close the row gaps
- **Wheel click execution moved from mouse-down to mouse-up** (standard button behavior) to make room for the drag & drop gesture; release-in-place behaves exactly as before
- **Graph editor right-click menu is Blueprint-style** — categories start collapsed and only expand while the search text matches entries inside them (`AutoExpandActionMenu(false)` on both root and subgraph editors)

### Fixed
- **Actions can no longer fire while editing the wheel** — during middle-mouse appearance gestures (rotate, resize, gap) hover is locked and cleared so nothing highlights, expands, or executes; after any adjustment (scroll resize, list distance, gesture release) a 0.35 s grace window closes the wheel without firing and the stale hover is dropped, requiring a deliberate re-aim
- **Center hub radius stays in sync with the material renderer** — the `DeadZoneRadius` scalar was only pushed at material init; it now refreshes every frame, so hub resizes are always visually accurate
- **Inline property panel renders correctly when hosted in a window** — new `bInWindow` mode skips the wheel-overlay anchor canvas and self-hit-test-invisible visibility that clipped and offset the content in the Quick Panel edit popup

---

## [1.0.5] - 2026-05-18

### Reported
- Plugin settings edited via the Quick Menu panel or **Project Settings > Plugins > Quick Menu** did not persist across editor restarts — changing the open-menu hotkey, switching the active wheel, toggling "Show Add Button In Wheel", "Allow Wheel During Play In Editor", or editing custom console commands all reset to defaults on next launch. Only wheel graph asset edits (`.uasset`) and per-user appearance overrides (icon size, wheel size, wedge gap, gray wedges, …) were correctly saved — every other `UPROPERTY(config)` setting was lost (reported by external tester)
- The Quick Menu Panel duplicated information across a top header and a bottom footer block (logo watermark, "Quick Menu Panel" title, "Active graph: …", "Open the wheel with V. Shortcuts, docs, …", Docs/GitHub/Website links) — the footer essentially restated what the header already showed
- The live wheel preview was embedded inside the `Project Settings` tab via a vertical splitter, taking ~half of that tab and competing with the property editor for space; making the wheel bigger pushed it over the property list and capped the area available for editing settings
- `Active Wheel: …` had its own dedicated row above the tab bar, claiming vertical space for an always-visible status indicator that rarely changed
- Header and footer link sets overlapped (GitHub in both, Documentation/Docs duplicated) while `Website` was only reachable from the footer
- The panel header reused a flat row layout (logo / title / pill / version / Report Bug / picker / links) that scaled poorly on narrower windows and lacked visual hierarchy
- Tab order in the panel was hardcoded; users could not promote their most-used tab to the front
- Right-clicking a `SubMenu` wedge in the live wheel to edit its icon opened the inline property panel with an empty picker — only `(None)` and `(Custom Texture)` were listed; the curated brush list was missing, leaving no way to pick a built-in icon for a SubMenu without going back to the graph editor

### Added
- **`Live Preview` dedicated tab** — moved the live wheel preview out of the `Plugin settings` tab into its own top-level tab, sitting between `Plugin settings` and `About`. The wheel now fills the full available height of the tab and resizes responsively. Source picker (`Demo` / `Active Graph`) stays in the section header. Content refreshes automatically when entering the tab (`UpdateFooterForActiveTab`)
- **Drag-reorderable tabs** — every panel tab (`Shortcuts`, `Docs`, `Console Cmds`, `Plugin settings`, `Live Preview`, `About`) can now be grabbed and dragged to reorder. Hovering a tab shows an open-hand cursor and a subtle background highlight; dragging swaps to a closed-hand cursor and shows a floating decorator widget (the tab label) following the mouse. Drop targets show a thin accent line on the left or right edge depending on the cursor's X position within the target tab, so users can precisely insert between any two tabs. Order is persisted per project in `EditorPerProjectUserSettings.ini` under `[QuickMenuPanel] TabOrder=…` and gracefully handles future tab additions (any missing tab id is appended at the end)
- **`Website` link surfaced in the header** — `quickmenuplugin.com` is now reachable from the main header (was previously only in the now-removed footer)
- **`Inherit Mode to Children` option on `WheelOutput`** — new `UPROPERTY` in the `Appearance` category (checked by default). When the wheel is in `Radial Buttons` (list) mode, all submenus opened from it now cascade as vertical list boxes instead of falling back to wedge rings, keeping the visual style consistent across nested rings. Unchecking the option restores the previous alternating behavior (root in list, submenus in wedge). Wedges mode is unaffected. Implemented in `SQuickMenuWidget::UpdateHover` by resolving the root `UQMGraphNode_WheelOutput` (via `ResolveWheelNodeFromItems` with `FallbackWheelNode` fallback) and folding the inheritance flag into the existing `List` rendering branch alongside the global `bForceRadialButtonsForAllWheels` setting

### Changed
- **`Project Settings` tab renamed to `Plugin settings`** — clearer label that distinguishes our in-panel settings UI from Unreal's own `Project Settings > Plugins > Quick Menu` window (which the help text inside the tab still references)
- **Header redesigned as a hero card with grouped controls** — the entire top header is now wrapped in a tinted `ToolPanel.DarkGroupBorder` for visual containment. Row 1 promotes the brand: 44 px logo, bolder title, and a smaller dimmed subtitle (`v1.0.4 · RELEASE`) that replaces the previous version pill. Row 2 groups the active-graph controls inside a bordered toolbar block (`Graph: <picker> [+ New] [↗]`) with a thin vertical separator and the active wheel chip (`Wheel: <name | None>`) to its right. Row 3 hosts the inline links (`Discord  GitHub  Docs  Website`). Header reads brand → controls → links from top to bottom
- **`Documentation` link renamed to `Docs`** — consistent with the new header and shorter for a tighter row
- **`Active Wheel: …` status moved into the header** — was a dedicated row above the tab bar with its own label; now lives as a small chip on row 2 of the header next to the active graph picker
- **Footer block removed** — the bottom logo + `Quick Menu Panel` title + `Active graph: X` + `Open the wheel with V` + duplicate `Docs/GitHub/Website` link strip is gone. All useful info already lives in the header
- **`Plugin settings` tab uses the full height** — the vertical `SSplitter` that used to share the tab between the property editor and the live preview has been removed; the property editor now uses the entire tab height with its own scroll view

### Fixed
- **`SubMenu` icon picker now shows the curated brush list** — `SQMInlinePropertyPanel::MakeIconWidget` only populated the brush options when the target node was a `UQMGraphNode_ActionBase`; `UQMGraphNode_SubMenu` fell through and the combo was reduced to `(None)` / `(Custom Texture)`. The guard now accepts both node types (`ActionNode || SubMenuNode`), so right-clicking a SubMenu wedge in the live wheel and opening `Icon:` lists the full set of common brush names (filterable via the search field) — matching the behavior already available on Action nodes
- **Inline property panel now opens for nodes whose only editable property is the icon** — `FQuickMenuModule::ShowInlinePropertyPanel` pre-checked `bHasEditableProps` by iterating `CPF_Edit` properties while explicitly skipping `IconBrushName` / `IconTexture` / `bCompact` / `bAutoLabel`; ActionBase / SubMenu nodes that had nothing else to expose were rejected with a `Not editable inline` toast, even though `MakeIconWidget` would have rendered a usable icon row for them. The check now short-circuits to `true` for `UQMGraphNode_ActionBase` and `UQMGraphNode_SubMenu`, so the panel opens with at least the icon picker
- **Plugin settings now persist across editor restarts** — `UQuickMenuSettings` is declared as a `defaultconfig` UCLASS (writes to `Config/DefaultEditor.ini`), but every write path used `SaveConfig()`, which does not reliably route to the default config file for `defaultconfig` classes. All ten write sites in `QuickMenuSettings.cpp`, `SQuickMenuPanel.cpp`, and `QuickMenuModule.cpp` have been switched to `TryUpdateDefaultConfigFile()`, and an explicit `TryUpdateDefaultConfigFile()` call has been added at the end of `PostEditChangeProperty()` so edits made through **Project Settings > Plugins > Quick Menu** also persist. Affected settings: `OpenMenuKey`, `ActiveGraph`, `HotkeyBindings`, `bEnableCustomGestureHotkeys`, `NodeSpawnShortcuts`, `EditWheelKey`, `ActivationMode`, `bAllowWheelInPIE`, `bShowAddButtonInWheel`, `bOfferCreateWheelForUnknownContext`, `bDefaultAutoLabelEnabled`, `CustomConsoleCommands`, `bLevelEditorPanelAutoOpened`, and the internal migration flag

---

## [1.0.4] - 2026-05-12

### Reported
- `Project Settings` and the standalone `Quick Menu Panel` exposed overlapping plugin settings with inconsistent structure and duplicated editing paths
- Changing the main wheel shortcut could appear synchronized between the panel and `Project Settings`, but the wheel did not always open with the new key at runtime
- The standalone panel had become harder to follow than the actual plugin settings hierarchy
- `Show Flag` was limited to a small hardcoded list, without search, and did not match the hierarchy/tree organization of the viewport `Show` menu
- The new `Show Flag` picker initially only existed in the inline property panel, so the node body in the graph did not expose it directly
- `Custom Python` could not pick an icon like other node types
- Choosing an icon from the custom node dropdown could crash the editor when the graph rebuilt during selection
- `SubMenu` nodes could list `QuickMenu.*` icons in the picker but fail to render them correctly in the node header
- The wheel's wedge order could not be customized — users could not predict where each item would land or rearrange them visually (Discord feedback, KovAlex)
- Wedge orientation was fixed; users wanted to rotate the whole wheel to align items the way they expect (Discord feedback, KovAlex)
- The inline rotation field on `WheelOutput` lost focus mid-drag, forcing users to type values instead of dragging
- Rotation did not apply to radial-button (list) layouts — buttons stayed at fixed cardinal angles regardless of the configured rotation
- No way to create new assets directly from the wheel — users wanted to spawn `Material`, `Level Sequence`, `Blueprint Class`, etc. into the Content Browser without leaving the wheel (Discord feedback, KovAlex)
- `Open Asset` froze the editor when picking heavy assets (large levels) — selecting in the dropdown forced an immediate full asset load just to remember the reference
- `Open Asset` could crash or visually freeze the wheel for several seconds when targeting a Level (`UWorld`) — `LoadMap` ran synchronously while the wheel was still active and showed its own progress dialog over the still-open menu
- `Graph Op > Create Comment Around Selection` always targeted the last-focused Quick Menu graph editor — even when the user was actively in a Blueprint / Niagara / AnimBP graph, the comment landed in the wrong place
- New nodes added via the wheel inside a Blueprint (`BP Add Node`) spawned in the upper-left of the visible viewport instead of where the cursor was when the wheel was opened
- Hover detection in radial-button (list) layout ignored the wheel's per-graph rotation: the angular fallback used a hardcoded 0–360° range, so a wedge under the cursor lit a different button than the one under the actual mouse position
- `List Menu Distance` was hard-clamped to a narrow [-100, +200] range, preventing users from positioning list menus arbitrarily close to or far from the wheel
- Mouse wheel scrolling inside an open submenu resized the entire wheel instead of cycling through the submenu's options, and the visible "downsizing" of list-mode wheels secretly scaled list-menu distance, mimicking a middle-mouse drag and pulling lists toward the center
- List-mode submenus only registered hover when the cursor was inside the list rectangle — pointing toward an item from the side without entering the rectangle didn't select it, unlike pie submenus where direction alone is enough
- Pressing the Create-Group-Comment shortcut (`C`) or Name-And-Color-Comment shortcut (`Alt+E`) with several Quick Menu graph editors open could create the comment in the previously focused editor instead of the one the user was currently looking at
- Quick Menu graph asset comments rendered with a custom title bar (an inline "Group Color" label + color swatch button) and so behaved subtly differently from Blueprint comments — users wanted full parity with the standard Unreal comment node
- In list / radial-button mode, mouse wheel resized the buttons while middle-mouse drag adjusted list distance — the inverse mapping (drag = scale, wheel = position) matches the convention most users have from other DCC tools and frees the wheel for the most common adjustment
- `Graph Op` actions (`Auto-Layout Graph`, `Align Horizontal`, `Align Vertical`, `Auto Name & Color Comments`) only operated on Quick Menu graph editors — triggering them from a Blueprint / Niagara / AnimBP / Material graph silently did nothing
- 5 separate `Switch` node types (`Switch: Editor Context`, `Switch: Editor Mode`, `Switch: Blueprint Context`, `Switch: Selection Count`, `Switch: Actor Class`) cluttered the flow node menu and forced users to know in advance which kind of routing they wanted before placing the node; a single Switch with all options behind one searchable picker was preferable

### Added
- **`Enable Custom Gesture Hotkeys` toggle** — Tap / Hold / Drag gesture resolution can now be turned off so the runtime falls back cleanly to the legacy `Open Menu Key` + `Active Graph` path. Defaults to `off` while the gesture system stabilizes; the bindings list stays editable but visually dimmed when disabled, with an inline notice explaining the fallback
- **`List Menu Distance` setting** — new appearance slider that pushes or pulls list-style menus and radial-button rings toward / away from the wheel center. While in list / radial-button layouts, middle-mouse drag (the same shortcut as `Wedge Gap` in pie mode) now adjusts this distance live (`DIST` readout in the wheel center) since `Wedge Gap` has no meaning in those layouts
- **Searchable Show Flag picker** — `Show Flag` nodes now expose a dedicated picker with name search and a hierarchical tree aligned with the editor viewport `Show` menu
- **Custom Python icon support** — `Custom Python` nodes now expose the same icon picker flow as other nodes, including brush selection, custom texture support, and title-bar preview
- **Per-graph wheel rotation** — each `WheelOutput` now has a `Rotation (°)` property persisted with the asset. Rotate any open wheel live with **Shift + middle-mouse drag** (0.75°/px, hold `Ctrl` for ×0.1 fine mode); reset to 0° with **Shift + double middle-click**. Live numeric overlay shows the angle during drag and fades out 1 s after release. An inline `SSpinBox` on the `WheelOutput` node stays in sync both ways with the runtime shortcut. Optional snap mode (off by default) and snap angle (0 = auto `360°/N`) live in the panel
- **Wheel Edit Mode — drag-and-drop reorder** — open the wheel and press **Alt** to enter Edit Mode (background dims, "WHEEL EDIT MODE" label appears above the wheel). Click + drag a wedge / radial button to swap with another. While dragging:
  - The source slot is left visually empty — the item is "in your hand" as a card-style ghost following the cursor
  - All other slots are repainted in a uniform neutral grey so category colors don't compete for attention; a pulsing amber outline (Pie mode) / pulsing border (List mode) advertises every valid drop target
  - Hovering a valid drop slot fills it with bright orange and previews the swap in place — the source slot shows the target's content, the target slot shows the dragged item, mirroring what will happen on release
  - Submenu expansion is suppressed during drag so users can drop on parent wedges without the children popping open
  - Both wheel layouts are supported: pie wedges and list/radial-button mode share the same drop-slot affordances (empty source, grey background, pulsing outline, orange target)
  - Persists by swapping the `LinkedTo` arrays of `WheelOutput` `MenuItem_N` pins inside an undoable transaction
- **Click-to-edit drag in QuickMenuGraph asset preview** — the live wheel preview inside the graph asset editor now lets users click + drag wedges directly to reorder, without first toggling Edit Mode. Each drop auto-exits the mode. Changes flow back to the `WheelOutput` pins so the runtime wheel reflects the new order on the next open
- **`Wheel Edit Mode Activation` setting (Toggle / Hold)** — choose whether `Alt` toggles Edit Mode (default — press once to enter, again to exit) or activates it only while held. Exposed as a Toggle/Hold pair in the panel
- **Create Asset action node** — new action that creates an asset in the focused Content Browser's current folder. The factory class is configurable via an inline picker on the node (search box + scrollable list filtered alphabetically by display name, showing the produced asset class), populated from every `UFactory` that satisfies `ShouldShowInNewMenu()` && `CanCreateNew()` — i.e. the same set of asset types as the Content Browser "Add" menu. Factories that need extra input (`BlueprintClass`, structs, etc.) chain through `ConfigureProperties()` so the engine's parent-class / type pickers appear as expected. Names are auto-generated as `New<ClassName>` and made unique within the target folder; the new asset is selected in the Content Browser on success. Toasts a clear message when no Content Browser is currently open
- **Submenu navigation by mouse wheel** — when a submenu is open (pie or list/radial-buttons), scrolling the mouse wheel cycles its options instead of resizing the wheel. A 250 ms sticky window prevents cursor jitter from immediately overwriting the scroll-picked item, and the hover lock survives across `UpdateHover` rebuilds so parent-ring re-detection no longer pops/recreates the submenu underneath
- **Directional hover for list submenus** — list-mode submenus now react to the cursor's direction the same way pie submenus do: pointing toward the list (even past it) selects items by Y projection, and going back toward the wheel center exits to the parent ring. The hit area is unbounded outward and lightly padded above/below the list extent
- **Unified `Switch` node** — single new flow node replaces the 5 specialized switch types. Each case is independent and can match any of the 5 predicates (Editor Context, Editor Mode, Blueprint Context, Selection Count, Actor Class) — the same Switch can mix heterogeneous cases (e.g. case 0 matches an Editor Context, case 1 matches a Selection Count, case 2 matches an Actor Class). Cases are configured via a single searchable combo that lists ALL options across all 5 categories at once (~60+ entries — `Editor Context | Sequencer`, `Editor Mode | Landscape`, `Blueprint Context | Components`, `Selection Count...`, `Actor Class...`, etc.); typing in the filter cross-cuts categories (e.g. `"blueprint"` surfaces `Editor Context | Blueprint`, `Editor Context | Anim Blueprint`, `Editor Context | Widget Blueprint`, and all `Blueprint Context | *` entries). `*::Custom` enum values expose a side text input for the Tab ID / Mode ID / Mode Name. `Selection Count` cases show an int spinner. `Actor Class` cases show the standard class picker. The combo button always shows the synthesized `<Category> | <Value>` label so the case is readable at a glance. Runtime resolves cases in order, first match wins, falls back to `Default` pin. The 5 legacy Switch classes still compile and work — they will be removed in a follow-up release once existing graphs have migrated
- **`Graph Op` actions work in any graph editor** — `Auto-Layout Graph`, `Align Horizontal`, `Align Vertical`, `Auto Name & Color Comments` (and the previously-fixed `Create Comment Around Selection`) now operate on the focused `SGraphEditor` regardless of editor type (Blueprint, Niagara, AnimBP, Material, …). Generic algorithms live in a new `QMGraphOpUtils` helper invoked when the focused graph is not a Quick Menu graph. Selection capture before pie-menu open follows the focused editor — QM cached selection when the focused graph belongs to a QM asset, the editor's live `SGraphEditor` selection otherwise. `Auto Name & Color Comments` falls back to color-only on non-QM graphs (no `SubMenu`/`WheelOutput` to derive comment names from)

### Changed
- **Quick Menu graph comments now use the engine-default comment widget** — the custom `SQMGraphNode_Comment` override that injected an inline "Group Color" label and color swatch button into the title bar has been removed from the visual node factory. Comments inside Quick Menu graph assets now instantiate the standard `SGraphNodeComment` exactly like Blueprint, AnimBP, Niagara, Material, etc., so resize handles, contained-node move, title bar context menu, color picker and font size adjustment all behave identically to a Blueprint comment. Existing comments keep all of their data (`NodeComment`, `CommentColor`, dimensions) — only the rendering changes
- **`List Menu Distance` is now an absolute pixel offset** — previously multiplied by `WheelScale`, so scrolling the wheel to resize secretly shifted list/radial-button menus toward the center, mimicking a middle-mouse list-distance drag. Now scrolling resizes the inner wheel (dead zone, ring, fonts) without disturbing the list distance the user explicitly configured
- **`List Menu Distance` clamp widened to [-10000, +10000]** — was hard-capped at [-100, +200] in three independent places (UPROPERTY meta, settings save, runtime widget constants). Wide bounds keep the slider feeling familiar (-200 to +500) but typed values, runtime middle-mouse drag, and mouse-wheel adjustments are no longer silently capped
- **Unified Quick Menu settings hierarchy** — plugin settings are now organized under clearer grouped categories (`Primary Binding`, `Hotkeys`, `Interaction`, `Behavior`, `Appearance`, `Console`) for a cleaner structure in `Project Settings`
- **Quick Menu Panel now mirrors Project Settings directly** — the panel's settings tab now displays the same underlying `UQuickMenuSettings` object instead of maintaining a separate handcrafted settings UI
- **Primary binding sync tightened** — the main `OpenMenuKey` / `ActiveGraph` pair is now kept in sync with the primary `HotkeyBindings` entry so legacy/editor-facing fields and gesture bindings stay aligned
- **Edit Wheel key exposed consistently** — the shortcut used to jump from the wheel to its graph editor is now surfaced alongside the main wheel shortcut in the panel
- **Show Flag data model upgraded** — `Show Flag` actions now store real Unreal show-flag names with backward-compatible fallback from the legacy enum, so existing graphs keep working while newly created nodes can target any engine show flag
- **Default Show Flag creation paths updated** — generated/default `Show Flag` nodes now populate the new show-flag-name field so labels, picker state, and runtime toggles stay aligned
- **List / radial-button mode mouse interactions inverted** — previously: middle-mouse drag horizontally adjusted `List Menu Distance`, mouse wheel resized the radial buttons. Now: middle-mouse drag scales the buttons (live `SCALE x.xx` readout in the wheel center), mouse wheel adjusts the distance to center. Both still persist immediately to `EditorPerProjectUserSettings.ini`. Pie-mode behavior is unchanged (middle-drag still controls Wedge Gap)

### Fixed
- **Main wheel shortcut rebinding** — changing the primary wheel key now updates the actual editor command binding used by Quick Menu, so the new shortcut works immediately instead of only appearing updated in UI/config
- **Active graph sync drift** — all "set active graph" flows now go through the same settings path, preventing the panel, content-browser actions, and graph editor actions from drifting out of sync with the primary binding
- **Fallback graph resolution** — loading the active graph now correctly falls back to the primary hold binding when needed, which keeps runtime behavior consistent with the displayed primary configuration
- **Show Flag runtime resolution** — toggling now resolves flags by Unreal show-flag name at runtime instead of being restricted to the old hardcoded enum set
- **Show Flag node graph UI** — the new picker is now wired directly into the node body renderer as well as the inline property panel, so it is visible/editable where users expect it in the graph
- **Scrollable icon dropdown crash** — `SQMScrollableCombo` no longer risks a use-after-free crash when a selection callback rebuilds the graph during icon picking
- **SubMenu custom icon rendering** — `SubMenu` headers now resolve `QuickMenu.*` brushes through `FQuickMenuStyle`, so icons shown in the picker also render correctly on the node itself
- **Rotation in radial-button (list) layout** — `GetRadialButtonCenter` ignored the ring's rotation offset, so radial buttons stayed at fixed cardinal angles even with a non-zero rotation. Now respects `Ring.ArcStartDeg`. Same fix applied to the side-attached child list anchored off a hovered radial button
- **`Rotation` SpinBox losing focus mid-drag** — the inline rotation field on `WheelOutput` called `NotifyGraphChanged()` per drag tick, which forced the `SGraphNode` to rebuild and destroyed the SpinBox mid-interaction. Drag is now wrapped in a single transaction via `OnBeginSliderMovement` / `OnEndSliderMovement` with no mid-drag graph rebuild; typed-value commits keep their own scoped transaction
- **Radial-button hit detection ignored rotation** — the angular fallback used when the cursor is between buttons used a hardcoded `0..360` range instead of `Ring.ArcStartDeg..ArcEndDeg`, so any non-zero rotation produced a constant hover offset between visible buttons and the wedge actually selected. Fallback now honors the ring's real arc range
- **`Open Asset` froze the editor when picking a heavy asset** — the picker called `AssetData.GetAsset()` to store the selection, which forces a full synchronous load of the asset (catastrophic for large levels). The node now stores the path string only (`AssetData.GetSoftObjectPath()`) and resolves / loads the object lazily inside `Resolve()`. The compact button label shows the asset's short name; the asset registry provides the picker's initial selection without touching disk
- **`Open Asset` crash / long freeze on Levels (`UWorld`)** — `Item.Action.Execute()` ran synchronously, triggering `FEditorFileUtils::LoadMap` while the wheel was still on screen with active timers and outstanding delegates. The action body is now deferred one frame via `FTSTicker` so the wheel dismisses cleanly first, and `LoadMap` is called with `bShowProgress=false` to stop stacking a modal dialog over the (still-closing) wheel
- **`Graph Op > Create Comment Around Selection` targeted the wrong graph** — the action only knew how to find a `FQuickMenuGraphAssetEditor`, so triggering it from a Blueprint / Niagara / AnimBP graph silently created the comment inside the last-focused QM graph instead. A new generic helper walks the focused widget tree to capture any `SGraphEditor` (matched by type name containing `GraphEditor`), and a generic `CreateGenericCommentAroundNodes` builds a `UEdGraphNode_Comment` directly in any `UEdGraph` with widget-measured bounds, an undoable transaction, and a `NotifyGraphChanged`. Pure QM operations (`AddWheelOutput`, `CollapseToSubMenu`, `PreviewWheel`, `SetAsActive`, …) keep their existing QM-only path
- **`BP Add Node` spawned at the upper-left of the view** — Blueprint nodes added via the wheel snapped to `ViewLocation + (160, 160)` regardless of where the cursor was when the wheel opened. The action now captures the cursor's graph-space position from the focused Blueprint editor at `Resolve` time (before the wheel takes focus) via `Panel->PanelCoordToGraphCoord`, and uses it as the spawn location. The original behavior is kept as a fallback when the cursor wasn't over the BP graph at the moment of opening
- **Comment shortcuts firing on the wrong Quick Menu editor** — `OnCreateGroupComment` and `OnNameAndColorComment` were each bound on every open editor's `GraphEditorCommands`, so when several QM graph asset editors were alive Slate could route the keypress to a stale binding from a previously focused editor and the comment landed in the wrong graph. Both handlers now consult `FindEditorFromUserFocus()` and forward the call to whichever QM editor is actually under user focus
- **`Graph Op > Create Comment Around Selection` selection captured from the wrong editor** — selection was collected from the QM cached selection first, then fell back to the focused generic `SGraphEditor`. With a QM editor lingering in memory while the user worked in a Blueprint, the QM cached set was non-empty and got used to compute comment bounds, so the comment was created in the BP graph but sized around invisible QM nodes (or skipped when the QM nodes were stale). Selection capture is now routed by which graph is actually focused: QM cached when the focused graph belongs to a QM asset, the generic `SGraphEditor`'s live selection otherwise

---

## [1.0.3] - 2026-04-17

### Added
- **BP Add Node action** — new action node that spawns an arbitrary Blueprint node via a searchable picker (replaces the need for per-node Blueprint nodes)
- **Open Asset action** — new action node that opens any referenced asset in its editor
- **Inline property panel on graph nodes** — action node properties (color, name, type-specific options, asset picker, BP action picker) are now edited directly on the node in the graph instead of in the Details panel
- **Gesture-based hotkey system** — same key can bind multiple gestures (`Tap`, `Hold`, `Drag`) to different graphs, with configurable `TapThresholdMs` and `DragPixelThreshold`
- **Wheel usable during Play In Editor** — new `Allow Wheel During Play In Editor` setting; hotkeys pass through to the game when disabled

### Changed
- Default for `Force Neutral Gray Wedges` flipped to `true`
- Legacy `OpenMenuKey` + `ActiveGraph` are auto-migrated into `HotkeyBindings` on first launch (marked as Legacy in Project Settings)

### Fixed
- **Play In Viewport / Play In New Viewport routing** — `Play Op` actions now start the PIE session in the correct viewport based on the active editor context (Blueprint editor, asset editor, or Level Editor). Previously every variant defaulted to the Level Editor viewport regardless of which editor triggered the action
- **Set View Mode targeting wrong viewport** — `Set View Mode` (Lit, Unlit, Wireframe, Detail Lighting, …) now acts on the currently focused viewport (Blueprint internal viewport when that editor is focused, Level Editor viewport otherwise). Previously the toggle always applied to the Level Editor
- **Subgraph exec connections lost during compat graph packaging** — `ImportNodesFromText` resolved `LinkedTo` pins in text order; Subgraph ExecIn pins created later via `PostPasteNode` were silently dropped. Added `RepairSubgraphExecLinks` to re-parse the snapshot text and manually reconnect lost links
- **Fake enum variants in right-click node search** — `TFieldIterator<FEnumProperty>` was surfacing inherited `UEdGraphNode` enums (`EnabledState`, `AdvancedPinDisplay`) as fake action variants (Enabled/Disabled/Development Only/Hidden/No Pins/Shown). Now filtered to only action-specific enums

---

## [1.0.2] - 2026-04-10

### Added
- **Wedge gap control** — adjustable pixel gap between wedges (0–20px) in Settings, also adjustable live via middle-mouse drag on the wheel (shows "GAP X.X" in center)
- **Neutral gray wedge mode** — "Force Neutral Gray Wedges" setting overrides all category colors with a uniform editor-style gray, adds dark separator lines between wedges with adjustable darkness
- **Interactive live wheel preview** in Quick Menu panel — real-time preview of the active wheel with read-only interaction, updates as settings change
- **Level Editor docked panel** — Quick Menu panel now registers as a Level Editor tab and auto-docks on first launch (persisted via layout, no longer a floating nomad tab)
- **Appearance settings persistence** — Wedge Gap, Force Neutral Gray, Gray Separator Darkness are saved/loaded independently from Project Settings and persist across sessions

### Fixed
- **"Select All Lights" selecting nothing** — replaced deprecated `ALight::StaticClass()` with component-based detection (`ULightComponentBase`), now correctly selects all actors with light components
- **Graph operations targeting wrong editor** — new `FindEditorFromUserFocus()` resolves the correct QuickMenu graph editor based on keyboard focus or mouse position, fixing Align, Collapse, Remove Unused Pins, etc. when multiple graph assets are open
- **Hover color too washed out** — changed hover color from `(55, 120, 190)` to a flat `(0, 88, 204)` for clearer visual feedback

### Changed
- Quick Menu panel uses Level Editor tab manager instead of global nomad tab spawner
- Appearance settings (wheel size, wedge gap, gray mode) are applied live from the panel preview and saved to a separate config section

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

