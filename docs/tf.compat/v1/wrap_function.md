将tf 1.x函数fn包装成一个图形函数。

```
 tf.compat.v1.wrap_function(    fn,    signature,    name=None) 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
The python function  `fn`  will be called once with symbolic arguments specifiedin the  `signature` , traced, and turned into a graph function. Any variablescreated by  `fn`  will be owned by the object returned by  `wrap_function` . Theresulting graph function can be called with tensors which match thesignature.

```
 def f(x, do_add):
  v = tf.Variable(5.0)
  if do_add:
    op = v.assign_add(x)
  else:
    op = v.assign_sub(x)
  with tf.control_dependencies([op]):
    return v.read_value()

f_add = tf.compat.v1.wrap_function(f, [tf.TensorSpec((), tf.float32), True])

assert float(f_add(1.0)) == 6.0
assert float(f_add(1.0)) == 7.0

# Can call tf.compat.v1.wrap_function again to get a new trace, a new set
# of variables, and possibly different non-template arguments.
f_sub= tf.compat.v1.wrap_function(f, [tf.TensorSpec((), tf.float32), False])

assert float(f_sub(1.0)) == 4.0
assert float(f_sub(1.0)) == 3.0
 
```

Both [ `tf.compat.v1.wrap_function` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/wrap_function) and [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) create a callableTensorFlow graph. But while [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) runs all stateful operations(e.g. [ `tf.print` ](https://tensorflow.google.cn/api_docs/python/tf/print)) and sequences operations to provide the same semantics aseager execution,  `wrap_function`  is closer to the behavior of  `session.run`  inTensorFlow 1.x. It will not run any operations unless they are required tocompute the function's outputs, either through a data dependency or a controldependency. Nor will it sequence operations.

Unlike [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function),  `wrap_function`  will only trace the Python functiononce. As with placeholders in TF 1.x, shapes and dtypes must be provided to `wrap_function` 's  `signature`  argument.

Since it is only traced once, variables and state may be created inside thefunction and owned by the function wrapper object.

#### 参数：
- **`fn`** : python function to be wrapped
- **`signature`** : the placeholder and python arguments to be passed to the wrappedfunction
- **`name`** : Optional. The name of the function.


#### 返回：
包装图函数。

