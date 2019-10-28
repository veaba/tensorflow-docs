Set if soft device placement is enabled.
### Aliases:
- `tf.compat.v1.config.set_soft_device_placement`
- `tf.compat.v2.config.set_soft_device_placement`

```
 tf.config.set_soft_device_placement(enabled)
```
### Used in the guide:
- ``U``s``e`` ``a`` ``G``P``U``
If enabled, an op will be placed on CPU if any of the following are true 1. there's no GPU implementation for the OP 2. no GPU devices are known or registered 3. need to co-locate with reftype input(s) which are from CPU
#### Args:
- `enabled`: Whether to enable soft placement.
