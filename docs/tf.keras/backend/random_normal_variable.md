[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/random_normal_variable)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L1481-L1516)  
---|---  
  
Instantiates a variable with values drawn from a normal distribution.

### Aliases:

  * [`tf.compat.v1.keras.backend.random_normal_variable`](/api_docs/python/tf/keras/backend/random_normal_variable)
  * [`tf.compat.v2.keras.backend.random_normal_variable`](/api_docs/python/tf/keras/backend/random_normal_variable)

    
    
    tf.keras.backend.random_normal_variable(
        shape,
        mean,
        scale,
        dtype=None,
        name=None,
        seed=None
    )
    

#### Arguments:

  * **`shape`** : Tuple of integers, shape of returned Keras variable.
  * **`mean`** : Float, mean of the normal distribution.
  * **`scale`** : Float, standard deviation of the normal distribution.
  * **`dtype`** : String, dtype of returned Keras variable.
  * **`name`** : String, name of returned Keras variable.
  * **`seed`** : Integer, random seed.

#### Returns:

A Keras variable, filled with drawn samples.

#### Example:

    
    
        # TensorFlow example
        >>> kvar = K.random_normal_variable((2,3), 0, 1)
        >>> kvar
        <tensorflow.python.ops.variables.Variable object at 0x10ab12dd0>
        >>> K.eval(kvar)
        array([[ 1.19591331,  0.68685907, -0.63814116],
               [ 0.92629528,  0.28055015,  1.70484698]], dtype=float32)
    

