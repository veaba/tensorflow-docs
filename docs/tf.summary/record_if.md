根据提供的布尔值设置摘要录制打开或关闭。

```
 tf.summary.record_if(condition)
 
```

The provided value can be a python boolean, a scalar boolean Tensor, oror a callable providing such a value; if a callable is passed it will beinvoked on-demand to determine whether summary writing will occur.

#### 参数：
- **`condition`** : can be True, False, a bool Tensor, or a callable providing such.


#### 收益率：
Returns a context manager that sets this value on enter and restores theprevious value on exit.

