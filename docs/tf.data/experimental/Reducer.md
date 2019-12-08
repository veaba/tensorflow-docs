

## Class  `Reducer` 
A reducer is used for reducing a set of elements.



### Aliases:

- Class [ `tf.compat.v1.data.experimental.Reducer` ](/api_docs/python/tf/data/experimental/Reducer)

- Class [ `tf.compat.v2.data.experimental.Reducer` ](/api_docs/python/tf/data/experimental/Reducer)

A reducer is represented as a tuple of the three functions:
  1) initialization function: key => initial state
  2) reduce function: (old state, input) => new state
  3) finalization function: state => result



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/grouping.py#L452-L455)



```
 __init__(
    init_func,
    reduce_func,
    finalize_func
)
 
```

Initialize self.  See help(type(self)) for accurate signature.



## Properties


###  `finalize_func` 


###  `init_func` 


###  `reduce_func` 
