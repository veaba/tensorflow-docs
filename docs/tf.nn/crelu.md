计算连接的relu。

```
 tf.nn.crelu(
    features,
    axis=-1,
    name=None
)
 
```

Concatenates a ReLU which selects only the positive part of the activationwith a ReLU which selects only the *negative* part of the activation.Note that as a result this non-linearity doubles the depth of the activations.Source: [Understanding and Improving Convolutional Neural Networks viaConcatenated Rectified Linear Units. W. Shang, etal.](https://arxiv.org/abs/1603.05201)

#### 参数：
- **`features`** : A  `Tensor`  with type  `float` ,  `double` ,  `int32` ,  `int64` ,  `uint8` , `int16` , or  `int8` .
- **`name`** : A name for the operation (optional).
- **`axis`** : The axis that the output values are concatenated along. Default is -1.


#### 返回：
A  `Tensor`  with the same type as  `features` .

