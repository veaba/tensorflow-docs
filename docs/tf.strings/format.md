使用张量列表格式化字符串模板。

**别名** : [ `tf.compat.v1.strings.format` ](/api_docs/python/tf/strings/format), [ `tf.compat.v2.strings.format` ](/api_docs/python/tf/strings/format)

```
 tf.strings.format(
    template,
    inputs,
    placeholder='{}',
    summarize=3,
    name=None
)
 
```

Formats a string template using a list of tensors, abbreviating tensors byonly printing the first and last  `summarize`  elements of each dimension(recursively). If formatting only one tensor into a template, the tensor doesnot have to be wrapped in a list.

#### 示例：
Formatting a single-tensor template:

```
 sess = tf.compat.v1.Session()
with sess.as_default():
    tensor = tf.range(10)
    formatted = tf.strings.format("tensor: {}, suffix", tensor)
    out = sess.run(formatted)
    expected = "tensor: [0 1 2 ... 7 8 9], suffix"

    assert(out.decode() == expected)
 
```

Formatting a multi-tensor template:

```
 sess = tf.compat.v1.Session()
with sess.as_default():
    tensor_one = tf.reshape(tf.range(100), [10, 10])
    tensor_two = tf.range(10)
    formatted = tf.strings.format("first: {}, second: {}, suffix",
      (tensor_one, tensor_two))

    out = sess.run(formatted)
    expected = ("first: [[0 1 2 ... 7 8 9]\n"
          " [10 11 12 ... 17 18 19]\n"
          " [20 21 22 ... 27 28 29]\n"
          " ...\n"
          " [70 71 72 ... 77 78 79]\n"
          " [80 81 82 ... 87 88 89]\n"
          " [90 91 92 ... 97 98 99]], second: [0 1 2 ... 7 8 9], suffix")

    assert(out.decode() == expected)
 
```

#### 参数：
- **`template`** : A string template to format tensor values into.
- **`inputs`** : A list of  `Tensor`  objects, or a single Tensor.The list of tensors to format into the template string. If a solitarytensor is passed in, the input tensor will automatically be wrapped as alist.
- **`placeholder`** : An optional  `string` . Defaults to  `{}` .At each placeholder occurring in the template, a subsequent tensorwill be inserted.
- **`summarize`** : An optional  `int` . Defaults to  `3` .When formatting the tensors, show the first and last  `summarize` entries of each tensor dimension (recursively). If set to -1, allelements of the tensor will be shown.
- **`name`** : A name for the operation (optional).


#### 返回：
A scalar  `Tensor`  of type  `string` .

#### 加薪：
- **`ValueError`** : if the number of placeholders does not match the number ofinputs.
