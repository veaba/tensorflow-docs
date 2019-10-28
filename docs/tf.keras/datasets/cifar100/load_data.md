Loads CIFAR100 dataset.
### Aliases:
- `tf.compat.v1.keras.datasets.cifar100.load_data`
- `tf.compat.v2.keras.datasets.cifar100.load_data`

```
 tf.keras.datasets.cifar100.load_data(label_mode='fine')
```
#### Arguments:
- `label_mode`: one of "fine", "coarse".
#### Returns:
Tuple of Numpy arrays: (x_train, y_train), (x_test, y_test).
#### Raises:
- `ValueError`: in case of invalid `label_mode`.
