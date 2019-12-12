

## Class  `SummaryWriter` 
表示有状态摘要编写器对象的接口。

## 方法


###  `as_default` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L186-L190)

```
 as_default()
 
```

返回启用摘要写入的上下文管理器。

###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L200-L202)

```
 close()
 
```

刷新并关闭摘要编写器。

###  `flush` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L196-L198)

```
 flush()
 
```

刷新任何缓冲数据。

###  `init` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L192-L194)

```
 init()
 
```

初始化摘要编写器。

###  `set_as_default` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L181-L184)

```
 set_as_default()
 
```

为当前线程启用此摘要编写器。

