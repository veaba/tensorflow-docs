

## Class  `variable_scope` 
用于定义创建变量（层）的操作的上下文管理器。

This context manager validates that the (optional)  `values`  are from the samegraph, ensures that graph is the default graph, and pushes a name scope and avariable scope.

If  `name_or_scope`  is not None, it is used as is. If  `name_or_scope`  is None,then  `default_name`  is used.  In that case, if the same name has beenpreviously used in the same scope, it will be made unique by appending  `_N` to it.

Variable scope allows you to create new variables and to share already createdones while providing checks to not create or share by accident. For details,see the [Variable Scope How To](https://tensorflow.org/guide/variables), herewe present only a few basic examples.

创建新变量的简单示例：

```
 with tf.compat.v1.variable_scope("foo"):
    with tf.compat.v1.variable_scope("bar"):
        v = tf.compat.v1.get_variable("v", [1])
        assert v.name == "foo/bar/v:0"
 
```

如何安全地重新输入预先定义的变量作用域的简单示例：

```
 with)
      assert c.name == "foo/c:0"
 
```

Basic example of sharing a variable AUTO_REUSE:

```
 def foo():
  with tf.compat.v1.variable_scope("foo", reuse=tf.compat.v1.AUTO_REUSE):
    v = tf.compat.v1.get_variable("v", [1])
  return v

v1 = foo()  # Creates v.
v2 = foo()  # Gets the same, existing v.
assert v1 == v2
 
```

Basic example of sharing a variable with reuse=True:

```
 with tf.compat.v1.variable_scope("foo"):
    v = tf.compat.v1.get_variable("v", [1])
with tf.compat.v1.variable_scope("foo", reuse=True):
    v1 = tf.compat.v1.get_variable("v", [1])
assert v1 == v
 
```

通过捕获作用域和设置重用来共享变量：

```
 with tf.compat.v1.variable_scope("foo") as scope:
    v = tf.compat.v1.get_variable("v", [1])
    scope.reuse_variables()
    v1 = tf.compat.v1.get_variable("v", [1])
assert v1 == v
 
```

To prevent accidental sharing of variables, we raise an exception when gettingan existing variable in a non-reusing scope.

```
 with tf.compat.v1.variable_scope("foo"):
    v = tf.compat.v1.get_variable("v", [1])
    v1 = tf.compat.v1.get_variable("v", [1])
    #  Raises ValueError("... v already exists ...").
 
```

Similarly, we raise an exception when trying to get a variable that does notexist in reuse mode.

```
 with tf.compat.v1.variable_scope("foo", reuse=True):
    v = tf.compat.v1.get_variable("v", [1])
    #  Raises ValueError("... v does not exists ...").
 
```

Note that the  `reuse`  flag is inherited: if we open a reusing scope, then allits sub-scopes become reusing as well.

A note about name scoping: Setting  `reuse`  does not impact the naming of otherops such as mult. See related discussion on[github#6189](https://github.com/tensorflow/tensorflow/issues/6189)

Note that up to and including version 1.0, it was allowed (though explicitlydiscouraged) to pass False to the reuse argument, yielding undocumentedbehaviour slightly different from None. Starting at 1.1.0 passing None andFalse as reuse has exactly the same effect.

A note about using variable scopes in multi-threaded environment: Variablescopes are thread local, so one thread will not see another thread's currentscope. Also, when using  `default_name` , unique scopes names are also generatedonly on a per thread basis. If the same name was used within a differentthread, that doesn't prevent a new thread from creating the same scope.However, the underlying variable store is shared across threads (within thesame graph). As such, if another thread tries to create a new variable withthe same name as a variable created by a previous thread, it will fail unlessreuse is True.

Further, each thread starts with an empty variable scope. So if you wish topreserve name prefixes from a scope from the main thread, you should capturethe main thread's scope and re-enter it in each thread. For e.g.

```
 main_thread_scope = variable_scope.get_variable_scope()

# Thread's target function:
def thread_target_fn(captured_scope):
  with variable_scope.variable_scope(captured_scope):
    # .... regular code for this thread


thread = threading.Thread(target=thread_target_fn, args=(main_thread_scope,))
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L2116-L2206)

```
 __init__(
    name_or_scope,
    default_name=None,
    values=None,
    initializer=None,
    regularizer=None,
    caching_device=None,
    partitioner=None,
    custom_getter=None,
    reuse=None,
    dtype=None,
    use_resource=None,
    constraint=None,
    auxiliary_name_scope=True
)
 
```

初始化上下文管理器。

#### 参数：
- **`name_or_scope`** :  `string`  or  `VariableScope` : the scope to open.
- **`default_name`** : The default name to use if the  `name_or_scope`  argument is `None` , this name will be uniquified. If name_or_scope is provided itwon't be used and therefore it is not required and can be None.
- **`values`** : The list of  `Tensor`  arguments that are passed to the op function.
- **`initializer`** : default initializer for variables within this scope.
- **`regularizer`** : default regularizer for variables within this scope.
- **`caching_device`** : default caching device for variables within this scope.
- **`partitioner`** : default partitioner for variables within this scope.
- **`custom_getter`** : default custom getter for variables within this scope.
- **`reuse`** :  `True` , None, or tf.compat.v1.AUTO_REUSE; if  `True` , we go intoreuse mode for this scope as well as all sub-scopes; iftf.compat.v1.AUTO_REUSE, we create variables if they do not exist, andreturn them otherwise; if None, we inherit the parent scope's reuseflag. When eager execution is enabled, new variables are always createdunless an EagerVariableStore or template is currently active.
- **`dtype`** : type of variables created in this scope (defaults to the type inthe passed scope, or inherited from parent scope).
- **`use_resource`** : If False, all variables will be regular Variables. If True,experimental ResourceVariables with well-defined semantics will be usedinstead. Defaults to False (will later change to True). When eagerexecution is enabled this argument is always forced to be True.
- **`constraint`** : An optional projection function to be applied to the variableafter being updated by an  `Optimizer`  (e.g. used to implement normconstraints or value constraints for layer weights). The function musttake as input the unprojected Tensor representing the value of thevariable and return the Tensor for the projected value (which must havethe same shape). Constraints are not safe to use when doing asynchronousdistributed training.
- **`auxiliary_name_scope`** : If  `True` , we create an auxiliary name scope withthe scope. If  `False` , we don't create it. Note that the argument is notinherited, and it only takes effect for once when creating. You shouldonly use it for re-entering a premade variable scope.


#### 返回：
可以捕获和重用的作用域。

#### 加薪：
- **`ValueError`** : when trying to reuse within a create scope, or create withina reuse scope.
- **`TypeError`** : when the types of some arguments are not appropriate.


## 方法


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L2208-L2232)

```
 __enter__()
 
```

###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L2353-L2365)

```
 __exit__(
    type_arg,
    value_arg,
    traceback_arg
)
 
```

