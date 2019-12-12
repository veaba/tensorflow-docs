Parses a single  `Example`  proto.

```
 tf.io.parse_single_example(    serialized,    features,    example_names=None,    name=None) 
```

### 在教程中使用：
- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)
Similar to  `parse_example` , except:

For dense tensors, the returned  `Tensor`  is identical to the output of `parse_example` , except there is no batch dimension, the output shape is thesame as the shape given in  `dense_shape` .

For  `SparseTensor` s, the first (batch) column of the indices matrix is removed(the indices matrix is a column vector), the values vector is unchanged, andthe first ( `batch_size` ) entry of the shape vector is removed (it is now asingle element vector).

One might see performance advantages by batching  `Example`  protos with `parse_example`  instead of using this function directly.

#### 参数：
- **`serialized`** : A scalar string Tensor, a single serialized Example.See  `_parse_single_example_raw`  documentation for more details.
- **`features`** : A  `dict`  mapping feature keys to  `FixedLenFeature`  or `VarLenFeature`  values.
- **`example_names`** : (Optional) A scalar string Tensor, the associated name.See  `_parse_single_example_raw`  documentation for more details.
- **`name`** : A name for this operation (optional).


#### 返回：
A  `dict`  mapping feature keys to  `Tensor`  and  `SparseTensor`  values.

#### 加薪：
- **`ValueError`** : if any feature is invalid.
