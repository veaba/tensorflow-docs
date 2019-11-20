[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/training_util.py#L40-L68)  
---  
  
Small helper to get the global step.

    
    
    tf.compat.v1.train.global_step(
        sess,
        global_step_tensor
    )
    
    
    
    # Create a variable to hold the global_step.
    global_step_tensor = tf.Variable(10, trainable=False, name='global_step')
    # Create a session.
    sess = tf.compat.v1.Session()
    # Initialize the variable
    sess.run(global_step_tensor.initializer)
    # Get the variable value.
    print('global_step: %s' % tf.compat.v1.train.global_step(sess,
    global_step_tensor))
    
    global_step: 10
    

#### Args:

  * **`sess`** : A TensorFlow `Session` object.
  * **`global_step_tensor`** : `Tensor` or the `name` of the operation that contains the global step.

#### Returns:

The global step value.

