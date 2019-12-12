初始化TPU设备。

**别名** : [ `tf.compat.v1.tpu.experimental.initialize_tpu_system` ](/api_docs/python/tf/tpu/experimental/initialize_tpu_system), [ `tf.compat.v2.tpu.experimental.initialize_tpu_system` ](/api_docs/python/tf/tpu/experimental/initialize_tpu_system)

```
 tf.tpu.experimental.initialize_tpu_system(cluster_resolver=None) 
```

#### 参数：
- **`cluster_resolver`** : A tf.distribute.cluster_resolver.TPUClusterResolver,which provides information about the TPU cluster.


#### 返回：
tpu集群拓扑的tf.tpu.topology对象。

#### 加薪：
- **`RuntimeError`** : If no TPU devices found for eager execution.
