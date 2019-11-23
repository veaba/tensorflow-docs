
Group tensors together.


### Aliases:
- [ `tf.compat.v2.tuple` ](/api_docs/python/tf/tuple)


```
tf.tuple(
    tensors,
    control_inputs=None,
    name=None
)

```


This creates a tuple of tensors with the same values as the  `tensors` argument, except that the value of each tensor is only returned after thevalues of all tensors have been computed.

 `control_inputs`  contains additional ops that have to finish before this opfinishes, but whose outputs are not returned.

This can be used as a "join" mechanism for parallel computations: all theargument tensors can be computed in parallel, but the values of any tensorreturned by  `tuple`  are only available after all the parallel computationsare done.

See also [ `tf.group` ](https://tensorflow.google.cn/api_docs/python/tf/group) and[ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies).


#### Args:
- **`tensors`** : A list of  `Tensor` s or  `IndexedSlices` , some entries can be  `None` .
- **`control_inputs`** : List of additional ops to finish before returning.
- **`name`** : (optional) A name to use as a  `name_scope`  for the operation.


#### Returns:

Same as  `tensors` .


#### Raises:
- **`ValueError`** : If  `tensors`  does not contain any  `Tensor`  or  `IndexedSlices` .
- **`TypeError`** : If  `control_inputs`  is not a list of  `Operation`  or  `Tensor` objects.
