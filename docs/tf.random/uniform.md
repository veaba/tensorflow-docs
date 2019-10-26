Outputs random values from a uniform distribution.
### Aliases:
- tf.compat.v1.random.uniform
- tf.compat.v1.random_uniform
- tf.compat.v2.random.uniform

```
 tf.random.uniform(
    shape,
    minval=0,
    maxval=None,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
```
### Used in the guide:
- tf.data: Build TensorFlow input pipelines
- Better performance with tf.function and AutoGraph
### Used in the tutorials:
- Transformer model for language understanding
- Customization basics: tensors and operations
- Better performance with tf.function
- DeepDream
- Pix2Pix
The generated values follow a uniform distribution in the range [minval, maxval). The lower bound minval is included in the range, while the upper bound maxval is excluded.
For floats, the default range is [0, 1). For ints, at least maxval must be specified explicitly.
In the integer case, the random integers are slightly biased unless maxval - minval is an exact power of two. The bias is small for values of maxval - minval significantly smaller than the range of the output (either 2**32 or 2**64).
#### Args:
- shape: A 1-D integer Tensor or Python array. The shape of the output tensor.
- minval: A 0-D Tensor or Python value of type dtype. The lower bound on the range of random values to generate. Defaults to 0.
- maxval: A 0-D Tensor or Python value of type dtype. The upper bound on the range of random values to generate. Defaults to 1 if dtype is floating point.
- dtype: The type of the output: float16, float32, float64, int32, or int64.
- seed: A Python integer. Used to create a random seed for the distribution. See tf.compat.v1.set_random_seed for behavior.
- name: A name for the operation (optional).
#### Returns:
A tensor of the specified shape filled with random uniform values.
#### Raises:
- ValueError: If dtype is integral and maxval is not specified.
