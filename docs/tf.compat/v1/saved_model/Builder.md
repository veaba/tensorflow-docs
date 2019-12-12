

## Class  `Builder` 
Builds the  `SavedModel`  protocol buffer and saves variables and assets.

The  `SavedModelBuilder`  class provides functionality to build a  `SavedModel` protocol buffer. Specifically, this allows multiple meta graphs to be saved aspart of a single language-neutral  `SavedModel` , while sharing variables andassets.

To build a SavedModel, the first meta graph must be saved with variables.Subsequent meta graphs will simply be saved with their graph definitions. Ifassets need to be saved and written or copied to disk, they can be providedwhen the meta graph def is added. If multiple meta graph defs are associatedan asset of the same name, only the first version is retained.

Each meta graph added to the SavedModel must be annotated with tags. The tagsprovide a means to identify the specific meta graph to load and restore, alongwith the shared set of variables and assets.

Typical usage for the  `SavedModelBuilder` :

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


**Note:**  This function will only be available through the v1 compatibilitylibrary as tf.compat.v1.saved_model.builder.SavedModelBuilder ortf.compat.v1.saved_model.Builder. Tensorflow 2.0 will introduce a newobject-based method of creating SavedModels.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/builder_impl.py#L432-L433)

```
 __init__(export_dir)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Methods


###  `add_meta_graph` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/builder_impl.py#L509-L551)

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

Creates a Saver in the current scope and uses the Saver to export the metagraph def. Invoking this API requires the  `add_meta_graph_and_variables()` API to have been invoked before.

#### Args:
- **`tags`** : The set of tags to annotate the meta graph def with.
- **`signature_def_map`** : The map of signature defs to be added to the meta graphdef.
- **`assets_collection`** : Assets to be saved with SavedModel. Notethat this list should be a subset of the assets saved as part ofthe first meta graph in the SavedModel.
- **`clear_devices`** : Set to true if the device info on the default graph shouldbe cleared.
- **`init_op`** : Op or group of ops to execute when the graph is loaded. Notethat when the init_op is specified it is run after the restore op atload-time.
- **`train_op`** : Op or group of opts that trains the model when run. This willnot be run automatically when the graph is loaded, instead saved ina SignatureDef accessible through the exported MetaGraph.
- **`saver`** : An instance of tf.compat.v1.train.Saver that will be used to exportthe metagraph. If None, a sharded Saver that restores all variables willbe used.


#### Raises:
- **`AssertionError`** : If the variables for the SavedModel have not been savedyet, or if the graph already contains one or more legacy init ops.


###  `add_meta_graph_and_variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/builder_impl.py#L553-L611)

```
 add_meta_graph_and_variables(
    sess,
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

Adds the current meta graph to the SavedModel and saves variables.

Creates a Saver to save the variables from the provided session. Exports thecorresponding meta graph def. This function assumes that the variables to besaved have been initialized. For a given  `SavedModelBuilder` , this API mustbe called exactly once and for the first meta graph to save. For subsequentmeta graph defs to be added, the  `add_meta_graph()`  API must be used.

#### Args:
- **`sess`** : The TensorFlow session from which to save the meta graph andvariables.
- **`tags`** : The set of tags with which to save the meta graph.
- **`signature_def_map`** : The map of signature def map to add to the meta graphdef.
- **`assets_collection`** : Assets to be saved with SavedModel.
- **`clear_devices`** : Set to true if the device info on the default graph shouldbe cleared.
- **`init_op`** : Op or group of ops to execute when the graph is loaded. Notethat when the init_op is specified it is run after the restore op atload-time.
- **`train_op`** : Op or group of ops that trains the model when run. This willnot be run automatically when the graph is loaded, instead saved ina SignatureDef accessible through the exported MetaGraph.
- **`strip_default_attrs`** : Boolean. If  `True` , default-valued attributes will beremoved from the NodeDefs. For a detailed guide, see[Stripping Default-Valued Attributes](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md#stripping-default-valued-attributes).
- **`saver`** : An instance of tf.compat.v1.train.Saver that will be used to export themetagraph and save variables. If None, a sharded Saver that restoresall variables will be used.


###  `save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/builder_impl.py#L392-L424)

```
 save(as_text=False)
 
```

Writes a  `SavedModel`  protocol buffer to disk.

The function writes the SavedModel protocol buffer to the export directoryin serialized format.

#### Args:
- **`as_text`** : Writes the SavedModel protocol buffer in text format todisk. Protocol buffers in text format are useful for debugging, butparsing fails when it encounters an unknown field and so is not forwardcompatible. This means changes to TensorFlow may prevent deployment ofnew text format SavedModels to existing serving binaries. Do not deploy `as_text`  SavedModels to production.


#### Returns:
The path to which the SavedModel protocol buffer was written.

