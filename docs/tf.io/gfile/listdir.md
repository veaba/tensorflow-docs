Returns a list of entries contained within a directory.



### Aliases:

- [ `tf.compat.v1.io.gfile.listdir` ](/api_docs/python/tf/io/gfile/listdir)

- [ `tf.compat.v2.io.gfile.listdir` ](/api_docs/python/tf/io/gfile/listdir)


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.io.gfile.listdir(path)
</code></pre></devsite-code>
The list is in arbitrary order. It does not contain the special entries "."
and "..".



#### Args:

- **`path`** : string, path to a directory



#### Returns:
[filename1, filename2, ... filenameN] as strings



#### Raises:
errors.NotFoundError if directory doesn't exist

