插入将始终馈送的张量的占位符。

```
 tf.compat.v1.placeholder(
    dtype,
    shape=None,
    name=None
)
 
```

**Important** : This tensor will produce an error if evaluated. Its value mustbe fed using the  `feed_dict`  optional argument to  `Session.run()` ,[ `Tensor.eval()` ](/api_docs/python/tf/Tensor#eval), or [ `Operation.run()` ](/api_docs/python/tf/Operation#run).

#### 例如：


```
 x = tf.compat.v1.placeholder(tf.float32, shape=(1024, 1024))
y = tf.matmul(x, x)

with tf.compat.v1.Session() as sess:
  print(sess.run(y))  # ERROR: will fail because x was not fed.

  rand_array = np.random.rand(1024, 1024)
  print(sess.run(y, feed_dict={x: rand_array}))  # Will succeed.
 
```

#### 参数：
- **`dtype`** : The type of elements in the tensor to be fed.
- **`shape`** : The shape of the tensor to be fed (optional). If the shape is notspecified, you can feed a tensor of any shape.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  that may be used as a handle for feeding a value, but notevaluated directly.

#### 加薪：
- **`RuntimeError`** : if eager execution is enabled


#### 迫切的兼容性
占位符与紧急执行不兼容。

