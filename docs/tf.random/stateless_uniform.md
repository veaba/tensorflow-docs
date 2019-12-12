从均匀分布中输出确定的伪随机值。

**别名** : [ `tf.compat.v1.random.stateless_uniform` ](/api_docs/python/tf/random/stateless_uniform), [ `tf.compat.v2.random.stateless_uniform` ](/api_docs/python/tf/random/stateless_uniform)

```
 tf.random.stateless_uniform(
    shape,
    seed,
    minval=0,
    maxval=None,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

This is a stateless version of [ `tf.random.uniform` ](https://tensorflow.google.cn/api_docs/python/tf/random/uniform): if run twice with thesame seeds, it will produce the same pseudorandom numbers.  The output isconsistent across multiple runs on the same hardware (and between CPUand GPU), but may change between versions of TensorFlow or on non-CPU/GPUhardware.

The generated values follow a uniform distribution in the range `[minval, maxval)` . The lower bound  `minval`  is included in the range, whilethe upper bound  `maxval`  is excluded.

For floats, the default range is  `[0, 1)` .  For ints, at least  `maxval`  mustbe specified explicitly.

In the integer case, the random integers are slightly biased unless `maxval - minval`  is an exact power of two.  The bias is small for values of `maxval - minval`  significantly smaller than the range of the output (either `2**32`  or  `2**64` ).

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the output tensor.
- **`seed`** : A shape [2] integer Tensor of seeds to the random number generator.
- **`minval`** : A 0-D Tensor or Python value of type  `dtype` . The lower bound on therange of random values to generate.  Defaults to 0.
- **`maxval`** : A 0-D Tensor or Python value of type  `dtype` . The upper bound on therange of random values to generate.  Defaults to 1 if  `dtype`  is floatingpoint.
- **`dtype`** : The type of the output:  `float16` ,  `float32` ,  `float64` ,  `int32` , or `int64` .
- **`name`** : A name for the operation (optional).


#### 返回：
由随机均匀值填充的指定形状的张量。

#### 加薪：
- **`ValueError`** : If  `dtype`  is integral and  `maxval`  is not specified.
