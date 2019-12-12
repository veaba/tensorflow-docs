获取全局步骤的小助手。

```
 tf.compat.v1.train.global_step(    sess,    global_step_tensor) 
```

```
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
 
```

#### 参数：
- **`sess`** : A TensorFlow  `Session`  object.
- **`global_step_tensor`** :   `Tensor`  or the  `name`  of the operation that containsthe global step.


#### 返回：
全局步长值。

