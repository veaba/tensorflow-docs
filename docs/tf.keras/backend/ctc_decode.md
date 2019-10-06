
Decodes the output of a softmax.
### Aliases:
- `tf.compat.v1.keras.backend.ctc_decode`
- `tf.compat.v2.keras.backend.ctc_decode`

```
 tf.keras.backend.ctc_decode(
    y_pred,
    input_length,
    greedy=True,
    beam_width=100,
    top_paths=1
)
```

Can use either greedy search (also known as best path) or a constrained dictionary search.
#### Arguments:
- `y_pred`: tensor (`samples, time_steps, num_categories`) containing the prediction, or output of the softmax.
- `input_length`: tensor (`samples, `) containing the sequence length for each batch item in `y_pred`.
- `greedy`: perform much faster best-path search if `true`. This does not use a dictionary.
- `beam_width`: if `greedy` is `false`: a beam search decoder will be used with a beam of this width.
- `top_paths`: if `greedy` is `false`, how many of the most probable paths will be returned.
#### Returns:
- `Tuple`: List: if `greedy` is `true`, returns a list of one element that contains the decoded sequence. If `false`, returns the `top_paths` most probable decoded sequences. Important: blank labels are returned as `-1`. Tensor (`top_paths`, ) that contains the log probability of each decoded sequence.
