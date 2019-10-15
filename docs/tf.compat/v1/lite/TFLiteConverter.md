## Class TFLiteConverter

Convert a TensorFlow model into output_format.

This is used to convert from a TensorFlow GraphDef, SavedModel or tf.keras model into either a TFLite FlatBuffer or graph visualization.
#### Attributes:
- `inference_type`: Target data type of real-number arrays in the output file. Must be `{tf.float32, tf.uint8}`. If `optimzations` are provided, this parameter is ignored. (default tf.float32)
- `inference_input_type`: Target data type of real-number input arrays. Allows for a different type for input arrays. If an integer type is provided and `optimizations` are not used, `quantized_inputs_stats` must be provided. If `inference_type` is tf.uint8, signaling conversion to a fully quantized model from a quantization-aware trained input model, then `inference_input_type` defaults to tf.uint8. In all other cases, `inference_input_type` defaults to tf.float32. Must be `{tf.float32, tf.uint8, tf.int8}`
- `inference_output_type`: Target data type of real-number output arrays. Allows for a different type for output arrays. If `inference_type` is tf.uint8, signaling conversion to a fully quantized model from a quantization-aware trained output model, then `inference_output_type` defaults to tf.uint8. In all other cases, `inference_output_type` must be tf.float32, an error will be thrown otherwise. Must be `{tf.float32, tf.uint8, tf.int8}`
- `output_format`: Output file format. Currently must be `{TFLITE, GRAPHVIZ_DOT}`. (default TFLITE)
- `quantized_input_stats`: Dict of strings representing input tensor names mapped to tuple of floats representing the mean and standard deviation of the training data (e.g., {"foo" : (0., 1.)}). Only need if `inference_input_type` is `QUANTIZED_UINT8`. real_input_value = (quantized_input_value - mean_value) / std_dev_value. (default {})
- `default_ranges_stats`: Tuple of integers representing (min, max) range values for all arrays without a specified range. Intended for experimenting with quantization via "dummy quantization". (default None)
- `drop_control_dependency`: Boolean indicating whether to drop control dependencies silently. This is due to TFLite not supporting control dependencies. (default True)
- `reorder_across_fake_quant`: Boolean indicating whether to reorder FakeQuant nodes in unexpected locations. Used when the location of the FakeQuant nodes is preventing graph transformations necessary to convert the graph. Results in a graph that differs from the quantized training graph, potentially causing differing arithmetic behavior. (default False)
- `change_concat_input_ranges`: Boolean to change behavior of min/max ranges for inputs and outputs of the concat operator for quantized models. Changes the ranges of concat operator overlap when true. (default False)
- `allow_custom_ops`: Boolean indicating whether to allow custom operations. When false any unknown operation is an error. When true, custom ops are created for any op that is unknown. The developer will need to provide these to the TensorFlow Lite runtime with a custom resolver. (default False)
- `post_training_quantize`: `D``e``p`r`e`ca`t``e`d`.` Pl`e`as`e` s`p``e`c`i`fy [`O``p``t``i``m``i``z``e``.``D``E``F``A``U``L``T`] for `optimizations` `i`ns`t``e`ad`.` Bool`e`an `i`nd`i`ca`t``i`ng wh`e``t`h`e`r `t`o quan`t``i``z``e` `t`h`e` w`e``i`gh`t`s of `t`h`e` conv`e`r`t``e`d floa`t` `m`od`e`l`.` Mod`e`l s`i``z``e` w`i`ll b`e` r`e`duc`e`d and `t`h`e`r`e` w`i`ll b`e` la`t``e`ncy `i``m``p`rov`e``m``e`n`t`s (a`t` `t`h`e` cos`t` of accuracy)`.` (d`e`faul`t` `F`als`e`)
- `dump_graphviz_dir`: `F`ull f`i`l`e``p`a`t`h of fold`e`r `t`o du`m``p` `t`h`e` gra`p`hs a`t` var`i`ous s`t`ag`e`s of `p`roc`e`ss`i`ng Gra`p`hV`i``z` `.`do`t` f`i`l`e`s`.` Pr`e`f`e`rr`e`d ov`e`r --`output_format`=GR`A`PHVIZ_`D``O``T` `i`n ord`e`r `t`o k`e``e``p` `t`h`e` r`e`qu`i`r`e``m``e`n`t`s of `t`h`e` ou`t``p`u`t` f`i`l`e``.` (d`e`faul`t` Non`e`)
- `dump_graphviz_video`: Bool`e`an `i`nd`i`ca`t``i`ng wh`e``t`h`e`r `t`o du`m``p` `t`h`e` gra`p`h af`t``e`r `e`v`e`ry gra`p`h `t`ransfor`m`a`t``i`on`.` (d`e`faul`t` `F`als`e`)
- `t`arg`e``t`_o`p`s: `D``e``p`r`e`ca`t``e`d`.` Pl`e`as`e` s`p``e`c`i`fy `t`arg`e``t`_s`p``e`c`.`su`p``p`or`t``e`d_o`p`s `i`ns`t``e`ad`.` S`e``t` of `O``p`sS`e``t` o`p``t``i`ons `i`nd`i`ca`t``i`ng wh`i`ch conv`e`r`t``e`r `t`o us`e``.` (d`e`faul`t` s`e``t`([`O``p`sS`e``t``.``T``F``L`I`T``E`_B`U`I`L``T`INS]))
- `t`arg`e``t`_s`p``e`c: `E`x`p``e`r`i``m``e`n`t`al flag, subj`e`c`t` `t`o chang`e``.` S`p``e`c`i`f`i`ca`t``i`on of `t`arg`e``t` d`e`v`i`c`e``.`
- `optimizations`: `E`x`p``e`r`i``m``e`n`t`al flag, subj`e`c`t` `t`o chang`e``.` `A` l`i`s`t` of `optimizations` `t`o a`p``p`ly wh`e`n conv`e`r`t``i`ng `t`h`e` `m`od`e`l`.` `E``.`g`.` [`O``p``t``i``m``i``z``e``.``D``E``F``A``U``L``T`]
- `representative_dataset`: `A` r`e``p`r`e`s`e`n`t`a`t``i`v`e` da`t`as`e``t` `t`ha`t` can b`e` us`e`d `t`o g`e`n`e`ra`t``e` `i`n`p`u`t` and ou`t``p`u`t` sa`m``p`l`e`s for `t`h`e` `m`od`e`l`.` `T`h`e` conv`e`r`t``e`r can us`e` `t`h`e` da`t`as`e``t` `t`o `e`valua`t``e` d`i`ff`e`r`e`n`t` `optimizations``.`
- `e`x`p``e`r`i``m``e`n`t`al_`e`nabl`e`_`m`l`i`r_conv`e`r`t``e`r: `E`x`p``e`r`i``m``e`n`t`al flag, subj`e`c`t` `t`o chang`e``.` `E`nabl`e`s `t`h`e` M`L`IR conv`e`r`t``e`r `i`ns`t``e`ad of `t`h`e` `T``O`C`O` conv`e`r`t``e`r`.`
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
## __init__
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
- `graph_def`: Frozen TensorFlow GraphDef.
- `input_tensors`: List of input tensors. Type and shape are computed using `foo.shape` and `foo.dtype`.
- `output_tensors`: List of output tensors (only .name is used from this).
- `input_arrays_with_shape`: Tuple of strings representing input tensor names and list of integers representing input shapes (e.g., [("foo" : [1, 16, 16, 3])]). Use only when graph cannot be loaded into TensorFlow and when `input_tensors` and `output_tensors` are None. (default None)
- `output_arrays`: List of output tensors to freeze graph with. Use only when graph cannot be loaded into TensorFlow and when `input_tensors` and `output_tensors` are None. (default None)
- `experimental_debug_info_func`: An experimental function to retrieve the graph debug info for a set of nodes from the `graph_def`.
#### Raises:
- `ValueError`: Invalid arguments.
## Methods
### convert
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L871-L995)


```
 convert()
```

Converts a TensorFlow GraphDef based on instance variables.
#### Returns:

The converted data in serialized format. Either a TFLite Flatbuffer or a Graphviz graph depending on value in output_format.
#### Raises:
- `ValueError`: Input shape is not specified. None value for dimension in input_tensor.
### from_frozen_graph
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
- `graph_def_file`: Full filepath of file containing frozen GraphDef.
- `input_arrays`: List of input tensors to freeze graph with.
- `output_arrays`: List of output tensors to freeze graph with.
- `input_shapes`: Dict of strings representing input tensor names to list of integers representing input shapes (e.g., {"foo" : [1, 16, 16, 3]}). Automatically determined when input shapes is None (e.g., {"foo" : None}). (default None)
#### Returns:

TFLiteConverter class.
#### Raises:
- `IOError`: File not found. Unable to parse input file.
- `ValueError`: The graph is not frozen. input_arrays or output_arrays contains an invalid tensor name. input_shapes is not correctly defined when required
### from_keras_model_file
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
- `model_file`: Full filepath of HDF5 file containing the tf.keras model.
- `input_arrays`: List of input tensors to freeze graph with. Uses input arrays from SignatureDef when none are provided. (default None)
- `input_shapes`: Dict of strings representing input tensor names to list of integers representing input shapes (e.g., {"foo" : [1, 16, 16, 3]}). Automatically determined when input shapes is None (e.g., {"foo" : None}). (default None)
- `output_arrays`: List of output tensors to freeze graph with. Uses output arrays from SignatureDef when none are provided. (default None)
- `custom_objects`: Dict mapping names (strings) to custom classes or functions to be considered during model deserialization. (default None)
#### Returns:

TFLiteConverter class.
### from_saved_model
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
- `saved_model_dir`: SavedModel directory to convert.
- `input_arrays`: List of input tensors to freeze graph with. Uses input arrays from SignatureDef when none are provided. (default None)
- `input_shapes`: Dict of strings representing input tensor names to list of integers representing input shapes (e.g., {"foo" : [1, 16, 16, 3]}). Automatically determined when input shapes is None (e.g., {"foo" : None}). (default None)
- `output_arrays`: List of output tensors to freeze graph with. Uses output arrays from SignatureDef when none are provided. (default None)
- `tag_set`: Set of tags identifying the MetaGraphDef within the SavedModel to analyze. All tags in the tag set must be present. (default set("serve"))
- `signature_key`: Key identifying SignatureDef containing inputs and outputs. (default DEFAULT_SERVING_SIGNATURE_DEF_KEY)
#### Returns:

TFLiteConverter class.
### from_session
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
- `sess`: TensorFlow Session.
- `input_tensors`: List of input tensors. Type and shape are computed using `foo.shape` and `foo.dtype`.
- `output_tensors`: List of output tensors (only .name is used from this).
#### Returns:

TFLiteConverter class.
### get_input_arrays
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L997-L1006)


```
 get_input_arrays()
```

Returns a list of the names of the input tensors.
#### Returns:

List of strings.
