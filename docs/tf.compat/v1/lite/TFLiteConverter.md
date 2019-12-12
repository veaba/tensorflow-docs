

## Class  `TFLiteConverter` 
Convert a TensorFlow model into  `output_format` .

This is used to convert from a TensorFlow GraphDef, SavedModel or tf.kerasmodel into either a TFLite FlatBuffer or graph visualization.

#### Attributes:
- **`inference_type`** : Target data type of real-number arrays in the output file.Must be  `{tf.float32, tf.uint8}` . If  `optimzations`  are provided, thisparameter is ignored. (default tf.float32)
- **`inference_input_type`** : Target data type of real-number input arrays. Allowsfor a different type for input arrays.If an integer type is provided and  `optimizations`  are not used, `quantized_inputs_stats`  must be provided.If  `inference_type`  is tf.uint8, signaling conversion to a fully quantizedmodel from a quantization-aware trained input model, then `inference_input_type`  defaults to tf.uint8.In all other cases,  `inference_input_type`  defaults to tf.float32.Must be  `{tf.float32, tf.uint8, tf.int8}` 
- **`inference_output_type`** : Target data type of real-number output arrays. Allowsfor a different type for output arrays.If  `inference_type`  is tf.uint8, signaling conversion to a fully quantizedmodel from a quantization-aware trained output model, then `inference_output_type`  defaults to tf.uint8.In all other cases,  `inference_output_type`  must be tf.float32, an errorwill be thrown otherwise.Must be  `{tf.float32, tf.uint8, tf.int8}` 
- **`output_format`** : Output file format. Currently must be  `{TFLITE,GRAPHVIZ_DOT}` . (default TFLITE)
- **`quantized_input_stats`** : Dict of strings representing input tensor namesmapped to tuple of floats representing the mean and standard deviationof the training data (e.g., {"foo" : (0., 1.)}). Only need if `inference_input_type`  is  `QUANTIZED_UINT8` .real_input_value = (quantized_input_value - mean_value) / std_dev_value.(default {})
- **`default_ranges_stats`** : Tuple of integers representing (min, max) range valuesfor all arrays without a specified range. Intended for experimenting withquantization via "dummy quantization". (default None)
- **`drop_control_dependency`** : Boolean indicating whether to drop controldependencies silently. This is due to TFLite not supporting controldependencies. (default True)
- **`reorder_across_fake_quant`** : Boolean indicating whether to reorder FakeQuantnodes in unexpected locations. Used when the location of the FakeQuantnodes is preventing graph transformations necessary to convert the graph.Results in a graph that differs from the quantized training graph,potentially causing differing arithmetic behavior. (default False)
- **`change_concat_input_ranges`** : Boolean to change behavior of min/max ranges forinputs and outputs of the concat operator for quantized models. Changesthe ranges of concat operator overlap when true. (default False)
- **`allow_custom_ops`** : Boolean indicating whether to allow custom operations.When false any unknown operation is an error. When true, custom ops arecreated for any op that is unknown. The developer will need to providethese to the TensorFlow Lite runtime with a custom resolver.(default False)
- **`post_training_quantize`** : Deprecated. Please specify  `[Optimize.DEFAULT]`  for `optimizations`  instead. Boolean indicating whether to quantize theweights of the converted float model.  Model size will be reduced andthere will be latency improvements (at the cost of accuracy).(default False)
- **`dump_graphviz_dir`** : Full filepath of folder to dump the graphs at variousstages of processing GraphViz .dot files. Preferred over--output_format=GRAPHVIZ_DOT in order to keep the requirements of theoutput file. (default None)
- **`dump_graphviz_video`** : Boolean indicating whether to dump the graph afterevery graph transformation. (default False)
- **`target_ops`** : Deprecated. Please specify  `target_spec.supported_ops`  instead.Set of OpsSet options indicating which converter to use.(default set([OpsSet.TFLITE_BUILTINS]))
- **`target_spec`** : Experimental flag, subject to change. Specification of targetdevice.
- **`optimizations`** : Experimental flag, subject to change. A list of optimizationsto apply when converting the model. E.g.  `[Optimize.DEFAULT]` 
- **`representative_dataset`** : A representative dataset that can be used togenerate input and output samples for the model. The converter can usethe dataset to evaluate different optimizations.
- **`experimental_enable_mlir_converter`** : Experimental flag, subject to change.Enables the MLIR converter instead of the TOCO converter.


#### Example usage:


```
 # Converting a GraphDef from session.
converter = lite.TFLiteConverter.from_session(sess, in_tensors, out_tensors)
tflite_model = converter.convert()
open("converted_model.tflite", "wb").write(tflite_model)

# Converting a GraphDef from file.
converter = lite.TFLiteConverter.from_frozen_graph(
  graph_def_file, input_arrays, output_arrays)
tflite_model = converter.convert()
open("converted_model.tflite", "wb").write(tflite_model)

# Converting a SavedModel.
converter = lite.TFLiteConverter.from_saved_model(saved_model_dir)
tflite_model = converter.convert()
open("converted_model.tflite", "wb").write(tflite_model)

# Converting a tf.keras model.
converter = lite.TFLiteConverter.from_keras_model_file(keras_model)
tflite_model = converter.convert()
open("converted_model.tflite", "wb").write(tflite_model)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L560-L613)

```
 __init__(
    graph_def,
    input_tensors,
    output_tensors,
    input_arrays_with_shape=None,
    output_arrays=None,
    experimental_debug_info_func=None
)
 
```

Constructor for TFLiteConverter.

#### Args:
- **`graph_def`** : Frozen TensorFlow GraphDef.
- **`input_tensors`** : List of input tensors. Type and shape are computed using `foo.shape`  and  `foo.dtype` .
- **`output_tensors`** : List of output tensors (only .name is used from this).
- **`input_arrays_with_shape`** : Tuple of strings representing input tensor namesand list of integers representing input shapes(e.g., [("foo" : [1, 16, 16, 3])]). Use only when graph cannot be loadedinto TensorFlow and when  `input_tensors`  and  `output_tensors`  areNone. (default None)
- **`output_arrays`** : List of output tensors to freeze graph with. Use only whengraph cannot be loaded into TensorFlow and when  `input_tensors`  and `output_tensors`  are None. (default None)
- **`experimental_debug_info_func`** : An experimental function to retrieve thegraph debug info for a set of nodes from the  `graph_def` .


#### Raises:
- **`ValueError`** : Invalid arguments.


## Methods


###  `convert` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L871-L995)

```
 convert()
 
```

Converts a TensorFlow GraphDef based on instance variables.

#### Returns:
The converted data in serialized format. Either a TFLite Flatbuffer or aGraphviz graph depending on value in  `output_format` .

#### Raises:
- **`ValueError`** :   Input shape is not specified.None value for dimension in input_tensor.


###  `from_frozen_graph` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L635-L726)

```
 @classmethod
from_frozen_graph(
    cls,
    graph_def_file,
    input_arrays,
    output_arrays,
    input_shapes=None
)
 
```

Creates a TFLiteConverter class from a file containing a frozen GraphDef.

#### Args:
- **`graph_def_file`** : Full filepath of file containing frozen GraphDef.
- **`input_arrays`** : List of input tensors to freeze graph with.
- **`output_arrays`** : List of output tensors to freeze graph with.
- **`input_shapes`** : Dict of strings representing input tensor names to list ofintegers representing input shapes (e.g., {"foo" : [1, 16, 16, 3]}).Automatically determined when input shapes is None (e.g., {"foo" :None}). (default None)


#### Returns:
TFLiteConverter class.

#### Raises:
- **`IOError`** :   File not found.Unable to parse input file.
- **`ValueError`** :   The graph is not frozen.input_arrays or output_arrays contains an invalid tensor name.input_shapes is not correctly defined when required


###  `from_keras_model_file` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L769-L840)

```
 @classmethod
from_keras_model_file(
    cls,
    model_file,
    input_arrays=None,
    input_shapes=None,
    output_arrays=None,
    custom_objects=None
)
 
```

Creates a TFLiteConverter class from a tf.keras model file.

#### Args:
- **`model_file`** : Full filepath of HDF5 file containing the tf.keras model.
- **`input_arrays`** : List of input tensors to freeze graph with. Uses inputarrays from SignatureDef when none are provided. (default None)
- **`input_shapes`** : Dict of strings representing input tensor names to list ofintegers representing input shapes (e.g., {"foo" : [1, 16, 16, 3]}).Automatically determined when input shapes is None (e.g., {"foo" :None}). (default None)
- **`output_arrays`** : List of output tensors to freeze graph with. Uses outputarrays from SignatureDef when none are provided. (default None)
- **`custom_objects`** : Dict mapping names (strings) to custom classes orfunctions to be considered during model deserialization. (default None)


#### Returns:
TFLiteConverter class.

###  `from_saved_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L728-L767)

```
 @classmethod
from_saved_model(
    cls,
    saved_model_dir,
    input_arrays=None,
    input_shapes=None,
    output_arrays=None,
    tag_set=None,
    signature_key=None
)
 
```

Creates a TFLiteConverter class from a SavedModel.

#### Args:
- **`saved_model_dir`** : SavedModel directory to convert.
- **`input_arrays`** : List of input tensors to freeze graph with. Uses inputarrays from SignatureDef when none are provided. (default None)
- **`input_shapes`** : Dict of strings representing input tensor names to list ofintegers representing input shapes (e.g., {"foo" : [1, 16, 16, 3]}).Automatically determined when input shapes is None (e.g., {"foo" :None}). (default None)
- **`output_arrays`** : List of output tensors to freeze graph with. Uses outputarrays from SignatureDef when none are provided. (default None)
- **`tag_set`** : Set of tags identifying the MetaGraphDef within the SavedModel toanalyze. All tags in the tag set must be present. (default set("serve"))
- **`signature_key`** : Key identifying SignatureDef containing inputs and outputs.(default DEFAULT_SERVING_SIGNATURE_DEF_KEY)


#### Returns:
TFLiteConverter class.

###  `from_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L615-L633)

```
 @classmethod
from_session(
    cls,
    sess,
    input_tensors,
    output_tensors
)
 
```

Creates a TFLiteConverter class from a TensorFlow Session.

#### Args:
- **`sess`** : TensorFlow Session.
- **`input_tensors`** : List of input tensors. Type and shape are computed using `foo.shape`  and  `foo.dtype` .
- **`output_tensors`** : List of output tensors (only .name is used from this).


#### Returns:
TFLiteConverter class.

###  `get_input_arrays` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L997-L1006)

```
 get_input_arrays()
 
```

Returns a list of the names of the input tensors.

#### Returns:
List of strings.

