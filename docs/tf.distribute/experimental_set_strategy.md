[tf.distribute.Strategy](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)Set a  as current without with strategy.scope().

### Aliases:
- tf.compat.v1.distribute.experimental_set_strategy
- tf.compat.v2.distribute.experimental_set_strategy

```
 tf.distribute.experimental_set_strategy(strategy)
```

```
 tf.distribute.experimental_set_strategy(strategy1)
f()
tf.distribute.experimental_set_strategy(strategy2)
g()
tf.distribute.experimental_set_strategy(None)
h()
```
is equivalent to:

```
 with strategy1.scope():
  f()
with strategy2.scope():
  g()
h()
```
In general, you should use the with strategy.scope(): API, but this alternative may be convenient in notebooks where you would have to put each cell in a with strategy.scope(): block.
#### Args:
- strategy: A tf.distribute.Strategy object or None.
#### Raises:
- RuntimeError: If called inside a with strategy.scope():.
