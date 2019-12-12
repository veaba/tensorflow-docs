Replaces the global generator with another  `Generator`  object.

**别名** : [ `tf.compat.v1.random.experimental.set_global_generator` ](/api_docs/python/tf/random/experimental/set_global_generator), [ `tf.compat.v2.random.experimental.set_global_generator` ](/api_docs/python/tf/random/experimental/set_global_generator)

```
 tf.random.experimental.set_global_generator(generator)
 
```

This function creates a new Generator object (and the Variable object within),which does not work well with tf.function because (1) tf.function putsrestrictions on Variable creation thus reset_global_generator can't be freelyused inside tf.function; (2) redirecting a global variable toa new object is problematic with tf.function because the old object may becaptured by a 'tf.function'ed function and still be used by it.A 'tf.function'ed function only keeps weak references to variables,so deleting a variable and then calling that function again may raise anerror, as demonstrated byrandom_test.py/RandomTest.testResetGlobalGeneratorBadWithDefun .

#### 参数：
- **`generator`** : the new  `Generator`  object.
