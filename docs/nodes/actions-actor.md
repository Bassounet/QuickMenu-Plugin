# Action Nodes — Actor Operations

## Actor Op

Common operations on selected actors.

**Options:** Focus Selected, Pilot Actor, Stop Piloting, Group, Ungroup, Lock, Unlock, Hide Selected, Unhide All, Snap to Floor, Isolate Selected, Mirror X/Y/Z, Snap Camera to Actor, Snap Actor to Camera, Attach to Last, Detach from Parent, Merge Actors, Convert to Blueprint.

## Property Toggle

Toggles actor properties on/off.

**Options:** Cycle Mobility, Cycle Collision, Toggle Hidden In Game, Toggle Cast Shadows, Toggle Simulate Physics.

## Property Clipboard

*Added in 1.0.7.*

Copies the whole Details panel of an actor and pastes it onto any selection — reuse a tuned actor's values (camera settings, light setups, …) on other actors without property-by-property work.

**Options:**

| Operation | Description |
|-----------|-------------|
| Copy Properties | Captures every editable property of the first selected actor **and all its components** — exactly what the Details panel shows (asset references included; instanced component references excluded) |
| Paste All Properties | Applies everything to all selected actors in a single undoable transaction — except relative Location/Rotation/Scale, excluded by default so targets don't teleport onto the source |
| Paste Properties… | Opens a picker window grouped by actor/component, with search, All/None buttons, per-property value previews, and a live `Paste N properties onto M actors` button. Relative transform entries start unchecked |

**Behavior:**

- **Cross-class smart paste** — pasting onto a different actor class writes only the properties that match: components are matched by name, then by class, and each property is type-checked before writing. Everything else is skipped safely.
- Paste actions stay hidden in the wheel until something has been copied; the clipboard lasts for the current editor session.

## Align Op

Alignment and snapping operations.

**Options:** Snap Origin to Grid, Align to Floor, Snap Pivot to Floor, Snap Bounds to Floor, Align to Actor, Snap to Actor.

## Pivot Op

Pivot point operations.

**Options:** Pivot to Center, Reset Pivot, Save Pivot, Reset Pre-Pivot, Pivot Here (Cursor), Pivot Here (Snapped).
