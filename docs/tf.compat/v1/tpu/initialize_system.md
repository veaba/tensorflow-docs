初始化用于TensorFlow的分布式TPU系统。

```
 tf.compat.v1.tpu.initialize_system(    embedding_config=None,    job=None) 
```

#### 参数：
- **`embedding_config`** : If not None, a  `TPUEmbeddingConfiguration`  protodescribing the desired configuration of the hardware embedding lookuptables. If embedding_config is None, no hardware embeddings can be used.
- **`job`** : The job (the XXX in TensorFlow device specification /job:XXX) thatcontains the TPU devices that will be initialized. If job=None it isassumed there is only one job in the TensorFlow flock, and an error willbe returned if this assumption does not hold.


#### 返回：
A serialized  `TopologyProto`  that describes the TPU system. 注意： the topology must be evaluated using  `Session.run`  before it can be used.

