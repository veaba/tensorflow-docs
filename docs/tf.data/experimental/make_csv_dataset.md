将csv文件读入数据集。

```
 tf.data.experimental.make_csv_dataset(    file_pattern,    batch_size,    column_names=None,    column_defaults=None,    label_name=None,    select_columns=None,    field_delim=',',    use_quote_delim=True,    na_value='',    header=True,    num_epochs=None,    shuffle=True,    shuffle_buffer_size=10000,    shuffle_seed=None,    prefetch_buffer_size=dataset_ops.AUTOTUNE,    num_parallel_reads=1,    sloppy=False,    num_rows_for_inference=100,    compression_type=None,    ignore_errors=False) 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)


### 在教程中使用：
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Load CSV data](https://tensorflow.google.cn/tutorials/load_data/csv)
Reads CSV files into a dataset, where each element is a (features, labels)tuple that corresponds to a batch of CSV rows. The features dictionarymaps feature column names to  `Tensor` s containing the correspondingfeature data, and labels is a  `Tensor`  containing the batch's label data.

#### 参数：
- **`file_pattern`** : List of files or patterns of file paths containing CSVrecords. See [ `tf.io.gfile.glob` ](https://tensorflow.google.cn/api_docs/python/tf/io/gfile/glob) for pattern rules.
- **`batch_size`** : An int representing the number of records to combinein a single batch.
- **`column_names`** : An optional list of strings that corresponds to the CSVcolumns, in order. One per column of the input record. If this is notprovided, infers the column names from the first row of the records.These names will be the keys of the features dict of each dataset element.
- **`column_defaults`** : A optional list of default values for the CSV fields. Oneitem per selected column of the input record. Each item in the list iseither a valid CSV dtype (float32, float64, int32, int64, or string), or a `Tensor`  with one of the aforementioned types. The tensor can either bea scalar default value (if the column is optional), or an empty tensor (ifthe column is required). If a dtype is provided instead of a tensor, thecolumn is also treated as required. If this list is not provided, triesto infer types based on reading the first num_rows_for_inference rows offiles specified, and assumes all columns are optional, defaulting to  `0` for numeric values and  `""`  for string values. If both this and `select_columns`  are specified, these must have the same lengths, and `column_defaults`  is assumed to be sorted in order of increasing columnindex.
- **`label_name`** : A optional string corresponding to the label column. Ifprovided, the data for this column is returned as a separate  `Tensor`  fromthe features dictionary, so that the dataset complies with the formatexpected by a  `tf.Estimator.train`  or  `tf.Estimator.evaluate`  inputfunction.
- **`select_columns`** : An optional list of integer indices or string columnnames, that specifies a subset of columns of CSV data to select. Ifcolumn names are provided, these must correspond to names provided in `column_names`  or inferred from the file header lines. When this argumentis specified, only a subset of CSV columns will be parsed and returned,corresponding to the columns specified. Using this results in fasterparsing and lower memory usage. If both this and  `column_defaults`  arespecified, these must have the same lengths, and  `column_defaults`  isassumed to be sorted in order of increasing column index.
- **`field_delim`** : An optional  `string` . Defaults to  `","` . Char delimiter toseparate fields in a record.
- **`use_quote_delim`** : An optional bool. Defaults to  `True` . If false, treatsdouble quotation marks as regular characters inside of the string fields.
- **`na_value`** : Additional string to recognize as NA/NaN.
- **`header`** : A bool that indicates whether the first rows of provided CSV filescorrespond to header lines with column names, and should not be includedin the data.
- **`num_epochs`** : An int specifying the number of times this dataset is repeated.If None, cycles through the dataset forever.
- **`shuffle`** : A bool that indicates whether the input should be shuffled.
- **`shuffle_buffer_size`** : Buffer size to use for shuffling. A large buffer sizeensures better shuffling, but increases memory usage and startup time.
- **`shuffle_seed`** : Randomization seed to use for shuffling.
- **`prefetch_buffer_size`** : An int specifying the number of featurebatches to prefetch for performance improvement. Recommended value is thenumber of batches consumed per training step. Defaults to auto-tune.


- **`num_parallel_reads`** : Number of threads used to read CSV records from files.If >1, the results will be interleaved.


- **`sloppy`** : If  `True` , reading performance will be improved atthe cost of non-deterministic ordering. If  `False` , the order of elementsproduced is deterministic prior to shuffling (elements are stillrandomized if  `shuffle=True` . Note that if the seed is set, then orderof elements after shuffling is deterministic). Defaults to  `False` .


- **`num_rows_for_inference`** : Number of rows of a file to use for type inferenceif record_defaults is not provided. If None, reads all the rows of allthe files. Defaults to 100.


- **`compression_type`** : (Optional.) A [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string) scalar evaluating to one of `""`  (no compression),  `"ZLIB"` , or  `"GZIP"` . Defaults to no compression.


- **`ignore_errors`** : (Optional.) If  `True` , ignores errors with CSV file parsing,such as malformed data or empty lines, and moves on to the next validCSV record. Otherwise, the dataset raises an error and stops processingwhen encountering any invalid records. Defaults to  `False` .


#### 返回：
A dataset, where each element is a (features, labels) tuple that correspondsto a batch of  `batch_size`  CSV rows. The features dictionary maps featurecolumn names to  `Tensor` s containing the corresponding column data, andlabels is a  `Tensor`  containing the column data for the label columnspecified by  `label_name` .

#### 加薪：
- **`ValueError`** : If any of the arguments is malformed.
