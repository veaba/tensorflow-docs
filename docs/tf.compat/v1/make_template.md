Given an arbitrary function, wrap it so that it does variable sharing.

```
 tf.compat.v1.make_template(
    name_,
    func_,
    create_scope_now_=False,
    unique_name_=None,
    custom_getter_=None,
    **kwargs
)
 
```

This wraps  `func_`  in a Template and partially evaluates it. Templates arefunctions that create variables the first time they are called and reuse themthereafter. In order for  `func_`  to be compatible with a  `Template`  it musthave the following properties:

- The function should create all trainable variables and any variables thatshould be reused by calling [ `tf.compat.v1.get_variable` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable). If a trainablevariable iscreated using [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable), then a ValueError will be thrown. Variablesthat are intended to be locals can be created by specifying[ `tf.Variable(..., trainable=false)` ](https://tensorflow.google.cn/api_docs/python/tf/Variable).
- The function may use variable scopes and other templates internally tocreate and reuse variables, but it shouldn't use[ `tf.compat.v1.global_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/global_variables) tocapture variables that are defined outside of the scope of the function.
- Internal scopes and variable names should not depend on any arguments thatare not supplied to  `make_template` . In general you will get a ValueErrortelling you that you are trying to reuse a variable that doesn't existif you make a mistake.
In the following example, both  `z`  and  `w`  will be scaled by the same  `y` . Itis important to note that if we didn't assign  `scalar_name`  and used adifferent name for z and w that a  `ValueError`  would be thrown because itcouldn't reuse the variable.

```
 def my_op(x, scalar_name):
  var1 = tf.compat.v1.get_variable(scalar_name,
                         shape=[],
                         initializer=tf.compat.v1.constant_initializer(1))
  return x * var1

scale_by_y = tf.compat.v1.make_template('scale_by_y', my_op, scalar_name='y')

z = scale_by_y(input1)
w = scale_by_y(input2)
 
```

As a safe-guard, the returned function will raise a  `ValueError`  after thefirst call if trainable variables are created by calling [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable).

If all of these are true, then 2 properties are enforced by the template:

1. Calling the same template multiple times will share all non-localvariables.
2. Two different templates are guaranteed to be unique, unless you reenter thesame variable scope as the initial definition of a template and redefineit. An examples of this exception:


```
 def my_op(x, scalar_name):
  var1 = tf.compat.v1.get_variable(scalar_name,
                         shape=[],
                         initializer=tf.compat.v1.constant_initializer(1))
  return x * var1

with tf.compat.v1.variable_scope('scope') as vs:
  scale_by_y = tf.compat.v1.make_template('scale_by_y', my_op,
  scalar_name='y')
  z = scale_by_y(input1)
  w = scale_by_y(input2)

# Creates a template that reuses the variables above.
with tf.compat.v1.variable_scope(vs, reuse=True):
  scale_by_y2 = tf.compat.v1.make_template('scale_by_y', my_op,
  scalar_name='y')
  z2 = scale_by_y2(input1)
  w2 = scale_by_y2(input2)
 
```

Depending on the value of  `create_scope_now_` , the full variable scope may becaptured either at the time of first call or at the time of construction. Ifthis option is set to True, then all Tensors created by repeated calls to thetemplate will have an extra trailing _N+1 to their name, as the first time thescope is entered in the Template constructor no Tensors are created.


**Note:**   `name_` ,  `func_`  and  `create_scope_now_`  have a trailing underscore toreduce the likelihood of collisions with kwargs.


#### Args:
- **`name_`** : A name for the scope created by this template. If necessary, the namewill be made unique by appending  `_N`  to the name.
- **`func_`** : The function to wrap.
- **`create_scope_now_`** : Boolean controlling whether the scope should be createdwhen the template is constructed or when the template is called. Defaultis False, meaning the scope is created when the template is called.
- **`unique_name_`** : When used, it overrides name_ and is not made unique. If atemplate of the same scope/unique_name already exists and reuse is false,an error is raised. Defaults to None.
- **`custom_getter_`** : Optional custom getter for variables used in  `func_` . Seethe [ `tf.compat.v1.get_variable` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable)  `custom_getter`  documentation for moreinformation.
- **`**kwargs`** : Keyword arguments to apply to  `func_` .


#### Returns:
A function to encapsulate a set of variables which should be created onceand reused. An enclosing scope will be created either when  `make_template` is called or when the result is called, depending on the value of `create_scope_now_` . Regardless of the value, the first time the templateis called it will enter the scope with no reuse, and call  `func_`  to createvariables, which are guaranteed to be unique. All subsequent calls willre-enter the scope and reuse those variables.

#### Raises:
- **`ValueError`** : if  `name_`  is None.
