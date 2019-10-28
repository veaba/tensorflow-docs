## Class FileWriterCache
Cache for file writers.
This class caches file writers, one per directory.
## Methods
### clear
View source

```
 @staticmethod
clear()
```
Clear cached summary writers. Currently only used for unit tests.
### get
View source

```
 @staticmethod
get(logdir)
```
Returns the FileWriter for the specified directory.
#### Args:
- `logdir`: str, name of the directory.
#### Returns:
A `FileWriter`.
