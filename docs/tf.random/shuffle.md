Randomly shuffles a tensor along its first dimension.

**Aliases** : [ `tf.compat.v1.random.shuffle` ](/api_docs/python/tf/random/shuffle), [ `tf.compat.v1.random_shuffle` ](/api_docs/python/tf/random/shuffle), [ `tf.compat.v2.random.shuffle` ](/api_docs/python/tf/random/shuffle)

```
 tf.random.shuffle(
    value,
    seed=None,
    name=None
)
 
```

The tensor is shuffled along dimension 0, such that each  `value[j]`  is mappedto one and only one  `output[i]` . For example, a mapping that might occur for a3x2 tensor is:

```
 [[1, 2],       [[5, 6],
 [3, 4],  ==>   [1, 2],
 [5, 6]]        [3, 4]]
 
```

#### Args:
- **`value`** : A Tensor to be shuffled.
- **`seed`** : A Python integer. Used to create a random seed for the distribution.See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.
- **`name`** : A name for the operation (optional).


#### Returns:
A tensor of same shape and type as  `value` , shuffled along its firstdimension.

