Returns the device name for a core in a replicated TPU computation.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.tpu.core(num)
</code></pre></devsite-code>


#### Args:

- **`num`** : the virtual core number within each replica to which operators should
be assigned.



#### Returns:
A device name, suitable for passing to [ `tf.device()` ](https://tensorflow.google.cn/api_docs/python/tf/device).

