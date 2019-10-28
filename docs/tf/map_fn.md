map on the list of tensors unpacked from `elems` on dimension 0.
### Aliases:
- `tf.compat.v1.map_fn`
- `tf.compat.v2.map_fn`

```
 tf.map_fn(
    fn,
    elems,
    dtype=None,
    parallel_iterations=None,
    back_prop=True,
    swap_memory=False,
    infer_shape=True,
    name=None
)
```
The simplest version of `map_fn` repeatedly applies the callable `fn` to a sequence of elements from first to last. The elements are made of the tensors unpacked from `elems`. `dtype` is the data type of the return value of `fn`. Users must provide `dtype` if it is different from the data type of `elems`.
Suppose that `elems` is unpacked into `values`, a list of tensors. The shape of the result tensor is [`values`.shape[0]] + fn(`values`[0]).shape.
This method also allows multi-arity `elems` and output of `fn`. If `elems` is a (possibly nested) list or tuple of tensors, then each of these tensors must have a matching first (unpack) dimension. The signature of `fn` may match the structure of `elems`. That is, if `elems` is `t1, [t2, t3, [t4, t5]])`, then an appropriate signature for `fn` is: `fn` = lambda `t1, [t2, t3, [t4, t5]])`:.
