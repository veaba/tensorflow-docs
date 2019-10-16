
A transformation that stops dataset iteration based on a predicate.
### Aliases:
- `tf.compat.v1.data.experimental.take_while`
- `tf.compat.v2.data.experimental.take_while`

```
 tf.data.experimental.take_while(predicate)
```
#### Args:
- `predicate`: A function that maps a nested structure of tensors (having shapes and types defined by `self.output_shapes` and `self.output_types`) to a scalar `tf.bool` tensor.
#### Returns:
[tf.data.Dataset.apply](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

