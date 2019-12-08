Outputs a  `Summary`  protocol buffer containing a single scalar value.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.summary.scalar(
    name,
    tensor,
    collections=None,
    family=None
)
</code></pre></devsite-code>
The generated Summary has a Tensor.proto containing the input Tensor.



#### Args:

- **`name`** : A name for the generated node. Will also serve as the series name in
TensorBoard.

- **`tensor`** : A real numeric Tensor containing a single value.

- **`collections`** : Optional list of graph collections keys. The new summary op is
added to these collections. Defaults to  `[GraphKeys.SUMMARIES]` .

- **`family`** : Optional; if provided, used as the prefix of the summary tag name,
which controls the tab name used for display on Tensorboard.



#### Returns:
A scalar  `Tensor`  of type  `string` . Which contains a  `Summary`  protobuf.



#### Raises:

- **`ValueError`** : If tensor has the wrong shape or type.

