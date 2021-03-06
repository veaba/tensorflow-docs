计算序列之间的levenshtein距离。

**别名** : [ `tf.compat.v1.edit_distance` ](/api_docs/python/tf/edit_distance), [ `tf.compat.v2.edit_distance` ](/api_docs/python/tf/edit_distance)

```
 tf.edit_distance(    hypothesis,    truth,    normalize=True,    name='edit_distance') 
```

This operation takes variable-length sequences ( `hypothesis`  and  `truth` ),each provided as a  `SparseTensor` , and computes the Levenshtein distance.You can normalize the edit distance by length of  `truth`  by setting `normalize`  to true.

For example, given the following input:

```
 # 'hypothesis' is a tensor of shape `[2, 1]` with variable-length values:
#   (0,0) = ["a"]
#   (1,0) = ["b"]
hypothesis = tf.SparseTensor(
    [[0, 0, 0],
     [1, 0, 0]],
    ["a", "b"],
    (2, 1, 1))

# 'truth' is a tensor of shape `[2, 2]` with variable-length values:
#   (0,0) = []
#   (0,1) = ["a"]
#   (1,0) = ["b", "c"]
#   (1,1) = ["a"]
truth = tf.SparseTensor(
    [[0, 1, 0],
     [1, 0, 0],
     [1, 0, 1],
     [1, 1, 0]],
    ["a", "b", "c", "a"],
    (2, 2, 2))

normalize = True
 
```

此操作将返回以下内容：

```
 # 'output' is a tensor of shape `[2, 2]` with edit distances normalized
# by 'truth' lengths.
output ==> [[inf, 1.0],  # (0,0): no truth, (0,1): no hypothesis
           [0.5, 1.0]]  # (1,0): addition, (1,1): no hypothesis
 
```

#### 参数：
- **`hypothesis`** : A  `SparseTensor`  containing hypothesis sequences.
- **`truth`** : A  `SparseTensor`  containing truth sequences.
- **`normalize`** : A  `bool` . If  `True` , normalizes the Levenshtein distance bylength of  `truth.` 
- **`name`** : A name for the operation (optional).


#### 返回：
A dense  `Tensor`  with rank  `R - 1` , where R is the rank of the `SparseTensor`  inputs  `hypothesis`  and  `truth` .

#### 加薪：
- **`TypeError`** : If either  `hypothesis`  or  `truth`  are not a  `SparseTensor` .
