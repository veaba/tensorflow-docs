
Downloads a file from a URL if it not already in the cache.
### Aliases:
- `tf.compat.v1.keras.utils.get_file`
- `tf.compat.v2.keras.utils.get_file`

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
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``
- ``B``a``s``i``c`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``:`` ``C``l``a``s``s``i``f``y`` ``i``m``a``g``e``s`` ``o``f`` ``c``l``o``t``h``i``n``g``
- ``B``a``s``i``c`` ``r``e``g``r``e``s``s``i``o``n``:`` ``P``r``e``d``i``c``t`` ``f``u``e``l`` ``e``f``f``i``c``i``e``n``c``y``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``D``e``e``p``D``r``e``a``m``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``I``m``a``g``e`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``
- ``L``o``a``d`` ``C``S``V`` ``d``a``t``a``
- ``L``o``a``d`` ``N``u``m``P``y`` ``d``a``t``a``
- ``L``o``a``d`` ``a`` ``p``a``n``d``a``s``.``D``a``t``a``F``r``a``m``e``
- ``L``o``a``d`` ``i``m``a``g``e``s``
- ``L``o``a``d`` ``t``e``x``t``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``P``r``e``m``a``d``e`` ``E``s``t``i``m``a``t``o``r``s``
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``
- ``T``e``x``t`` ``g``e``n``e``r``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``T``i``m``e`` ``s``e``r``i``e``s`` ``f``o``r``e``c``a``s``t``i``n``g``
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w`` ``H``u``b``

By default the file at the url origin is downloaded to the cache_dir ~/.keras, placed in the cache_subdir datasets, and given the filename fname. The final location of a file example.txt would therefore be ~/.keras/datasets/example.txt.

Files in tar, tar.gz, tar.bz, and zip formats can also be extracted. Passing a hash will verify the file after download. The command line programs shasum and sha256sum can compute the hash.
#### Arguments:
- `fname`: Name of the file. If an absolute path `/path/to/file.txt` is specified the file will be saved at that location.
- `origin`: Original URL of the file.
- `untar`: Deprecated in favor of 'extract'. boolean, whether the file should be decompressed
- `md5_hash`: Deprecated in favor of 'file_hash'. md5 hash of the file for verification
- `file_hash`: The expected hash string of the file after download. The sha256 and md5 hash algorithms are both supported.
- `cache_subdir`: Subdirectory under the Keras cache dir where the file is saved. If an absolute path `/path/to/folder` is specified the file will be saved at that location.
- `hash_algorithm`: Select the hash algorithm to verify the file. options are 'md5', 'sha256', and 'auto'. The default 'auto' detects the hash algorithm in use.
- `extract`: True tries `extract`ing the file as an Archive, like tar or zip.
- `archive_format`: Archive format to try for `extract`ing the file. Options are 'auto', 'tar', 'zip', and None. 'tar' includes tar, tar.gz, and tar.bz files. The default 'auto' is ['tar', 'zip']. None or an empty list will return no matches found.
- `cache_dir`: Location to store cached files, when None it defaults to the Keras Directory.
#### Returns:

Path to the downloaded file
