目录的递归目录树生成器。

```
 tf.compat.v1.gfile.Walk(
    top,
    in_order=True
)
 
```

#### 参数：
- **`top`** : string, a Directory name
- **`in_order`** : bool, Traverse in order if True, post order if False.  Errors thathappen while listing directories are ignored.


#### 收益率：
Each yield is a 3-tuple:  the pathname of a directory, followed by lists ofall its subdirectories and leaf files.(dirname, [subdirname, subdirname, ...], [filename, filename, ...])as strings

