## Class Interpreter
Interpreter interface for TensorFlow Lite Models.
### Aliases:
- Class `tf.compat.v1.lite.Interpreter`
- Class `tf.compat.v2.lite.Interpreter`
This makes the TensorFlow Lite interpreter accessible in Python. It is possible to use this interpreter in a multithreaded Python environment, but you must be sure to call functions of a particular instance from only one thread at a time. So if you want to have 4 threads running different inferences simultaneously, create an interpreter for each one as thread-local data. Similarly, if you are calling invoke() in one thread on a single interpreter but you want to use tensor() on another thread once it is done, you must use a synchronization primitive between the threads to ensure invoke has returned before calling tensor().
## __init__
View source

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
View source

```
 allocate_tensors()
```
### get_input_details
View source

```
 get_input_details()
```
Gets model input details.
#### Returns:
A list of input details.
### get_output_details
View source

```
 get_output_details()
```
Gets model output details.
#### Returns:
A list of output details.
### get_tensor
View source

```
 get_tensor(tensor_index)
```
Gets the value of the input tensor (get a copy).
