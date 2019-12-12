

## Class  `OpHint` 
帮助构建tflite函数调用的类。

It allows you to take a bunch of TensorFlow ops and annotate the constructionsuch that toco knows how to convert it to tflite. This embeds a pseudofunction in a TensorFlow graph. This allows embedding high-level API usageinformation in a lower level TensorFlow implementation so that an alternativeimplementation can be substituted later.

Essentially, any "input" into this pseudo op is fed into an identity, andattributes are added to that input before being used by the constituent opsthat make up the pseudo op. A similar process is done to any output thatis to be exported from the current op.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L308-L346)

```
 __init__(
    function_name,
    level=1,
    children_inputs_mappings=None,
    **kwargs
)
 
```

创造一个蛇夫。

#### 参数：
- **`function_name`** : Name of the function (the custom op name in tflite)
- **`level`** : OpHint level.
- **`children_inputs_mappings`** : Children OpHint inputs/outputs mapping.children_inputs_mappings should like below:"parent_first_child_input":  [{"parent_input_index": num, "child_input_index": num}, ...]"parent_last_child_output":  [{"parent_output_index": num, "child_output_index": num}, ...]"internal_children_input_output":  [{"child_input_index": num, "child_output_index": num}, ...]
- **`**kwargs`** : Keyword arguments of any constant attributes for the function.


## 子类
[ `class OpHintArgumentTracker` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/lite/OpHint/OpHintArgumentTracker)

## 方法


###  `add_input` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L384-L404)

```
 add_input(
    *args,
    **kwargs
)
 
```

向提示中添加包装输入参数。

#### 参数：
- **`*args`** : The input tensor.
- **`**kwargs`** :   "name" label"tag" a tag to group multiple arguments that will be aggregated. I.e.a string like 'cool_input'. Basically multiple inputs can be addedto the same hint for parallel operations that will eventually becombined. An example would be static_rnn which creates multiple copiesof state or inputs."aggregate" aggregation strategy that is valid only for tag non None.Acceptable values are OpHint.AGGREGATE_FIRST, OpHint.AGGREGATE_LAST,and OpHint.AGGREGATE_STACK."index_override" The global index to use. This corresponds to theargument order in the final stub that will be generated.


#### 返回：
包装输入张量。

###  `add_inputs` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L428-L444)

```
 add_inputs(
    *args,
    **kwargs
)
 
```

向函数调用添加一系列输入。

#### 参数：
- **`*args`** : List of inputs to be converted (should be Tf.Tensor).
- **`**kwargs`** : This allows 'names' which should be a list of names.


#### 返回：
Wrapped inputs (identity standins that have additional metadata). Theseare also are also tf.Tensor's.

###  `add_output` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L406-L426)

```
 add_output(
    *args,
    **kwargs
)
 
```

向提示中添加包装输出参数。

#### 参数：
- **`*args`** : The output tensor.
- **`**kwargs`** :   "name" label"tag" a tag to group multiple arguments that will be aggregated. I.e.a string like 'cool_input'. Basically multiple inputs can be addedto the same hint for parallel operations that will eventually becombined. An example would be static_rnn which creates multiple copiesof state or inputs."aggregate" aggregation strategy that is valid only for tag non None.Acceptable values are OpHint.AGGREGATE_FIRST, OpHint.AGGREGATE_LAST,and OpHint.AGGREGATE_STACK."index_override" The global index to use. This corresponds to theargument order in the final stub that will be generated.


#### 返回：
包装输出张量。

###  `add_outputs` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L446-L462)

```
 add_outputs(
    *args,
    **kwargs
)
 
```

向函数调用添加一系列输出。

#### 参数：
- **`*args`** : List of outputs to be converted (should be tf.Tensor).
- **`**kwargs`** : See


#### 返回：
Wrapped outputs (identity standins that have additional metadata). Theseare also tf.Tensor's.

## Class 成员
-  `AGGREGATE_FIRST = 'first'`  []()
-  `AGGREGATE_LAST = 'last'`  []()
-  `AGGREGATE_STACK = 'stack'`  []()
-  `CHILDREN_INPUTS_MAPPINGS = '_tflite_children_ophint_inputs_mapping'`  []()
-  `FUNCTION_AGGREGATE_ATTR = '_tflite_function_aggregate'`  []()
-  `FUNCTION_INPUT_INDEX_ATTR = '_tflite_function_input_index'`  []()
-  `FUNCTION_LEVEL_ATTR = '_tflite_ophint_level'`  []()
-  `FUNCTION_NAME_ATTR = '_tflite_function_name'`  []()
-  `FUNCTION_OUTPUT_INDEX_ATTR = '_tflite_function_output_index'`  []()
-  `FUNCTION_SORT_INDEX_ATTR = '_tflite_function_sort_index'`  []()
-  `FUNCTION_UUID_ATTR = '_tflite_function_uuid'`  []()
-  `TFLITE_INPUT_INDICES = '_tflite_input_indices'`  []()
