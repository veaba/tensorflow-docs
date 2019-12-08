Clips values of multiple tensors by the ratio of the sum of their norms.



### Aliases:

- [ `tf.compat.v1.clip_by_global_norm` ](/api_docs/python/tf/clip_by_global_norm)

- [ `tf.compat.v2.clip_by_global_norm` ](/api_docs/python/tf/clip_by_global_norm)



```
 tf.clip_by_global_norm(
    t_list,
    clip_norm,
    use_norm=None,
    name=None
)
 
```

Given a tuple or list of tensors  `t_list` , and a clipping ratio  `clip_norm` ,
this operation returns a list of clipped tensors  `list_clipped` 
and the global norm ( `global_norm` ) of all tensors in  `t_list` . Optionally,
if you've already computed the global norm for  `t_list` , you can specify
the global norm with  `use_norm` .

To perform the clipping, the values  `t_list[i]`  are set to:



```
 t_list[i] * clip_norm / max(global_norm, clip_norm)
 
```

where:



```
 global_norm = sqrt(sum([l2norm(t)**2 for t in t_list]))
 
```

If  `clip_norm > global_norm`  then the entries in  `t_list`  remain as they are,
otherwise they're all shrunk by the global ratio.

If  `global_norm == infinity`  then the entries in  `t_list`  are all set to  `NaN` 
to signal that an error occurred.

Any of the entries of  `t_list`  that are of type  `None`  are ignored.

This is the correct way to perform gradient clipping (for example, see
[Pascanu et al., 2012](http://arxiv.org/abs/1211.5063)
([pdf](http://arxiv.org/pdf/1211.5063.pdf))).

However, it is slower than  `clip_by_norm()`  because all the parameters must be
ready before the clipping operation can be performed.



#### Args:

- **`t_list`** : A tuple or list of mixed  `Tensors` ,  `IndexedSlices` , or None.

- **`clip_norm`** : A 0-D (scalar)  `Tensor`  > 0. The clipping ratio.

- **`use_norm`** : A 0-D (scalar)  `Tensor`  of type  `float`  (optional). The global
norm to use. If not provided,  `global_norm()`  is used to compute the norm.

- **`name`** : A name for the operation (optional).



#### Returns:

- **`list_clipped`** : A list of  `Tensors`  of the same type as  `list_t` .

- **`global_norm`** : A 0-D (scalar)  `Tensor`  representing the global norm.



#### Raises:

- **`TypeError`** : If  `t_list`  is not a sequence.

