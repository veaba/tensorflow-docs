启用或禁用范围内运算符的JIT编译。

**别名** : [ `tf.compat.v1.xla.experimental.jit_scope` ](/api_docs/python/tf/xla/experimental/jit_scope), [ `tf.compat.v2.xla.experimental.jit_scope` ](/api_docs/python/tf/xla/experimental/jit_scope)

```
 tf.xla.experimental.jit_scope(    *args,    **kwds) 
```

注：这是一个实验特性。

The compilation is a hint and only supported on a best-effort basis.

#### 示例用法：
with tf.xla.experimental.jit_scope():  c = tf.matmul(a, b)  # compiledwith tf.xla.experimental.jit_scope(compile_ops=False):  d = tf.matmul(a, c)  # not compiledwith tf.xla.experimental.jit_scope(    compile_ops=lambda node_def: 'matmul' in node_def.op.lower()):  e = tf.matmul(a, b) + d  # matmul is compiled, the addition is not.

Example of separate_compiled_gradients:  # In the example below, the computations for f, g and h will all be compiled  # in separate scopes.  with tf.xla.experimental.jit_scope(      separate_compiled_gradients=True):    f = tf.matmul(a, b)  g = tf.gradients([f], [a, b], name='mygrads1')  h = tf.gradients([f], [a, b], name='mygrads2')

#### 参数：
- **`compile_ops`** : Whether to enable or disable compilation in the scope.Either a Python bool, or a callable that accepts the parameter `node_def`  and returns a python bool.
- **`separate_compiled_gradients`** : If true put each gradient subgraph into aseparate compilation scope. This gives fine-grained control over whichportions of the graph will be compiled as a single unit. Compilinggradients separately may yield better performance for some graphs.The scope is named based on the scope of the forward computation as wellas the name of the gradients. As a result, the gradients will be compiledin a scope that is separate from both the forward computation, and fromother gradients.


#### 加薪：
- **`RuntimeError`** : if called when eager execution is enabled.


#### 收益率：
The current scope, enabling or disabling compilation.

