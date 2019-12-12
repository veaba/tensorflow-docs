Initializes a distributed TPU system for use with TensorFlow.

```
 tf.compat.v1.tpu.initialize_system(    embedding_config=None,    job=None) 
```

#### Args:
- **`embedding_config`** : If not None, a  `TPUEmbeddingConfiguration`  protodescribing the desired configuration of the hardware embedding lookuptables. If embedding_config is None, no hardware embeddings can be used.
- **`job`** : The job (the XXX in TensorFlow device specification /job:XXX) thatcontains the TPU devices that will be initialized. If job=None it isassumed there is only one job in the TensorFlow flock, and an error willbe returned if this assumption does not hold.


#### Returns:
A serialized  `TopologyProto`  that describes the TPU system. Note:  the topology must be evaluated using  `Session.run`  before it can be used.

