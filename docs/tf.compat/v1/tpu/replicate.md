
Builds a graph operator that runs a replicated TPU computation.

```
 tf.compat.v1.tpu.replicate(
    computation,
    inputs=None,
    infeed_queue=None,
    device_assignment=None,
    name=None,
    maximum_shapes=None
)
```
#### Args:
- `computation`: A Python function that builds the `computation` to replicate.
- `inputs`: A `li`st of `li`sts of `in``pu`t t`en`sors or `None` (eq`ui`val`en`t to [`[]`]), `in`dexed by [r`ep``li`c`a_``nu`m][`in``pu`t`_n``um`]. All r`ep``li`cas `mu`st have the s`am`e `nu`mber of `inputs`. Each `in``pu`t c`an` be a nested st`ru``ct`ure co`nt``ai``ni`ng va`lu`es th`at` are conve`rt`ible to t`en`sors. Note th`at` pass`in`g `an` N-d`im``en`sion `li`st of co`mp``at`ible va`lu`es will resu`lt` `in` a N-d`im``en`sion `li`st of scalar t`en`sors r`at`her th`an` a s`in`gle R`an`k-N t`en`sors. If you need differ`en`t behavior, conve`rt` pa`rt` of `inputs` to t`en`sors w`it`h `tf.convert_to_tensor`.
- `in`feed_qu`eu`e: If not `None`, the `InfeedQueue` from which to `ap`p`en`d a t`up`le of arg`um``en`ts as `inputs` to `computation`.
- `device_assignment`: If not `None`, a `DeviceAssignment` desc`ri`b`in`g the m`ap``pi`ng b`et`we`en` logical cores `in` the `computation` w`it`h physical cores `in` the TPU topology. Uses a def`au``lt` device assig`nm``en`t if `None`. The `DeviceAssignment` may be o`mi`tted if each r`ep``li`ca of the `computation` uses only one core, `an`d there is `ei`ther only one r`ep``li`ca, or the `nu`mber of r`ep``li`cas is equal to the `nu`mber of cores `in` the TPU syst`em`.
- `name`: (D`ep`rec`at`ed) Does noth`in`g.
- `maximum_shapes`: A nested st`ru``ct`ure of tf.T`en`sorSh`ap`e r`ep`res`en`t`in`g the sh`ap`e to which the respe`ct`ive co`mp`on`en`t of each `in``pu`t el`em``en`t `in` each r`ep``li`ca should be padded. Any `un`known d`im``en`sions (e.g. tf.co`mp``at`.v1.D`im``en`sion(`None`) `in` a tf.T`en`sorSh`ap`e or -1 `in` a t`en`sor-`li`ke obje`ct`) will be padded to the max`im``um` size of th`at` d`im``en`sion over all r`ep``li`cas. The st`ru``ct`ure of `maximum_shapes` needs to be the s`am`e as `inputs`[0].
#### Returns:

A list of outputs, indexed by [replica_num] each output can be a nested structure same as what computation() returns with a few exceptions.

Exceptions include: 1) None output: a NoOp would be returned which control-depends on computation. 2) Single value output: A tuple containing the value would be returned. 3) Operation-only outputs: a NoOp would be returned which control-depends on computation. TODO(b/121383831): Investigate into removing these special cases.
#### Raises:
- `ValueError`: If all replicas do not have equal numbers of input tensors.
- `ValueError`: If the number of inputs per replica does not match the number of formal parameters to `computation`.
- `ValueError`: If the static `inputs` dimensions don't match with the values given in `maximum_shapes`.
- `ValueError`: If the structure of `inputs` per replica does not match the structure of `maximum_shapes`.
