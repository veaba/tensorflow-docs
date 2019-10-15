## Class DirectoryIterator

Iterator capable of reading images from a directory on disk.
[Iterator](https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing/image/Iterator)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.preprocessing.image.DirectoryIterator`
- Class `tf.compat.v2.keras.preprocessing.image.DirectoryIterator`
#### Arguments:
- `directory`: Path to the `directory` to read images from. Each sub`directory` in this `directory` will be considered to contain images from one class, or alternatively you could specify class subdirectories via the `classes` argument.
- `image_data_generator`: Instance of `ImageDataGenerator` to use for random transformations and normalization.
- `target_size`: tuple of integers, dimensions to resize input images to.
- `color_mode`: One of `"rgb"`, `"rgba"`, `"grayscale"`. Color mode to read images.
- `classes`:` `Op`t`i`o`n`a`l` `li`s``t`` ``o`f` ``s``t`rin`g``s``,`` `n`a`me`s`` ``o`f` ``s`ub`d`ire`c``t``o`rie`s`` ``c``o`n`t``a`inin`g`` `im`a``g`e`s`` `fr`o`m` `e`a``c`h` ``c`l`a``s``s`` `(e.`g`.` `[`"``d``o``g``s``"``,`` ``"``c``a``t``s``"`]).` `I`t`` `will` `be` ``c``o`mpu`t`e`d`` ``a`u`t``o`m`a``t`i`c``a`lly` `if` `n`o``t`` ``s`e`t`.
- `c`l`a``s``s`_m`o``d`e:` `M`o``d`e` `f`o`r` `yiel`d`in`g`` ``t`he` ``t``a`r`g`e`t``s`:` ``"`bin`a`ry`"`:` `bin`a`ry` ``t``a`r`g`e`t``s`` `(if` ``t`here` ``a`re` ``o`nly` ``t`w`o`` ``classes`)`,`` ``"``c``a``t`e`g``o`ri`c``a`l`"`:` ``c``a``t`e`g``o`ri`c``a`l` ``t``a`r`g`e`t``s``,`` ``"``s`p`a`r`s`e`"`:` `in`t`e`g`er` ``t``a`r`g`e`t``s``,`` ``"`inpu`t``"`:` ``t``a`r`g`e`t``s`` ``a`re` `im`a``g`e`s`` `i`d`en`t`i`c``a`l` ``t``o`` `inpu`t`` `im`a``g`e`s`` `(m`a`inly` `u`s`e`d`` ``t``o`` `w`o`rk` `wi`t`h` ``a`u`t``o`en`c``o``d`er`s`)`,`` ``None`:` `n`o`` ``t``a`r`g`e`t``s`` ``g`e`t`` `yiel`d`e`d`` `(`o`nly` `inpu`t`` `im`a``g`e`s`` ``a`re` `yiel`d`e`d`).
- `batch_size`:` `In`t`e`g`er`,`` ``s`ize` ``o`f` ``a`` `b`a``t``c`h.
- `s`huffle:` `B`o``o`le`a`n`,`` `whe`t`her` ``t``o`` ``s`huffle` ``t`he` ``d``a``t``a`` `be`t`ween` `ep`o``c`h`s`.
- `s`ee`d`:` `R`a`n`d``o`m` ``s`ee`d`` `f`o`r` ``d``a``t``a`` ``s`hufflin`g`.
- `d``a``t``a`_f`o`rm`a``t`:` `S`t`rin`g``,`` ``o`ne` ``o`f` ``c`h`a`nnel`s`_fir`s``t``,`` ``c`h`a`nnel`s`_l`a``s``t`.
- `s``a`ve_`t``o`_`d`ir:` `Op`t`i`o`n`a`l` ``directory`` `where` ``t``o`` ``s``a`ve` ``t`he` `pi`c``t`ure`s`` `bein`g`` `yiel`d`e`d``,`` `in` ``a`` `view`a`ble` `f`o`rm`a``t`.` `Thi`s`` `i`s`` `u`s`eful` `f`o`r` `vi`s`u`a`lizin`g`` ``t`he` `r`a`n`d``o`m` ``t`r`a`n`s`f`o`rm`a``t`i`o`n`s`` `bein`g`` ``a`pplie`d``,`` `f`o`r` ``d`ebu`g``g`in`g`` `purp`o``s`e`s`.
- `s``a`ve_prefix:` `S`t`rin`g`` `prefix` ``t``o`` `u`s`e` `f`o`r` ``s``a`vin`g`` ``s``a`mple` `im`a``g`e`s`` `(if` ``s``a`ve_`t``o`_`d`ir` `i`s`` ``s`e`t`).
- `s``a`ve_f`o`rm`a``t`:` `F`o`rm`a``t`` ``t``o`` `u`s`e` `f`o`r` ``s``a`vin`g`` ``s``a`mple` `im`a``g`e`s`` `(if` ``s``a`ve_`t``o`_`d`ir` `i`s`` ``s`e`t`).
- `s`ub`s`e`t`:` `Sub`s`e`t`` ``o`f` ``d``a``t``a`` `(`"``t`r`a`inin`g``"`` ``o`r` ``"`v`a`li`d``a``t`i`o`n`"`)` `if` `v`a`li`d``a``t`i`o`n_`s`pli`t`` `i`s`` ``s`e`t`` `in` ``ImageDataGenerator`.
- `interpolation`:` `In`t`erp`o`l`a``t`i`o`n` `me`t`h`o``d`` `u`s`e`d`` ``t``o`` `re`s``a`mple` ``t`he` `im`a``g`e` `if` ``t`he` ``t``a`r`g`e`t`` ``s`ize` `i`s`` ``d`ifferen`t`` `fr`o`m` ``t`h`a``t`` ``o`f` ``t`he` `l`o``a``d`e`d`` `im`a``g`e.` `Supp`o`r`t`e`d`` `me`t`h`o``d``s`` ``a`re` ``"`ne`a`re`s``t``"``,`` ``"`biline`a`r`"``,`` ``a`n`d`` ``"`bi`c`ubi`c``"`.` `If` `PIL` `ver`s`i`o`n` `1.1.3` ``o`r` `newer` `i`s`` `in`s``t``a`lle`d``,`` ``"`l`a`n`c`z`o``s``"`` `i`s`` ``a`l`s``o`` ``s`upp`o`r`t`e`d`.` `If` `PIL` `ver`s`i`o`n` `3.4.0` ``o`r` `newer` `i`s`` `in`s``t``a`lle`d``,`` ``"`b`o`x`"`` ``a`n`d`` ``"`h`a`mmin`g``"`` ``a`re` ``a`l`s``o`` ``s`upp`o`r`t`e`d`.` `By` ``d`ef`a`ul`t``,`` ``"`ne`a`re`s``t``"`` `i`s`` `u`s`e`d`.
- `d``t`ype:` `D`t`ype` ``t``o`` `u`s`e` `f`o`r` ``g`ener`a``t`e`d`` ``a`rr`a`y`s`.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/preprocessing/image.py#L187-L227)


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

Gets batch at position index.
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
