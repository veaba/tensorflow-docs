Increments 'ref' until it reaches 'limit'. (deprecated)

```
 tf.compat.v1.count_up_to(    ref,    limit,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Prefer Dataset.range instead.


#### 参数：
- **`ref`** : A Variable. Must be one of the following types:  `int32` ,  `int64` .Should be from a scalar  `Variable`  node.
- **`limit`** : An  `int` .If incrementing ref would bring it above limit, instead generates an'OutOfRange' error.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `ref` .A copy of the input before increment. If nothing else modifies theinput, the values produced will all be distinct.

