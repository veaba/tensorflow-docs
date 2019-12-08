

## Class  `SessionRunValues` 
Contains the results of  `Session.run()` .



### Aliases:

- Class [ `tf.compat.v1.estimator.SessionRunValues` ](/api_docs/python/tf/estimator/SessionRunValues)

- Class [ `tf.compat.v1.train.SessionRunValues` ](/api_docs/python/tf/estimator/SessionRunValues)

- Class [ `tf.compat.v2.estimator.SessionRunValues` ](/api_docs/python/tf/estimator/SessionRunValues)

In the future we may use this object to add more information about result of
run without changing the Hook API.



#### Args:

- **`results`** : The return values from  `Session.run()`  corresponding to the fetches
attribute returned in the RunArgs. Note that this has the same shape as
the RunArgs fetches.  For example:
fetches = global_step_tensor
=> results = nparray(int)
fetches = [train_op, summary_op, global_step_tensor]
=> results = [None, nparray(string), nparray(int)]
fetches = {'step': global_step_tensor, 'summ': summary_op}
=> results = {'step': nparray(int), 'summ': nparray(string)}

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



## Properties


###  `results` 


###  `options` 


###  `run_metadata` 
