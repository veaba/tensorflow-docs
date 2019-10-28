Outputs deterministic pseudorandom values from a uniform distribution.
### Aliases:
- `tf.compat.v1.random.stateless_uniform`
- `tf.compat.v2.random.stateless_uniform`

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
This is a stateless version of `tf.random.uniform`: if run twice with the same seeds, it will produce the same pseudorandom numbers. The output is consistent across multiple runs on the same hardware (and between CPU and GPU), but may change between versions of TensorFlow or on non-CPU/GPU hardware.
The generated values follow a uniform distribution in the range `[minval, maxval)`. The lower bound `minval` is included in the range, while the upper bound `maxval` is excluded.
For floats, the default range is `[0, 1)`. For ints, at least `maxval` must be specified explicitly.
