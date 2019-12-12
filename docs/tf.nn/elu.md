Computes exponential linear:  `exp(features) - 1`  if < 0,  `features`  otherwise.

**别名** : [ `tf.compat.v1.nn.elu` ](/api_docs/python/tf/nn/elu), [ `tf.compat.v2.nn.elu` ](/api_docs/python/tf/nn/elu)

```
 tf.nn.elu(
    features,
    name=None
)
 
```

See [Fast and Accurate Deep Network Learning by Exponential Linear Units (ELUs)](http://arxiv.org/abs/1511.07289)

#### 参数：
- **`features`** : A  `Tensor` . Must be one of the following types:  `half` ,  `bfloat16` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `features` .

