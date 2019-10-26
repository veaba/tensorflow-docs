Creates a Dataset from another Dataset, discarding duplicates.
### Aliases:
- tf.compat.v1.data.experimental.unique
- tf.compat.v2.data.experimental.unique

```
 tf.data.experimental.unique()
```
Use this transformation to produce a dataset that contains one instance of each unique element in the input. For example:

```
 dataset = tf.data.Dataset.from_tensor_slices([1, 37, 2, 37, 2, 1])

# Using `unique()` will drop the duplicate elements.
dataset = dataset.apply(tf.data.experimental.unique())  # ==> { 1, 37, 2 }
```
#### Returns:
[tf.data.Dataset.apply](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

