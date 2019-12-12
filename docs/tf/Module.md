

## Class  `Module` 
基本神经网络模块类。

**别名** : [ `tf.compat.v1.Module` ](/api_docs/python/tf/Module), [ `tf.compat.v2.Module` ](/api_docs/python/tf/Module)

### 在指南中使用：
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)
A module is a named container for [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)s, other [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module)s andfunctions which apply to user input. For example a dense layer in a neuralnetwork might be implemented as a [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module):

```
  class Dense(tf.Module):
   def __init__(self, in_features, output_features, name=None):
     super(Dense, self).__init__(name=name)
     self.w = tf.Variable(
         tf.random.normal([input_features, output_features]), name='w')
     self.b = tf.Variable(tf.zeros([output_features]), name='b')

   def __call__(self, x):
     y = tf.matmul(x, self.w) + self.b
     return tf.nn.relu(y)
 
```

可以按预期使用密集层：

```
 d = Dense(input_features=64, output_features=10)
d(tf.ones([100, 64]))
#==> <tf.Tensor: ...>
 
```

By subclassing [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) instead of  `object`  any [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) or[ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) instances assigned to object properties can be collected usingthe  `variables` ,  `trainable_variables`  or  `submodules`  property:

```
d.变量
#==> (<tf.Variable 'b:0' ...>, <tf.Variable 'w:0' ...>)
 
```

Subclasses of [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) can also take advantage of the  `_flatten`  methodwhich can be used to implement tracking of any other types.

All [ `tf.Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module) classes have an associated [ `tf.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/name_scope) which can be usedto group operations in TensorBoard and create hierarchies for variable nameswhich can help with debugging. We suggest using the name scope when creatingnested submodules/parameters or for forward methods whose graph you might wantto inspect in TensorBoard. You can enter the name scope explicitly using `with self.name_scope:`  or you can annotate methods (apart from  `__init__` )with  `@tf.Module.with_name_scope` .

```
 class MLP(tf.Module):
  def __init__(self, input_size, sizes, name=None):
    super(MLP, self).__init__(name=name)
    self.layers = []
    with self.name_scope:
      for size in sizes:
        self.layers.append(Dense(input_size=input_size, output_size=size))
        input_size = size

  @tf.Module.with_name_scope
  def __call__(self, x):
    for layer in self.layers:
      x = layer(x)
    return x
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/module/module.py#L107-L122)

```
 __init__(name=None)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `name` 
返回在ctor中传递或确定的此模块的名称。

注意：This is not the same as the  `self.name_scope.name`  which includesparent module names.

###  `name_scope` 
Returns a [ `tf.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/name_scope) instance for this class.

###  `submodules` 
Sequence of all sub-modules.

Submodules are modules which are properties of this module, or found asproperties of modules which are properties of this module (and so on).

```
 a = tf.Module()
b = tf.Module()
c = tf.Module()
a.b = b
b.c = c
assert list(a.submodules) == [b, c]
assert list(b.submodules) == [c]
assert list(c.submodules) == []
 
```

#### 返回：
所有子模块的序列。

###  `trainable_variables` 
此模块及其子模块拥有的变量序列。


**Note:**  this method uses reflection to find variables on the current instanceand submodules. For performance reasons you may wish to cache the resultof calling this method if you don't expect the return value to change.


#### 返回：
A sequence of variables for the current module (sorted by attributename) followed by variables from all submodules recursively (breadthfirst).

###  `variables` 
此模块及其子模块拥有的变量序列。


**Note:**  this method uses reflection to find variables on the current instanceand submodules. For performance reasons you may wish to cache the resultof calling this method if you don't expect the return value to change.


#### 返回：
A sequence of variables for the current module (sorted by attributename) followed by variables from all submodules recursively (breadthfirst).

## 方法


###  `with_name_scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/module/module.py#L260-L294)

```
 @classmethod
with_name_scope(
    cls,
    method
)
 
```

decorator自动输入模块名作用域。

```
 class MyModule(tf.Module):
  @tf.Module.with_name_scope
  def __call__(self, x):
    if not hasattr(self, 'w'):
      self.w = tf.Variable(tf.random.normal([x.shape[1], 64]))
    return tf.matmul(x, self.w)
 
```

Using the above module would produce [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)s and [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor)s whosenames included the module name:

```
 mod = MyModule()
mod(tf.ones([8, 32]))
# ==> <tf.Tensor: ...>
W型
# ==> <tf.Variable ...'my_module/w:0'>
 
```

#### 参数：
- **`method`** : The method to wrap.


#### 返回：
原来的方法被包装成进入模块的名称范围。

