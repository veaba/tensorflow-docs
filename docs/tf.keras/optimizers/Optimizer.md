

## Class  `Optimizer` 
为优化器更新了基类。

**别名** : [ `tf.compat.v1.keras.optimizers.Optimizer` ](/api_docs/python/tf/keras/optimizers/Optimizer), [ `tf.compat.v2.keras.optimizers.Optimizer` ](/api_docs/python/tf/keras/optimizers/Optimizer), [ `tf.compat.v2.optimizers.Optimizer` ](/api_docs/python/tf/keras/optimizers/Optimizer), [ `tf.optimizers.Optimizer` ](/api_docs/python/tf/keras/optimizers/Optimizer)

This class defines the API to add Ops to train a model.  You never use thisclass directly, but instead instantiate one of its subclasses such as[ `tf.keras.optimizers.SGD` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/SGD), [ `tf.keras.optimizers.Adam` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Adam).

### 用法


```
 # Create an optimizer with the desired parameters.
opt = tf.keras.optimizers.SGD(learning_rate=0.1)
# `loss` is a callable that takes no argument and returns the value
# to minimize.
loss = lambda: 3 * var1 * var1 + 2 * var2 * var2
# In graph mode, returns op that minimizes the loss by updating the listed
# variables.
opt_op = opt.minimize(loss, var_list=[var1, var2])
opt_op.run()
# In eager mode, simply call minimize to update the list of variables.
opt.minimize(loss, var_list=[var1, var2])
 
```

### 带Keras模型的定制训练循环
In Keras models, sometimes variables are created when the model is firstcalled, instead of construction time. Examples include 1) sequential modelswithout input shape pre-defined, or 2) subclassed models. Pass var_list ascallable in these cases.

#### 示例：


```
 opt = tf.keras.optimizers.SGD(learning_rate=0.1)
model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(num_hidden, activation='relu'))
model.add(tf.keras.layers.Dense(num_classes, activation='sigmoid'))
loss_fn = lambda: tf.keras.losses.mse(model(input), output)
var_list_fn = lambda: model.trainable_weights
for input, output in data:
  opt.minimize(loss_fn, var_list_fn)
 
```

### 在应用渐变之前处理渐变。
Calling  `minimize()`  takes care of both computing the gradients andapplying them to the variables.  If you want to process the gradientsbefore applying them you can instead use the optimizer in three steps:

1. Compute the gradients with [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape).
2. Process the gradients as you wish.
3. Apply the processed gradients with  `apply_gradients()` .


#### 示例：


```
 # Create an optimizer.
opt = tf.keras.optimizers.SGD(learning_rate=0.1)

# Compute the gradients for a list of variables.
with tf.GradientTape() as tape:
  loss = <call_loss_function>
vars = <list_of_variables>
grads = tape.gradient(loss, vars)
processed_grads = [process_gradient(g) for g in grads]
grads_and_vars = zip(processed_grads, var_list)

# grads_and_vars is a list of tuples (gradient, variable).  Do whatever you
# need to the 'gradient' part, for example cap them, etc.
capped_grads_and_vars = [(MyCapper(gv[0]), gv[1]) for gv in grads_and_vars]

# Ask the optimizer to apply the capped gradients.
opt.apply_gradients(capped_grads_and_vars)
 
```

