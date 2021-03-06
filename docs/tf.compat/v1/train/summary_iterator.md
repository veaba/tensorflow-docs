An iterator for reading  `Event`  protocol buffers from an event file.

```
 tf.compat.v1.train.summary_iterator(path) 
```

You can use this function to read events written to an event file. It returnsa Python iterator that yields  `Event`  protocol buffers.

示例：打印事件文件的内容。

```
 for e in tf.compat.v1.train.summary_iterator(path to events file):
    print(e)
 
```

示例：打印选定的摘要值。

```
 # This example supposes that the events file contains summaries with a
# summary value tag 'loss'.  These could have been added by calling
# `add_summary()`, passing the output of a scalar summary op created with
# with: `tf.compat.v1.summary.scalar('loss', loss_tensor)`.
for e in tf.compat.v1.train.summary_iterator(path to events file):
    for v in e.summary.value:
        if v.tag == 'loss':
            print(v.simple_value)
 
```

See the protocol buffer definitions of[Event](https://tensorflow.google.cn/code/tensorflow/core/util/event.proto)and[Summary](https://tensorflow.google.cn/code/tensorflow/core/framework/summary.proto)for more information about their attributes.

#### 参数：
- **`path`** : The path to an event file created by a  `SummaryWriter` .


#### 收益率：
 `Event`  protocol buffers.

