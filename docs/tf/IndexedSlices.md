

## Class  `IndexedSlices` 
给定索引处一组张量切片的稀疏表示。

**别名** : [ `tf.compat.v1.IndexedSlices` ](/api_docs/python/tf/IndexedSlices), [ `tf.compat.v2.IndexedSlices` ](/api_docs/python/tf/IndexedSlices)

This class is a simple wrapper for a pair of  `Tensor`  objects:

-  `values` : A  `Tensor`  of any dtype with shape  `[D0, D1, ..., Dn]` .
-  `indices` : A 1-D integer  `Tensor`  with shape  `[D0]` .
An  `IndexedSlices`  is typically used to represent a subset of a largertensor  `dense`  of shape  `[LARGE0, D1, .. , DN]`  where  `LARGE0 >> D0` .The values in  `indices`  are the indices in the first dimension ofthe slices that have been extracted from the larger tensor.

The dense tensor  `dense`  represented by an  `IndexedSlices`   `slices`  has

```
 dense[slices.indices[i], :, :, :, ...] = slices.values[i, :, :, :, ...]
 
```

The  `IndexedSlices`  class is used principally in the definition ofgradients for operations that have sparse gradients(e.g. [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather)).

Contrast this representation with[ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor),which uses multi-dimensional indices and scalar values.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/indexed_slices.py#L90-L95)

```
 __init__(
    values,
    indices,
    dense_shape=None
)
 
```

Creates an  `IndexedSlices` .

## 属性


###  `dense_shape` 
A 1-D  `Tensor`  containing the shape of the corresponding dense tensor.

###  `device` 
The name of the device on which  `values`  will be produced, or  `None` .

###  `dtype` 
The  `DType`  of elements in this tensor.

###  `graph` 
The  `Graph`  that contains the values, indices, and shape tensors.

###  `indices` 
A 1-D  `Tensor`  containing the indices of the slices.

###  `name` 
The name of this  `IndexedSlices` .

###  `op` 
The  `Operation`  that produces  `values`  as an output.

###  `values` 
A  `Tensor`  containing the values of the slices.

## 方法


###  `__neg__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/indexed_slices.py#L143-L144)

```
 __neg__()
 
```

###  `consumers` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/indexed_slices.py#L174-L175)

```
 consumers()
 
```

