Loads CIFAR100 dataset.

**别名** : [ `tf.compat.v1.keras.datasets.cifar100.load_data` ](/api_docs/python/tf/keras/datasets/cifar100/load_data), [ `tf.compat.v2.keras.datasets.cifar100.load_data` ](/api_docs/python/tf/keras/datasets/cifar100/load_data)

```
 tf.keras.datasets.cifar100.load_data(label_mode='fine')
 
```

#### 参数：
- **`label_mode`** : one of "fine", "coarse".


#### 返回：
Tuple of Numpy arrays:  `(x_train, y_train), (x_test, y_test)` .

#### 加薪：
- **`ValueError`** : in case of invalid  `label_mode` .
