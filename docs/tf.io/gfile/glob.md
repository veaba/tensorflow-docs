Returns a list of files that match the given pattern(s).

**Aliases** : [ `tf.compat.v1.io.gfile.glob` ](/api_docs/python/tf/io/gfile/glob), [ `tf.compat.v2.io.gfile.glob` ](/api_docs/python/tf/io/gfile/glob)

```
 tf.io.gfile.glob(pattern)
 
```

#### Args:
- **`pattern`** : string or iterable of strings. The glob pattern(s).


#### Returns:
A list of strings containing filenames that match the given pattern(s).

#### Raises:
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If there are filesystem / directory listing errors.
