
map on the list of tensors unpacked from  `elems`  on dimension 0.


### Aliases:
- [ `tf.compat.v1.map_fn` ](/api_docs/python/tf/map_fn)
- [ `tf.compat.v2.map_fn` ](/api_docs/python/tf/map_fn)


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


The simplest version of  `map_fn`  repeatedly applies the callable  `fn`  to asequence of elements from first to last. The elements are made of thetensors unpacked from  `elems` .  `dtype`  is the data type of the returnvalue of  `fn` . Users must provide  `dtype`  if it is different fromthe data type of  `elems` .

Suppose that  `elems`  is unpacked into  `values` , a list of tensors. The shapeof the result tensor is  `[values.shape[0]] + fn(values[0]).shape` .

This method also allows multi-arity  `elems`  and output of  `fn` .  If  `elems` is a (possibly nested) list or tuple of tensors, then each of these tensorsmust have a matching first (unpack) dimension.  The signature of  `fn`  maymatch the structure of  `elems` .  That is, if  `elems`  is `(t1, [t2, t3, [t4, t5]])` , then an appropriate signature for  `fn`  is: `fn = lambda (t1, [t2, t3, [t4, t5]]):` .

Furthermore,  `fn`  may emit a different structure than its input.  For example, `fn`  may look like:  `fn = lambda t1: return (t1 + 1, t1 - 1)` .  In this case,the  `dtype`  parameter is not optional:  `dtype`  must be a type or (possiblynested) tuple of types matching the output of  `fn` .

To apply a functional operation to the nonzero elements of a SparseTensorone of the following methods is recommended. First, if the function isexpressible as TensorFlow ops, use


```
  result = SparseTensor(input.indices, fn(input.values), input.dense_shape)

```


If, however, the function is not expressible as a TensorFlow op, then use


```
result = SparseTensor(
  input.indices, map_fn(fn, input.values), input.dense_shape)

```


instead.

When executing eagerly, map_fn does not execute in parallel even if `parallel_iterations`  is set to a value > 1. You can still get theperformance benefits of running a function in parallel by using the `tf.contrib.eager.defun`  decorator,


```
# Assume the function being used in map_fn is fn.
# To ensure map_fn calls fn in parallel, use the defun decorator.
@tf.contrib.eager.defun
def func(tensor):
  return tf.map_fn(fn, tensor)

```


Note that if you use the defun decorator, any non-TensorFlow Python codethat you may have written in your function won't get executed. See `tf.contrib.eager.defun`  for more details. The recommendation would be todebug without defun but switch to defun to get performance benefits ofrunning map_fn in parallel.


#### Args:
- **`fn`** : The callable to be performed.  It accepts one argument, which willhave the same (possibly nested) structure as  `elems` .  Its outputmust have the same structure as  `dtype`  if one is provided, otherwiseit must have the same structure as  `elems` .
- **`elems`** : A tensor or (possibly nested) sequence of tensors, each of whichwill be unpacked along their first dimension.  The nested sequenceof the resulting slices will be applied to  `fn` .
- **`dtype`** : (optional) The output type(s) of  `fn` .  If  `fn`  returns a structureof Tensors differing from the structure of  `elems` , then  `dtype`  is notoptional and must have the same structure as the output of  `fn` .
- **`parallel_iterations`** : (optional) The number of iterations allowed to runin parallel. When graph building, the default value is 10. While executingeagerly, the default value is set to 1.
- **`back_prop`** : (optional) True enables support for back propagation.
- **`swap_memory`** : (optional) True enables GPU-CPU memory swapping.
- **`infer_shape`** : (optional) False disables tests for consistent output shapes.
- **`name`** : (optional) Name prefix for the returned tensors.


#### Returns:

A tensor or (possibly nested) sequence of tensors.  Each tensor packs theresults of applying  `fn`  to tensors unpacked from  `elems`  along the firstdimension, from first to last.


#### Raises:
- **`TypeError`** : if  `fn`  is not callable or the structure of the output of `fn`  and  `dtype`  do not match, or if elems is a SparseTensor.
- **`ValueError`** : if the lengths of the output of  `fn`  and  `dtype`  do not match.


#### Examples:


```
elems = np.array([1, 2, 3, 4, 5, 6])
squares = map_fn(lambda x: x * x, elems)
# squares == [1, 4, 9, 16, 25, 36]

```



```
elems = (np.array([1, 2, 3]), np.array([-1, 1, -1]))
alternate = map_fn(lambda x: x[0] * x[1], elems, dtype=tf.int64)
# alternate == [-1, 2, -3]

```



```
elems = np.array([1, 2, 3])
alternates = map_fn(lambda x: (x, -x), elems, dtype=(tf.int64, tf.int64))
# alternates[0] == [1, 2, 3]
# alternates[1] == [-1, -2, -3]

```

