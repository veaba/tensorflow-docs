输出张量和目标张量之间的范畴交叉熵。

**别名** : [ `tf.compat.v1.keras.backend.categorical_crossentropy` ](/api_docs/python/tf/keras/backend/categorical_crossentropy), [ `tf.compat.v2.keras.backend.categorical_crossentropy` ](/api_docs/python/tf/keras/backend/categorical_crossentropy)

```
 tf.keras.backend.categorical_crossentropy(
    target,
    output,
    from_logits=False,
    axis=-1
)
 
```

#### 参数：
- **`target`** : A tensor of the same shape as  `output` .
- **`output`** : A tensor resulting from a softmax(unless  `from_logits`  is True, in whichcase  `output`  is expected to be the logits).
- **`from_logits`** : Boolean, whether  `output`  is theresult of a softmax, or is a tensor of logits.
- **`axis`** : Int specifying the channels axis.  `axis=-1`  corresponds to dataformat  `channels_last', and` axis=1 `corresponds to data format` channels_first`.


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if  `axis`  is neither -1 nor one of the axes of  `output` .


#### 示例：


```
     import tensorflow as tf
    from tensorflow.keras import backend as K
    a = tf.constant([1., 0., 0., 0., 1., 0., 0., 0., 1.], shape=[3,3])
    print("a: ", a)
    b = tf.constant([.9, .05, .05, .5, .89, .6, .05, .01, .94], shape=[3,3])
    print("b: ", b)
    loss = K.categorical_crossentropy(a, b)
    print('Loss: ', loss) #Loss: tf.Tensor([0.10536055 0.8046684  0.06187541], shape=(3,), dtype=float32)
    loss = K.categorical_crossentropy(a, a)
    print('Loss: ', loss) #Loss:  tf.Tensor([1.1920929e-07 1.1920929e-07 1.1920929e-07], shape=(3,), dtype=float32)
 
```

