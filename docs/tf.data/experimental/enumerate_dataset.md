
A transformation that enumerates the elements of a dataset. (deprecated)
### Aliases:
- `tf.compat.v1.data.experimental.enumerate_dataset`
- `tf.compat.v2.data.experimental.enumerate_dataset`

```
 tf.data.experimental.enumerate_dataset(start=0)
```

It is similar to python's enumerate. For example:

```
 # NOTE: The following examples use `{ ... }` to represent the
# contents of a dataset.
a = { 1, 2, 3 }
b = { (7, 8), (9, 10) }

# The nested structure of the `datasets` argument determines the
# structure of elements in the resulting dataset.
a.apply(tf.data.experimental.enumerate_dataset(start=5))
=> { (5, 1), (6, 2), (7, 3) }
b.apply(tf.data.experimental.enumerate_dataset())
=> { (0, (7, 8)), (1, (9, 10)) }
```
#### Args:
- `start`: A `tf.int64` scalar `tf.Tensor`, representing the `start` value for enumeration.
#### Returns:
[tf.data.Dataset.apply](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

