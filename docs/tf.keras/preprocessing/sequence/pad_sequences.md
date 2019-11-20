[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/preprocessing/sequence/pad_sequences)  
---  
  
Pads sequences to the same length.

### Aliases:

  * [`tf.compat.v1.keras.preprocessing.sequence.pad_sequences`](/api_docs/python/tf/keras/preprocessing/sequence/pad_sequences)
  * [`tf.compat.v2.keras.preprocessing.sequence.pad_sequences`](/api_docs/python/tf/keras/preprocessing/sequence/pad_sequences)

    
    
    tf.keras.preprocessing.sequence.pad_sequences(
        sequences,
        maxlen=None,
        dtype='int32',
        padding='pre',
        truncating='pre',
        value=0.0
    )
    

### Used in the guide:

  * [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)

### Used in the tutorials:

  * [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
  * [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)

This function transforms a list of `num_samples` sequences (lists of integers)
into a 2D Numpy array of shape `(num_samples, num_timesteps)`. `num_timesteps`
is either the `maxlen` argument if provided, or the length of the longest
sequence otherwise.

Sequences that are shorter than `num_timesteps` are padded with `value` at the
end.

Sequences longer than `num_timesteps` are truncated so that they fit the
desired length. The position where padding or truncation happens is determined
by the arguments `padding` and `truncating`, respectively.

Pre-padding is the default.

# Arguments

    
    
    sequences: List of lists, where each element is a sequence.
    maxlen: Int, maximum length of all sequences.
    dtype: Type of the output sequences.
        To pad sequences with variable length strings, you can use `object`.
    padding: String, 'pre' or 'post':
        pad either before or after each sequence.
    truncating: String, 'pre' or 'post':
        remove values from sequences larger than
        `maxlen`, either at the beginning or at the end of the sequences.
    value: Float or String, padding value.
    

# Returns

    
    
    x: Numpy array with shape `(len(sequences), maxlen)`
    

# Raises

    
    
    ValueError: In case of invalid values for `truncating` or `padding`,
        or in case of invalid shape for a `sequences` entry.
    

