![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Return  `true_fn()`  if the predicate  `pred`  is true else  `false_fn()` .

### Aliases:

- [ `tf.compat.v2.cond` ](/api_docs/python/tf/cond)


```python
tf.cond(
  pred,
  true_fn=None,
  false_fn=None,
  name=None
)

```


 `true_fn`  and  `false_fn`  both return lists of output tensors.  `true_fn`  and `false_fn`  must have the same non-zero number and type of outputs.

**WARNING** : Any Tensors or Operations created outside of  `true_fn`  and `false_fn`  will be executed regardless of which branch is selected at runtime.

Although this behavior is consistent with the dataflow model of TensorFlow,it has frequently surprised users who expected a lazier semantics.Consider the following simple program:


```python
z = tf.multiply(a, b)
result = tf.cond(x &lt; y, lambda: tf.add(x, z), lambda: tf.square(y))

```


If  `x &lt; y` , the  `tf.add`  operation will be executed and  `tf.square` operation will not be executed. Since  `z`  is needed for at least onebranch of the  `cond` , the [ `tf.multiply` ](https://tensorflow.google.cn/api_docs/python/tf/math/multiply) operation is always executed,unconditionally.

Note that  `cond`  calls  `true_fn`  and  `false_fn`  <em>exactly once</em> (inside thecall to  `cond` , and not at all during  `Session.run()` ).  `cond` stitches together the graph fragments created during the  `true_fn`  and `false_fn`  calls with some additional graph nodes to ensure that the rightbranch gets executed depending on the value of  `pred` .

[ `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) supports nested structures as implemented in `tensorflow.python.util.nest` . Both  `true_fn`  and  `false_fn`  must return thesame (possibly nested) value structure of lists, tuples, and/or named tuples.Singleton lists and tuples form the only exceptions to this: when returned by `true_fn`  and/or  `false_fn` , they are implicitly unpacked to single values.

>**Note:**  It is illegal to "directly" use tensors created inside a cond branchoutside it, e.g. by storing a reference to a branch tensor in the pythonstate. If you need to use a tensor created in a branch function you shouldreturn it as an output of the branch function and use the output from<a href="https://tensorflow.google.cn/api_docs/python/tf/cond"> `tf.cond` </a> instead.

#### Args:

- **`pred`** : A scalar determining whether to return the result of  `true_fn`  or `false_fn` .

- **`true_fn`** : The callable to be performed if pred is true.

- **`false_fn`** : The callable to be performed if pred is false.

- **`name`** : Optional name prefix for the returned tensors.

#### Returns:

Tensors returned by the call to either  `true_fn`  or  `false_fn` . If thecallables return a singleton list, the element is extracted from the list.

#### Raises:

- **`TypeError`** : if  `true_fn`  or  `false_fn`  is not callable.

- **`ValueError`** : if  `true_fn`  and  `false_fn`  do not return the same number oftensors, or return tensors of different types.

#### Example:


```python
x = tf.constant(2)
y = tf.constant(5)
def f1(): return tf.multiply(x, 17)
def f2(): return tf.add(y, 23)
r = tf.cond(tf.less(x, y), f1, f2)
# r is set to f1().
# Operations in f2 (e.g., tf.add) are not executed.

```

