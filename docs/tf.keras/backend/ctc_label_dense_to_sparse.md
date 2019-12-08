Converts CTC labels from dense to sparse.



### Aliases:

- [ `tf.compat.v1.keras.backend.ctc_label_dense_to_sparse` ](/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse)

- [ `tf.compat.v2.keras.backend.ctc_label_dense_to_sparse` ](/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse)



```
 tf.keras.backend.ctc_label_dense_to_sparse(
    labels,
    label_lengths
)
 
```



#### Arguments:

- **`labels`** : dense CTC labels.

- **`label_lengths`** : length of the labels.



#### Returns:
A sparse tensor representation of the labels.

