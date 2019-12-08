Stacks a list of rank- `R`  tensors into one rank- `(R+1)`   `RaggedTensor` .



### Aliases:

- [ `tf.compat.v1.ragged.stack` ](/api_docs/python/tf/ragged/stack)

- [ `tf.compat.v2.ragged.stack` ](/api_docs/python/tf/ragged/stack)



```
 tf.ragged.stack(
    values,
    axis=0,
    name=None
)
 
```

Given a list of tensors or ragged tensors with the same rank  `R` 
( `R >= axis` ), returns a rank- `R+1`   `RaggedTensor`   `result`  such that
 `result[i0...iaxis]`  is  `[value[i0...iaxis] for value in values]` .


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `#### Example:<br>&nbsp; ```python<br>&nbsp; >>> t1 = tf.ragged.constant([[1, 2], [3, 4, 5]])<br>&nbsp; >>> t2 = tf.ragged.constant([[6], [7, 8, 9]])<br>&nbsp; >>> tf.ragged.stack([t1, t2], axis=0)<br>&nbsp; [[[1, 2], [3, 4, 5]], [[6], [7, 9, 0]]]<br>&nbsp; >>> tf.ragged.stack([t1, t2], axis=1)<br>&nbsp; [[[1, 2], [6]], [[3, 4, 5], [7, 8, 9]]]<br>` </pre></devsite-code>


```
 
####> tf.Tensor </a> or <a href="../../tf/RaggedTensor"> tf.RaggedTensor </a>.  May not be empty. All
  `values` must have the same rank and the same dtype; but unlike
  <a href="../../tf/stack"> tf.stack </a>, they can have arbitrary dimension sizes.
* <b>`axis`</b>: A python integer, indicating the dimension along which to stack.
  (Note: Unlike <a href="../../tf/stack"> tf.stack </a>, the `axis` parameter must be statically known.)
  Negative values are supported only if the rank of at least one
  `values` value is statically known.
* <b>`name`</b>: A name prefix for the returned tensor (optional).


#### Returns:

A `RaggedTensor` with rank `R+1`.
`result.ragged_rank=1+max(axis, max(rt.ragged_rank for rt in values]))`.



#### Raises:


* <b>`ValueError`</b>: If `values` is empty, if `axis` is out of bounds or if
  the input tensors have different ranks.
</code>
```

