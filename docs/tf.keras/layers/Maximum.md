

## Class  `Maximum` 
Layer that computes the maximum (element-wise) a list of inputs.



### Aliases:

- Class [ `tf.compat.v1.keras.layers.Maximum` ](/api_docs/python/tf/keras/layers/Maximum)

- Class [ `tf.compat.v2.keras.layers.Maximum` ](/api_docs/python/tf/keras/layers/Maximum)

It takes as input a list of tensors,
all of the same shape, and returns
a single tensor (also of the same shape).



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)



```
 __init__(**kwargs)
 
```

Functional interface to the  `Maximum`  layer that computes



### Aliases:

- [ `tf.compat.v1.keras.layers.maximum` ](/api_docs/python/tf/keras/layers/maximum)

- [ `tf.compat.v2.keras.layers.maximum` ](/api_docs/python/tf/keras/layers/maximum)



```
 tf.keras.layers.maximum(
    inputs,
    **kwargs
)
 
```

the maximum (element-wise) list of  `inputs` .



#### For example:


```
 input1 = tf.keras.layers.Input(shape=(16,))
x1 = tf.keras.layers.Dense(8, activation='relu')(input1) #shape=(None, 8)
input2 = tf.keras.layers.Input(shape=(32,))
x2 = tf.keras.layers.Dense(8, activation='relu')(input2) #shape=(None, 8)
max_inp=tf.keras.layers.maximum([x1,x2]) #shape=(None, 8)
out = tf.keras.layers.Dense(4)(max_inp)
model = tf.keras.models.Model(inputs=[input1, input2], outputs=out)
 
```



#### Arguments:

- **`inputs`** : A list of input tensors (at least 2) of same shape.

- **`**kwargs`** : Standard layer keyword arguments.



#### Returns:
A tensor (of same shape as input tensor) with the element-wise
maximum of the inputs.



#### Raises:

- **`ValueError`** : If input tensors are of different shape.

