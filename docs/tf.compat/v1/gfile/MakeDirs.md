Creates a directory and all parent/intermediate directories.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.gfile.MakeDirs(dirname)
</code></pre></devsite-code>
It succeeds if dirname already exists and is writable.



#### Args:

- **`dirname`** : string, name of the directory to be created



#### Raises:

- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.

