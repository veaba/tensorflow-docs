Returns local variables.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.local_variables(scope=None)
</code></pre></devsite-code>
Local variables - per process variables, usually not saved/restored to
checkpoint and used for temporary or intermediate values.
For example, they can be used as counters for metrics computation or
number of epochs this machine has read data.
The  `tf.contrib.framework.local_variable()`  function automatically adds the
new variable to  `GraphKeys.LOCAL_VARIABLES` .
This convenience function returns the contents of that collection.

An alternative to local variables are global variables. See
[ `tf.compat.v1.global_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/global_variables)



#### Args:

- **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered to
include only items whose  `name`  attribute matches  `scope`  using
 `re.match` . Items without a  `name`  attribute are never returned if a scope
is supplied. The choice of  `re.match`  means that a  `scope`  without special
tokens filters by prefix.



#### Returns:
A list of local  `Variable`  objects.

