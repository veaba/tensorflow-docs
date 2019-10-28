Import router for absl.flags. See https://github.com/abseil/abseil-py.
### Aliases:
- Module `tf.compat.v1.app.flags`
## Modules
`tf_decorator` module: Base TFDecorator class and utility functions for working with decorators.
## Classes
`class ArgumentParser`: Base class used to parse and convert arguments.
`class ArgumentSerializer`: Base class for generating string representations of a flag value.
`class BaseListParser`: Base class for a parser of lists of strings.
`class BooleanFlag`: Basic boolean flag.
`class BooleanParser`: Parser of boolean values.
`class CantOpenFlagFileError`: Raised when flagfile fails to open.
`class CsvListSerializer`: Base class for generating string representations of a flag value.
`class DuplicateFlagError`: Raised if there is a flag naming conflict.
`class EnumClassFlag`: Basic enum flag; its value is an enum class's member.
`class EnumClassParser`: Parser of an Enum class member.
`class EnumFlag`: Basic enum flag; its value can be any string from list of enum_values.
`class EnumParser`: Parser of a string enum value (a string value from a given set).
`class Error`: The base class for all flags errors.
`class Flag`: Information about a command-line flag.
`class FlagNameConflictsWithMethodError`: Raised when a flag name conflicts with FlagValues methods.
`class FlagValues`: Registry of 'Flag' objects.
`class FloatParser`: Parser of floating point values.
`class IllegalFlagValueError`: Raised when the flag command line argument is illegal.
`class IntegerParser`: Parser of an integer value.
`class ListParser`: Parser for a comma-separated list of strings.
`class ListSerializer`: Base class for generating string representations of a flag value.
`class MultiEnumClassFlag`: A multi_enum_class flag.
`class MultiFlag`: A flag that can appear multiple time on the command-line.
`class UnparsedFlagAccessError`: Raised when accessing the flag value from unparsed FlagValues.
`class UnrecognizedFlagError`: Raised when a flag is unrecognized.
`class ValidationError`: Raised when flag validator constraint is not satisfied.
`class WhitespaceSeparatedListParser`: Parser for a whitespace-separated list of strings.
## Functions
