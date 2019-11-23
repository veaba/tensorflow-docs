

## Class  `VariableSynchronization` 

Indicates when a distributed variable will be synced.


### Aliases:
- Class [ `tf.compat.v1.VariableSynchronization` ](/api_docs/python/tf/VariableSynchronization)
- Class [ `tf.compat.v2.VariableSynchronization` ](/api_docs/python/tf/VariableSynchronization)
-  `AUTO` : Indicates that the synchronization will be determined by the current `DistributionStrategy`  (eg. With  `MirroredStrategy`  this would be `ON_WRITE` ).
-  `NONE` : Indicates that there will only be one copy of the variable, sothere is no need to sync.
-  `ON_WRITE` : Indicates that the variable will be updated across devicesevery time it is written.
-  `ON_READ` : Indicates that the variable will be aggregated across deviceswhen it is read (eg. when checkpointing or when evaluating an op that usesthe variable).


## Class Members
-  `AUTO`  []()
-  `NONE`  []()
-  `ON_READ`  []()
-  `ON_WRITE`  []()
