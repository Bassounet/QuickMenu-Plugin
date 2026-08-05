# Action Nodes — Specialized Editors

## Material Op

Material editor operations.

**Options:** Apply Changes, Refresh Previews, Delete Selected, Clean Unused, Toggle Live Preview, Toggle Stats, Preview: Plane/Cylinder/Sphere/Cube.

## Sequencer Op

Sequencer playback and controls.

**Options:** Play / Pause, Stop, Go to Start, Go to End, Step Forward, Step Backward, Toggle Loop, Set Playback Speed (0.25x/0.5x/1x/2x), Toggle Auto Key, Refresh Tree, Force Evaluate, Save Sequence, Toggle Curve Editor, Create Camera + Cut Track.

Two operations added in 1.0.7:

- **Toggle Curve Editor** — shows/hides the focused Level Sequencer's animation curve editor from the wheel.
- **Create Camera + Cut Track** — one wedge spawns a CineCamera at the viewport camera position, binds it to the open sequence (spawnable or possessable, following the Sequencer's `Create Spawnable Cameras` setting), creates the Camera Cut track, and locks the viewport to the new camera — same behavior as the Sequencer toolbar button.

## Static Mesh Op

Static mesh editor operations.

**Options:** Add Box Collision, Add Sphere Collision, Add Capsule Collision, Auto Convex Collision, Remove All Collision, Generate LODs, Remove All LODs, Add Socket, Enable Nanite, Disable Nanite, Refresh, Save.

## Niagara Op

Niagara system controls.

**Options:** Compile, Reset Simulation, Toggle Looping, Speed: 0.25x/0.5x/1x/2x, Save.

> Only visible when the Niagara plugin is loaded.

## PCG Op

PCG (Procedural Content Generation) graph operations.

**Options:** Execute, Clean, Flush Cache, Refresh, Toggle Debug.

> Only visible when the PCG plugin is loaded.
