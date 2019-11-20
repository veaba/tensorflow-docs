[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L740-L765)  
---  
  
A context manager for use when defining a Python op.

### Aliases:

  * [`tf.compat.v2.keras.backend.name_scope`](/api_docs/python/tf/keras/backend/name_scope)

    
    
    tf.keras.backend.name_scope(name)
    

This context manager pushes a name scope, which will make the name of all
operations added within it have a prefix.

For example, to define a new Python op called `my_op`:

    
    
    def my_op(a):
      with tf.name_scope("MyOp") as scope:
        a = tf.convert_to_tensor(a, name="a")
        # Define some computation that uses `a`.
        return foo_op(..., name=scope)
    

When executed, the Tensor `a` will have the name `MyOp/a`.

#### Args:

  * **`name`** : The prefix to use on all names created within the name scope.

#### Returns:

Name scope context manager.

