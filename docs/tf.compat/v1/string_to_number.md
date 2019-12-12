将输入张量中的每个字符串转换为指定的数值类型。

```
 tf.compat.v1.string_to_number(
    string_tensor=None,
    out_type=tf.dtypes.float32,
    name=None,
    input=None
)
 
```

(Note that int32 overflow results in an error while float overflowresults in a rounded value.)

#### 参数：
- **`string_tensor`** : A  `Tensor`  of type  `string` .
- **`out_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.float32, tf.float64, tf.int32, tf.int64` . Defaults to [ `tf.float32` ](https://tensorflow.google.cn/api_docs/python/tf#float32).The numeric type to interpret each string in  `string_tensor`  as.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `out_type` .

