[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/experimental/terminate_keras_multiprocessing_pools)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L450-L554)  
  
  
Destroy Keras' multiprocessing pools to prevent deadlocks.

### Aliases:

  * [`tf.compat.v1.keras.experimental.terminate_keras_multiprocessing_pools`](/api_docs/python/tf/keras/experimental/terminate_keras_multiprocessing_pools)
  * [`tf.compat.v2.keras.experimental.terminate_keras_multiprocessing_pools`](/api_docs/python/tf/keras/experimental/terminate_keras_multiprocessing_pools)

    
    
    tf.keras.experimental.terminate_keras_multiprocessing_pools(
        grace_period=0.1,
        use_sigkill=False
    )
    

In general multiprocessing.Pool can interact quite badly with other, seemingly
unrelated, parts of a codebase due to Pool's reliance on fork. This method
cleans up all pools which are known to belong to Keras (and thus can be safely
terminated).

#### Args:

  * **`grace_period`** : Time (in seconds) to wait for process cleanup to propagate.
  * **`use_sigkill`** : Boolean of whether or not to perform a cleanup pass using SIGKILL.

#### Returns:

A list of human readable strings describing all issues encountered. It is up
to the caller to decide whether to treat this as an error condition.

