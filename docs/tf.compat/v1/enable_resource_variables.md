默认情况下创建资源变量。

```
 tf.compat.v1.enable_resource_variables()
 
```

Resource variables are improved versions of TensorFlow variables with awell-defined memory model. Accessing a resource variable reads its value, andall ops which access a specific read value of the variable are guaranteed tosee the same value for that tensor. Writes which happen after a read (byhaving a control or data dependency on the read) are guaranteed not to affectthe value of the read tensor, and similarly writes which happen before a readare guaranteed to affect the value. No guarantees are made about unorderedread/write pairs.

Calling tf.enable_resource_variables() lets you opt-in to this TensorFlow 2.0feature.

