
Stacks a list of rank- `R`  tensors into one rank- `(R+1)`  tensor in parallel.


### Aliases:
- [ `tf.compat.v1.parallel_stack` ](/api_docs/python/tf/parallel_stack)
- [ `tf.compat.v2.parallel_stack` ](/api_docs/python/tf/parallel_stack)


```
tf.parallel_stack(
    values,
    name='parallel_stack'
)

```


Requires that the shape of inputs be known at graph construction time.

Packs the list of tensors in  `values`  into a tensor with rank one higher thaneach tensor in  `values` , by packing them along the first dimension.Given a list of length  `N`  of tensors of shape  `(A, B, C)` ; the  `output` tensor will have the shape  `(N, A, B, C)` .


#### For example:


```
x = tf.constant([1, 4])
y = tf.constant([2, 5])
z = tf.constant([3, 6])
tf.parallel_stack([x, y, z])  # [[1, 4], [2, 5], [3, 6]]

```


The difference between  `stack`  and  `parallel_stack`  is that  `stack`  requiresall the inputs be computed before the operation will begin but doesn't requirethat the input shapes be known during graph construction.

 `parallel_stack`  will copy pieces of the input into the output as they becomeavailable, in some situations this can provide a performance benefit.

Unlike  `stack` ,  `parallel_stack`  does NOT support backpropagation.

This is the opposite of unstack.  The numpy equivalent is


```
tf.parallel_stack([x, y, z]) = np.asarray([x, y, z])

```



#### Args:
- **`values`** : A list of  `Tensor`  objects with the same shape and type.
- **`name`** : A name for this operation (optional).


#### Returns:
- **`output`** : A stacked  `Tensor`  with the same type as  `values` .
