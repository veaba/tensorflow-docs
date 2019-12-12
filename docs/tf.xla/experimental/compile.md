Builds an operator that compiles and runs  `computation`  with XLA.

**Aliases** : [ `tf.compat.v1.xla.experimental.compile` ](/api_docs/python/tf/xla/experimental/compile), [ `tf.compat.v2.xla.experimental.compile` ](/api_docs/python/tf/xla/experimental/compile)

```
 tf.xla.experimental.compile(    computation,    inputs=None) 
```

NOTE: In eager mode,  `computation`  will have  `@tf.function`  semantics.

#### Args:
- **`computation`** : A Python function that builds a computation to apply to theinput. If the function takes n inputs, 'inputs' should be a list of ntensors.

 `computation`  may return a list of operations and tensors.  Tensors mustcome before operations in the returned list.  The return value of `compile`  is a list of tensors corresponding to the tensors from theoutput of  `computation` .

All  `Operation` s returned from  `computation`  will be executed whenevaluating any of the returned output tensors.


- **`inputs`** : A list of inputs or  `None`  (equivalent to an empty list). Each inputcan be a nested structure containing values that are convertible totensors. Note that passing an N-dimension list of compatible values willresult in a N-dimension list of scalar tensors rather than a single Rank-Ntensors. If you need different behavior, convert part of inputs to tensorswith [ `tf.convert_to_tensor` ](https://tensorflow.google.cn/api_docs/python/tf/convert_to_tensor).


#### Returns:
Same data structure as if computation(*inputs) is called directly with someexceptions for correctness. Exceptions include:  1) None output: a NoOp would be returned which control-depends on     computation.  2) Single value output: A tuple containing the value would be returned.  3) Operation-only outputs: a NoOp would be returned which     control-depends on computation.  TODO(b/121383831): Investigate into removing these special cases.

#### Raises:
- **`RuntimeError`** : if called when eager execution is enabled.
