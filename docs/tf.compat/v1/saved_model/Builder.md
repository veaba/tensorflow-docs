## Class Builder
Builds the `SavedModel` protocol buffer and saves variables and assets.
### Aliases:
- Class `tf.compat.v1.saved_model.builder.SavedModelBuilder`
The `SavedModelBuilder` class provides functionality to build a `SavedModel` protocol buffer. Specifically, this allows multiple meta graphs to be saved as part of a single language-neutral `SavedModel`, while sharing variables and assets.
To build a SavedModel, the first meta graph must be saved with variables. Subsequent meta graphs will simply be saved with their graph definitions. If assets need to be saved and written or copied to disk, they can be provided when the meta graph def is added. If multiple meta graph defs are associated an asset of the same name, only the first version is retained.
Each meta graph added to the SavedModel must be annotated with tags. The tags provide a means to identify the specific meta graph to load and restore, along with the shared set of variables and assets.
Typical usage for the `SavedModelBuilder`:

```
 ...
builder = tf.compat.v1.saved_model.Builder(export_dir)

with tf.compat.v1.Session(graph=tf.Graph()) as sess:
  ...
  builder.add_meta_graph_and_variables(sess,
                                  ["foo-tag"],
                                  signature_def_map=foo_signatures,
                                  assets_collection=foo_assets)
...

with tf.compat.v1.Session(graph=tf.Graph()) as sess:
  ...
  builder.add_meta_graph(["bar-tag", "baz-tag"])
...

builder.save()
```
## __init__
View source

```
 __init__(export_dir)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### add_meta_graph
View source

```
 add_meta_graph(
    tags,
    signature_def_map=None,
    assets_collection=None,
    legacy_init_op=None,
    clear_devices=False,
    main_op=None,
    strip_default_attrs=False,
    saver=None
)
```
Adds the current meta graph to the SavedModel.
