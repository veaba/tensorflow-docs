

## Class  `TimeDistributed` 
这个包装器允许对输入的每个时态片应用一个层。

Inherits From: [ `Wrapper` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Wrapper)

**别名** : [ `tf.compat.v1.keras.layers.TimeDistributed` ](/api_docs/python/tf/keras/layers/TimeDistributed), [ `tf.compat.v2.keras.layers.TimeDistributed` ](/api_docs/python/tf/keras/layers/TimeDistributed)

The input should be at least 3D, and the dimension of index onewill be considered to be the temporal dimension.

Consider a batch of 32 samples,where each sample is a sequence of 10 vectors of 16 dimensions.The batch input shape of the layer is then  `(32, 10, 16)` ,and the  `input_shape` , not including the samples dimension, is  `(10, 16)` .

You can then use  `TimeDistributed`  to apply a  `Dense`  layerto each of the 10 timesteps, independently:

```
 # as the first layer in a model
model = Sequential()
model.add(TimeDistributed(Dense(8), input_shape=(10, 16)))
# now model.output_shape == (None, 10, 8)
 
```

The output will then have shape  `(32, 10, 8)` .

In subsequent layers, there is no need for the  `input_shape` :

```
 model.add(TimeDistributed(Dense(32)))
# now model.output_shape == (None, 10, 32)
 
```

The output will then have shape  `(32, 10, 32)` .

 `TimeDistributed`  can be used with arbitrary layers, not just  `Dense` ,for instance with a  `Conv2D`  layer:

```
 model = Sequential()
model.add(TimeDistributed(Conv2D(64, (3, 3)),
                          input_shape=(10, 299, 299, 3)))
 
```

#### 参数：
- **`layer`** : a layer instance.


#### 调用参数：
- **`inputs`** : Input tensor.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode or in inference mode. This argument is passed to thewrapped layer (only if the layer supports this argument).
- **`mask`** : Binary tensor of shape  `(samples, timesteps)`  indicating whethera given timestep should be masked. This argument is passed to thewrapped layer (only if the layer supports this argument).


#### 加薪：
- **`ValueError`** : If not initialized with a  `Layer`  instance.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/wrappers.py#L147-L159)

```
 __init__(
    layer,
    **kwargs
)
 
```

