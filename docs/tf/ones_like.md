创建所有元素都设置为一的张量。

```
 tf.ones_like(
    input,
    dtype=None,
    name=None
)
 
```

### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
Given a single tensor ( `tensor` ), this operation returns a tensor of thesame type and shape as  `tensor`  with all elements set to 1. Optionally,you can use  `dtype`  to specify a new type for the returned tensor.

#### 例如：


```
 tensor = tf.constant([[1, 2, 3], [4, 5, 6]])
tf.ones_like(tensor)  # [[1, 1, 1], [1, 1, 1]]
 
```

#### 参数：
- **`input`** : A  `Tensor` .
- **`dtype`** : A type for the returned  `Tensor` . Must be  `float16` ,  `float32` , `float64` ,  `int8` ,  `uint8` ,  `int16` ,  `uint16` ,  `int32` ,  `int64` , `complex64` ,  `complex128` ,  `bool`  or  `string` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  with all elements set to one.

