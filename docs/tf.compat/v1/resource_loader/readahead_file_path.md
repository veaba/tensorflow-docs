[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/resource_loader.py#L120-L123)  
---  
  
Readahead files not implemented; simply returns given path.

    
    
    tf.compat.v1.resource_loader.readahead_file_path(
        path,
        readahead='128M'
    )
    

