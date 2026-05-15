# Action Nodes — Editor

## Editor Command

Toggles viewport features.

**Options:** Toggle Grid, Toggle Realtime, Toggle Stats, Toggle Fullscreen, Toggle Game View, High-Res Screenshot, Toggle Viewport UI, Reset Show Flags, Toggle Cinematic.

## Open Panel

Opens an editor tab/panel.

**Options:** Viewport, Details, World Outliner, Content Browser, Output Log, World Settings, Layers, Levels, Place Actors, Statistics, Message Log, Env Light Mixer, HLOD Outliner, Sequencer, Data Layers, Session Frontend, Device Manager.

## Panel Instance

Operations on multi-instance panels.

**Options:** Add New or Close Last for: Viewport, Details, Scene Outliner, Content Browser.

## Edit Op

Basic edit operations.

**Options:** Undo, Redo, Duplicate, Delete, Copy, Paste, Project Settings, Editor Preferences, Plugins.

## Editor Mode

Switches the editing mode.

**Options:** Select, Landscape, Foliage, Mesh Paint, Modeling, Fracture, Placement.

## Bookmark Op

Viewport bookmark operations.

**Properties:**
- `Action` — Set, Jump To, or Clear
- `BookmarkIndex` — 0-9

## Build

Runs build operations.

**Options:** Build All, Build Lighting, Build Navigation, Build Geometry, Build HLODs, Build Texture Streaming, Live Coding, Reflection Captures, Virtual Texture, Minimap, Landscape Splines, All Landscape, Recompile Shaders.

## Level Op

Level management operations.

**Options:** New Level, Open Level, Save Current Level, Save All, Import Asset, Export Selected, Fix Up Redirectors.

## Play Op

PIE (Play In Editor) session controls.

**Options:** Play, Simulate, Stop, Pause / Resume, Eject, Possess, Play (New Window), Standalone Game.

## Scalability

Engine quality and scalability settings.

**Options:** Quality: Low/Medium/High/Epic/Cinematic + Material Quality: Low/Medium/High.

## Show Flag

Toggles a viewport show flag.

**Property:** `ShowFlagName` — picked through a hierarchical, name-searchable tree that mirrors the viewport `Show` menu (Lighting Components, Lighting Features, Post Processing, Developer, Collision, Volumes, Advanced, etc.).

*Since 1.0.4*, the picker stores the real Unreal show-flag name and falls back transparently from the legacy hardcoded enum so existing graphs keep working. The picker is exposed both in the inline property panel and directly on the node body.

## Property Matrix

*Added in 1.0.4 — Experimental.*

Opens Unreal's Property Matrix toolkit on a configurable source for bulk-editing many objects at once. Mirrors the engine's `Asset Actions > Bulk Edit via Property Matrix` (Content Browser) and the Level Editor equivalent for selected actors.

**Property:** `Source` — one of:

| Source | Behavior |
|--------|----------|
| **Auto** | Tries Content Browser asset selection first, falls back to selected actors if no assets are selected |
| **Content Browser Assets** | Bulk-edits the currently selected assets in the focused Content Browser |
| **Selected Actors** | Bulk-edits the actors currently selected in the level viewport |

!!! warning "Experimental"
    Marked experimental in 1.0.4 while UX and source-handling iterate.
