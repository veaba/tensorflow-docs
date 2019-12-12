Create a list of partitioned variables according to the given  `slicing` . (deprecated)

```
 tf.compat.v1.create_partitioned_variables(    shape,    slicing,    initializer,    dtype=tf.dtypes.float32,    trainable=True,    collections=None,    name=None,    reuse=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use  `tf.get_variable`  with a partitioner set.
Currently only one dimension of the full variable can be sliced, and thefull variable can be reconstructed by the concatenation of the returnedlist along that dimension.

#### 参数：
- **`shape`** : List of integers.  The shape of the full variable.
- **`slicing`** : List of integers.  How to partition the variable.Must be of the same length as  `shape` .  Each valueindicate how many slices to create in the correspondingdimension.  Presently only one of the values can be more than 1;that is, the variable can only be sliced along one dimension.

For convenience, The requested number of partitions does not have todivide the corresponding dimension evenly.  If it does not, theshapes of the partitions are incremented by 1 starting from partition0 until all slack is absorbed.  The adjustment rules may change in thefuture, but as you can save/restore these variables with differentslicing specifications this should not be a problem.


- **`initializer`** : A  `Tensor`  of shape  `shape`  or a variable initializerfunction.  If a function, it will be called once for each slice,passing the shape and data type of the slice as parameters.  Thefunction must return a tensor with the same shape as the slice.


- **`dtype`** : Type of the variables. Ignored if  `initializer`  is a  `Tensor` .


- **`trainable`** : If True also add all the variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES` .


- **`collections`** : List of graph collections keys to add the variables to.Defaults to  `[GraphKeys.GLOBAL_VARIABLES]` .


- **`name`** : Optional name for the full variable.  Defaults to `"PartitionedVariable"`  and gets uniquified automatically.


- **`reuse`** : Boolean or  `None` ; if  `True`  and name is set, it would reusepreviously created variables. if  `False`  it will create new variables.if  `None` , it would inherit the parent scope reuse.


#### 返回：
与切片相对应的变量列表。

#### 加薪：
- **`ValueError`** : If any of the arguments is malformed.
