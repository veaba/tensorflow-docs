## Class OpHint
A class that helps build tflite function invocations.
It allows you to take a bunch of TensorFlow ops and annotate the construction such that toco knows how to convert it to tflite. This embeds a pseudo function in a TensorFlow graph. This allows embedding high-level API usage information in a lower level TensorFlow implementation so that an alternative implementation can be substituted later.
Essentially, any "input" into this pseudo op is fed into an identity, and attributes are added to that input before being used by the constituent ops that make up the pseudo op. A similar process is done to any output that is to be exported from the current op.
## __init__
View source

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
- `function_name`: Name of the function (the custom op name in tflite)
- `level`: OpHint `level`.
- `children_inputs_mappings`: Children OpHint inputs/outputs mapping. `children_inputs_mappings` should like below: "parent_first_child_input": [{"parent_input_index": num, "child_input_index": num}, ...] "parent_last_child_output": [{"parent_output_index": num, "child_output_index": num}, ...] "internal_children_input_output": [{"child_input_index": num, "child_output_index": num}, ...]
## Child Classes
`class OpHintArgumentTracker`
## Methods
### add_input
View source

```
 add_input(
    *args,
    **kwargs
)
```
Add a wrapped input argument to the hint.
#### Args:
#### Returns:
The wrapped input tensor.
### add_inputs
View source

```
 add_inputs(
    *args,
    **kwargs
)
```
Add a sequence of inputs to the function invocation.
#### Args:
#### Returns:
Wrapped inputs (identity standins that have additional metadata). These are also are also tf.Tensor's.
### add_output
View source

```
 add_output(
    *args,
    **kwargs
)
```
Add a wrapped output argument to the hint.
#### Args:
#### Returns:
The wrapped output tensor.
### add_outputs
View source

```
 add_outputs(
    *args,
    **kwargs
)
```
Add a sequence of outputs to the function invocation.
#### Args:
#### Returns:
Wrapped outputs (identity standins that have additional metadata). These are also tf.Tensor's.
## Class Members
- `AGGREGATE_FIRST = 'first'`
- `AGGREGATE_LAST = 'last'`
- `AGGREGATE_STACK = 'stack'`
- `CHILDREN_INPUTS_MAPPINGS = '_tflite_children_ophint_inputs_mapping'`
- `FUNCTION_AGGREGATE_ATTR = '_tflite_function_aggregate'`
- `FUNCTION_INPUT_INDEX_ATTR = '_tflite_function_input_index'`
- `FUNCTION_LEVEL_ATTR = '_tflite_ophint_level'`
- `FUNCTION_NAME_ATTR = '_tflite_function_name'`
- `FUNCTION_OUTPUT_INDEX_ATTR = '_tflite_function_output_index'`
- `FUNCTION_SORT_INDEX_ATTR = '_tflite_function_sort_index'`
- `FUNCTION_UUID_ATTR = '_tflite_function_uuid'`
- `TFLITE_INPUT_INDICES = '_tflite_input_indices'`
