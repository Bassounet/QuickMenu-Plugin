# For Developers — C++ Class Reference

This section maps user-facing features to C++ classes for developers who want to extend Quick Menu.

## Core Architecture

| Class | Role |
|-------|------|
| `FQuickMenuModule` | Module startup, V hotkey registration, opens pie overlay |
| `UQuickMenuSettings` | UDeveloperSettings — project settings |
| `UQuickMenuGraphAsset` | UObject owning the UEdGraph |
| `FQuickMenuGraphSchema` | Pin types, connection rules, context menus |
| `FQuickMenuGraphEvaluator` | Walks graph to produce menu items |
| `SQuickMenuWidget` | SLeafWidget — pie menu rendering and interaction |
| `FQuickMenuGraphAssetEditor` | FAssetEditorToolkit — graph editor |

## Node Classes

| Class | User-Facing Name |
|-------|-----------------|
| `UQMGraphNode_Root` | Root |
| `UQMGraphNode_WheelOutput` | WheelOutput |
| `UQMGraphNode_SubMenu` | SubMenu |
| `UQMGraphNode_SwitchEditorContext` | Switch: Editor Context |
| `UQMGraphNode_SwitchEditorMode` | Switch: Editor Mode |
| `UQMGraphNode_SwitchSelectionCount` | Switch: Selection Count |
| `UQMGraphNode_SwitchActorClass` | Switch: Actor Class |
| `UQMGraphNode_SwitchBlueprintContext` | Switch: Blueprint Context |

## Action Base Class

All action nodes inherit from `UQMGraphNode_ActionBase`, which provides:

- `Label` (FString) — display name
- `IconBrushName` (FName) — Slate icon
- `IconTexture` (UTexture2D*) — custom icon texture
- `WedgeColor` (FLinearColor) — wedge color
- `bCompact` (bool) — compact display mode
- `bAutoLabel` (bool) — auto-generate label from properties

## Creating a Custom Action Node

1. Create a class inheriting from `UQMGraphNode_ActionBase`
2. Override `Resolve()` — called when the wedge is clicked
3. Override `GetDisplayLabel()` — returns the wedge label text
4. Override `GetNodeTitle()` — returns the node title in the graph editor
5. Optionally override `IsActionVisible()` — controls whether the wedge appears
6. Register in `QMActionRegistry.cpp` → `RegisterActions()`

## Action Node Class Mapping

| Action | C++ Class |
|--------|-----------|
| Spawn Actor | `UQMGraphNode_Action_SpawnActor` |
| Spawn Shape | `UQMGraphNode_Action_SpawnShape` |
| Set View Mode | `UQMGraphNode_Action_SetViewMode` |
| Console Command | `UQMGraphNode_Action_ConsoleCommand` |
| Toggle Snap | `UQMGraphNode_Action_ToggleSnap` |
| Grid Size | `UQMGraphNode_Action_GridSize` |
| Transform Mode | `UQMGraphNode_Action_TransformMode` |
| Coord Space | `UQMGraphNode_Action_CoordSpace` |
| Select Op | `UQMGraphNode_Action_SelectOp` |
| Play Op | `UQMGraphNode_Action_PlayOp` |
| Editor Command | `UQMGraphNode_Action_EditorCommand` |
| Open Panel | `UQMGraphNode_Action_OpenPanel` |
| Panel Instance | `UQMGraphNode_Action_PanelInstance` |
| Editor Mode | `UQMGraphNode_Action_EditorMode` |
| Build | `UQMGraphNode_Action_Build` |
| Level Op | `UQMGraphNode_Action_LevelOp` |
| Actor Op | `UQMGraphNode_Action_ActorOp` |
| Edit Op | `UQMGraphNode_Action_EditOp` |
| Reset Transform | `UQMGraphNode_Action_ResetTransform` |
| Property Toggle | `UQMGraphNode_Action_PropertyToggle` |
| Show Flag | `UQMGraphNode_Action_ShowFlag` |
| Viewport View | `UQMGraphNode_Action_ViewportView` |
| Viewport Layout | `UQMGraphNode_Action_ViewportLayout` |
| Scalability | `UQMGraphNode_Action_ScalabilityOp` |
| Align Op | `UQMGraphNode_Action_AlignOp` |
| Pivot Op | `UQMGraphNode_Action_PivotOp` |
| Bookmark Op | `UQMGraphNode_Action_BookmarkOp` |
| Material Op | `UQMGraphNode_Action_MaterialOp` |
| Sequencer Op | `UQMGraphNode_Action_SequencerOp` |
| Static Mesh Op | `UQMGraphNode_Action_StaticMeshOp` |
| Niagara Op | `UQMGraphNode_Action_NiagaraOp` |
| PCG Op | `UQMGraphNode_Action_PCGOp` |
| BP: Add Component | `UQMGraphNode_Action_BP_AddComponent` |
| BP: Component Op | `UQMGraphNode_Action_BP_ComponentOp` |
| BP: Component Property | `UQMGraphNode_Action_BP_ComponentProperty` |
| BP: Add Graph | `UQMGraphNode_Action_BP_AddGraph` |
| BP: Add Variable | `UQMGraphNode_Action_BP_AddVariable` |
| BP: My Blueprint Op | `UQMGraphNode_Action_BP_MyBlueprintOp` |
| BP: Interface | `UQMGraphNode_Action_BP_Interface` |
| BP: Compile Op | `UQMGraphNode_Action_BP_CompileOp` |
| Go To Wheel | `UQMGraphNode_Action_GoToWheel` |
| Repeat Last | `UQMGraphNode_Action_RepeatLast` |
| Graph Op | `UQMGraphNode_Action_GraphOp` |
| Custom Code | `UQMGraphNode_Action_CustomCode` |
