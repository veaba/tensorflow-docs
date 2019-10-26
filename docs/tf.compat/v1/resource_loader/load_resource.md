Load the resource at given path, where path is relative to tensorflow/.

```
 tf.compat.v1.resource_loader.load_resource(path)
```
#### Args:
- path: a string resource path relative to tensorflow/.
#### Returns:
The contents of that resource.
#### Raises:
- IOError: If the path is not found, or the resource can't be opened.
