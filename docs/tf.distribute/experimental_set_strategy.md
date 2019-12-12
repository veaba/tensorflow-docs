Set a [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) as current without  `with strategy.scope()` .

**Aliases** : [ `tf.compat.v1.distribute.experimental_set_strategy` ](/api_docs/python/tf/distribute/experimental_set_strategy), [ `tf.compat.v2.distribute.experimental_set_strategy` ](/api_docs/python/tf/distribute/experimental_set_strategy)

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

In general, you should use the  `with strategy.scope():`  API, but thisalternative may be convenient in notebooks where you would have to puteach cell in a  `with strategy.scope():`  block.


**Note:**  This should only be called outside of any TensorFlow scope toavoid improper nesting.


#### Args:
- **`strategy`** : A [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) object or None.


#### Raises:
- **`RuntimeError`** : If called inside a  `with strategy.scope():` .
