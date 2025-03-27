---
title: Blender Scripts
description: Blender scripts for auto-exporting of glb objects.
---

## Blender Scripts

If you are using blender to develop your hyperfy world, the following scripts may be useful to you. To use them, go to the scripting tab in blender, click `+ New`, paste in the script, and hit the play button to run it.

### Bulk Export
--- 
*Created by [Ash Connel](https://github.com/ashconnell) in Feb 2025*

If you are building a scene in blender and have a bunch of objects all spread out, this script exports each individual object while properly centering each object at its own origin.
It will also ignore hidden objects, and automatically enable "custom properties" on the gltf export so that you can export colliders etc.

```py
import bpy
import os
import shutil

# get import and export directories
blend_dir = os.path.dirname(bpy.data.filepath)
export_dir = os.path.join(blend_dir, "exported_glbs")

# if existing export directory exists, delete it and make a new onw
if os.path.exists(export_dir):
   shutil.rmtree(export_dir)
os.makedirs(export_dir)

# get all objects in scene selected or active, store a ref, and clear the selections
orig_selected = bpy.context.selected_objects
orig_active = bpy.context.active_object
bpy.ops.object.select_all(action='DESELECT')

# for each top level object in the scene that is visible
for obj in bpy.context.scene.objects:
   if not obj.parent and obj.visible_get():  
       # move object to 0,0,0
       orig_location = obj.location.copy()
       obj.location = (0, 0, 0)
       # select the object and its children
       obj.select_set(True)
       for child in obj.children_recursive:
           child.select_set(True)

       bpy.context.view_layer.objects.active = obj
       # export the glb to the export directory
       export_path = os.path.join(export_dir, f"{obj.name}.glb")
       bpy.ops.export_scene.gltf(
           filepath=export_path,
           use_selection=True,
           export_format='GLB',
           export_extras=True  # enables custom properties export
       )

       obj.location = orig_location
       bpy.ops.object.select_all(action='DESELECT')

# reselect the previously selected or active objects
for obj in orig_selected:
   obj.select_set(True)
bpy.context.view_layer.objects.active = orig_active
```

### Collider Packager
--- 
*Created by [devilsadvocate.sol](https://github.com/wyattlovesgrapes) in March 2025*

A blender script that was designed for creating a collider for models which do not need a decimated collider and for packaging many models into a single parent object.

To use the script to package a single object:

1. use `select_mesh()` to get the currently selected mesh

2. use `hyperfy_mesh(<mesh_object>)` by passing a mesh object such as the one returned from `select_mesh()` to create a parent rigidbody node with mesh and collider child nodes.

To use the script to package multiple models into one parent rigidbody node:

1. use `build_package(<import_directory_name>, <export_directory_name>)` passing it the blender collection name containing models you'd like to package as the import variable, and the destination collection as the export variable.

Remember to export your final model with custom properties turned on.

```
import bpy

# --standard-blender-actions----------
# select mesh
def select_mesh():
    selected_mesh = bpy.context.view_layer.objects.active
    if selected_mesh and selected_mesh.type == 'MESH':
        print(selected_mesh)
        return selected_mesh
    else:
        print("Please select a mesh object.")

# duplicate mesh
def duplicate_mesh(selected_mesh, collection): 
    if selected_mesh and selected_mesh.type == 'MESH':
        duplicated_mesh = selected_mesh.copy()
        duplicated_mesh.data = selected_mesh.data.copy()
        # link the duplicated mesh to the current collection
        collection.objects.link(duplicated_mesh)
        return duplicated_mesh
    else:
        print("Please select a mesh object to duplicate.")

# rename mesh    
def rename_mesh(mesh_obj, new_name):
    if mesh_obj and mesh_obj.type == 'MESH':
        mesh_obj.name = new_name
        mesh_obj.data.name = new_name
        print(f"Object renamed to: {mesh_obj.name}")
        return mesh_obj
    else:
        print("Invalid mesh object provided.")

# remove all materials from mesh object
def remove_materials(mesh_obj):
    if mesh_obj and mesh_obj.type == 'MESH':
        mesh_obj.data.materials.clear()
        print(f"All materials removed from: {mesh_obj.name}")
    else:
        print("Invalid mesh object provided.")

# add custom string prop        
def add_prop(object, prop_name, prop_value):
    if object:
        object[prop_name] = prop_value
        print(f"Added property '{prop_name}': '{prop_value}' to {object.name}")
    else:
        print("Invalid mesh object provided.")        

# parent child to parent mesh
def parent_object(parent_obj, child_obj):
    if parent_obj and child_obj:
        child_obj.parent = parent_obj
        print(f"{child_obj.name} is now parented to {parent_obj.name}")
    else:
        print("Invalid parent or child object provided.")
        
# move mesh obj x,y to 0,0
def move_to_origin_xy(mesh_obj):
    if mesh_obj and mesh_obj.type == 'MESH':
        mesh_obj.location.x = 0
        mesh_obj.location.y = 0
        print(f"{mesh_obj.name} moved to (0,0,{mesh_obj.location.z})")
    else:
        print("Invalid mesh object provided.")

# get collection by name or create if it doesnt exist
def get_collection_by_name(collection_name):
    collection = bpy.data.collections.get(collection_name)
    if not collection:
        collection = bpy.data.collections.new(collection_name)
        bpy.context.scene.collection.children.link(collection)
    return collection
        
# --hyperfy-functions---------
# create empty axis object as hyp parent
def create_parent_axis(axis_name, collection):
    
    name = axis_name + "_rb"
    empty_obj = bpy.data.objects.new(name, None)
    collection.objects.link(empty_obj)
    empty_obj.empty_display_type = 'ARROWS'
    print(f"Empty axis object '{name}' created.")
    return empty_obj


# package single mesh
def hyperfy_mesh(mesh):
    
    # --get-mesh-data-----------
    # get the mesh name
    mesh_name = mesh.name
    collection = get_collection_by_name('export')


    # --collider-----------
    # duplicate the selected mesh to make collider
    collider = duplicate_mesh(mesh, collection)
    
    # move to origin
    move_to_origin_xy(collider)
    
    # rename the collider
    collider_name = mesh_name + "_collider"
    rename_mesh(collider, collider_name)

    # remove materials from mesh
    remove_materials(collider)

    # --sub-mesh----------
    # duplicate mesh again
    sub_mesh = duplicate_mesh(mesh, collection)
    # move to origin
    move_to_origin_xy(sub_mesh)

    # rename the sub mesh
    sub_mesh_name = mesh_name + "_mesh"
    rename_mesh(sub_mesh, sub_mesh_name)

    # --parent-axis----------
    # create empty axis parent object
    parent_axis = create_parent_axis(mesh_name, collection)

    # --props----------
    add_prop(parent_axis, 'node', 'rigidbody')
    add_prop(collider, 'node', 'collider')
    add_prop(sub_mesh, 'node', 'Mesh')

    # --parenting----------
    parent_object(parent_axis, sub_mesh)
    parent_object(parent_axis, collider)
    
    return parent_axis
    

def build_package(import_collection_name, export_collection_name):
    # get collection by name
    im_collection = get_collection_by_name(import_collection_name)
    ex_collection = get_collection_by_name(export_collection_name)
    parent_axis = create_parent_axis('packaged-parent', ex_collection)
    
    if im_collection:
        for obj in im_collection.objects:
            if obj.type == 'MESH':
                print('something')
                ground_tile = hyperfy_mesh(obj)
                parent_object(parent_axis, ground_tile)
                
            else:
                print(f"{obj.name} is not a mesh object.")
    else:
        print(f"Collection '{im_collection_name}' not found.")
   
# --execution----------- 

mesh = select_mesh()
hyperfy_mesh(mesh)

#build_package('layout','export')
```

### Hyperfy Tools

Also check out [Hyperfy Tools - Blender Add-on](/guides/3d/blender/#hyperfy-tools)

---