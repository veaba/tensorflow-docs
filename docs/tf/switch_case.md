Create a switch/case operation, i.e. an integer-indexed conditional.

**别名** : [ `tf.compat.v1.switch_case` ](/api_docs/python/tf/switch_case), [ `tf.compat.v2.switch_case` ](/api_docs/python/tf/switch_case)

```
 tf.switch_case(
    branch_index,
    branch_fns,
    default=None,
    name='switch_case'
)
 
```

See also [ `tf.case` ](https://tensorflow.google.cn/api_docs/python/tf/case).

This op can be substantially more efficient than [ `tf.case` ](https://tensorflow.google.cn/api_docs/python/tf/case) when exactly onebranch will be selected. [ `tf.switch_case` ](https://tensorflow.google.cn/api_docs/python/tf/switch_case) is more like a C++ switch/casestatement than [ `tf.case` ](https://tensorflow.google.cn/api_docs/python/tf/case), which is more like an if/elif/elif/else chain.

The  `branch_fns`  parameter is either a listof (int, callable) pairs, or simply a list of callables (in which case theindex is implicitly the key). The  `branch_index`   `Tensor`  is used to select anelement in  `branch_fns`  with matching  `int`  key, falling back to  `default` if none match, or  `max(keys)`  if no  `default`  is provided. The keys must forma contiguous set from  `0`  to  `len(branch_fns) - 1` .

[ `tf.switch_case` ](https://tensorflow.google.cn/api_docs/python/tf/switch_case) supports nested structures as implemented in [ `tf.nest` ](https://tensorflow.google.cn/api_docs/python/tf/nest). Allcallables must return the same (possibly nested) value structure of lists,tuples, and/or named tuples.

**Example:** 

#### 伪码：


```
 switch (branch_index) {  // c-style switch
  case 0: return 17;
  case 1: return 31;
  default: return -1;
}
 
```

或

```
 branches = {0: lambda: 17, 1: lambda: 31}
branches.get(branch_index, lambda: -1)()
 
```

#### 表达式：


```
 def f1(): return tf.constant(17)
def f2(): return tf.constant(31)
def f3(): return tf.constant(-1)
r = tf.switch_case(branch_index, branch_fns={0: f1, 1: f2}, default=f3)
# Equivalent: tf.switch_case(branch_index, branch_fns={0: f1, 1: f2, 2: f3})
 
```

#### 参数：
- **`branch_index`** : An int Tensor specifying which of  `branch_fns`  should beexecuted.
- **`branch_fns`** : A  `list`  of (int, callable) pairs, or simply a list ofcallables (in which case the index serves as the key). Each callable mustreturn a matching structure of tensors.
- **`default`** : Optional callable that returns a structure of tensors.
- **`name`** : A name for this operation (optional).


#### 返回：
The tensors returned by the callable identified by  `branch_index` , or thosereturned by  `default`  if no key matches and  `default`  was provided, or thosereturned by the max-keyed  `branch_fn`  if no  `default`  is provided.

#### 加薪：
- **`TypeError`** : If  `branch_fns`  is not a list/dictionary.
- **`TypeError`** : If  `branch_fns`  is a list but does not contain 2-tuples or       callables.
- **`TypeError`** : If  `fns[i]`  is not callable for any i, or  `default`  is not       callable.


#### v2兼容性
 `branch_fns`  could be a dictionary in v1. However, tf.Tensor andtf.Variable are no longer hashable in v2, so cannot be used as a key for adictionary.  Please use a list or a tuple instead.

