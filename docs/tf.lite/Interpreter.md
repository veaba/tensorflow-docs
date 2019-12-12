

## Class  `Interpreter` 
Tensorflow Lite模型的解释器接口。

**别名** : [ `tf.compat.v1.lite.Interpreter` ](/api_docs/python/tf/lite/Interpreter), [ `tf.compat.v2.lite.Interpreter` ](/api_docs/python/tf/lite/Interpreter)

This makes the TensorFlow Lite interpreter accessible in Python.It is possible to use this interpreter in a multithreaded Python environment,but you must be sure to call functions of a particular instance from onlyone thread at a time. So if you want to have 4 threads running differentinferences simultaneously, create  an interpreter for each one as thread-localdata. Similarly, if you are calling invoke() in one thread on a singleinterpreter but you want to use tensor() on another thread once it is done,you must use a synchronization primitive between the threads to ensure invokehas returned before calling tensor().

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L187-L231)

```
 __init__(
    model_path=None,
    model_content=None,
    experimental_delegates=None
)
 
```

构造器。

#### 参数：
- **`model_path`** : Path to TF-Lite Flatbuffer file.
- **`model_content`** : Content of model.
- **`experimental_delegates`** : Experimental. Subject to change. List of[TfLiteDelegate](https://tensorflow.google.cn/lite/performance/delegates)objects returned by lite.load_delegate().


#### 加薪：
- **`ValueError`** : If the interpreter was unable to create.


## 方法


###  `allocate_tensors` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L242-L244)

```
 allocate_tensors()
 
```

###  `get_input_details` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L322-L330)

```
 get_input_details()
 
```

获取模型输入详细信息。

#### 返回：
输入详细信息的列表。

###  `get_output_details` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L365-L373)

```
 get_output_details()
 
```

获取模型输出详细信息。

#### 返回：
输出详细信息的列表。

###  `get_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L375-L388)

```
 get_tensor(tensor_index)
 
```

获取输入张量的值（获取副本）。

If you wish to avoid the copy, use  `tensor()` . This function cannot be usedto read intermediate results.

#### 参数：
- **`tensor_index`** : Tensor index of tensor to get. This value can be gotten from          the 'index' field in get_output_details.


#### 返回：
一个核阵列。

###  `get_tensor_details` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L305-L320)

```
 get_tensor_details()
 
```

获取具有有效张量详细信息的每个张量的张量详细信息。

Tensors where required information about the tensor is not found are notadded to the list. This includes temporary tensors without a name.

#### 返回：
包含张量信息的字典列表。

###  `invoke` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L440-L453)

```
 invoke()
 
```

调用解释器。

Be sure to set the input sizes, allocate tensors and fill values beforecalling this. Also, note that this function releases the GIL so heavycomputation can be done in the background while the Python interpretercontinues. No other function on this object should be called while theinvoke() call has not finished.

#### 加薪：
- **`ValueError`** : When the underlying interpreter fails raise ValueError.


###  `reset_all_variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L455-L456)

```
 reset_all_variables()
 
```

###  `resize_tensor_input` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L348-L363)

```
 resize_tensor_input(
    input_index,
    tensor_size
)
 
```

调整输入张量的大小。

#### 参数：
- **`input_index`** : Tensor index of input to set. This value can be gotten from         the 'index' field in get_input_details.
- **`tensor_size`** : The tensor_shape to resize the input to.


#### 加薪：
- **`ValueError`** : If the interpreter could not resize the input tensor.


###  `set_tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L332-L346)

```
 set_tensor(
    tensor_index,
    value
)
 
```

Sets the value of the input tensor. Note this copies data in  `value` .

If you want to avoid copying, you can use the  `tensor()`  function to get anumpy buffer pointing to the input buffer in the tflite interpreter.

#### 参数：
- **`tensor_index`** : Tensor index of tensor to set. This value can be gotten from          the 'index' field in get_input_details.
- **`value`** : Value of tensor to set.


#### 加薪：
- **`ValueError`** : If the interpreter could not set the tensor.


###  `tensor` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L390-L438)

```
 tensor(tensor_index)
 
```

返回函数，该函数提供当前张量缓冲区的numpy视图。

This allows reading and writing to this tensors w/o copies. This moreclosely mirrors the C++ Interpreter class interface's tensor() member, hencethe name. Be careful to not hold these output references through callsto  `allocate_tensors()`  and  `invoke()` . This function cannot be used to readintermediate results.

#### 用法：


```
 interpreter.allocate_tensors()
input = interpreter.tensor(interpreter.get_input_details()[0]["index"])
output = interpreter.tensor(interpreter.get_output_details()[0]["index"])
for i in range(10):
  input().fill(3.)
  interpreter.invoke()
  print("inference %s" % output())
 
```

Notice how this function avoids making a numpy array directly. This isbecause it is important to not hold actual numpy views to the data longerthan necessary. If you do, then the interpreter can no longer be invoked,because it is possible the interpreter would resize and invalidate thereferenced tensors. The NumPy API doesn't allow any mutability of thethe underlying buffers.

#### 错误：


```
 input = interpreter.tensor(interpreter.get_input_details()[0]["index"])()
output = interpreter.tensor(interpreter.get_output_details()[0]["index"])()
interpreter.allocate_tensors()  # This will throw RuntimeError
for i in range(10):
  input.fill(3.)
  interpreter.invoke()  # this will throw RuntimeError since input,output
 
```

#### 参数：
- **`tensor_index`** : Tensor index of tensor to get. This value can be gotten from          the 'index' field in get_output_details.


#### 返回：
A function that can return a new numpy array pointing to the internalTFLite tensor state at any point. It is safe to hold the function forever,but it is not safe to hold the numpy array forever.

