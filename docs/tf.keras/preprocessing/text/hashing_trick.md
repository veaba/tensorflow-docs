

Converts a text to a sequence of indexes in a fixed-size hashing space.

**别名** : [ `tf.compat.v1.keras.preprocessing.text.hashing_trick` ](/api_docs/python/tf/keras/preprocessing/text/hashing_trick), [ `tf.compat.v2.keras.preprocessing.text.hashing_trick` ](/api_docs/python/tf/keras/preprocessing/text/hashing_trick)

```
 tf.keras.preprocessing.text.hashing_trick(
    text,
    n,
    hash_function=None,
    filters='!"#$%&amp;()*+,-./:;<=>?@[\\]^_`{|}~\t\n',
    lower=True,
    split=' '
)
 
```

# Arguments


```
文本：输入文本（字符串）。
n：散列空间的维数。
hash_function: defaults to python `hash` function, can be 'md5' or
    any function that takes in input a string and returns a int.
    Note that 'hash' is not a stable hashing function, so
    it is not consistent across different runs, while 'md5'
    is a stable hashing function.
filters: list (or concatenation) of characters to filter out, such as
    punctuation. Default: ``!"#$%&amp;()*+,-./:;<=>?@[\]^_`{|}~\t\n``,
    includes basic punctuation, tabs, and newlines.
下：布尔值。是否将文本设置为小写。
拆分：单词拆分的str分隔符。
 
```

# Returns


```
 A list of integer word indices (unicity non-guaranteed).
 
```

 `0`  is a reserved index that won't be assigned to any word.

Two or more words may be assigned to the same index, due to possiblecollisions by the hashing function.The [probability](https://en.wikipedia.org/wiki/Birthday_problem#Probability_table)of a collision is in relation to the dimension of the hashing space andthe number of distinct objects.

