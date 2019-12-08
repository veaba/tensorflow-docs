Deletes the file located at 'filename'.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.gfile.Remove(filename)
</code></pre></devsite-code>


#### Args:

- **`filename`** : string, a filename



#### Raises:

- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.  E.g.,
NotFoundError if the file does not exist.

