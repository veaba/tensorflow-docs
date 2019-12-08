Casts a tensor to type  `complex64` . (deprecated)


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.to_complex64(
    x,
    name='ToComplex64'
)
</code></pre></devsite-code>

<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Use [ `tf.cast` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/cast) instead.</aside>


#### Args:

- **`x`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices`  with same shape as  `x`  with
type  `complex64` .



#### Raises:

- **`TypeError`** : If  `x`  cannot be cast to the  `complex64` .

