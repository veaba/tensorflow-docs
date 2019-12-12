

## Class  `Add` 
添加输入列表的层。

**别名** : [ `tf.compat.v1.keras.layers.Add` ](/api_docs/python/tf/keras/layers/Add), [ `tf.compat.v2.keras.layers.Add` ](/api_docs/python/tf/keras/layers/Add)

It takes as input a list of tensors,all of the same shape, and returnsa single tensor (also of the same shape).

#### 示例：


```
     import keras

    input1 = keras.layers.Input(shape=(16,))
    x1 = keras.layers.Dense(8, activation='relu')(input1)
    input2 = keras.layers.Input(shape=(32,))
    x2 = keras.layers.Dense(8, activation='relu')(input2)
    # equivalent to `added = keras.layers.add([x1, x2])`
    added = keras.layers.Add()([x1, x2])
    out = keras.layers.Dense(4)(added)
    model = keras.models.Model(inputs=[input1, input2], outputs=out)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

```
 __init__(**kwargs)
 
```

Functional interface to the  `Add`  layer.

**别名** : [ `tf.compat.v1.keras.layers.add` ](/api_docs/python/tf/keras/layers/add), [ `tf.compat.v2.keras.layers.add` ](/api_docs/python/tf/keras/layers/add)

```
 tf.keras.layers.add(
    inputs,
    **kwargs
)
 
```

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


#### 参数：
- **`inputs`** : A list of input tensors (at least 2).
- **`**kwargs`** : Standard layer keyword arguments.


#### 返回：
A tensor, the sum of the inputs.

#### 示例：


```
     import keras

    input1 = keras.layers.Input(shape=(16,))
    x1 = keras.layers.Dense(8, activation='relu')(input1)
    input2 = keras.layers.Input(shape=(32,))
    x2 = keras.layers.Dense(8, activation='relu')(input2)
    added = keras.layers.add([x1, x2])

    out = keras.layers.Dense(4)(added)
    model = keras.models.Model(inputs=[input1, input2], outputs=out)
 
```

