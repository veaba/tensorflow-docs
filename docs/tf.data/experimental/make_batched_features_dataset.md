[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/make_batched_features_dataset)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/readers.py#L730-L887)  
  
  
### Aliases:

  * [`tf.compat.v2.data.experimental.make_batched_features_dataset`](/api_docs/python/tf/data/experimental/make_batched_features_dataset)

    
    
    tf.data.experimental.make_batched_features_dataset(
        file_pattern,
        batch_size,
        features,
        reader=tf.compat.v1.data.TFRecordDataset,
        label_key=None,
        reader_args=None,
        num_epochs=None,
        shuffle=True,
        shuffle_buffer_size=10000,
        shuffle_seed=None,
        prefetch_buffer_size=dataset_ops.AUTOTUNE,
        reader_num_threads=1,
        parser_num_threads=2,
        sloppy_ordering=False,
        drop_final_batch=False
    )
    

