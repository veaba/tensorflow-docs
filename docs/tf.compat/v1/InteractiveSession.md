

## Class  `InteractiveSession` 
A TensorFlow  `Session`  for use in interactive contexts, such as a shell.

The only difference with a regular  `Session`  is that an  `InteractiveSession` installs itself as the default session on construction.The methods [ `tf.Tensor.eval` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval)and [ `tf.Operation.run` ](https://tensorflow.google.cn/api_docs/python/tf/Operation#run)will use that session to run ops.

This is convenient in interactive shells and [IPythonnotebooks](http://ipython.org), as it avoids having to pass an explicit `Session`  object to run ops.

#### 例如：


```
 sess = tf.compat.v1.InteractiveSession()
a = tf.constant(5.0)
b = tf.constant(6.0)
c = a * b
# We can just use 'c.eval()' without passing 'sess'
print(c.eval())
sess.close()
 
```

Note that a regular session installs itself as the default session when itis created in a  `with`  statement.  The common usage in non-interactiveprograms is to follow that pattern:

```
 a = tf.constant(5.0)
b = tf.constant(6.0)
c = a * b
with tf.compat.v1.Session():
  # We can also use 'c.eval()' here.
  print(c.eval())
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L1720-L1768)

```
 __init__(
    target='',
    graph=None,
    config=None
)
 
```

创建一个新的交互式TensorFlow会话。

If no  `graph`  argument is specified when constructing the session,the default graph will be launched in the session. If you areusing more than one graph (created with [ `tf.Graph()` ](https://tensorflow.google.cn/api_docs/python/tf/Graph)) in the sameprocess, you will have to use different sessions for each graph,but each graph can be used in multiple sessions. In this case, itis often clearer to pass the graph to be launched explicitly tothe session constructor.

#### 参数：
- **`target`** : (Optional.) The execution engine to connect to. Defaults to usingan in-process engine.
- **`graph`** : (Optional.) The  `Graph`  to be launched (described above).
- **`config`** : (Optional)  `ConfigProto`  proto used to configure the session.


## 属性


###  `graph` 
在此会话中启动的图表。

###  `graph_def` 
底层tensorflow图的可序列化版本。

#### 返回：
A graph_pb2.GraphDef proto containing nodes for all of the Operations inthe underlying TensorFlow graph.

###  `sess_str` 
此会话将连接到的tensorflow进程。

## 方法


###  `as_default` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L791-L844)

```
 as_default()
 
```

返回使此对象成为默认会话的上下文管理器。

Use with the  `with`  keyword to specify that calls to[ `tf.Operation.run` ](https://tensorflow.google.cn/api_docs/python/tf/Operation#run) or [ `tf.Tensor.eval` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval) should be executed inthis session.

```
 c = tf.constant(..)
sess = tf.compat.v1.Session()

with sess.as_default():
  assert tf.compat.v1.get_default_session() is sess
  print(c.eval())
 
```

To get the current default session, use [ `tf.compat.v1.get_default_session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_default_session).

*N.B.* The  `as_default`  context manager *does not* close thesession when you exit the context, and you must close the sessionexplicitly.

```
 c = tf.constant(...)
sess = tf.compat.v1.Session()
with sess.as_default():
  print(c.eval())
# ...
with sess.as_default():
  print(c.eval())

sess.close()
 
```

Alternatively, you can use  `with tf.compat.v1.Session():`  to create asession that is automatically closed on exiting the context,including when an uncaught exception is raised.

*N.B.* The default session is a property of the current thread. If youcreate a new thread, and wish to use the default session in thatthread, you must explicitly add a  `with sess.as_default():`  in thatthread's function.

*N.B.* Entering a  `with sess.as_default():`  block does not affectthe current default graph. If you are using multiple graphs, and `sess.graph`  is different from the value of[ `tf.compat.v1.get_default_graph` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_default_graph), you must explicitly enter a `with sess.graph.as_default():`  block to make  `sess.graph`  the defaultgraph.

#### 返回：
使用此会话作为默认会话的上下文管理器。

###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L1770-L1783)

```
 close()
 
```

Closes an  `InteractiveSession` .

###  `list_devices` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L704-L740)

```
 list_devices()
 
```

列出此会话中的可用设备。

```
 devices = sess.list_devices()
for d in devices:
  print(d.name)
 
```

#### 其中：
列表中的每个元素都具有以下属性

- **`name`** : A string with the full name of the device. ex: `/job:worker/replica:0/task:3/device:CPU:0` 
- **`device_type`** : The type of the device (e.g.  `CPU` ,  `GPU` ,  `TPU` .)
- **`memory_limit`** : The maximum amount of memory available on the device.注意：depending on the device, it is possible the usable memory couldbe substantially less.


#### 加薪：
- **[ `tf.errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If it encounters an error (e.g. session is in aninvalid state, or network errors occur).


#### 返回：
会话中设备的列表。

###  `make_callable` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L1185-L1309)

```
 make_callable(
    fetches,
    feed_list=None,
    accept_options=False
)
 
```

返回运行特定步骤的可调用python。

The returned callable will take  `len(feed_list)`  arguments whose typesmust be compatible feed values for the respective elements of  `feed_list` .For example, if element  `i`  of  `feed_list`  is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), the  `i` thargument to the returned callable must be a numpy ndarray (or somethingconvertible to an ndarray) with matching element type and shape. See `tf.Session.run`  for details of the allowable feed key and value types.

The returned callable will have the same return type as `tf.Session.run(fetches, ...)` . For example, if  `fetches`  is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor),the callable will return a numpy ndarray; if  `fetches`  is a [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation),it will return  `None` .

#### 参数：
- **`fetches`** : A value or list of values to fetch. See  `tf.Session.run`  fordetails of the allowable fetch types.
- **`feed_list`** : (Optional.) A list of  `feed_dict`  keys. See  `tf.Session.run` for details of the allowable feed key types.
- **`accept_options`** : (Optional.) If  `True` , the returned  `Callable`  will beable to accept [ `tf.compat.v1.RunOptions` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/RunOptions) and [ `tf.compat.v1.RunMetadata` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/RunMetadata)as optional keyword arguments  `options`  and  `run_metadata` ,respectively, with the same syntax and semantics as  `tf.Session.run` ,which is useful for certain use cases (profiling and debugging) but willresult in measurable slowdown of the  `Callable` 'sperformance. Default:  `False` .


#### 返回：
A function that when called will execute the step defined by `feed_list`  and  `fetches`  in this session.

#### 加薪：
- **`TypeError`** : If  `fetches`  or  `feed_list`  cannot be interpretedas arguments to  `tf.Session.run` .


###  `partial_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L967-L1012)

```
 partial_run(
    handle,
    fetches,
    feed_dict=None
)
 
```

用更多的feed和fetch继续执行。

这是实验性的，随时可能改变。

To use partial execution, a user first calls  `partial_run_setup()`  andthen a sequence of  `partial_run()` .  `partial_run_setup`  specifies thelist of feeds and fetches that will be used in the subsequent `partial_run`  calls.

The optional  `feed_dict`  argument allows the caller to overridethe value of tensors in the graph. See run() for more information.

下面是一个简单的例子：

```
 a = array_ops.placeholder(dtypes.float32, shape=[])
b = array_ops.placeholder(dtypes.float32, shape=[])
c = array_ops.placeholder(dtypes.float32, shape=[])
r1 = math_ops.add(a, b)
r2 = math_ops.multiply(r1, c)

h = sess.partial_run_setup([r1, r2], [a, b, c])
res = sess.partial_run(h, r1, feed_dict={a: 1, b: 2})
res = sess.partial_run(h, r2, feed_dict={c: res})
 
```

#### 参数：
- **`handle`** : A handle for a sequence of partial runs.
- **`fetches`** : A single graph element, a list of graph elements, or a dictionarywhose values are graph elements or lists of graph elements (seedocumentation for  `run` ).
- **`feed_dict`** : A dictionary that maps graph elements to values (describedabove).


#### 返回：
Either a single value if  `fetches`  is a single graph element, ora list of values if  `fetches`  is a list, or a dictionary with thesame keys as  `fetches`  if that is a dictionary(see documentation for  `run` ).

#### 加薪：
- **[ `tf.errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Or one of its subclasses on error.


###  `partial_run_setup` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L1014-L1089)

```
 partial_run_setup(
    fetches,
    feeds=None
)
 
```

为部分运行设置带有源和获取的图形。

这是实验性的，随时可能改变。

Note that contrary to  `run` ,  `feeds`  only specifies the graph elements.The tensors will be supplied by the subsequent  `partial_run`  calls.

#### 参数：
- **`fetches`** : A single graph element, or a list of graph elements.
- **`feeds`** : A single graph element, or a list of graph elements.


#### 返回：
用于部分运行的句柄。

#### 加薪：
- **`RuntimeError`** : If this  `Session`  is in an invalid state (e.g. has beenclosed).
- **`TypeError`** : If  `fetches`  or  `feed_dict`  keys are of an inappropriate type.
- **[ `tf.errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Or one of its subclasses if a TensorFlow error happens.


###  `run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/client/session.py#L846-L965)

```
 run(
    fetches,
    feed_dict=None,
    options=None,
    run_metadata=None
)
 
```

Runs operations and evaluates tensors in  `fetches` .

This method runs one "step" of TensorFlow computation, byrunning the necessary graph fragment to execute every  `Operation` and evaluate every  `Tensor`  in  `fetches` , substituting the values in `feed_dict`  for the corresponding input values.

The  `fetches`  argument may be a single graph element, or an arbitrarilynested list, tuple, namedtuple, dict, or OrderedDict containing graphelements at its leaves.  A graph element can be one of the following types:

- A [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation).The corresponding fetched value will be  `None` .
- A [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor).The corresponding fetched value will be a numpy ndarray containing thevalue of that tensor.
- A [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).The corresponding fetched value will be a[ `tf.compat.v1.SparseTensorValue` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/SparseTensorValue)containing the value of that sparse tensor.
- A  `get_tensor_handle`  op.  The corresponding fetched value will be anumpy ndarray containing the handle of that tensor.
- A  `string`  which is the name of a tensor or operation in the graph.
The value returned by  `run()`  has the same shape as the  `fetches`  argument,where the leaves are replaced by the corresponding values returned byTensorFlow.

#### 示例：


```
    a = tf.constant([10, 20])
   b = tf.constant([1.0, 2.0])
   # 'fetches' can be a singleton
   v = session.run(a)
   # v is the numpy array [10, 20]
   # 'fetches' can be a list.
   v = session.run([a, b])
   # v is a Python list with 2 numpy arrays: the 1-D array [10, 20] and the
   # 1-D array [1.0, 2.0]
   # 'fetches' can be arbitrary lists, tuples, namedtuple, dicts:
   MyData = collections.namedtuple('MyData', ['a', 'b'])
   v = session.run({'k1': MyData(a, b), 'k2': [b, a]})
   # v is a dict with
   # v['k1'] is a MyData namedtuple with 'a' (the numpy array [10, 20]) and
   # 'b' (the numpy array [1.0, 2.0])
   # v['k2'] is a list with the numpy array [1.0, 2.0] and the numpy array
   # [10, 20].
 
```

The optional  `feed_dict`  argument allows the caller to overridethe value of tensors in the graph. Each key in  `feed_dict`  can beone of the following types:

- If the key is a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), thevalue may be a Python scalar, string, list, or numpy ndarraythat can be converted to the same  `dtype`  as thattensor. Additionally, if the key is a[ `tf.compat.v1.placeholder` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/placeholder), the shape ofthe value will be checked for compatibility with the placeholder.
- If the key is a[ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor),the value should be a[ `tf.compat.v1.SparseTensorValue` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/SparseTensorValue).
- If the key is a nested tuple of  `Tensor` s or  `SparseTensor` s, the valueshould be a nested tuple with the same structure that maps to theircorresponding values as above.
Each value in  `feed_dict`  must be convertible to a numpy array of the dtypeof the corresponding key.

The optional  `options`  argument expects a [ `RunOptions` ] proto. The optionsallow controlling the behavior of this particular step (e.g. turning tracingon).

The optional  `run_metadata`  argument expects a [ `RunMetadata` ] proto. Whenappropriate, the non-Tensor output of this step will be collected there. Forexample, when users turn on tracing in  `options` , the profiled info will becollected into this argument and passed back.

#### 参数：
- **`fetches`** : A single graph element, a list of graph elements, or a dictionarywhose values are graph elements or lists of graph elements (describedabove).
- **`feed_dict`** : A dictionary that maps graph elements to values (describedabove).
- **`options`** : A [ `RunOptions` ] protocol buffer
- **`run_metadata`** : A [ `RunMetadata` ] protocol buffer


#### 返回：
Either a single value if  `fetches`  is a single graph element, ora list of values if  `fetches`  is a list, or a dictionary with thesame keys as  `fetches`  if that is a dictionary (described above).Order in which  `fetches`  operations are evaluated inside the callis undefined.

#### 加薪：
- **`RuntimeError`** : If this  `Session`  is in an invalid state (e.g. has beenclosed).
- **`TypeError`** : If  `fetches`  or  `feed_dict`  keys are of an inappropriate type.
- **`ValueError`** : If  `fetches`  or  `feed_dict`  keys are invalid or refer to a `Tensor`  that doesn't exist.
