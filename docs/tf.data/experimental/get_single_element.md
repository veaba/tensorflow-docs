
Returns the single element in dataset as a nested structure of tensors.
### Aliases:
- `tf.compat.v1.data.experimental.get_single_element`
- `tf.compat.v2.data.experimental.get_single_element`

```
 tf.data.experimental.get_single_element(dataset)
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)This function enables you to use a  in a stateless "tensor-in tensor-out" expression, without creating a tf.compat.v1.data.Iterator. This can be useful when your preprocessing transformations are expressed as a Dataset, and you want to use the transformation at serving time. For example:


```
 input_batch = tf.compat.v1.placeholder(tf.string, shape=[BATCH_SIZE])

def preprocessing_fn(input_str):
  # ...
  return image, label

dataset = (tf.data.Dataset.from_tensor_slices(input_batch)
           .map(preprocessing_fn, num_parallel_calls=BATCH_SIZE)
           .batch(BATCH_SIZE))

image_batch, label_batch = tf.data.experimental.get_single_element(dataset)
```
#### Args:
- `dataset`: A `tf.data.Dataset` object containing a single element.
#### Returns:
[tf.Tensor](https://www.tensorflow.org/api_docs/python/tf/Tensor)A nested structure of  objects, corresponding to the single element of dataset.

#### Raises:
- `TypeError`: if `dataset` is not a `tf.data.Dataset` object. InvalidArgumentError (at runtime): if `dataset` does not contain exactly one element.
