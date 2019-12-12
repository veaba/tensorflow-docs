Replace elements of  `input`  matching regex  `pattern`  with  `rewrite` .

**别名** : [ `tf.compat.v1.regex_replace` ](/api_docs/python/tf/strings/regex_replace), [ `tf.compat.v1.strings.regex_replace` ](/api_docs/python/tf/strings/regex_replace), [ `tf.compat.v2.strings.regex_replace` ](/api_docs/python/tf/strings/regex_replace)

```
 tf.strings.regex_replace(
    input,
    pattern,
    rewrite,
    replace_global=True,
    name=None
)
 
```

#### 参数：
- **`input`** : string  `Tensor` , the source strings to process.
- **`pattern`** : string or scalar string  `Tensor` , regular expression to use,see more details at https://github.com/google/re2/wiki/Syntax
- **`rewrite`** : string or scalar string  `Tensor` , value to use in matchreplacement, supports backslash-escaped digits (\1 to \9) can be to inserttext matching corresponding parenthesized group.
- **`replace_global`** :  `bool` , if  `True`  replace all non-overlapping matches,else replace only the first match.
- **`name`** : A name for the operation (optional).


#### 返回：
string  `Tensor`  of the same shape as  `input`  with specified replacements.

