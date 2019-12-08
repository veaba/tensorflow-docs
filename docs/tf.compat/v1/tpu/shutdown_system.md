Shuts down a running a distributed TPU system.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.tpu.shutdown_system(job=None)
</code></pre></devsite-code>


#### Args:

- **`job`** : The job (the XXX in TensorFlow device specification /job:XXX) that
contains the TPU devices that will be shutdown. If job=None it is
assumed there is only one job in the TensorFlow flock, and an error will
be returned if this assumption does not hold.

