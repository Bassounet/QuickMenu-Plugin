# Action Nodes — Blueprint

These actions work within the Blueprint Editor. Most require a Blueprint asset to be open.

## BP: Add Component

Adds a component to the active Blueprint.

**Property:** `ComponentClass` — pick any component class from the dropdown.

## BP: Component Op

Operations on the selected component in the Blueprint Editor.

**Options:** Delete, Duplicate, Rename, Make Root, Detach.

> Requires UE 5.0+ (SubobjectEditor module).

## BP: Component Property

Set properties on the selected component.

**Options:** Mobility, Visibility, Collision, Physics.

> Requires UE 5.0+ (SubobjectEditor module).

## BP: Add Graph

Adds a new graph to the Blueprint.

**Options:** Function, Macro, Event Dispatcher.

## BP: Add Variable

Adds a typed member variable to the Blueprint.

**Options:** Bool, Byte, Int, Int64, Float, Double, Name, String, Text, Vector, Rotator, Transform.

## BP: Add Node

*Added in 1.0.3.*

Spawns an arbitrary Blueprint node at the mouse position in the active Blueprint graph — functions, events, variables, macros, flow control, math, structs, etc. Replaces the need for a dedicated Quick Menu action node per Blueprint node type.

**Property:** `SpawnAction` — pick any spawnable Blueprint action from a searchable picker (same database Unreal uses in its own right-click context menu).

The wedge label and icon default to the picked action's display name and icon; both remain overridable via the inline property panel.

## BP: My Blueprint Op

Operations on items in the My Blueprint panel.

**Options:** Delete, Rename, Delete Unused Variables.

## BP: Interface

Interface management.

**Options:** Implement interface, Remove interface.

## BP: Compile Op

Compile and debug operations.

**Options:** Compile, Compile All, Save & Compile, Toggle Breakpoints, Clear All Breakpoints, Find References, Go to Parent Class, Open Class Settings.
