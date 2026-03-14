# Python Custom Code Examples

These examples work with the **Custom Code** action node. Requires the **Python Editor Script Plugin** to be enabled.

## 1. Toggle Wireframe on Selected Actor

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    a = actors[0]
    comp = a.get_component_by_class(unreal.StaticMeshComponent)
    if comp:
        comp.set_editor_property('bWireframe', not comp.get_editor_property('bWireframe'))
```

## 2. Randomize Rotation of All Selected Actors

```python
import random
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    rot = unreal.Rotator(0, random.uniform(0, 360), 0)
    actor.set_actor_rotation(rot, False)
```

## 3. Scatter Selected Actors Randomly in a Radius

```python
import random
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
for a in actors:
    loc = a.get_actor_location()
    loc.x += random.uniform(-500, 500)
    loc.y += random.uniform(-500, 500)
    a.set_actor_location(loc, False, False)
```

## 4. Select All Actors of the Same Class

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    cls = actors[0].get_class()
    all_actors = unreal.EditorLevelLibrary.get_all_level_actors()
    same = [a for a in all_actors if a.get_class() == cls]
    unreal.EditorLevelLibrary.set_selected_level_actors(same)
```

## 5. Log Selected Actor Properties (Quick Debug)

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    a = actors[0]
    unreal.log(f"Name: {a.get_name()}")
    unreal.log(f"Class: {a.get_class().get_name()}")
    unreal.log(f"Location: {a.get_actor_location()}")
    unreal.log(f"Scale: {a.get_actor_scale3d()}")
```

## 6. Align All Selected Actors to the Same Z Height

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if len(actors) > 1:
    target_z = actors[0].get_actor_location().z
    for a in actors[1:]:
        loc = a.get_actor_location()
        loc.z = target_z
        a.set_actor_location(loc, False, False)
```

## 7. Rename Selected Actors Sequentially

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
for i, a in enumerate(actors):
    a.set_actor_label(f"Prop_{i:03d}")
```

## 8. Create a Ring of Actors Around Selection

```python
import math
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    center = actors[0].get_actor_location()
    radius = 500
    count = 8
    for i in range(count):
        angle = (2 * math.pi / count) * i
        loc = unreal.Vector(
            center.x + radius * math.cos(angle),
            center.y + radius * math.sin(angle),
            center.z
        )
        unreal.EditorLevelLibrary.spawn_actor_from_class(unreal.StaticMeshActor, loc)
```

## 9. Toggle Collision on All Selected Actors

```python
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    comp = actor.get_component_by_class(unreal.PrimitiveComponent)
    if comp:
        enabled = comp.get_editor_property('bGenerateOverlapEvents')
        comp.set_editor_property('bGenerateOverlapEvents', not enabled)
```

## 10. Dynamic Label — Show Selection Count

Use this in the **Display Name Code** field (not Execute Code):

```python
count = len(unreal.EditorLevelLibrary.get_selected_level_actors())
result = f"Selected: {count} actor{'s' if count != 1 else ''}"
```

## 11. Conditional Visibility — Only Show When in Landscape Mode

Use this in the **Is Visible Code** field:

```python
result = unreal.EditorLevelLibrary.get_editor_world() is not None
```
