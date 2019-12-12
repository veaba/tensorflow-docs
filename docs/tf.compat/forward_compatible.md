Return true if the forward compatibility window has expired.

**Aliases** : [ `tf.compat.v1.compat.forward_compatible` ](/api_docs/python/tf/compat/forward_compatible), [ `tf.compat.v2.compat.forward_compatible` ](/api_docs/python/tf/compat/forward_compatible)

```
 tf.compat.forward_compatible(
    year,
    month,
    day
)
 
```

See [Versioncompatibility](https://tensorflow.org/guide/version_compat#backward_forward).

Forward-compatibility refers to scenarios where the producer of a TensorFlowmodel (a GraphDef or SavedModel) is compiled against a version of theTensorFlow library newer than what the consumer was compiled against. The"producer" is typically a Python program that constructs and trains a modelwhile the "consumer" is typically another program that loads and serves themodel.

TensorFlow has been supporting a 3 week forward-compatibility window forprograms compiled from source at HEAD.

For example, consider the case where a new operation  `MyNewAwesomeAdd`  iscreated with the intent of replacing the implementation of an existing Pythonwrapper - [ `tf.add` ](https://tensorflow.google.cn/api_docs/python/tf/math/add).  The Python wrapper implementation should change fromsomething like:

```
 def add(inputs, name=None):
  return gen_math_ops.add(inputs, name)
 
```

to:

```
 from tensorflow.python.compat import compat

def add(inputs, name=None):
  if compat.forward_compatible(year, month, day):
    # Can use the awesome new implementation.
    return gen_math_ops.my_new_awesome_add(inputs, name)
  # To maintain forward compatibiltiy, use the old implementation.
  return gen_math_ops.add(inputs, name)
 
```

Where  `year` ,  `month` , and  `day`  specify the date beyond which binariesthat consume a model are expected to have been updated to include thenew operations. This date is typically at least 3 weeks beyond the datethe code that adds the new operation is committed.

#### Args:
- **`year`** :  A year (e.g., 2018). Must be an  `int` .
- **`month`** : A month (1 <= month <= 12) in year. Must be an  `int` .
- **`day`** :   A day (1 <= day <= 31, or 30, or 29, or 28) in month. Must be an `int` .


#### Returns:
True if the caller can expect that serialized TensorFlow graphs producedcan be consumed by programs that are compiled with the TensorFlow librarysource code after (year, month, day).

