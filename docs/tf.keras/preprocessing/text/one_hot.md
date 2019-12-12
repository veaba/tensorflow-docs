

One-hot encodes a text into a list of word indexes of size n.

**别名** : [ `tf.compat.v1.keras.preprocessing.text.one_hot` ](/api_docs/python/tf/keras/preprocessing/text/one_hot), [ `tf.compat.v2.keras.preprocessing.text.one_hot` ](/api_docs/python/tf/keras/preprocessing/text/one_hot)

```
 tf.keras.preprocessing.text.one_hot(
    text,
    n,
    filters='!"#$%&amp;()*+,-./:;<=>?@[\\]^_`{|}~\t\n',
    lower=True,
    split=' '
)
 
```

This is a wrapper to the  `hashing_trick`  function using  `hash`  as thehashing function; unicity of word to index mapping non-guaranteed.

# Arguments


```
文本：输入文本（字符串）。
N：内景，词汇量。
filters: list (or concatenation) of characters to filter out, such as
    punctuation. Default: ``!"#$%&amp;()*+,-./:;<=>?@[\]^_`{|}~\t\n``,
    includes basic punctuation, tabs, and newlines.
下：布尔值。是否将文本设置为小写。
拆分：单词拆分的str分隔符。
 
```

# Returns


```
 List of integers in [1, n]. Each integer encodes a word
(unicity non-guaranteed).
 
```

