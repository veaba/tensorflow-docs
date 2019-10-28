## Class Optimizer
Updated base class for optimizers.
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Optimizer`
- Class `tf.compat.v2.keras.optimizers.Optimizer`
- Class `tf.compat.v2.optimizers.Optimizer`
- Class `tf.optimizers.Optimizer`
This class defines the API to add Ops to train a model. You never use this class directly, but instead instantiate one of its subclasses such as `tf.keras.optimizers.SGD`, `tf.keras.optimizers.Adam`.
### Usage

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
### Custom training loop with Keras models
In Keras models, sometimes variables are created when the model is first called, instead of construction time. Examples include 1) sequential models without input shape pre-defined, or 2) subclassed models. Pass var_list as callable in these cases.
#### Example:

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
### Processing gradients before applying them.
