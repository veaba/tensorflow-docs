Instantiates a variable with values drawn from a uniform distribution.

**Aliases** : [ `tf.compat.v1.keras.backend.random_uniform_variable` ](/api_docs/python/tf/keras/backend/random_uniform_variable), [ `tf.compat.v2.keras.backend.random_uniform_variable` ](/api_docs/python/tf/keras/backend/random_uniform_variable)

```
 tf.keras.backend.random_uniform_variable(
    shape,
    low,
    high,
    dtype=None,
    name=None,
    seed=None
)
 
```

#### Arguments:
- **`shape`** : Tuple of integers, shape of returned Keras variable.
- **`low`** : Float, lower boundary of the output interval.
- **`high`** : Float, upper boundary of the output interval.
- **`dtype`** : String, dtype of returned Keras variable.
- **`name`** : String, name of returned Keras variable.
- **`seed`** : Integer, random seed.


#### Returns:
A Keras variable, filled with drawn samples.

#### Example:


```
     # TensorFlow example
    >>> kvar = K.random_uniform_variable((2,3), 0, 1)
    >>> kvar
    <tensorflow.python.ops.variables.Variable object at 0x10ab40b10>
    >>> K.eval(kvar)
    array([[ 0.10940075,  0.10047495,  0.476143  ],
           [ 0.66137183,  0.00869417,  0.89220798]], dtype=float32)
 
```

