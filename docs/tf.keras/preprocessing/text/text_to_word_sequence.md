

将文本转换为一系列单词（或标记）。

**别名** : [ `tf.compat.v1.keras.preprocessing.text.text_to_word_sequence` ](/api_docs/python/tf/keras/preprocessing/text/text_to_word_sequence), [ `tf.compat.v2.keras.preprocessing.text.text_to_word_sequence` ](/api_docs/python/tf/keras/preprocessing/text/text_to_word_sequence)

```
 tf.keras.preprocessing.text.text_to_word_sequence(
    text,
    filters='!"#$%&amp;()*+,-./:;<=>?@[\\]^_`{|}~\t\n',
    lower=True,
    split=' '
)
 
```

# Arguments


```
文本：输入文本（字符串）。
filters: list (or concatenation) of characters to filter out, such as
    punctuation. Default: ``!"#$%&amp;()*+,-./:;<=>?@[\]^_`{|}~\t\n``,
    includes basic punctuation, tabs, and newlines.
下：布尔值。是否将输入转换为小写。
拆分：单词拆分的str分隔符。
 
```

# Returns


```
单词（或记号）的列表。
 
```

