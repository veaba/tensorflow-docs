Split elements of  `input`  based on  `sep` .

```
 tf.compat.v1.strings.split(    input=None,    sep=None,    maxsplit=-1,    result_type='SparseTensor',    source=None,    name=None) 
```

Let N be the size of  `input`  (typically N will be the batch size). Split eachelement of  `input`  based on  `sep`  and return a  `SparseTensor`  or `RaggedTensor`  containing the split tokens. Empty tokens are ignored.

#### Examples:


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
 
If `sep` is given, consecutive delimiters are not grouped together and are
deemed to delimit empty strings. For example, `input` of `"1<>2<><>3"` and
`sep` of `"<>"` returns `["1", "2", "", "3"]`. If `sep` is None or an empty
string, consecutive whitespace are regarded as a single separator, and the
result will contain no empty strings at the start or end if the string has
leading or trailing whitespace.

Note that the above mentioned behavior matches python's str.split.

#### Args:


* **`input`**: A string `Tensor` of rank `N`, the strings to split.  If
  `rank(input)` is not known statically, then it is assumed to be `1`.
* **`sep`**: `0-D` string `Tensor`, the delimiter character.
* **`maxsplit`**: An `int`. If `maxsplit > 0`, limit of the split of the result.
* **`result_type`**: The tensor type for the result: one of `"RaggedTensor"` or
  `"SparseTensor"`.
* **`source`**: alias for "input" argument.
* **`name`**: A name for the operation (optional).


#### Raises:


* **`ValueError`**: If sep is not a string.


#### Returns:

A `SparseTensor` or `RaggedTensor` of rank `N+1`, the strings split
according to the delimiter.
 
```

