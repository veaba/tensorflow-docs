在任何当前tpu复制作用域之外生成计算的一部分。

```
 tf.compat.v1.tpu.outside_compilation(    computation,    *args,    **kwargs) 
```

#### 参数：
- **`computation`** : A Python function that builds the computation toplace on the host.
- **`*args`** : the positional arguments for the computation.
- **`**kwargs`** : the keyword arguments for the computation.


#### 返回：
计算得到的张量。

