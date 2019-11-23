
Creates a sequence of numbers.


### Aliases:
- [ `tf.compat.v1.range` ](/api_docs/python/tf/range)
- [ `tf.compat.v2.range` ](/api_docs/python/tf/range)


```
tf.range(limit, delta=1, dtype=None, name='range')
tf.range(start, limit, delta=1, dtype=None, name='range')

```



### Used in the guide:
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)


### Used in the tutorials:
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

Creates a sequence of numbers that begins at  `start`  and extends byincrements of  `delta`  up to but not including  `limit` .

The dtype of the resulting tensor is inferred from the inputs unlessit is provided explicitly.

Like the Python builtin  `range` ,  `start`  defaults to 0, so that `range(n) = range(0, n)` .


#### For example:


```
start = 3
limit = 18
delta = 3
tf.range(start, limit, delta)  # [3, 6, 9, 12, 15]

start = 3
limit = 1
delta = -0.5
tf.range(start, limit, delta)  # [3, 2.5, 2, 1.5]

limit = 5
tf.range(limit)  # [0, 1, 2, 3, 4]

```



#### Args:
- **`start`** : A 0-D  `Tensor`  (scalar). Acts as first entry in the range if  `limit` is not None; otherwise, acts as range limit and first entry defaults to 0.
- **`limit`** : A 0-D  `Tensor`  (scalar). Upper limit of sequence, exclusive. If None,defaults to the value of  `start`  while the first entry of the rangedefaults to 0.
- **`delta`** : A 0-D  `Tensor`  (scalar). Number that increments  `start` . Defaults to1.
- **`dtype`** : The type of the elements of the resulting tensor.
- **`name`** : A name for the operation. Defaults to "range".


#### Returns:

An 1-D  `Tensor`  of type  `dtype` .


#### Numpy Compatibility

Equivalent to np.arange
