打印指定的输入。

**别名** : [ `tf.compat.v1.print` ](/api_docs/python/tf/print), [ `tf.compat.v2.print` ](/api_docs/python/tf/print)

```
 tf.print(
    *inputs,
    **kwargs
)
 
```

### 在指南中使用：
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Better performance with the tf.data API](https://tensorflow.google.cn/guide/data_performance)
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### 在教程中使用：
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
A TensorFlow operator that prints the specified inputs to a desiredoutput stream or logging level. The inputs may be dense or sparse Tensors,primitive python objects, data structures that contain tensors, and printablePython objects. Printed tensors will recursively show the first and lastelements of each dimension to summarize.

#### 示例：
Single-input usage:

```
 tensor = tf.range(10)
tf.print(tensor, output_stream=sys.stderr)
 
```

(This prints "[0 1 2 ... 7 8 9]" to sys.stderr)

Multi-input usage:

```
 tensor = tf.range(10)
tf.print("tensors:", tensor, {2: tensor * 2}, output_stream=sys.stdout)
 
```

(This prints "tensors: [0 1 2 ... 7 8 9] {2: [0 2 4 ... 14 16 18]}" tosys.stdout)

更改输入分隔符：

```
 tensor_a = tf.range(2)
tensor_b = tensor_a * 2
tf.print(tensor_a, tensor_b, output_stream=sys.stderr, sep=',')
 
```

(This prints "[0 1],[0 2]" to sys.stderr)

Usage in a [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function):

```
 @tf.function
def f():
    tensor = tf.range(10)
    tf.print(tensor, output_stream=sys.stderr)
    return tensor

range_tensor = f()
 
```

(This prints "[0 1 2 ... 7 8 9]" to sys.stderr)

@compatibility(TF 1.x Graphs and Sessions)In graphs manually created outside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function), this method returnsthe created TF operator that prints the data. To make sure theoperator runs, users need to pass the produced op to[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)'s run method, or to use the op as a controldependency for executed ops by specifying `with tf.compat.v1.control_dependencies([print_op])` .@end_compatibility

tf 1.x图中的兼容性用法：

```
 sess = tf.compat.v1.Session()
with sess.as_default():
    tensor = tf.range(10)
    print_op = tf.print("tensors:", tensor, {2: tensor * 2},
                        output_stream=sys.stdout)
    with tf.control_dependencies([print_op]):
      tripled_tensor = tensor * 3
    sess.run(tripled_tensor)
 
```

(This prints "tensors: [0 1 2 ... 7 8 9] {2: [0 2 4 ... 14 16 18]}" to  sys.stdout)


**Note:**  In Jupyter notebooks and colabs, [ `tf.print` ](https://tensorflow.google.cn/api_docs/python/tf/print) prints to the notebook  cell outputs. It will not write to the notebook kernel's console logs.


#### 参数：
- **`*inputs`** : Positional arguments that are the inputs to print. Inputs in theprinted output will be separated by spaces. Inputs may be pythonprimitives, tensors, data structures such as dicts and lists that maycontain tensors (with the data structures possibly nested in arbitraryways), and printable python objects.
- **`output_stream`** : The output stream, logging level, or file to print to.Defaults to sys.stderr, but sys.stdout, tf.compat.v1.logging.info,tf.compat.v1.logging.warning, tf.compat.v1.logging.error,absl.logging.info, absl.logging.warning and absl.loogging,error are alsosupported. To print to a file, pass a string started with "file://"followed by the file path, e.g., "file:///tmp/foo.out".
- **`summarize`** : The first and last  `summarize`  elements within each dimension arerecursively printed per Tensor. If None, then the first 3 and last 3elements of each dimension are printed for each tensor. If set to -1, itwill print all elements of every tensor.
- **`sep`** : The string to use to separate the inputs. Defaults to " ".
- **`end`** : End character that is appended at the end the printed string.Defaults to the newline character.
- **`name`** : A name for the operation (optional).


#### 返回：
None when executing eagerly. During graph tracing this returnsa TF operator that prints the specified inputs in the specified outputstream or logging level. This operator will be automatically executedexcept inside of [ `tf.compat.v1` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1) graphs and sessions.

#### 加薪：
- **`ValueError`** : If an unsupported output stream is specified.


#### python2相容性
In python 2.7, make sure to import the following: `from __future__ import print_function` 

