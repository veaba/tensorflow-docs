Adds a cosine-distance loss to the training procedure. (deprecated arguments)


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.losses.cosine_distance(
    labels,
    predictions,
    axis=None,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS,
    dim=None
)
</code></pre></devsite-code>

<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dim)` . They will be removed in a future version.
Instructions for updating:
dim is deprecated, use axis instead</aside>
Note that the function assumes that  `predictions`  and  `labels`  are already
unit-normalized.



#### Args:

- **`labels`** :  `Tensor`  whose shape matches 'predictions'

- **`predictions`** : An arbitrary matrix.

- **`axis`** : The dimension along which the cosine distance is computed.

- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as
 `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions must
be either  `1` , or the same as the corresponding  `losses`  dimension).

- **`scope`** : The scope for the operations performed in computing the loss.

- **`loss_collection`** : collection to which this loss will be added.

- **`reduction`** : Type of reduction to apply to loss.

- **`dim`** : The old (deprecated) name for  `axis` .



#### Returns:
Weighted loss float  `Tensor` . If  `reduction`  is  `NONE` , this has the same
shape as  `labels` ; otherwise, it is scalar.



#### Raises:

- **`ValueError`** : If  `predictions`  shape doesn't match  `labels`  shape, or
 `axis` ,  `labels` ,  `predictions`  or  `weights`  is  `None` .



#### Eager Compatibility
The  `loss_collection`  argument is ignored when executing eagerly. Consider
holding on to the return value or collecting losses via a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

