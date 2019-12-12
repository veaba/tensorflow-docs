

## Class  `Embedding` 
将正整数（索引）转换为固定大小的密集向量。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Embedding` ](/api_docs/python/tf/keras/layers/Embedding), [ `tf.compat.v2.keras.layers.Embedding` ](/api_docs/python/tf/keras/layers/Embedding)

### 在指南中使用：
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### 在教程中使用：
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Text classification with an RNN](https://tensorflow.google.cn/tutorials/text/text_classification_rnn)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [Word embeddings](https://tensorflow.google.cn/tutorials/text/word_embeddings)
- [Text classification with preprocessed text: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification)
e.g.  `[[4], [20]] -> [[0.25, 0.1], [0.6, -0.2]]` 

此层只能用作模型中的第一层。

#### 示例：


```
 model = Sequential()
model.add(Embedding(1000, 64, input_length=10))
# the model will take as input an integer matrix of size (batch,
# input_length).
# the largest integer (i.e. word index) in the input should be no larger
# than 999 (vocabulary size).
# now model.output_shape == (None, 10, 64), where None is the batch
# dimension.

input_array = np.random.randint(1000, size=(32, 10))

model.compile('rmsprop', 'mse')
output_array = model.predict(input_array)
assert output_array.shape == (32, 10, 64)
 
```

#### 参数：
- **`input_dim`** : int > 0. Size of the vocabulary,i.e. maximum integer index + 1.
- **`output_dim`** : int >= 0. Dimension of the dense embedding.
- **`embeddings_initializer`** : Initializer for the  `embeddings`  matrix.
- **`embeddings_regularizer`** : Regularizer function applied tothe  `embeddings`  matrix.
- **`embeddings_constraint`** : Constraint function applied tothe  `embeddings`  matrix.
- **`mask_zero`** : Whether or not the input value 0 is a special "padding"value that should be masked out.This is useful when using recurrent layerswhich may take variable length input.If this is  `True`  then all subsequent layersin the model need to support masking or an exception will be raised.If mask_zero is set to True, as a consequence, index 0 cannot beused in the vocabulary (input_dim should equal size ofvocabulary + 1).
- **`input_length`** : Length of input sequences, when it is constant.This argument is required if you are going to connect `Flatten`  then  `Dense`  layers upstream(without it, the shape of the dense outputs cannot be computed).


#### 输入形状：
2D tensor with shape:  `(batch_size, input_length)` .

#### 输出形状：
3D tensor with shape:  `(batch_size, input_length, output_dim)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/embeddings.py#L91-L122)

```
 __init__(
    input_dim,
    output_dim,
    embeddings_initializer='uniform',
    embeddings_regularizer=None,
    activity_regularizer=None,
    embeddings_constraint=None,
    mask_zero=False,
    input_length=None,
    **kwargs
)
 
```

