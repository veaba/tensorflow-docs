Logical XOR function.



### Aliases:

- [ `tf.RaggedTensor.**xor** ` ](/api_docs/python/tf/RaggedTensor#__xor__)

- [ `tf.compat.v1.RaggedTensor.**xor** ` ](/api_docs/python/tf/RaggedTensor#__xor__)

- [ `tf.compat.v1.logical_xor` ](/api_docs/python/tf/math/logical_xor)

- [ `tf.compat.v1.math.logical_xor` ](/api_docs/python/tf/math/logical_xor)

- [ `tf.compat.v2.RaggedTensor.**xor** ` ](/api_docs/python/tf/RaggedTensor#__xor__)

- [ `tf.compat.v2.math.logical_xor` ](/api_docs/python/tf/math/logical_xor)


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.math.logical_xor(
    x,
    y,
    name='LogicalXor'
)
</code></pre></devsite-code>
x ^ y = (x | y) &amp; ~(x &amp; y)

Inputs are tensor and if the tensors contains more than one element, an
element-wise logical XOR is computed.



#### Usage:

<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">x = tf.constant([False, False, True, True], dtype = tf.bool)
y = tf.constant([False, True, False, True], dtype = tf.bool)
z = tf.logical_xor(x, y, name="LogicalXor")
#  here z = [False  True  True False]
</code></pre></devsite-code>


#### Args:

- **`x`** : A  `Tensor`  type bool.

- **`y`** : A  `Tensor`  of type bool.



#### Returns:
A  `Tensor`  of type bool with the same size as that of x or y.

