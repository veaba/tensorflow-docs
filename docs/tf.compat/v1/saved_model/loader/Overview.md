Loader functionality for SavedModel with hermetic, language-neutral exports.
Load and restore capability for a SavedModel, which may include multiple meta graph defs. Each SavedModel is associated with a single checkpoint. Each meta graph def is saved with one or more tags, which are used to identify the exact meta graph def to load.
The `load` operation requires the session in which to restore the graph definition and variables, the tags used to identify the meta graph def to `load` and the location of the SavedModel.
