Context manager for testing forward compatibility of generated graphs.



### Aliases:

- [ `tf.compat.v1.compat.forward_compatibility_horizon` ](/api_docs/python/tf/compat/forward_compatibility_horizon)

- [ `tf.compat.v2.compat.forward_compatibility_horizon` ](/api_docs/python/tf/compat/forward_compatibility_horizon)



```
 tf.compat.forward_compatibility_horizon(
    year,
    month,
    day
)
 
```

See <a href="https://tensorflow.org/guide/version_compat#backward_forward">Version
compatibility</a>.

To ensure forward compatibility of generated graphs (see  `forward_compatible` )
with older binaries, new features can be gated with:



```
 if compat.forward_compatible(year=2018, month=08, date=01):
  generate_graph_with_new_features()
else:
  generate_graph_so_older_binaries_can_consume_it()
 
```

However, when adding new features, one may want to unittest it before
the forward compatibility window expires. This context manager enables
such tests. For example:



```
 from tensorflow.python.compat import compat

def testMyNewFeature(self):
  with compat.forward_compatibility_horizon(2018, 08, 02):
     # Test that generate_graph_with_new_features() has an effect
 
```



#### Args:

- **`year`** :  A year (e.g., 2018). Must be an  `int` .

- **`month`** : A month (1 <= month <= 12) in year. Must be an  `int` .

- **`day`** :   A day (1 <= day <= 31, or 30, or 29, or 28) in month. Must be an
 `int` .



#### Yields:
Nothing.

