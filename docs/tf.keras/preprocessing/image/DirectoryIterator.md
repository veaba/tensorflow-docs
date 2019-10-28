## Class DirectoryIterator
Iterator capable of reading images from a directory on disk.
Inherits From: `Iterator`
### Aliases:
- Class `tf.compat.v1.keras.preprocessing.image.DirectoryIterator`
- Class `tf.compat.v2.keras.preprocessing.image.DirectoryIterator`
#### Arguments:
- `directory`: Path to the `directory` to read images from. Each sub`directory` in this `directory` will be considered to contain images from one class, or alternatively you could specify class subdirectories via the `classes` argument.
- `image_data_generator`: Instance of `ImageDataGenerator` to use for random transformations and normalization.
- `target_size`: tuple of integers, dimensions to resize input images to.
- `color_mode`: One of `"rgb"`, `"rgba"`, `"grayscale"`. Color mode to read images.
- `classes`: Optional list of strings, names of subdirectories containing images from each class (e.g. `["dogs", "cats"]`). It will be computed automatically if not set.
- `class_mode`: Mode for yielding the targets: `"binary"`: binary targets (if there are only two classes), `"categorical"`: categorical targets, `"sparse"`: integer targets, `"input"`: targets are images identical to input images (mainly used to work with autoencoders), `None`: no targets get yielded (only input images are yielded).
- `batch_size`: Integer, size of a batch.
- `shuffle`: Boolean, whether to `shuffle` the data between epochs.
- `seed`: Random `seed` for data shuffling.
- `data_format`: String, one of `channels_first`, `channels_last`.
- `save_to_dir`: Optional directory where to save the pictures being yielded, in a viewable format. This is useful for visualizing the random transformations being applied, for debugging purposes.
- `save_prefix`: String prefix to use for saving sample images (if `save_to_dir` is set).
- `save_format`: Format to use for saving sample images (if `save_to_dir` is set).
- `subset`: Subset of data (`"training"` or `"validation"`) if validation_split is set in ImageDataGenerator.
- `interpolation`: Interpolation method used to resample the image if the target size is different from that of the loaded image. Supported methods are "nearest", "bilinear", and "bicubic". If PIL version 1.1.3 or newer is installed, "lanczos" is also supported. If PIL version 3.4.0 or newer is installed, "box" and "hamming" are also supported. By default, "nearest" is used.
- `dtype`: Dtype to use for generated arrays.
## __init__
View source

```
 __init__(
    directory,
    image_data_generator,
    target_size=(256, 256),
    color_mode='rgb',
    classes=None,
    class_mode='categorical',
    batch_size=32,
    shuffle=True,
    seed=None,
    data_format=None,
    save_to_dir=None,
    save_prefix='',
    save_format='png',
    follow_links=False,
    subset=None,
    interpolation='nearest',
    dtype=None
)
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### filepaths
List of absolute paths to image files
### labels
Class labels of every observation
### sample_weight
## Methods
### __getitem__

```
 __getitem__(idx)
```
Gets batch at position `index`.
#### Arguments:
- `index`: position of the batch in the Sequence.
#### Returns:
A batch
### __iter__

```
 __iter__()
```
Create a generator that iterate over the Sequence.
### __len__

```
 __len__()
```
Number of batch in the Sequence.
#### Returns:
The number of batches in the Sequence.
### next

```
 next()
```
For python 2.x.
# Returns

```
 The next batch.
```
### on_epoch_end

```
 on_epoch_end()
```
Method called at the end of every epoch.
### reset

```
 reset()
```
### set_processing_attrs

```
 set_processing_attrs(
    image_data_generator,
    target_size,
    color_mode,
    data_format,
    save_to_dir,
    save_prefix,
    save_format,
    subset,
    interpolation
)
```
Sets attributes to use later for processing files into a batch.
# Arguments

```
 image_data_generator: Instance of `ImageDataGenerator`
    to use for random transformations and normalization.
target_size: tuple of integers, dimensions to resize input images to.
color_mode: One of `"rgb"`, `"rgba"`, `"grayscale"`.
    Color mode to read images.
data_format: String, one of `channels_first`, `channels_last`.
save_to_dir: Optional directory where to save the pictures
    being yielded, in a viewable format. This is useful
    for visualizing the random transformations being
    applied, for debugging purposes.
save_prefix: String prefix to use for saving sample
    images (if `save_to_dir` is set).
save_format: Format to use for saving sample images
    (if `save_to_dir` is set).
subset: Subset of data (`"training"` or `"validation"`) if
    validation_split is set in ImageDataGenerator.
interpolation: Interpolation method used to resample the image if the
    target size is different from that of the loaded image.
    Supported methods are "nearest", "bilinear", and "bicubic".
    If PIL version 1.1.3 or newer is installed, "lanczos" is also
    supported. If PIL version 3.4.0 or newer is installed, "box" and
    "hamming" are also supported. By default, "nearest" is used.
```
## Class Members
- `allowed_class_modes`
- `white_list_formats`
