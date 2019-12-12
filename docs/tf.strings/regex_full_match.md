检查输入是否与regex模式匹配。

**别名** : [ `tf.compat.v1.strings.regex_full_match` ](/api_docs/python/tf/strings/regex_full_match), [ `tf.compat.v2.strings.regex_full_match` ](/api_docs/python/tf/strings/regex_full_match)

```
 tf.strings.regex_full_match(    input,    pattern,    name=None) 
```

The input is a string tensor of any shape. The pattern is a scalarstring tensor which is applied to every element of the input tensor.The boolean values (True or False) of the output tensor indicateif the input matches the regex pattern provided.

The pattern follows the re2 syntax (https://github.com/google/re2/wiki/Syntax)

#### 参数：
- **`input`** : A  `Tensor`  of type  `string` .A string tensor of the text to be processed.
- **`pattern`** : A  `Tensor`  of type  `string` .A scalar string tensor containing the regular expression to match the input.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `bool` .

