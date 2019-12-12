

## Class  `OpHintArgumentTracker` 
概念上跟踪“ophint函数”参数的索引。

The inputs and arguments of these functions both use an instanceof the class so they can have independent numbering.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L165-L198)

```
 __init__(
    function_name,
    unique_function_id,
    node_name_prefix,
    attr_name,
    level=1,
    children_inputs_mappings=None
)
 
```

初始化ophint参数。

#### 参数：
- **`function_name`** : Name of the function that this tracks arguments for.
- **`unique_function_id`** : UUID of function that this tracks arguments for.
- **`node_name_prefix`** : How identities that are created are named.
- **`attr_name`** : Name of attribute to use to store the index for this hint.i.e. FUNCTION_INPUT_INDEX or FUNCTION_OUTPUT_INDEX
- **`level`** : Hierarchical level of the Ophint node, a number.
- **`children_inputs_mappings`** : Inputs/Outputs mapping for children hints.


## 方法


###  `add` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/op_hint.py#L225-L306)

```
 add(
    arg,
    tag=None,
    name=None,
    aggregate=None,
    index_override=None
)
 
```

返回输入张量的换行张量作为参数。

#### 参数：
- **`arg`** : A TensorFlow tensor that should be considered an argument.
- **`tag`** : String tag to identify arguments that should be packed.
- **`name`** : Name of argument. This is included in the Identity hint op names.
- **`aggregate`** : Strategy to aggregate.Acceptable values are OpHint.AGGREGATE_FIRST, OpHint.AGGREGATE_LAST,and OpHint.AGGREGATE_STACK.Note, aggregate is only valid if tag is specified.
- **`index_override`** : Specify what input/output index should this be in thefinal stub. i.e. add(arg0, index=1); add(arg1, index=0) will make thefinal stub be as stub_func(inputs[arg1, arg0], outputs=[]) rather thanthe default call order based ordering.


#### 返回：
表示包装参数的张量。

#### 加薪：
- **`ValueError`** : When indices are not consistent.
