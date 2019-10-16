[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)Return if there is a current non-default .

### Aliases:
- `tf.compat.v1.distribute.has_strategy`
- `tf.compat.v2.distribute.has_strategy`

```
 tf.distribute.has_strategy()
```

```
 assert not tf.distribute.has_strategy()
with strategy.scope():
  assert tf.distribute.has_strategy()
```
#### Returns:

True if inside a with strategy.scope():.
