[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/readers.py#L541-L569)  
---  
  
Reads CSV files into a dataset.

    
    
    tf.compat.v1.data.experimental.make_csv_dataset(
        file_pattern,
        batch_size,
        column_names=None,
        column_defaults=None,
        label_name=None,
        select_columns=None,
        field_delim=',',
        use_quote_delim=True,
        na_value='',
        header=True,
        num_epochs=None,
        shuffle=True,
        shuffle_buffer_size=10000,
        shuffle_seed=None,
        prefetch_buffer_size=dataset_ops.AUTOTUNE,
        num_parallel_reads=1,
        sloppy=False,
        num_rows_for_inference=100,
        compression_type=None,
        ignore_errors=False
    )
    

Reads CSV files into a dataset, where each element is a (features, labels)
tuple that corresponds to a batch of CSV rows. The features dictionary maps
feature column names to `Tensor`s containing the corresponding feature data,
and labels is a `Tensor` containing the batch's label data.

#### Args:

  * **`file_pattern`** : List of files or patterns of file paths containing CSV records. See [`tf.io.gfile.glob`](https://tensorflow.google.cn/api_docs/python/tf/io/gfile/glob) for pattern rules.
  * **`batch_size`** : An int representing the number of records to combine in a single batch.
  * **`column_names`** : An optional list of strings that corresponds to the CSV columns, in order. One per column of the input record. If this is not provided, infers the column names from the first row of the records. These names will be the keys of the features dict of each dataset element.
  * **`column_defaults`** : A optional list of default values for the CSV fields. One item per selected column of the input record. Each item in the list is either a valid CSV dtype (float32, float64, int32, int64, or string), or a `Tensor` with one of the aforementioned types. The tensor can either be a scalar default value (if the column is optional), or an empty tensor (if the column is required). If a dtype is provided instead of a tensor, the column is also treated as required. If this list is not provided, tries to infer types based on reading the first num_rows_for_inference rows of files specified, and assumes all columns are optional, defaulting to `0` for numeric values and `""` for string values. If both this and `select_columns` are specified, these must have the same lengths, and `column_defaults` is assumed to be sorted in order of increasing column index.
  * **`label_name`** : A optional string corresponding to the label column. If provided, the data for this column is returned as a separate `Tensor` from the features dictionary, so that the dataset complies with the format expected by a `tf.Estimator.train` or `tf.Estimator.evaluate` input function.
  * **`select_columns`** : An optional list of integer indices or string column names, that specifies a subset of columns of CSV data to select. If column names are provided, these must correspond to names provided in `column_names` or inferred from the file header lines. When this argument is specified, only a subset of CSV columns will be parsed and returned, corresponding to the columns specified. Using this results in faster parsing and lower memory usage. If both this and `column_defaults` are specified, these must have the same lengths, and `column_defaults` is assumed to be sorted in order of increasing column index.
  * **`field_delim`** : An optional `string`. Defaults to `","`. Char delimiter to separate fields in a record.
  * **`use_quote_delim`** : An optional bool. Defaults to `True`. If false, treats double quotation marks as regular characters inside of the string fields.
  * **`na_value`** : Additional string to recognize as NA/NaN.
  * **`header`** : A bool that indicates whether the first rows of provided CSV files correspond to header lines with column names, and should not be included in the data.
  * **`num_epochs`** : An int specifying the number of times this dataset is repeated. If None, cycles through the dataset forever.
  * **`shuffle`** : A bool that indicates whether the input should be shuffled.
  * **`shuffle_buffer_size`** : Buffer size to use for shuffling. A large buffer size ensures better shuffling, but increases memory usage and startup time.
  * **`shuffle_seed`** : Randomization seed to use for shuffling.
  * **`prefetch_buffer_size`** : An int specifying the number of feature batches to prefetch for performance improvement. Recommended value is the number of batches consumed per training step. Defaults to auto-tune.

  * **`num_parallel_reads`** : Number of threads used to read CSV records from files. If >1, the results will be interleaved.

  * **`sloppy`** : If `True`, reading performance will be improved at the cost of non-deterministic ordering. If `False`, the order of elements produced is deterministic prior to shuffling (elements are still randomized if `shuffle=True`. Note that if the seed is set, then order of elements after shuffling is deterministic). Defaults to `False`.

  * **`num_rows_for_inference`** : Number of rows of a file to use for type inference if record_defaults is not provided. If None, reads all the rows of all the files. Defaults to 100.

  * **`compression_type`** : (Optional.) A [`tf.string`](https://tensorflow.google.cn/api_docs/python/tf#string) scalar evaluating to one of `""` (no compression), `"ZLIB"`, or `"GZIP"`. Defaults to no compression.

  * **`ignore_errors`** : (Optional.) If `True`, ignores errors with CSV file parsing, such as malformed data or empty lines, and moves on to the next valid CSV record. Otherwise, the dataset raises an error and stops processing when encountering any invalid records. Defaults to `False`.

#### Returns:

A dataset, where each element is a (features, labels) tuple that corresponds
to a batch of `batch_size` CSV rows. The features dictionary maps feature
column names to `Tensor`s containing the corresponding column data, and labels
is a `Tensor` containing the column data for the label column specified by
`label_name`.

#### Raises:

  * **`ValueError`** : If any of the arguments is malformed.

