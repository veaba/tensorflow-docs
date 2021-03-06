将张量拆分为子张量。

**别名** : [ `tf.compat.v1.split` ](/api_docs/python/tf/split), [ `tf.compat.v2.split` ](/api_docs/python/tf/split)

```
 tf.split(
    value,
    num_or_size_splits,
    axis=0,
    num=None,
    name='split'
)
 
```

### 在指南中使用：
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)


### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
If  `num_or_size_splits`  is an integer, then  `value`  is split along dimension `axis`  into  `num_split`  smaller tensors. This requires that  `num_split`  evenlydivides  `value.shape[axis]` .

If  `num_or_size_splits`  is a 1-D Tensor (or list), we call it  `size_splits` and  `value`  is split into  `len(size_splits)`  elements. The shape of the  `i` -thelement has the same size as the  `value`  except along dimension  `axis`  wherethe size is  `size_splits[i]` .

#### 例如：


```
 # 'value' is a tensor with shape [5, 30]
# Split 'value' into 3 tensors with sizes [4, 15, 11] along dimension 1
split0, split1, split2 = tf.split(value, [4, 15, 11], 1)
tf.shape(split0)  # [5, 4]
tf.shape(split1)  # [5, 15]
tf.shape(split2)  # [5, 11]
# Split 'value' into 3 tensors along dimension 1
split0, split1, split2 = tf.split(value, num_or_size_splits=3, axis=1)
tf.shape(split0)  # [5, 10]
 
```

#### 参数：
- **`value`** : The  `Tensor`  to split.
- **`num_or_size_splits`** : Either an integer indicating the number of splits alongsplit_dim or a 1-D integer  `Tensor`  or Python list containing the sizes ofeach output tensor along split_dim. If a scalar then it must evenly divide `value.shape[axis]` ; otherwise the sum of sizes along the split dimensionmust match that of the  `value` .
- **`axis`** : An integer or scalar  `int32`   `Tensor` . The dimension along which tosplit. Must be in the range  `[-rank(value), rank(value))` . Defaults to 0.
- **`num`** : Optional, used to specify the number of outputs when it cannot beinferred from the shape of  `size_splits` .
- **`name`** : A name for the operation (optional).


#### 返回：
if  `num_or_size_splits`  is a scalar returns  `num_or_size_splits`   `Tensor` objects; if  `num_or_size_splits`  is a 1-D Tensor returns `num_or_size_splits.get_shape[0]`   `Tensor`  objects resulting from splitting `value` .

#### 加薪：
- **`ValueError`** : If  `num`  is unspecified and cannot be inferred.
