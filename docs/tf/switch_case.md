[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/switch_case) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/control_flow_ops.py#L3493-L3571)  
---|---  
  
Create a switch/case operation, i.e. an integer-indexed conditional.

### Aliases:

  * [`tf.compat.v1.switch_case`](/api_docs/python/tf/switch_case)
  * [`tf.compat.v2.switch_case`](/api_docs/python/tf/switch_case)

    
    
    tf.switch_case(
        branch_index,
        branch_fns,
        default=None,
        name='switch_case'
    )
    

See also [`tf.case`](https://tensorflow.google.cn/api_docs/python/tf/case).

This op can be substantially more efficient than
[`tf.case`](https://tensorflow.google.cn/api_docs/python/tf/case) when exactly
one branch will be selected.
[`tf.switch_case`](https://tensorflow.google.cn/api_docs/python/tf/switch_case)
is more like a C++ switch/case statement than
[`tf.case`](https://tensorflow.google.cn/api_docs/python/tf/case), which is
more like an if/elif/elif/else chain.

The `branch_fns` parameter is either a list of (int, callable) pairs, or
simply a list of callables (in which case the index is implicitly the key).
The `branch_index` `Tensor` is used to select an element in `branch_fns` with
matching `int` key, falling back to `default` if none match, or `max(keys)` if
no `default` is provided. The keys must form a contiguous set from `0` to
`len(branch_fns) - 1`.

[`tf.switch_case`](https://tensorflow.google.cn/api_docs/python/tf/switch_case)
supports nested structures as implemented in
[`tf.nest`](https://tensorflow.google.cn/api_docs/python/tf/nest). All
callables must return the same (possibly nested) value structure of lists,
tuples, and/or named tuples.

**Example:**

#### Pseudocode:

    
    
    switch (branch_index) {  // c-style switch
      case 0: return 17;
      case 1: return 31;
      default: return -1;
    }
    

or

    
    
    branches = {0: lambda: 17, 1: lambda: 31}
    branches.get(branch_index, lambda: -1)()
    

#### Expressions:

    
    
    def f1(): return tf.constant(17)
    def f2(): return tf.constant(31)
    def f3(): return tf.constant(-1)
    r = tf.switch_case(branch_index, branch_fns={0: f1, 1: f2}, default=f3)
    # Equivalent: tf.switch_case(branch_index, branch_fns={0: f1, 1: f2, 2: f3})
    

#### Args:

  * **`branch_index`** : An int Tensor specifying which of `branch_fns` should be executed.
  * **`branch_fns`** : A `list` of (int, callable) pairs, or simply a list of callables (in which case the index serves as the key). Each callable must return a matching structure of tensors.
  * **`default`** : Optional callable that returns a structure of tensors.
  * **`name`** : A name for this operation (optional).

#### Returns:

The tensors returned by the callable identified by `branch_index`, or those
returned by `default` if no key matches and `default` was provided, or those
returned by the max-keyed `branch_fn` if no `default` is provided.

#### Raises:

  * **`TypeError`** : If `branch_fns` is not a list/dictionary.
  * **`TypeError`** : If `branch_fns` is a list but does not contain 2-tuples or callables.
  * **`TypeError`** : If `fns[i]` is not callable for any i, or `default` is not callable.

#### V2 Compatibility

`branch_fns` could be a dictionary in v1. However, tf.Tensor and tf.Variable
are no longer hashable in v2, so cannot be used as a key for a dictionary.
Please use a list or a tuple instead.

