[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/xla/experimental/compile) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/compiler/xla/xla.py#L65-L110)  
---|---  
  
Builds an operator that compiles and runs `computation` with XLA.

### Aliases:

  * [`tf.compat.v1.xla.experimental.compile`](/api_docs/python/tf/xla/experimental/compile)
  * [`tf.compat.v2.xla.experimental.compile`](/api_docs/python/tf/xla/experimental/compile)

    
    
    tf.xla.experimental.compile(
        computation,
        inputs=None
    )
    

NOTE: In eager mode, `computation` will have `@tf.function` semantics.

#### Args:

  * **`computation`** : A Python function that builds a computation to apply to the input. If the function takes n inputs, 'inputs' should be a list of n tensors.

`computation` may return a list of operations and tensors. Tensors must come
before operations in the returned list. The return value of `compile` is a
list of tensors corresponding to the tensors from the output of `computation`.

All `Operation`s returned from `computation` will be executed when evaluating
any of the returned output tensors.

  * **`inputs`** : A list of inputs or `None` (equivalent to an empty list). Each input can be a nested structure containing values that are convertible to tensors. Note that passing an N-dimension list of compatible values will result in a N-dimension list of scalar tensors rather than a single Rank-N tensors. If you need different behavior, convert part of inputs to tensors with [`tf.convert_to_tensor`](https://tensorflow.google.cn/api_docs/python/tf/convert_to_tensor).

#### Returns:

Same data structure as if computation(*inputs) is called directly with some
exceptions for correctness. Exceptions include: 1) None output: a NoOp would
be returned which control-depends on computation. 2) Single value output: A
tuple containing the value would be returned. 3) Operation-only outputs: a
NoOp would be returned which control-depends on computation.
TODO(b/121383831): Investigate into removing these special cases.

#### Raises:

  * **`RuntimeError`** : if called when eager execution is enabled.

