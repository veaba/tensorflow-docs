

## Class  `Tokenizer` 
文本标记化实用程序类。

**别名** : [ `tf.compat.v1.keras.preprocessing.text.Tokenizer` ](/api_docs/python/tf/keras/preprocessing/text/Tokenizer), [ `tf.compat.v2.keras.preprocessing.text.Tokenizer` ](/api_docs/python/tf/keras/preprocessing/text/Tokenizer)

### 在教程中使用：
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
This class allows to vectorize a text corpus, by turning eachtext into either a sequence of integers (each integer being the indexof a token in a dictionary) or into a vector where the coefficientfor each token could be binary, based on word count, based on tf-idf...

# Arguments


```
 num_words: the maximum number of words to keep, based
    on word frequency. Only the most common `num_words-1` words will
    be kept.
过滤器：一个字符串，其中每个元素都是
    filtered from the texts. The default is all punctuation, plus
    tabs and line breaks, minus the `'` character.
下：布尔值。是否将文本转换为小写。
拆分：单词拆分的str分隔符。
char_level: if True, every character will be treated as a token.
oov_token: if given, it will be added to word_index and used to
    replace out-of-vocabulary words during text_to_sequence calls
 
```

By default, all punctuation is removed, turning the texts intospace-separated sequences of words(words maybe include the  `'`  character). These sequences are thensplit into lists of tokens. They will then be indexed or vectorized.

 `0`  is a reserved index that won't be assigned to any word.

##  `__init__` 


```
 __init__(
    num_words=None,
    filters='!"#$%&amp;()*+,-./:;<=>?@[\\]^_`{|}~\t\n',
    lower=True,
    split=' ',
    char_level=False,
    oov_token=None,
    document_count=0,
    **kwargs
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `fit_on_sequences` 


```
 fit_on_sequences(sequences)
 
```

根据序列列表更新内部词汇表。

Required before using  `sequences_to_matrix` (if  `fit_on_texts`  was never called).

# Arguments


```
序列：序列的列表。
    A "sequence" is a list of integer word indices.
 
```

###  `fit_on_texts` 


```
 fit_on_texts(texts)
 
```

根据文本列表更新内部词汇。

In the case where texts contains lists,we assume each entry of the lists to be a token.

Required before using  `texts_to_sequences`  or  `texts_to_matrix` .

# Arguments


```
 texts: can be a list of strings,
    a generator of strings (for memory-efficiency),
    or a list of list of strings.
 
```

###  `get_config` 


```
 get_config()
 
```

Returns the tokenizer configuration as Python dictionary.The word count dictionaries used by the tokenizer get serializedinto plain JSON, so that the configuration can be read by otherprojects.

# Returns


```
具有标记器配置的python字典。
 
```

###  `sequences_to_matrix` 


```
 sequences_to_matrix(
    sequences,
    mode='binary'
)
 
```

将序列列表转换为numpy矩阵。

# Arguments


```
序列：序列列表
    (a sequence is a list of integer word indices).
mode: one of "binary", "count", "tfidf", "freq"
 
```

# Returns


```
纽米矩阵。
 
```

# Raises


```
 ValueError: In case of invalid `mode` argument,
    or if the Tokenizer requires to be fit to sample data.
 
```

###  `sequences_to_texts` 


```
 sequences_to_texts(sequences)
 
```

将每个序列转换为文本列表。

Only top  `num_words-1`  most frequent words will be taken into account.Only words known by the tokenizer will be taken into account.

# Arguments


```
序列：序列列表（整数列表）。
 
```

# Returns


```
 A list of texts (strings)
 
```

###  `sequences_to_texts_generator` 


```
 sequences_to_texts_generator(sequences)
 
```

Transforms each sequence in  `sequences`  to a list of texts(strings).

Each sequence has to a list of integers.In other words, sequences should be a list of sequences

Only top  `num_words-1`  most frequent words will be taken into account.Only words known by the tokenizer will be taken into account.

# Arguments


```
序列：序列列表。
 
```

# Yields


```
生成单个文本。
 
```

###  `texts_to_matrix` 


```
 texts_to_matrix(
    texts,
    mode='binary'
)
 
```

将文本列表转换为numpy矩阵。

# Arguments


```
文本：字符串列表。
mode: one of "binary", "count", "tfidf", "freq".
 
```

# Returns


```
纽米矩阵。
 
```

###  `texts_to_sequences` 


```
 texts_to_sequences(texts)
 
```

将文本中的每个文本转换为一个整数序列。

Only top  `num_words-1`  most frequent words will be taken into account.Only words known by the tokenizer will be taken into account.

# Arguments


```
文本：文本（字符串）列表。
 
```

# Returns


```
序列列表。
 
```

###  `texts_to_sequences_generator` 


```
 texts_to_sequences_generator(texts)
 
```

Transforms each text in  `texts`  to a sequence of integers.

Each item in texts can also be a list,in which case we assume each item of that list to be a token.

Only top  `num_words-1`  most frequent words will be taken into account.Only words known by the tokenizer will be taken into account.

# Arguments


```
文本：文本（字符串）列表。
 
```

# Yields


```
产生单个序列。
 
```

###  `to_json` 


```
 to_json(**kwargs)
 
```

Returns a JSON string containing the tokenizer configuration.To load a tokenizer from a JSON string, use `keras.preprocessing.text.tokenizer_from_json(json_string)` .

# Arguments


```
 **kwargs: Additional keyword arguments
    to be passed to `json.dumps()`.
 
```

# Returns


```
包含标记器配置的json字符串。
 
```

