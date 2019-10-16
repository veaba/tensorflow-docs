## Class Interpreter

Interpreter interface for TensorFlow Lite Models.
### Aliases:
- Class `tf.compat.v1.lite.Interpreter`
- Class `tf.compat.v2.lite.Interpreter`

This makes the TensorFlow Lite interpreter accessible in Python. It is possible to use this interpreter in a multithreaded Python environment, but you must be sure to call functions of a particular instance from only one thread at a time. So if you want to have 4 threads running different inferences simultaneously, create an interpreter for each one as thread-local data. Similarly, if you are calling invoke() in one thread on a single interpreter but you want to use tensor() on another thread once it is done, you must use a synchronization primitive between the threads to ensure invoke has returned before calling tensor().
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L187-L231)


```
 __init__(
    model_path=None,
    model_content=None,
    experimental_delegates=None
)
```

Constructor.
#### Args:
- `model_path`: Path to TF-Lite Flatbuffer file.
- `model_content`: Content of model.
- `experimental_delegates`: Experimental. Subject to change. List of TfLiteDelegate objects returned by lite.load_delegate().
#### Raises:
- `ValueError`: If the interpreter was unable to create.
## Methods
### allocate_tensors
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L242-L244)


```
 allocate_tensors()
```
### get_input_details
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L322-L330)


```
 get_input_details()
```

Gets model input details.
#### Returns:

A list of input details.
### get_output_details
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L365-L373)


```
 get_output_details()
```

Gets model output details.
#### Returns:

A list of output details.
### get_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L375-L388)


```
 get_tensor(tensor_index)
```

Gets the value of the input tensor (get a copy).

If you wish to avoid the copy, use tensor(). This function cannot be used to read intermediate results.
#### Args:
- `tensor_index`: Tensor index of tensor to get. This value can be gotten from the 'index' field in get_output_details.
#### Returns:

a numpy array.
### get_tensor_details
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L305-L320)


```
 get_tensor_details()
```

Gets tensor details for every tensor with valid tensor details.

Tensors where required information about the tensor is not found are not added to the list. This includes temporary tensors without a name.
#### Returns:

A list of dictionaries containing tensor information.
### invoke
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L440-L453)


```
 invoke()
```

Invoke the interpreter.

Be sure to set the input sizes, allocate tensors and fill values before calling this. Also, note that this function releases the GIL so heavy computation can be done in the background while the Python interpreter continues. No other function on this object should be called while the invoke() call has not finished.
#### Raises:
- `ValueError`: When the underlying interpreter fails raise `ValueError`.
### reset_all_variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L455-L456)


```
 reset_all_variables()
```
### resize_tensor_input
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L348-L363)


```
 resize_tensor_input(
    input_index,
    tensor_size
)
```

Resizes an input tensor.
#### Args:
- `input_index`: Tensor index of input to set. This value can be gotten from the 'index' field in get_input_details.
- `tensor_size`: The tensor_shape to resize the input to.
#### Raises:
- `ValueError`: If the interpreter could not resize the input tensor.
### set_tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L332-L346)


```
 set_tensor(
    tensor_index,
    value
)
```

Sets the value of the input tensor. Note this copies data in value.

If you want to avoid copying, you can use the tensor() function to get a numpy buffer pointing to the input buffer in the tflite interpreter.
#### Args:
- `tensor_index`: Tensor index of tensor to set. This value can be gotten from the 'index' field in get_input_details.
- `value`: Value of tensor to set.
#### Raises:
- `ValueError`: If the interpreter could not set the tensor.
### tensor
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/interpreter.py#L390-L438)


```
 tensor(tensor_index)
```

Returns function that gives a numpy view of the current tensor buffer.

This allows reading and writing to this tensors w/o copies. This more closely mirrors the C++ Interpreter class interface's tensor() member, hence the name. Be careful to not hold these output references through calls to allocate_tensors() and invoke(). This function cannot be used to read intermediate results.
#### Usage:

```
 interpreter.allocate_tensors()
input = interpreter.tensor(interpreter.get_input_details()[0]["index"])
output = interpreter.tensor(interpreter.get_output_details()[0]["index"])
for i in range(10):
  input().fill(3.)
  interpreter.invoke()
  print("inference %s" % output())
```

Notice how this function avoids making a numpy array directly. This is because it is important to not hold actual numpy views to the data longer than necessary. If you do, then the interpreter can no longer be invoked, because it is possible the interpreter would resize and invalidate the referenced tensors. The NumPy API doesn't allow any mutability of the the underlying buffers.
#### WRONG:

```
 input = interpreter.tensor(interpreter.get_input_details()[0]["index"])()
output = interpreter.tensor(interpreter.get_output_details()[0]["index"])()
interpreter.allocate_tensors()  # This will throw RuntimeError
for i in range(10):
  input.fill(3.)
  interpreter.invoke()  # this will throw RuntimeError since input,output
```
#### Args:
- `tensor_index`: Tensor index of tensor to get. This value can be gotten from the 'index' field in get_output_details.
#### Returns:

A function that can return a new numpy array pointing to the internal TFLite tensor state at any point. It is safe to hold the function forever, but it is not safe to hold the numpy array forever.
