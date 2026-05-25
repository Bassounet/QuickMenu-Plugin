# Python Library

Ready-to-use Python snippets for the **Custom Code** action node. Click the copy icon on any code block, paste it into the matching field on your Custom Code node, and you're set. Requires the **Python Editor Script Plugin** enabled.

<div class="qm-py-intro" markdown>
  <div class="qm-py-intro__count"><strong>12</strong> scripts ready</div>
  <div class="qm-py-intro__hint">Each card tells you which field to paste into — Execute (runs on click), Display (sets the wedge label), or Visible (shows/hides the wedge).</div>
</div>

<div class="qm-py-search" markdown>
  <input type="text" class="qm-py-search__input" placeholder="Search by script name or description…" aria-label="Search Python scripts">
</div>

<div class="qm-py-filters" markdown>
  <span class="qm-py-filter qm-py-filter--active" data-filter="all">All <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="selection">#selection <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="transform">#transform <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="spawn">#spawn <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="camera">#camera <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="workflow">#workflow <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="shortcut">#shortcut <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="debug">#debug <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="dynamic">#dynamic <span class="qm-py-filter__count">0</span></span>
  <span class="qm-py-filter" data-filter="graph">#graph <span class="qm-py-filter__count">0</span></span>
</div>

<div class="qm-py-empty" markdown>
  <span class="qm-py-empty__icon">∅</span>
  No scripts yet in <span class="qm-py-empty__cat">this</span> category — more are on the way.
</div>

<div class="qm-py-grid" markdown>

<article class="qm-py-card" data-category="selection" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--selection">S</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Toggle Wireframe</h3>
   <p>Flips the wireframe display on the first selected static mesh actor. Useful for inspecting geometry without leaving the viewport.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    a = actors[0]
    comp = a.get_component_by_class(unreal.StaticMeshComponent)
    if comp:
        comp.set_editor_property('bWireframe', not comp.get_editor_property('bWireframe'))
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#render</span>
  <span class="qm-py-card__tag">#toggle</span>
</footer>

</article>

<article class="qm-py-card" data-category="transform" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--transform">T</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Randomize Rotation</h3>
   <p>Gives every selected actor a random Yaw — instantly breaks up grid-aligned props, foliage, or debris.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
import random
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    rot = unreal.Rotator(0, random.uniform(0, 360), 0)
    actor.set_actor_rotation(rot, False)
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#transform</span>
  <span class="qm-py-card__tag">#random</span>
  <span class="qm-py-card__tag">#foliage</span>
</footer>

</article>

<article class="qm-py-card" data-category="transform" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--transform">T</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Scatter in a Radius</h3>
   <p>Nudges each selected actor by ±500 units on X and Y. Quick way to break up perfect grids before tweaking by hand.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
import random
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
for a in actors:
    loc = a.get_actor_location()
    loc.x += random.uniform(-500, 500)
    loc.y += random.uniform(-500, 500)
    a.set_actor_location(loc, False, False)
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#transform</span>
  <span class="qm-py-card__tag">#random</span>
  <span class="qm-py-card__tag">#scatter</span>
</footer>

</article>

<article class="qm-py-card" data-category="selection" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--selection">S</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Select Same Class</h3>
   <p>Picks the first selected actor's class and re-selects every actor of that class in the level. Handy before a bulk operation.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    cls = actors[0].get_class()
    all_actors = unreal.EditorLevelLibrary.get_all_level_actors()
    same = [a for a in all_actors if a.get_class() == cls]
    unreal.EditorLevelLibrary.set_selected_level_actors(same)
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#class</span>
  <span class="qm-py-card__tag">#batch</span>
</footer>

</article>

<article class="qm-py-card" data-category="debug" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--debug">D</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Log Selected Actor Properties</h3>
   <p>Dumps name, class, location and scale of the first selected actor to the Output Log. Handy when something looks off and you want a quick sanity check.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if actors:
    a = actors[0]
    unreal.log(f"Name: {a.get_name()}")
    unreal.log(f"Class: {a.get_class().get_name()}")
    unreal.log(f"Location: {a.get_actor_location()}")
    unreal.log(f"Scale: {a.get_actor_scale3d()}")
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#debug</span>
  <span class="qm-py-card__tag">#log</span>
</footer>

</article>

<article class="qm-py-card" data-category="transform" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--transform">T</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Align to Same Z Height</h3>
   <p>Snaps every selected actor to the Z height of the first one in the selection. Great for lining up props on a shared floor.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
if len(actors) > 1:
    target_z = actors[0].get_actor_location().z
    for a in actors[1:]:
        loc = a.get_actor_location()
        loc.z = target_z
        a.set_actor_location(loc, False, False)
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#transform</span>
  <span class="qm-py-card__tag">#align</span>
</footer>

</article>

<article class="qm-py-card" data-category="selection" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--selection">S</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Rename Sequentially</h3>
   <p>Relabels every selected actor as Prop_000, Prop_001, etc. Useful before exporting or referencing them by name.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
for i, a in enumerate(actors):
    a.set_actor_label(f"Prop_{i:03d}")
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#rename</span>
  <span class="qm-py-card__tag">#batch</span>
</footer>

</article>

<article class="qm-py-card" data-category="spawn" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--spawn">Sp</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Ring of Actors</h3>
   <p>Spawns 8 empty Static Mesh actors in a 500-unit ring around the first selected actor. Drop in your own mesh and you have a procedural circle.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

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

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#spawn</span>
  <span class="qm-py-card__tag">#ring</span>
  <span class="qm-py-card__tag">#procedural</span>
</footer>

</article>

<article class="qm-py-card" data-category="selection" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--selection">S</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Toggle Collision</h3>
   <p>Flips bGenerateOverlapEvents on every selected actor's primitive component. Useful when iterating on triggers or interactive props.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    comp = actor.get_component_by_class(unreal.PrimitiveComponent)
    if comp:
        enabled = comp.get_editor_property('bGenerateOverlapEvents')
        comp.set_editor_property('bGenerateOverlapEvents', not enabled)
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#selection</span>
  <span class="qm-py-card__tag">#collision</span>
  <span class="qm-py-card__tag">#toggle</span>
</footer>

</article>

<article class="qm-py-card" data-category="ui" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--ui">UI</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Show Selection Count</h3>
   <p>Returns "Selected: N actor(s)" for the wedge label. Paste in the Display Name Code field — the label updates every time the pie menu opens.</p>
  </div>
  <span class="qm-py-card__field qm-py-card__field--display" title="Paste into the Display Name Code field of the Custom Code node">Display</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
count = len(unreal.EditorLevelLibrary.get_selected_level_actors())
result = f"Selected: {count} actor{'s' if count != 1 else ''}"
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#dynamic</span>
  <span class="qm-py-card__tag">#label</span>
  <span class="qm-py-card__tag">#selection</span>
</footer>

</article>

<article class="qm-py-card" data-category="ui" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--ui">UI</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Hide Outside Landscape</h3>
   <p>Returns True only when an editor world is loaded. Paste in Is Visible Code — the wedge disappears in contexts where this script can't run.</p>
  </div>
  <span class="qm-py-card__field qm-py-card__field--visible" title="Paste into the Is Visible Code field of the Custom Code node">Visible</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
result = unreal.EditorLevelLibrary.get_editor_world() is not None
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#dynamic</span>
  <span class="qm-py-card__tag">#visibility</span>
  <span class="qm-py-card__tag">#landscape</span>
</footer>

</article>

<article class="qm-py-card" data-category="graph" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--graph">G</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Color Wedges by Label</h3>
   <p>Calls QuickMenu's exposed UFUNCTION to recolor every wedge whose label matches "Translate". Use as a starting point for building style presets.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
graph = unreal.QuickMenuGraphAsset.get_active_graph()
graph.set_wedge_color_by_label("Translate", unreal.LinearColor(0.2, 0.4, 1.0, 1.0))
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#graph</span>
  <span class="qm-py-card__tag">#color</span>
  <span class="qm-py-card__tag">#wedge</span>
</footer>

</article>

<article class="qm-py-card" data-category="shortcut" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--shortcut">Sh</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Save All Dirty Packages</h3>
   <p>One-shot equivalent of the native Ctrl+Shift+S — saves every modified asset and level. Wire it to a wedge when you want Save All on the radial.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
unreal.EditorLoadingAndSavingUtils.save_dirty_packages(save_map_packages=True, save_content_packages=True)
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#shortcut</span>
  <span class="qm-py-card__tag">#save</span>
  <span class="qm-py-card__tag">#workflow</span>
  <span class="qm-py-card__tag">#assets</span>
</footer>

</article>

<article class="qm-py-card" data-category="workflow" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--workflow">W</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Copy Camera Settings</h3>
   <p>Recursively serialises every editor property of the selected camera component (filmback, lens, focus, full post-process with its bOverride_ flags) to a JSON clipboard on disk. Pairs with the Paste card below.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
import json
import os

CLIP = os.path.join(unreal.Paths.project_intermediate_dir(), "qm_camera_clipboard.json")

SKIP = {
    "relative_location", "relative_rotation", "relative_scale3d",
    "absolute_location", "absolute_rotation", "absolute_scale",
    "attach_parent", "attach_socket_name", "attach_children",
    "component_to_world", "component_tags", "asset_user_data",
    "mobility", "primary_component_tick",
}

def get_cam(actor):
    return (actor.get_component_by_class(unreal.CineCameraComponent)
            or actor.get_component_by_class(unreal.CameraComponent))

def list_props(obj):
    props = []
    for name in dir(obj):
        if name.startswith("_") or name in SKIP:
            continue
        try:
            if callable(getattr(obj, name)):
                continue
            obj.get_editor_property(name)
            props.append(name)
        except Exception:
            pass
    return props

def serialize(v):
    if v is None or isinstance(v, (bool, int, float, str)):
        return v
    if isinstance(v, unreal.Name):
        return {"__name__": str(v)}
    if isinstance(v, unreal.Text):
        return {"__text__": str(v)}
    if isinstance(v, unreal.StructBase):
        return {"__struct__": type(v).__name__,
                "fields": {p: serialize(v.get_editor_property(p)) for p in list_props(v)}}
    if isinstance(v, unreal.Array):
        return {"__array__": [serialize(x) for x in v]}
    if isinstance(v, unreal.Object):
        try:
            return {"__object__": v.get_path_name()}
        except Exception:
            return None
    try:
        return {"__enum__": type(v).__name__, "value": int(v)}
    except Exception:
        return None

actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_selected_level_actors()
if not actors:
    unreal.log_warning("[QM] Select a source camera first")
else:
    c = get_cam(actors[0])
    if not c:
        unreal.log_warning(f"[QM] No camera component on '{actors[0].get_actor_label()}'")
    else:
        data = {"class": type(c).__name__,
                "props": {p: serialize(c.get_editor_property(p)) for p in list_props(c)}}
        with open(CLIP, "w") as f:
            json.dump(data, f, indent=2)
        unreal.log(f"[QM] {data['class']} copied from '{actors[0].get_actor_label()}' ({len(data['props'])} props)")
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#workflow</span>
  <span class="qm-py-card__tag">#camera</span>
  <span class="qm-py-card__tag">#clipboard</span>
  <span class="qm-py-card__tag">#cinecamera</span>
</footer>

</article>

<article class="qm-py-card" data-category="workflow" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--workflow">W</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Paste Camera Settings</h3>
   <p>Applies every saved property from the camera clipboard to the selected camera(s), wrapped in a single editor transaction so Ctrl+Z undoes the whole paste.</p>
  </div>
  <span class="qm-py-card__field" title="Paste into the Execute Code field of the Custom Code node">Execute</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
import json
import os

CLIP = os.path.join(unreal.Paths.project_intermediate_dir(), "qm_camera_clipboard.json")

def get_cam(actor):
    return (actor.get_component_by_class(unreal.CineCameraComponent)
            or actor.get_component_by_class(unreal.CameraComponent))

def deserialize(d):
    if d is None or isinstance(d, (bool, int, float, str)):
        return d
    if isinstance(d, dict):
        if "__name__" in d:
            return unreal.Name(d["__name__"])
        if "__text__" in d:
            return unreal.Text(d["__text__"])
        if "__struct__" in d:
            cls = getattr(unreal, d["__struct__"], None)
            if cls is None:
                return None
            s = cls()
            for k, v in d["fields"].items():
                try:
                    s.set_editor_property(k, deserialize(v))
                except Exception:
                    pass
            return s
        if "__array__" in d:
            return [deserialize(x) for x in d["__array__"]]
        if "__enum__" in d:
            cls = getattr(unreal, d["__enum__"], None)
            try:
                return cls(d["value"]) if cls else d["value"]
            except Exception:
                return d["value"]
        if "__object__" in d:
            try:
                return unreal.load_object(None, d["__object__"])
            except Exception:
                return None
    return None

if not os.path.exists(CLIP):
    unreal.log_warning("[QM] Camera clipboard empty — run Copy Camera Settings first")
else:
    with open(CLIP) as f:
        data = json.load(f)
    actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_selected_level_actors()
    if not actors:
        unreal.log_warning("[QM] Select at least one target camera")
    else:
        ok, skipped, fails = 0, 0, 0
        with unreal.ScopedEditorTransaction("QM Paste Camera Settings"):
            for a in actors:
                c = get_cam(a)
                if not c:
                    skipped += 1
                    continue
                for name, raw in data["props"].items():
                    try:
                        c.set_editor_property(name, deserialize(raw))
                    except Exception:
                        fails += 1
                ok += 1
        unreal.log(f"[QM] Camera pasted: {ok} target(s), {skipped} skipped, {fails} prop(s) failed")
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#workflow</span>
  <span class="qm-py-card__tag">#camera</span>
  <span class="qm-py-card__tag">#paste</span>
  <span class="qm-py-card__tag">#cinecamera</span>
</footer>

</article>

<article class="qm-py-card" data-category="ui" markdown>

<header class="qm-py-card__head" markdown>
  <span class="qm-py-card__cat qm-py-card__cat--ui">UI</span>
  <div class="qm-py-card__titles" markdown>
   <h3>Hide Paste Until Clipboard Set</h3>
   <p>Returns True only when the camera clipboard JSON exists on disk. Paste in Is Visible Code on a Paste-Camera wedge so the action disappears until you've actually copied a camera.</p>
  </div>
  <span class="qm-py-card__field qm-py-card__field--visible" title="Paste into the Is Visible Code field of the Custom Code node">Visible</span>
</header>

<div class="qm-py-card__body" markdown>
<div class="qm-py-card__code" markdown>

```python
import os
result = os.path.exists(os.path.join(unreal.Paths.project_intermediate_dir(), "qm_camera_clipboard.json"))
```

</div>
</div>

<footer class="qm-py-card__foot" markdown>
  <span class="qm-py-card__tag">#dynamic</span>
  <span class="qm-py-card__tag">#visibility</span>
  <span class="qm-py-card__tag">#camera</span>
</footer>

</article>

</div>

## Writing your own

See [Custom Python Actions](../guides/custom-python-actions.md) for the full guide on creating new Custom Code nodes — including the three code fields, dynamic labels, and conditional visibility.
