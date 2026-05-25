# Action Nodes — Navigation & Utility

## Go To Wheel

Navigates to another wheel in the current graph.

**Property:** `TargetWheelName` — pick from a dropdown of all WheelOutputs in the graph.

When clicked in the pie menu, replaces the current wheel with the target wheel. A back arrow appears at the center to return to the previous wheel (breadcrumb navigation). Uses the `QuickMenu.GoToWheel` custom brush as its default icon.

## Open Asset

*Added in 1.0.3.*

Opens any referenced asset in its dedicated editor (Blueprint, Material, Level, Widget Blueprint, Niagara, DataTable, etc.).

**Property:** `Asset` — pick any asset from the Content Browser via an inline asset picker on the node.

The wedge uses the asset's thumbnail as its icon by default, and its label defaults to the asset name. Both are overridable via the inline property panel.

*Since 1.0.4*, the node stores the asset's soft path instead of resolving the full asset at pick time, so picking a heavy asset (large Level, etc.) no longer freezes the editor. Loading happens lazily on click — Levels (`UWorld`) are loaded one frame after the wheel dismisses, with the engine's `LoadMap` progress dialog suppressed.

## Create Asset

*Added in 1.0.4.*

Creates a new asset in the focused Content Browser's current folder.

**Property:** `FactoryClass` — picked through an inline searchable list (filter box + scrollable list filtered alphabetically by display name, showing the produced asset class).

The picker is populated from every `UFactory` that satisfies `ShouldShowInNewMenu()` && `CanCreateNew()` — the same set of asset types as the Content Browser's "Add" menu (Material, Level Sequence, Blueprint Class, Data Asset, …). Factories that need extra input (`BlueprintClass`, structs, etc.) chain through `ConfigureProperties()` so the engine's parent-class / type pickers appear as expected.

**Behavior:**

- Names are auto-generated as `New<ClassName>` and made unique within the target folder
- The new asset is selected in the Content Browser on success
- Toasts a clear message when no Content Browser is currently open

## Repeat Last

Re-executes the last action used via Quick Menu.

The label dynamically shows what the last action was (e.g., "Repeat: Translate"). No configuration needed.

## Graph Op

Quick Menu editor self-operations — actions that control the graph editor itself.

**Options:**

| Operation | Description |
|-----------|-------------|
| Add Wheel Output | Add a new WheelOutput node to the graph |
| Add SubMenu | Add a new SubMenu node |
| Add Switch | Add a new Switch node |
| Auto-Layout Graph | Automatically arrange graph nodes (also Ctrl+L) |
| Align Horizontal | Align selected nodes horizontally |
| Align Vertical | Align selected nodes vertically |
| Collapse to SubMenu | Collapse selected nodes into a SubMenu |
| Preview Wheel | Toggle preview for the selected wheel |
| Validate Graph | Run graph validation checks |
| Set as Active Graph | Set this graph as the active Quick Menu graph |
| Auto Name & Color Comments | Automatically name and color comment nodes based on their contents (detects SubMenu/WheelOutput inside bounds) |
| Create Comment | Create a comment node around the current selection |
| Auto-Layout++ | Perform auto-layout, then create comments around node groups and auto-color them |
| Remove Unused Pins | Remove unconnected menu pins from selected nodes |

## Custom Code (Python)

Run inline Python code when the wedge is clicked.

**Properties:**
- **Execute Code** — Python code to run on click
- **Display Name Code** — Python expression returning a string (dynamic label)
- **Is Visible Code** — Python expression returning bool (conditional visibility)
- **Icon** — *(since 1.0.4)* same icon picker as every other action node (brush selection, custom texture support, title-bar preview)

> Requires the **Python Editor Script Plugin** to be enabled.

See the [Python Library](../customization/python-examples.md) for 12 ready-to-use snippets with one-click copy.
