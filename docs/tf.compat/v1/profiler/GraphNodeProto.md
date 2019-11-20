[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/core/profiler/tfprof_output.proto)  
---  
  
## Class `GraphNodeProto`

A ProtocolMessage

## Child Classes

[`class
InputShapesEntry`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/profiler/GraphNodeProto/InputShapesEntry)

## Properties

### `accelerator_exec_micros`

`int64 accelerator_exec_micros`

### `children`

`repeated GraphNodeProto children`

### `cpu_exec_micros`

`int64 cpu_exec_micros`

### `devices`

`repeated string devices`

### `exec_micros`

`int64 exec_micros`

### `float_ops`

`int64 float_ops`

### `input_shapes`

`repeated InputShapesEntry input_shapes`

### `name`

`string name`

### `output_bytes`

`int64 output_bytes`

### `parameters`

`int64 parameters`

### `peak_bytes`

`int64 peak_bytes`

### `requested_bytes`

`int64 requested_bytes`

### `residual_bytes`

`int64 residual_bytes`

### `run_count`

`int64 run_count`

### `shapes`

`repeated TensorShapeProto shapes`

### `tensor_value`

`TFProfTensorProto tensor_value`

### `total_accelerator_exec_micros`

`int64 total_accelerator_exec_micros`

### `total_cpu_exec_micros`

`int64 total_cpu_exec_micros`

### `total_definition_count`

`int64 total_definition_count`

### `total_exec_micros`

`int64 total_exec_micros`

### `total_float_ops`

`int64 total_float_ops`

### `total_output_bytes`

`int64 total_output_bytes`

### `total_parameters`

`int64 total_parameters`

### `total_peak_bytes`

`int64 total_peak_bytes`

### `total_requested_bytes`

`int64 total_requested_bytes`

### `total_residual_bytes`

`int64 total_residual_bytes`

### `total_run_count`

`int64 total_run_count`

