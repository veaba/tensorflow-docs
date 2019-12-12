返回将熊猫数据帧馈送到模型中的输入函数。

```
 tf.compat.v1.estimator.inputs.pandas_input_fn(
    x,
    y=None,
    batch_size=128,
    num_epochs=1,
    shuffle=None,
    queue_capacity=1000,
    num_threads=1,
    target_column='target'
)
 
```


**Note:**   `y` 's index must match  `x` 's index.


#### 参数：
- **`x`** : pandas  `DataFrame`  object.
- **`y`** : pandas  `Series`  object or  `DataFrame` .  `None`  if absent.
- **`batch_size`** : int, size of batches to return.
- **`num_epochs`** : int, number of epochs to iterate over data. If not  `None` ,read attempts that would exceed this value will raise  `OutOfRangeError` .
- **`shuffle`** : bool, whether to read the records in random order.
- **`queue_capacity`** : int, size of the read queue. If  `None` , it will be setroughly to the size of  `x` .
- **`num_threads`** : Integer, number of threads used for reading and enqueueing. Inorder to have predicted and repeatable order of reading and enqueueing,such as in prediction and evaluation mode,  `num_threads`  should be 1.
- **`target_column`** : str, name to give the target column  `y` . This parameteris not used when  `y`  is a  `DataFrame` .


#### 返回：
Function, that has signature of ()->(dict of  `features` ,  `target` )

#### 加薪：
- **`ValueError`** : if  `x`  already contains a column with the same name as  `y` , orif the indexes of  `x`  and  `y`  don't match.
- **`ValueError`** : if 'shuffle' is not provided or a bool.
