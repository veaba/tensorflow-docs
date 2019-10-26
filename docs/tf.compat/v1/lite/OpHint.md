## Class OpHint
A class that helps build tflite function invocations.
It allows you to take a bunch of TensorFlow ops and annotate the construction such that toco knows how to convert it to tflite. This embeds a pseudo function in a TensorFlow graph. This allows embedding high-level API usage information in a lower level TensorFlow implementation so that an alternative implementation can be substituted later.
Essentially, any "input" into this pseudo op is fed into an identity, and attributes are added to that input before being used by the constituent ops that make up the pseudo op. A similar process is done to any output that is to be exported from the current op.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L308-L346)


```
 __init__(
    function_name,
    level=1,
    children_inputs_mappings=None,
    **kwargs
)
```
Create a OpHint.
#### Args:
- function_name: Name of the function (the custom op name in tflite)
- level: OpHint level.
- children_inputs_mappings: Children OpHint inputs/outputs mapping. children_inputs_mappings should like below: "parent_first_child_input": [{"parent_input_index": num, "child_input_index": num}, ...] "parent_last_child_output": [{"parent_output_index": num, "child_output_index": num}, ...] "internal_children_input_output": [{"child_input_index": num, "child_output_index": num}, ...]
- **kwargs: Keyword arguments of any constant attributes for the function.
## Child Classes
[class OpHintArgumentTracker](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/lite/OpHint/OpHintArgumentTracker)

## Methods
### add_input
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L384-L404)


```
 add_input(
    *args,
    **kwargs
)
```
Add a wrapped input argument to the hint.
#### Args:
- *args: The input tensor.
- **kwargs: "name" label "tag" a tag to group multiple arguments that will be aggregated. I.e. a string like 'cool_input'. Basically multiple inputs can be added to the same hint for parallel operations that will eventually be combined. An example would be static_rnn which creates multiple copies of state or inputs. "aggregate" aggregation strategy that is valid only for tag non None. Acceptable values are OpHint.AGGREGATE_FIRST, OpHint.AGGREGATE_LAST, and OpHint.AGGREGATE_STACK. "index_override" The global index to use. This corresponds to the argument order in the final stub that will be generated.
#### Returns:
The wrapped input tensor.
### add_inputs
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L428-L444)


```
 add_inputs(
    *args,
    **kwargs
)
```
Add a sequence of inputs to the function invocation.
#### Args:
- *args: List of inputs to be converted (should be Tf.Tensor).
- **kwargs: This allows 'names' which should be a list of names.
#### Returns:
Wrapped inputs (identity standins that have additional metadata). These are also are also tf.Tensor's.
### add_output
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L406-L426)


```
 add_output(
    *args,
    **kwargs
)
```
Add a wrapped output argument to the hint.
#### Args:
- *args: The output tensor.
- **kwargs: "name" label "tag" a tag to group multiple arguments that will be aggregated. I.e. a string like 'cool_input'. Basically multiple inputs can be added to the same hint for parallel operations that will eventually be combined. An example would be static_rnn which creates multiple copies of state or inputs. "aggregate" aggregation strategy that is valid only for tag non None. Acceptable values are OpHint.AGGREGATE_FIRST, OpHint.AGGREGATE_LAST, and OpHint.AGGREGATE_STACK. "index_override" The global index to use. This corresponds to the argument order in the final stub that will be generated.
#### Returns:
The wrapped output tensor.
### add_outputs
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L446-L462)


```
 add_outputs(
    *args,
    **kwargs
)
```
Add a sequence of outputs to the function invocation.
#### Args:
- *args: List of outputs to be converted (should be tf.Tensor).
- **kwargs: See
#### Returns:
Wrapped outputs (identity standins that have additional metadata). These are also tf.Tensor's.
## Class Members
- AGGREGATE_FIRST = 'first'
- AGGREGATE_LAST = 'last'
- AGGREGATE_STACK = 'stack'
- CHILDREN_INPUTS_MAPPINGS = '_tflite_children_ophint_inputs_mapping'
- FUNCTION_AGGREGATE_ATTR = '_tflite_function_aggregate'
- FUNCTION_INPUT_INDEX_ATTR = '_tflite_function_input_index'
- FUNCTION_LEVEL_ATTR = '_tflite_ophint_level'
- FUNCTION_NAME_ATTR = '_tflite_function_name'
- FUNCTION_OUTPUT_INDEX_ATTR = '_tflite_function_output_index'
- FUNCTION_SORT_INDEX_ATTR = '_tflite_function_sort_index'
- FUNCTION_UUID_ATTR = '_tflite_function_uuid'
- TFLITE_INPUT_INDICES = '_tflite_input_indices'
