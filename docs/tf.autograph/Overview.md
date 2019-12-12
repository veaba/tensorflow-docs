将普通python转换为tensorflow图形代码。

注意：In TensorFlow 2.0, AutoGraph is automatically applied when using[ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function). This module contains lower-level APIs for advanced use.

For more information, see the[AutoGraph guide](https://tensorflow.google.cn/guide/autograph).

By equivalent graph code we mean code that generates a TensorFlow graph whenrun. The generated graph has the same effects as the original code when executed(for example with [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) or [ `tf.compat.v1.Session.run` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session#run)). In other words,using AutoGraph can be thought of as running Python in TensorFlow.

## 模块
[ `experimental` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/experimental) module: Public API for tf.autograph.experimental namespace.

## 功能
[ `set_verbosity(...)` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/set_verbosity): Sets the AutoGraph verbosity level.

[ `to_code(...)` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/to_code): Similar to  `to_graph` , but returns Python source code as a string.

[ `to_graph(...)` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/to_graph): Converts a Python entity into a TensorFlow graph.

[ `trace(...)` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/trace): Traces argument information at compilation time.

