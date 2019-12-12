Split elements of  `input`  based on  `sep`  into a  `RaggedTensor` .

```
 tf.strings.split(
    input,
    sep=None,
    maxsplit=-1,
    name=None
)
 
```

### Used in the guide:
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)


### Used in the tutorials:
- [Load images](https://tensorflow.google.cn/tutorials/load_data/images)
Let N be the size of  `input`  (typically N will be the batch size). Split eachelement of  `input`  based on  `sep`  and return a  `SparseTensor`  or `RaggedTensor`  containing the split tokens. Empty tokens are ignored.

#### Example:


```
 tf.strings.split('hello world') 
 <Tensor ['hello', 'world']> 
 tf.strings.split(['hello world', 'a b c']) 
 <tf.RaggedTensor [['hello', 'world'], ['a', 'b', 'c']]> 

```

If  `sep`  is given, consecutive delimiters are not grouped together and aredeemed to delimit empty strings. For example,  `input`  of  `"1<>2<><>3"`  and `sep`  of  `"<>"`  returns  `["1", "2", "", "3"]` . If  `sep`  is None or an emptystring, consecutive whitespace are regarded as a single separator, and theresult will contain no empty strings at the start or end if the string hasleading or trailing whitespace.

Note that the above mentioned behavior matches python's str.split.

#### Args:
- **`input`** : A string  `Tensor`  of rank  `N` , the strings to split.  If `rank(input)`  is not known statically, then it is assumed to be  `1` .
- **`sep`** :  `0-D`  string  `Tensor` , the delimiter string.
- **`maxsplit`** : An  `int` . If  `maxsplit > 0` , limit of the split of the result.
- **`name`** : A name for the operation (optional).


#### Raises:
- **`ValueError`** : If sep is not a string.


#### Returns:
A  `RaggedTensor`  of rank  `N+1` , the strings split according to thedelimiter.

