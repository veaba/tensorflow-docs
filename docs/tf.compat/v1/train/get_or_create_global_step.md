Returns and create (if necessary) the global step tensor.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.train.get_or_create_global_step(graph=None)
</code></pre></devsite-code>


### Used in the guide:

- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)



### Used in the tutorials:

- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)



#### Args:

- **`graph`** : The graph in which to create the global step tensor. If missing, use
default graph.



#### Returns:
The global step tensor.

