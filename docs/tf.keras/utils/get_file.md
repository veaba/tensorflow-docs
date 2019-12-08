Downloads a file from a URL if it not already in the cache.



### Aliases:

- [ `tf.compat.v1.keras.utils.get_file` ](/api_docs/python/tf/keras/utils/get_file)

- [ `tf.compat.v2.keras.utils.get_file` ](/api_docs/python/tf/keras/utils/get_file)



```
 tf.keras.utils.get_file(
    fname,
    origin,
    untar=False,
    md5_hash=None,
    file_hash=None,
    cache_subdir='datasets',
    hash_algorithm='auto',
    extract=False,
    archive_format='auto',
    cache_dir=None
)
 
```



### Used in the guide:

- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)

- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)



### Used in the tutorials:

- [Transfer learning with TensorFlow Hub](https://tensorflow.google.cn/tutorials/images/transfer_learning_with_hub)

- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)

- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)

- [Premade Estimators](https://tensorflow.google.cn/tutorials/estimator/premade)

- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

By default the file at the url  `origin`  is downloaded to the
cache_dir  `~/.keras` , placed in the cache_subdir  `datasets` ,
and given the filename  `fname` . The final location of a file
 `example.txt`  would therefore be  `~/.keras/datasets/example.txt` .

Files in tar, tar.gz, tar.bz, and zip formats can also be extracted.
Passing a hash will verify the file after download. The command line
programs  `shasum`  and  `sha256sum`  can compute the hash.



#### Arguments:

- **`fname`** : Name of the file. If an absolute path  `/path/to/file.txt`  is
specified the file will be saved at that location.

- **`origin`** : Original URL of the file.

- **`untar`** : Deprecated in favor of 'extract'.
boolean, whether the file should be decompressed

- **`md5_hash`** : Deprecated in favor of 'file_hash'.
md5 hash of the file for verification

- **`file_hash`** : The expected hash string of the file after download.
The sha256 and md5 hash algorithms are both supported.

- **`cache_subdir`** : Subdirectory under the Keras cache dir where the file is
saved. If an absolute path  `/path/to/folder`  is
specified the file will be saved at that location.

- **`hash_algorithm`** : Select the hash algorithm to verify the file.
options are 'md5', 'sha256', and 'auto'.
The default 'auto' detects the hash algorithm in use.

- **`extract`** : True tries extracting the file as an Archive, like tar or zip.

- **`archive_format`** : Archive format to try for extracting the file.
Options are 'auto', 'tar', 'zip', and None.
'tar' includes tar, tar.gz, and tar.bz files.
The default 'auto' is ['tar', 'zip'].
None or an empty list will return no matches found.

- **`cache_dir`** : Location to store cached files, when None it
defaults to the <a href="/faq/#where_is_the_keras_configuration_filed_stored">Keras
  Directory</a>.



#### Returns:
Path to the downloaded file

