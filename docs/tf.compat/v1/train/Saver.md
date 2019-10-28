## Class Saver
Saves and restores variables.
See Variables for an overview of variables, saving and restoring.
The `Saver` class adds ops to save and restore variables to and from checkpoints. It also provides convenience methods to run these ops.
Checkpoints are binary files in a proprietary format which map variable names to tensor values. The best way to examine the contents of a checkpoint is to load it using a `Saver`.
Savers can automatically number checkpoint filenames with a provided counter. This lets you keep multiple checkpoints at different steps while training a model. For example you can number the checkpoint filenames with the training step number. To avoid filling up disks, savers manage checkpoint files automatically. For example, they can keep only the N most recent files, or one checkpoint for every N hours of training.
