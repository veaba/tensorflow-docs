Conversion of plain Python into TensorFlow graph code.
NOTE: In TensorFlow 2.0, AutoGraph is automatically applied when using `tf.function`. This module contains lower-level APIs for advanced use.
For more information, see the AutoGraph guide.
By equivalent graph code we mean code that generates a TensorFlow graph when run. The generated graph has the same effects as the original code when executed (for example with `tf.function` or `tf.compat.v1.Session.run`). In other words, using AutoGraph can be thought of as running Python in TensorFlow.
## Modules
`experimental` module: Public API for tf.autograph.`experimental` namespace.
## Functions
