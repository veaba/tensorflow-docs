[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/inputs/numpy_io.py)  
---  
  
Returns input function that would feed dict of numpy arrays into the model.

    
    
    tf.compat.v1.estimator.inputs.numpy_input_fn(
        x,
        y=None,
        batch_size=128,
        num_epochs=1,
        shuffle=None,
        queue_capacity=1000,
        num_threads=1
    )
    

This returns a function outputting `features` and `targets` based on the dict
of numpy arrays. The dict `features` has the same keys as the `x`. The dict
`targets` has the same keys as the `y` if `y` is a dict.

#### Example:

    
    
    age = np.arange(4) * 1.0
    height = np.arange(32, 36)
    x = {'age': age, 'height': height}
    y = np.arange(-32, -28)
    
    with tf.Session() as session:
      input_fn = numpy_io.numpy_input_fn(
          x, y, batch_size=2, shuffle=False, num_epochs=1)
    

#### Args:

  * **`x`** : numpy array object or dict of numpy array objects. If an array, the array will be treated as a single feature.
  * **`y`** : numpy array object or dict of numpy array object. `None` if absent.
  * **`batch_size`** : Integer, size of batches to return.
  * **`num_epochs`** : Integer, number of epochs to iterate over data. If `None` will run forever.
  * **`shuffle`** : Boolean, if True shuffles the queue. Avoid shuffle at prediction time.
  * **`queue_capacity`** : Integer, size of queue to accumulate.
  * **`num_threads`** : Integer, number of threads used for reading and enqueueing. In order to have predicted and repeatable order of reading and enqueueing, such as in prediction and evaluation mode, `num_threads` should be 1.

#### Returns:

Function, that has signature of ()->(dict of `features`, `targets`)

#### Raises:

  * **`ValueError`** : if the shape of `y` mismatches the shape of values in `x` (i.e., values in `x` have same shape).
  * **`ValueError`** : if duplicate keys are in both `x` and `y` when `y` is a dict.
  * **`ValueError`** : if x or y is an empty dict.
  * **`TypeError`** : `x` is not a dict or array.
  * **`ValueError`** : if 'shuffle' is not provided or a bool.

