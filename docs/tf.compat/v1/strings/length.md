String lengths of  `input` .

```
 tf.compat.v1.strings.length(    input,    name=None,    unit='BYTE') 
```

计算输入张量中给定的每个字符串的长度。

#### 参数：
- **`input`** : A  `Tensor`  of type  `string` .The string for which to compute the length.
- **`unit`** : An optional  `string`  from:  `"BYTE", "UTF8_CHAR"` . Defaults to  `"BYTE"` .The unit that is counted to compute string length.  One of:  `"BYTE"`  (forthe number of bytes in each string) or  `"UTF8_CHAR"`  (for the number of UTF-8encoded Unicode code points in each string).  Results are undefinedif  `unit=UTF8_CHAR`  and the  `input`  strings do not contain structurallyvalid UTF-8.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `int32` .

