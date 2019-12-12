Return  `true_fn()`  if the predicate  `pred`  is true else  `false_fn()` . (deprecated arguments)

```
 tf.compat.v1.cond(
    pred,
    true_fn=None,
    false_fn=None,
    strict=False,
    name=None,
    fn1=None,
    fn2=None
)
 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(fn1, fn2)` . They will be removed in a future version.Instructions for updating:fn1/fn2 are deprecated in favor of the true_fn/false_fn arguments.
 `true_fn`  and  `false_fn`  both return lists of output tensors.  `true_fn`  and `false_fn`  must have the same non-zero number and type of outputs.

**WARNING** : Any Tensors or Operations created outside of  `true_fn`  and `false_fn`  will be executed regardless of which branch is selected at runtime.

Although this behavior is consistent with the dataflow model of TensorFlow,it has frequently surprised users who expected a lazier semantics.Consider the following simple program:

```
 z = tf.multiply(a, b)
result = tf.cond(x < y, lambda: tf.add(x, z), lambda: tf.square(y))
 
```

If  `x < y` , the  `tf.add`  operation will be executed and  `tf.square` operation will not be executed. Since  `z`  is needed for at least onebranch of the  `cond` , the [ `tf.multiply` ](https://tensorflow.google.cn/api_docs/python/tf/math/multiply) operation is always executed,unconditionally.

Note that  `cond`  calls  `true_fn`  and  `false_fn`  *exactly once* (inside thecall to  `cond` , and not at all during  `Session.run()` ).  `cond` stitches together the graph fragments created during the  `true_fn`  and `false_fn`  calls with some additional graph nodes to ensure that the rightbranch gets executed depending on the value of  `pred` .

[ `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) supports nested structures as implemented in `tensorflow.python.util.nest` . Both  `true_fn`  and  `false_fn`  must return thesame (possibly nested) value structure of lists, tuples, and/or named tuples.Singleton lists and tuples form the only exceptions to this: when returned by `true_fn`  and/or  `false_fn` , they are implicitly unpacked to single values.This behavior is disabled by passing  `strict=True` .

#### 参数：
- **`pred`** : A scalar determining whether to return the result of  `true_fn`  or `false_fn` .
- **`true_fn`** : The callable to be performed if pred is true.
- **`false_fn`** : The callable to be performed if pred is false.
- **`strict`** : A boolean that enables/disables 'strict' mode; see above.
- **`name`** : Optional name prefix for the returned tensors.


#### 返回：
Tensors returned by the call to either  `true_fn`  or  `false_fn` . If thecallables return a singleton list, the element is extracted from the list.

#### 加薪：
- **`TypeError`** : if  `true_fn`  or  `false_fn`  is not callable.
- **`ValueError`** : if  `true_fn`  and  `false_fn`  do not return the same number oftensors, or return tensors of different types.


#### 示例：


```
 x = tf.constant(2)
y = tf.constant(5)
def f1(): return tf.multiply(x, 17)
def f2(): return tf.add(y, 23)
r = tf.cond(tf.less(x, y), f1, f2)
# r is set to f1().
# Operations in f2 (e.g., tf.add) are not executed.
 
```

