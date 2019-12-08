Checks whether a V1 or V2 checkpoint exists with the specified prefix. (deprecated)


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.train.checkpoint_exists(checkpoint_prefix)
</code></pre></devsite-code>

<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Use standard file APIs to check for files with this prefix.</aside>
This is the recommended way to check if a checkpoint exists, since it takes
into account the naming difference between V1 and V2 formats.



#### Args:

- **`checkpoint_prefix`** : the prefix of a V1 or V2 checkpoint, with V2 taking
priority.  Typically the result of  `Saver.save()`  or that of
[ `tf.train.latest_checkpoint()` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint), regardless of sharded/non-sharded or
V1/V2.



#### Returns:
A bool, true if a checkpoint referred to by  `checkpoint_prefix`  exists.

