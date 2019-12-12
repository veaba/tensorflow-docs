以间隔生成值。

**别名** : [ `tf.compat.v1.lin_space` ](/api_docs/python/tf/linspace), [ `tf.compat.v1.linspace` ](/api_docs/python/tf/linspace), [ `tf.compat.v2.linspace` ](/api_docs/python/tf/linspace)

```
 tf.linspace(
    start,
    stop,
    num,
    name=None
)
 
```

A sequence of  `num`  evenly-spaced values are generated beginning at  `start` .If  `num > 1` , the values in the sequence increase by  `stop - start / num - 1` ,so that the last one is exactly  `stop` .

#### 例如：


```
 tf.linspace(10.0,) => [ 10.0  11.0  12.0]
 
```

#### 参数：
- **`start`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `float32` ,  `float64` .0-D tensor. First entry in the range.
- **`stop`** : A  `Tensor` . Must have the same type as  `start` .0-D tensor. Last entry in the range.
- **`num`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .0-D tensor. Number of values to generate.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `start` .

