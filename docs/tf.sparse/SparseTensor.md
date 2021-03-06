

## Class  `SparseTensor` 
表示稀疏张量。

**别名** : [ `tf.SparseTensor` ](/api_docs/python/tf/sparse/SparseTensor), [ `tf.compat.v1.SparseTensor` ](/api_docs/python/tf/sparse/SparseTensor), [ `tf.compat.v1.sparse.SparseTensor` ](/api_docs/python/tf/sparse/SparseTensor), [ `tf.compat.v2.SparseTensor` ](/api_docs/python/tf/sparse/SparseTensor), [ `tf.compat.v2.sparse.SparseTensor` ](/api_docs/python/tf/sparse/SparseTensor)

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
TensorFlow represents a sparse tensor as three separate dense tensors: `indices` ,  `values` , and  `dense_shape` .  In Python, the three tensors arecollected into a  `SparseTensor`  class for ease of use.  If you have separate `indices` ,  `values` , and  `dense_shape`  tensors, wrap them in a  `SparseTensor` object before passing to the ops below.

Concretely, the sparse tensor  `SparseTensor(indices, values, dense_shape)` comprises the following components, where  `N`  and  `ndims`  are the numberof values and number of dimensions in the  `SparseTensor` , respectively:

-  `indices` : A 2-D int64 tensor of dense_shape  `[N, ndims]` , which specifiesthe indices of the elements in the sparse tensor that contain nonzerovalues (elements are zero-indexed). For example,  `indices=[[1,3], [2,4]]` specifies that the elements with indexes of [1,3] and [2,4] havenonzero values.


-  `values` : A 1-D tensor of any type and dense_shape  `[N]` , which supplies thevalues for each element in  `indices` . For example, given `indices=[[1,3], [2,4]]` , the parameter  `values=[18, 3.6]`  specifiesthat element [1,3] of the sparse tensor has a value of 18, and element[2,4] of the tensor has a value of 3.6.


-  `dense_shape` : A 1-D int64 tensor of dense_shape  `[ndims]` , which specifiesthe dense_shape of the sparse tensor. Takes a list indicating the number ofelements in each dimension. For example,  `dense_shape=[3,6]`  specifies atwo-dimensional 3x6 tensor,  `dense_shape=[2,3,4]`  specifies athree-dimensional 2x3x4 tensor, and  `dense_shape=[9]`  specifies aone-dimensional tensor with 9 elements.


相应的稠密张量满足：

```
 dense.shape = dense_shape
dense[tuple(indices[i])] = values[i]
 
```

By convention,  `indices`  should be sorted in row-major order (or equivalentlylexicographic order on the tuples  `indices[i]` ). This is not enforced when `SparseTensor`  objects are constructed, but most ops assume correct ordering.If the ordering of sparse tensor  `st`  is wrong, a fixed version can beobtained by calling [ `tf.sparse.reorder(st)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reorder).

示例：稀疏张量

```
 SparseTensor(indices=[[0, 0], [1, 2]], values=[1, 2], dense_shape=[3, 4])
 
```

表示密集张量

```
 [[1, 0, 0, 0]
 [0, 0, 2, 0]
 [0, 0, 0, 0]]
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L115-L143)

```
 __init__(
    indices,
    values,
    dense_shape
)
 
```

Creates a  `SparseTensor` .

#### 参数：
- **`indices`** : A 2-D int64 tensor of shape  `[N, ndims]` .
- **`values`** : A 1-D tensor of any type and shape  `[N]` .
- **`dense_shape`** : A 1-D int64 tensor of shape  `[ndims]` .


## 属性


###  `dense_shape` 
A 1-D Tensor of int64 representing the shape of the dense tensor.

###  `dtype` 
The  `DType`  of elements in this tensor.

###  `graph` 
The  `Graph`  that contains the index, value, and dense_shape tensors.

###  `indices` 
The indices of non-zero values in the represented dense tensor.

#### 返回：
A 2-D Tensor of int64 with dense_shape  `[N, ndims]` , where  `N`  is the  number of non-zero values in the tensor, and  `ndims`  is the rank.

###  `op` 
The  `Operation`  that produces  `values`  as an output.

###  `shape` 
Get the  `TensorShape`  representing the shape of the dense tensor.

#### 返回：
A  `TensorShape`  object.

###  `values` 
The non-zero values in the represented dense tensor.

#### 返回：
A 1-D Tensor of any data type.

## 方法


###  `__div__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L914-L920)

```
 __div__(
    sp_x,
    y
)
 
```

Component-wise divides a SparseTensor by a dense Tensor.

*Limitation*: this Op only broadcasts the dense side to the sparse side, but notthe other direction.

#### 参数：
- **`sp_indices`** : A  `Tensor`  of type  `int64` .2-D.   `N x R`  matrix with the indices of non-empty values in aSparseTensor, possibly not in canonical ordering.
- **`sp_values`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,  `uint64` .1-D.   `N`  non-empty values corresponding to  `sp_indices` .
- **`sp_shape`** : A  `Tensor`  of type  `int64` .1-D.  Shape of the input SparseTensor.
- **`dense`** : A  `Tensor` . Must have the same type as  `sp_values` . `R` -D.  The dense Tensor operand.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `sp_values` .

###  `__mul__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L914-L920)

```
 __mul__(
    sp_x,
    y
)
 
```

Component-wise multiplies a SparseTensor by a dense Tensor.

The output locations corresponding to the implicitly zero elements in the sparsetensor will be zero (i.e., will not take up storage space), regardless of thecontents of the dense tensor (even if it's +/-INF and that INF*0 == NaN).

*Limitation*: this Op only broadcasts the dense side to the sparse side, but notthe other direction.

#### 参数：
- **`sp_indices`** : A  `Tensor`  of type  `int64` .2-D.   `N x R`  matrix with the indices of non-empty values in aSparseTensor, possibly not in canonical ordering.
- **`sp_values`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,  `uint64` .1-D.   `N`  non-empty values corresponding to  `sp_indices` .
- **`sp_shape`** : A  `Tensor`  of type  `int64` .1-D.  Shape of the input SparseTensor.
- **`dense`** : A  `Tensor` . Must have the same type as  `sp_values` . `R` -D.  The dense Tensor operand.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `sp_values` .

###  `__truediv__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L914-L920)

```
 __truediv__(
    sp_x,
    y
)
 
```

Internal helper function for 'sp_t / dense_t'.

###  `consumers` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L250-L251)

```
 consumers()
 
```

###  `eval` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L205-L228)

```
 eval(
    feed_dict=None,
    session=None
)
 
```

Evaluates this sparse tensor in a  `Session` .

Calling this method will execute all preceding operations thatproduce the inputs needed for the operation that produces thistensor.

*N.B.* Before invoking [ `SparseTensor.eval()` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor#eval), its graph must have beenlaunched in a session, and either a default session must beavailable, or  `session`  must be specified explicitly.

#### 参数：
- **`feed_dict`** : A dictionary that maps  `Tensor`  objects to feed values. See `tf.Session.run`  for a description of the valid feed values.
- **`session`** : (Optional.) The  `Session`  to be used to evaluate this sparsetensor. If none, the default session will be used.


#### 返回：
A  `SparseTensorValue`  object.

###  `from_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L105-L113)

```
 @classmethod
from_value(
    cls,
    sparse_tensor_value
)
 
```

###  `get_shape` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L145-L151)

```
 get_shape()
 
```

Get the  `TensorShape`  representing the shape of the dense tensor.

#### 返回：
A  `TensorShape`  object.

