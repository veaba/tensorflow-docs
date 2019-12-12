加载波士顿住房数据集。

**别名** : [ `tf.compat.v1.keras.datasets.boston_housing.load_data` ](/api_docs/python/tf/keras/datasets/boston_housing/load_data), [ `tf.compat.v2.keras.datasets.boston_housing.load_data` ](/api_docs/python/tf/keras/datasets/boston_housing/load_data)

```
 tf.keras.datasets.boston_housing.load_data(
    path='boston_housing.npz',
    test_split=0.2,
    seed=113
)
 
```

#### 参数：
- **`path`** : path where to cache the dataset locally(relative to ~/.keras/datasets).
- **`test_split`** : fraction of the data to reserve as test set.
- **`seed`** : Random seed for shuffling the databefore computing the test split.


#### 返回：
Tuple of Numpy arrays:  `(x_train, y_train), (x_test, y_test)` .

