Merges all summaries collected in the default graph.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.summary.merge_all(
    key=tf.GraphKeys.SUMMARIES,
    scope=None,
    name=None
)
</code></pre></devsite-code>


#### Args:

- **`key`** :  `GraphKey`  used to collect the summaries.  Defaults to
 `GraphKeys.SUMMARIES` .

- **`scope`** : Optional scope used to filter the summary ops, using  `re.match` 



#### Returns:
If no summaries were collected, returns None.  Otherwise returns a scalar
 `Tensor`  of type  `string`  containing the serialized  `Summary`  protocol
buffer resulting from the merging.



#### Raises:

- **`RuntimeError`** : If called with eager execution enabled.



#### Eager Compatibility
Not compatible with eager execution. To write TensorBoard
summaries under eager execution, use  `tf.contrib.summary`  instead.

