将路缘石模型转换为点格式。

**别名** : [ `tf.compat.v1.keras.utils.model_to_dot` ](/api_docs/python/tf/keras/utils/model_to_dot), [ `tf.compat.v2.keras.utils.model_to_dot` ](/api_docs/python/tf/keras/utils/model_to_dot)

```
 tf.keras.utils.model_to_dot(
    model,
    show_shapes=False,
    show_layer_names=True,
    rankdir='TB',
    expand_nested=False,
    dpi=96,
    subgraph=False
)
 
```

#### 参数：
- **`model`** : A Keras model instance.
- **`show_shapes`** : whether to display shape information.
- **`show_layer_names`** : whether to display layer names.
- **`rankdir`** :  `rankdir`  argument passed to PyDot,a string specifying the format of the plot:'TB' creates a vertical plot;'LR' creates a horizontal plot.
- **`expand_nested`** : whether to expand nested models into clusters.
- **`dpi`** : Dots per inch.
- **`subgraph`** : whether to return a  `pydot.Cluster`  instance.


#### 返回：
A  `pydot.Dot`  instance representing the Keras model ora  `pydot.Cluster`  instance representing nested model if `subgraph=True` .

#### 加薪：
- **`ImportError`** : if graphviz or pydot are not available.
