Parallel map on the list of tensors unpacked from  `elems`  on dimension 0.

**别名** : [ `tf.compat.v1.vectorized_map` ](/api_docs/python/tf/vectorized_map), [ `tf.compat.v2.vectorized_map` ](/api_docs/python/tf/vectorized_map)

```
 tf.vectorized_map(
    fn,
    elems
)
 
```

This method works similar to tf.map_fn but is optimized to run much faster,possibly with a much larger memory footprint. The speedups are obtained byvectorization (see https://arxiv.org/pdf/1903.04243.pdf). The idea behindvectorization is to semantically launch all the invocations of  `fn`  inparallel and fuse corresponding operations across all these invocations. Thisfusion is done statically at graph generation time and the generated code isoften similar in performance to a manually fused version.

Because [ `tf.vectorized_map` ](https://tensorflow.google.cn/api_docs/python/tf/vectorized_map) fully parallelizes the batch, this method willgenerally be significantly faster than using [ `tf.map_fn` ](https://tensorflow.google.cn/api_docs/python/tf/map_fn), especially in eagermode. However this is an experimental feature and currently has a lot oflimitations:  - There should be no data dependency between the different semantic    invocations of  `fn` , i.e. it should be safe to map the elements of the    inputs in any order.  - Stateful kernels may mostly not be supported since these often imply a    data dependency. We do support a limited set of such stateful kernels    though (like RandomFoo, Variable operations like reads, etc).  -  `fn`  has limited support for control flow operations. [ `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) in    particular is not supported.  -  `fn`  should return nested structure of Tensors or Operations. However    if an Operation is returned, it should have zero outputs.  - The shape and dtype of any intermediate or output tensors in the    computation of  `fn`  should not depend on the input to  `fn` .

#### 参数：
- **`fn`** : The callable to be performed. It accepts one argument, which will havethe same (possibly nested) structure as  `elems` , and returns a possiblynested structure of Tensors and Operations, which may be different thanthe structure of  `elems` .
- **`elems`** : A tensor or (possibly nested) sequence of tensors, each of which willbe unpacked along their first dimension. The nested sequence of theresulting slices will be mapped over by  `fn` .


#### 返回：
A tensor or (possibly nested) sequence of tensors. Each tensor packs theresults of applying fn to tensors unpacked from elems along the firstdimension, from first to last.

#### 示例：


```
 def outer_product(a):
  return tf.tensordot(a, a, 0)

batch_size = 100
a = tf.ones((batch_size, 32, 32))
c = tf.vectorized_map(outer_product, a)
assert c.shape == (batch_size, 32, 32, 32, 32)
 
```

```
 # Computing per-example gradients

batch_size = 10
num_features = 32
layer = tf.keras.layers.Dense(1)

def model_fn(arg):
  with tf.GradientTape() as g:
    inp, label = arg
    inp = tf.expand_dims(inp, 0)
    label = tf.expand_dims(label, 0)
    prediction = layer(inp)
    loss = tf.nn.l2_loss(label - prediction)
  return g.gradient(loss, (layer.kernel, layer.bias))

inputs = tf.random_uniform([batch_size, num_features])
labels = tf.random_uniform([batch_size, 1])
per_example_gradients = tf.vectorized_map(model_fn, (inputs, labels))
assert per_example_gradients[0].shape == (batch_size, num_features, 1)
assert per_example_gradients[1].shape == (batch_size, 1)
 
```

