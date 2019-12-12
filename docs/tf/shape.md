返回张量的形状。

```
 tf.shape(    input,    out_type=tf.dtypes.int32,    name=None) 
```

### 在指南中使用：
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### 在教程中使用：
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
This operation returns a 1-D integer tensor representing the shape of  `input` .

#### 例如：


```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.shape(t)  # [2, 2, 3]
 
```

#### 参数：
- **`input`** : A  `Tensor`  or  `SparseTensor` .
- **`out_type`** : (Optional) The specified output type of the operation ( `int32`  or `int64` ). Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `out_type` .

