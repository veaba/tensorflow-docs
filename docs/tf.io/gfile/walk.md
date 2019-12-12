目录的递归目录树生成器。

**别名** : [ `tf.compat.v1.io.gfile.walk` ](/api_docs/python/tf/io/gfile/walk), [ `tf.compat.v2.io.gfile.walk` ](/api_docs/python/tf/io/gfile/walk)

```
 tf.io.gfile.walk(
    top,
    topdown=True,
    onerror=None
)
 
```

#### 参数：
- **`top`** : string, a Directory name
- **`topdown`** : bool, Traverse pre order if True, post order if False.
- **`onerror`** : optional handler for errors. Should be a function, it will becalled with the error as argument. Rethrowing the error aborts the walk.Errors that happen while listing directories are ignored.


#### 收益率：
Each yield is a 3-tuple:  the pathname of a directory, followed by lists ofall its subdirectories and leaf files.(dirname, [subdirname, subdirname, ...], [filename, filename, ...])as strings

