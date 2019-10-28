## Class Optimizer
Base class for optimizers.
This class defines the API to add Ops to train a model. You never use this class directly, but instead instantiate one of its subclasses such as `GradientDescentOptimizer`, `AdagradOptimizer`, or `MomentumOptimizer`.
### Usage

```
 # Create an optimizer with the desired parameters.
opt = GradientDescentOptimizer(learning_rate=0.1)
# Add Ops to the graph to minimize a cost by updating a list of variables.
# "cost" is a Tensor, and the list of variables contains tf.Variable
# objects.
opt_op = opt.minimize(cost, var_list=<list of variables>)
```
In the training program you will just have to run the returned Op.

```
 # Execute opt_op to do one step of training:
opt_op.run()
```
### Processing gradients before applying them.
