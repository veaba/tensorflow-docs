

## Class  `SessionRunValues` 
Contains the results of  `Session.run()` .

**别名** : [ `tf.compat.v1.estimator.SessionRunValues` ](/api_docs/python/tf/estimator/SessionRunValues), [ `tf.compat.v1.train.SessionRunValues` ](/api_docs/python/tf/estimator/SessionRunValues), [ `tf.compat.v2.estimator.SessionRunValues` ](/api_docs/python/tf/estimator/SessionRunValues)

In the future we may use this object to add more information about result ofrun without changing the Hook API.

#### 参数：
- **`results`** : The return values from  `Session.run()`  corresponding to the fetchesattribute returned in the RunArgs. Note that this has the same shape asthe RunArgs fetches.  For example:fetches = global_step_tensor=> results = nparray(int)fetches = [train_op, summary_op, global_step_tensor]=> results = [None, nparray(string), nparray(int)]fetches = {'step': global_step_tensor, 'summ': summary_op}=> results = {'step': nparray(int), 'summ': nparray(string)}
- **`options`** :  `RunOptions`  from the  `Session.run()`  call.
- **`run_metadata`** :  `RunMetadata`  from the  `Session.run()`  call.


##  `__new__` 


```
 __new__(
    _cls,
    results,
    options,
    run_metadata
)
 
```

Create new instance of SessionRunValues(results, options, run_metadata)

## 属性


###  `results` 


###  `options` 


###  `run_metadata` 
