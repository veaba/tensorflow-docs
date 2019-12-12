在张量的形状中插入尺寸1。

```
 tf.expand_dims(
    input,
    axis,
    name=None
)
 
```

### 在指南中使用：
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)


### 在教程中使用：
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
Given a tensor  `input` , this operation inserts a dimension of 1 at thedimension index  `axis`  of  `input` 's shape. The dimension index  `axis`  startsat zero; if you specify a negative number for  `axis`  it is counted backwardfrom the end.

This operation is useful if you want to add a batch dimension to a singleelement. For example, if you have a single image of shape  `[height, width,channels]` , you can make it a batch of 1 image with  `expand_dims(image, 0)` ,which will make the shape  `[1, height, width, channels]` .

#### 其他示例：


```
 # 't' is a tensor of shape [2]
tf.shape(tf.expand_dims(t, 0))  # [1, 2]
tf.shape(tf.expand_dims(t, 1))  # [2, 1]
tf.shape(tf.expand_dims(t, -1))  # [2, 1]

# 't2' is a tensor of shape [2, 3, 5]
tf.shape(tf.expand_dims(t2, 0))  # [1, 2, 3, 5]
tf.shape(tf.expand_dims(t2, 2))  # [2, 3, 1, 5]
tf.shape(tf.expand_dims(t2, 3))  # [2, 3, 5, 1]
 
```

此操作要求：

 `-1-input.dims() <= dim <= input.dims()` 

This operation is related to  `squeeze()` , which removes dimensions ofsize 1.

#### 参数：
- **`input`** : A  `Tensor` .
- **`axis`** : 0-D (scalar). Specifies the dimension index at which to expand theshape of  `input` . Must be in the range  `[-rank(input) - 1, rank(input)]` .
- **`name`** : The name of the output  `Tensor`  (optional).


#### 返回：
A  `Tensor`  with the same data as  `input` , but its shape has an additionaldimension of size 1 added.

