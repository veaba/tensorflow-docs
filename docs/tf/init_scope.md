A context manager that lifts ops out of control-flow scopes and function-building graphs.

**别名** : [ `tf.compat.v1.init_scope` ](/api_docs/python/tf/init_scope), [ `tf.compat.v2.init_scope` ](/api_docs/python/tf/init_scope)

```
 tf.init_scope()
 
```

There is often a need to lift variable initialization ops out of control-flowscopes, function-building graphs, and gradient tapes. Entering an `init_scope`  is a mechanism for satisfying these desiderata. In particular,entering an  `init_scope`  has three effects:

(1) All control dependencies are cleared the moment the scope is entered;      this is equivalent to entering the context manager returned from       `control_dependencies(None)` , which has the side-effect of exiting      control-flow scopes like [ `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) and [ `tf.while_loop` ](https://tensorflow.google.cn/api_docs/python/tf/while_loop).

(2) All operations that are created while the scope is active are lifted      into the lowest context on the  `context_stack`  that is not building a      graph function. Here, a context is defined as either a graph or an eager      context. Every context switch, i.e., every installation of a graph as      the default graph and every switch into eager mode, is logged in a      thread-local stack called  `context_switches` ; the log entry for a      context switch is popped from the stack when the context is exited.      Entering an  `init_scope`  is equivalent to crawling up       `context_switches` , finding the first context that is not building a      graph function, and entering it. A caveat is that if graph mode is      enabled but the default graph stack is empty, then entering an       `init_scope`  will simply install a fresh graph as the default one.

（3）当作用域处于活动状态时，渐变带暂停。

When eager execution is enabled, code inside an init_scope block runs witheager execution enabled even when defining graph functions viatf.contrib.eager.defun. For example:

```
 tf.compat.v1.enable_eager_execution()

@tf.contrib.eager.defun
def func():
  # A defun-decorated function constructs TensorFlow graphs,
  # it does not execute eagerly.
  assert not tf.executing_eagerly()
  with tf.init_scope():
    # Initialization runs with eager execution enabled
    assert tf.executing_eagerly()
 
```

#### 加薪：
- **`RuntimeError`** : if graph state is incompatible with this initialization.
