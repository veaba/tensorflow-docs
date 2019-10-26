Outputs deterministic pseudorandom values from a uniform distribution.
### Aliases:
- tf.compat.v1.random.stateless_uniform
- tf.compat.v2.random.stateless_uniform

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
[tf.random.uniform](https://tensorflow.google.cn/api_docs/python/tf/random/uniform)This is a stateless version of : if run twice with the same seeds, it will produce the same pseudorandom numbers. The output is consistent across multiple runs on the same hardware (and between CPU and GPU), but may change between versions of TensorFlow or on non-CPU/GPU hardware.

The generated values follow a uniform distribution in the range [minval, maxval). The lower bound minval is included in the range, while the upper bound maxval is excluded.
For floats, the default range is [0, 1). For ints, at least maxval must be specified explicitly.
In the integer case, the random integers are slightly biased unless maxval - minval is an exact power of two. The bias is small for values of maxval - minval significantly smaller than the range of the output (either 2**32 or 2**64).
#### Args:
- shape: A 1-D integer Tensor or Python array. The shape of the output tensor.
- seed: A shape [2] integer Tensor of seeds to the random number generator.
- minval: A 0-D Tensor or Python value of type dtype. The lower bound on the range of random values to generate. Defaults to 0.
- maxval: A 0-D Tensor or Python value of type dtype. The upper bound on the range of random values to generate. Defaults to 1 if dtype is floating point.
- dtype: The type of the output: float16, float32, float64, int32, or int64.
- name: A name for the operation (optional).
#### Returns:
A tensor of the specified shape filled with random uniform values.
#### Raises:
- ValueError: If dtype is integral and maxval is not specified.
