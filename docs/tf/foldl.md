foldl on the list of tensors unpacked from  `elems`  on dimension 0.

**别名** : [ `tf.compat.v1.foldl` ](/api_docs/python/tf/foldl), [ `tf.compat.v2.foldl` ](/api_docs/python/tf/foldl)

```
 tf.foldl(
    fn,
    elems,
    initializer=None,
    parallel_iterations=10,
    back_prop=True,
    swap_memory=False,
    name=None
)
 
```

This foldl operator repeatedly applies the callable  `fn`  to a sequenceof elements from first to last. The elements are made of the tensorsunpacked from  `elems`  on dimension 0. The callable fn takes two tensors asarguments. The first argument is the accumulated value computed from thepreceding invocation of fn, and the second is the value at the currentposition of  `elems` . If  `initializer`  is None,  `elems`  must contain at leastone element, and its first element is used as the initializer.

Suppose that  `elems`  is unpacked into  `values` , a list of tensors. The shapeof the result tensor is fn(initializer, values[0]).shape`.

This method also allows multi-arity  `elems`  and output of  `fn` .  If  `elems` is a (possibly nested) list or tuple of tensors, then each of these tensorsmust have a matching first (unpack) dimension.  The signature of  `fn`  maymatch the structure of  `elems` .  That is, if  `elems`  is `(t1, [t2, t3, [t4, t5]])` , then an appropriate signature for  `fn`  is: `fn = lambda (t1, [t2, t3, [t4, t5]]):` .

#### 参数：
- **`fn`** : The callable to be performed.
- **`elems`** : A tensor or (possibly nested) sequence of tensors, each of which willbe unpacked along their first dimension.  The nested sequence of theresulting slices will be the first argument to  `fn` .
- **`initializer`** : (optional) A tensor or (possibly nested) sequence of tensors,as the initial value for the accumulator.
- **`parallel_iterations`** : (optional) The number of iterations allowed to run inparallel.
- **`back_prop`** : (optional) True enables support for back propagation.
- **`swap_memory`** : (optional) True enables GPU-CPU memory swapping.
- **`name`** : (optional) Name prefix for the returned tensors.


#### 返回：
A tensor or (possibly nested) sequence of tensors, resulting from applying `fn`  consecutively to the list of tensors unpacked from  `elems` , from firstto last.

#### 加薪：
- **`TypeError`** : if  `fn`  is not callable.


#### 示例：


```
 elems = tf.constant([1, 2, 3, 4, 5, 6])
sum = foldl(lambda a, x: a + x, elems)
# sum == 21
 
```

