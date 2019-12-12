Output strings (e.g. filenames) to a queue for an input pipeline. (deprecated)

```
 tf.compat.v1.train.string_input_producer(
    string_tensor,
    num_epochs=None,
    shuffle=True,
    seed=None,
    capacity=32,
    shared_name=None,
    name=None,
    cancel_op=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Queue-based input pipelines have been replaced by [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data). Use  `tf.data.Dataset.from_tensor_slices(string_tensor).shuffle(tf.shape(input_tensor, out_type=tf.int64)[0]).repeat(num_epochs)` . If  `shuffle=False` , omit the  `.shuffle(...)` .

**Note:**  if  `num_epochs`  is not  `None` , this function creates local counter `epochs` . Use  `local_variables_initializer()`  to initialize local variables.


#### Args:
- **`string_tensor`** : A 1-D string tensor with the strings to produce.
- **`num_epochs`** : An integer (optional). If specified,  `string_input_producer` produces each string from  `string_tensor`   `num_epochs`  times beforegenerating an  `OutOfRange`  error. If not specified, `string_input_producer`  can cycle through the strings in  `string_tensor` an unlimited number of times.
- **`shuffle`** : Boolean. If true, the strings are randomly shuffled within eachepoch.
- **`seed`** : An integer (optional). Seed used if shuffle == True.
- **`capacity`** : An integer. Sets the queue capacity.
- **`shared_name`** : (optional). If set, this queue will be shared under the givenname across multiple sessions. All sessions open to the device which hasthis queue will be able to access it via the shared_name. Using this ina distributed setting means each name will only be seen by one of thesessions which has access to this operation.
- **`name`** : A name for the operations (optional).
- **`cancel_op`** : Cancel op for the queue (optional).


#### Returns:
A queue with the output strings.  A  `QueueRunner`  for the Queueis added to the current  `Graph` 's  `QUEUE_RUNNER`  collection.

#### Raises:
- **`ValueError`** : If the string_tensor is a null Python list.  At runtime,will fail with an assertion if string_tensor becomes a null tensor.


#### Eager Compatibility
Input pipelines based on Queues are not supported when eager execution isenabled. Please use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API to ingest data under eager execution.

