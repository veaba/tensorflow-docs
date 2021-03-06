

## Class  `Subtract` 
减去两个输入的层。

**别名** : [ `tf.compat.v1.keras.layers.Subtract` ](/api_docs/python/tf/keras/layers/Subtract), [ `tf.compat.v2.keras.layers.Subtract` ](/api_docs/python/tf/keras/layers/Subtract)

It takes as input a list of tensors of size 2,both of the same shape, and returns a single tensor, (inputs[0] - inputs[1]),also of the same shape.

#### 示例：


```
     import keras

    input1 = keras.layers.Input(shape=(16,))
    x1 = keras.layers.Dense(8, activation='relu')(input1)
    input2 = keras.layers.Input(shape=(32,))
    x2 = keras.layers.Dense(8, activation='relu')(input2)
    # Equivalent to subtracted = keras.layers.subtract([x1, x2])
    subtracted = keras.layers.Subtract()([x1, x2])

    out = keras.layers.Dense(4)(subtracted)
    model = keras.models.Model(inputs=[input1, input2], outputs=out)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

```
 __init__(**kwargs)
 
```

Functional interface to the  `Subtract`  layer.

**别名** : [ `tf.compat.v1.keras.layers.subtract` ](/api_docs/python/tf/keras/layers/subtract), [ `tf.compat.v2.keras.layers.subtract` ](/api_docs/python/tf/keras/layers/subtract)

```
 tf.keras.layers.subtract(
    inputs,
    **kwargs
)
 
```

#### 参数：
- **`inputs`** : A list of input tensors (exactly 2).
- **`**kwargs`** : Standard layer keyword arguments.


#### 返回：
A tensor, the difference of the inputs.

#### 示例：


```
     import keras

    input1 = keras.layers.Input(shape=(16,))
    x1 = keras.layers.Dense(8, activation='relu')(input1)
    input2 = keras.layers.Input(shape=(32,))
    x2 = keras.layers.Dense(8, activation='relu')(input2)
    subtracted = keras.layers.subtract([x1, x2])

    out = keras.layers.Dense(4)(subtracted)
    model = keras.models.Model(inputs=[input1, input2], outputs=out)
 
```

