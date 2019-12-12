Split elements of  `source`  based on  `delimiter` . (deprecated arguments)

```
 tf.compat.v1.string_split(
    source,
    sep=None,
    skip_empty=True,
    delimiter=None,
    result_type='SparseTensor',
    name=None
)
 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(delimiter)` . They will be removed in a future version.Instructions for updating:delimiter is deprecated, please use sep instead.
Let N be the size of  `source`  (typically N will be the batch size). Split eachelement of  `source`  based on  `delimiter`  and return a  `SparseTensor` or  `RaggedTensor`  containing the split tokens. Empty tokens are ignored.

If  `sep`  is an empty string, each element of the  `source`  is splitinto individual strings, each containing one byte. (This includes splittingmultibyte sequences of UTF-8.) If delimiter contains multiple bytes, it istreated as a set of delimiters with each considered a potential split point.

#### 示例：


```
 tf.strings.split(['hello world', 'a b c']) 
 tf.SparseTensor(indices=[[0, 0], [0, 1], [1, 0], [1, 1], [1, 2]], 
                 values=['hello', 'world', 'a', 'b', 'c'] 
                 dense_shape=[2, 3]) 
  
 ``` 
 tf.strings.split(['hello) 
 <tf.RaggedTensor [['hello', 'world'], ['a', 'b', 'c']]> 
  

```

```
 
#### 参数：


* **`source`**: `1-D` string `Tensor`, the strings to split.
* **`sep`**: `0-D` string `Tensor`, the delimiter character, the string should
  be length 0 or 1. Default is ' '.
* **`skip_empty`**: A `bool`. If `True`, skip the empty strings from the result.
* **`delimiter`**: deprecated alias for `sep`.
* **`result_type`**: The tensor type for the result: one of `"RaggedTensor"` or
  `"SparseTensor"`.
* **`name`**: A name for the operation (optional).


#### 加薪：


* **`ValueError`**: If delimiter is not a string.


#### 返回：

A `SparseTensor` or `RaggedTensor` of rank `2`, the strings split according
到分隔符。索引的第一列对应于行
在“source”中，第二列对应于拆分的索引
此行中的组件。
 
```

