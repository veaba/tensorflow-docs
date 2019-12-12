声明当前模块将不再定义任何键标志。

```
 tf.compat.v1.flags.disclaim_key_flags()
 
```

Normally, the module that calls the DEFINE_xxx functions claims theflag to be its key flag.  This is undesirable for modules thatdefine additional DEFINE_yyy functions with its own flag parsers andserializers, since that module will accidentally claim flags definedby DEFINE_yyy as its key flags.  After calling this function, themodule disclaims flag definitions thereafter, so the key flags willbe correctly attributed to the caller of DEFINE_yyy.

After calling this function, the module will not be able to defineany more flags.  This function will affect all FlagValues objects.

