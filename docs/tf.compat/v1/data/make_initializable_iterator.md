Creates a `tf.compat.v1.data.Iterator` for enumerating the elements of a dataset.

```
 tf.compat.v1.data.make_initializable_iterator(
    dataset,
    shared_name=None
)
```

```
 dataset = ...
iterator = tf.compat.v1.data.make_initializable_iterator(dataset)
# ...
sess.run(iterator.initializer)
```
#### Args:
- `dataset`: A `tf.data.Dataset`.
- `shared_name`: (Optional.) If non-empty, the returned iterator will be shared under the given name across multiple sessions that share the same devices (e.g. when using a remote server).
#### Returns:
A `tf.compat.v1.data.Iterator` over the elements of `dataset`.
#### Raises:
- `RuntimeError`: If eager execution is enabled.
