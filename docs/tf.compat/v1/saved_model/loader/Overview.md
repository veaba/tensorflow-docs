Loader functionality for SavedModel with hermetic, language-neutral exports.

Load and restore capability for a SavedModel, which may include multiple metagraph defs. Each SavedModel is associated with a single checkpoint. Each metagraph def is saved with one or more tags, which are used to identify the exactmeta graph def to load.

The  `load`  operation requires the session in which to restore the graphdefinition and variables, the tags used to identify the meta graph def toload and the location of the SavedModel.

Upon a load, the subset of variables and assets supplied as part of the specificmeta graph def, will be restored into the supplied session. The values of thevariables though will correspond to the saved values from the first meta graphadded to the SavedModel using  `add_meta_graph_and_variables(...)`  in `builder.py` .

#### Typical usage:


```
 ...
builder = tf.compat.v1.saved_model.builder.SavedModelBuilder(export_dir)

with tf.compat.v1.Session(graph=tf.Graph()) as sess:
  ...
  builder.add_meta_graph_and_variables(sess,
                                       ["foo-tag"],
                                       signature_def_map=foo_signatures,
                                       assets_collection=foo_assets)
...

with tf.compat.v1.Session(graph=tf.Graph()) as sess:
  ...
  builder.add_meta_graph(["bar-tag", "baz-tag"],
                         assets_collection=bar_baz_assets)
...

builder.save()

...
with tf.compat.v1.Session(graph=tf.Graph()) as sess:
  tf.compat.v1.saved_model.loader.load(sess, ["foo-tag"], export_dir)
  ...

 
```

## Functions
[ `load(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/load): Loads the model from a SavedModel as specified by tags. (deprecated)

[ `maybe_saved_model_directory(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/saved_model/contains_saved_model): Checks whether the provided export directory could contain a SavedModel.

