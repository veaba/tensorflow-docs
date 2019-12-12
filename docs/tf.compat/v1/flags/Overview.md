Import router for absl.flags. See https://github.com/abseil/abseil-py.

## 模块
[ `tf_decorator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator) module: Base TFDecorator class and utility functions for working with decorators.

## Class 
[ `class ArgumentParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentParser): Base class used to parse and convert arguments.

[ `class ArgumentSerializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentSerializer): Base class for generating string representations of a flag value.

[ `class BaseListParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/BaseListParser): Base class for a parser of lists of strings.

[ `class BooleanFlag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/BooleanFlag): Basic boolean flag.

[ `class BooleanParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/BooleanParser): Parser of boolean values.

[ `class CantOpenFlagFileError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/CantOpenFlagFileError): Raised when flagfile fails to open.

[ `class CsvListSerializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/CsvListSerializer): Base class for generating string representations of a flag value.

[ `class DuplicateFlagError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DuplicateFlagError): Raised if there is a flag naming conflict.

[ `class EnumClassFlag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/EnumClassFlag): Basic enum flag; its value is an enum class's member.

[ `class EnumClassParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/EnumClassParser): Parser of an Enum class member.

[ `class EnumFlag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/EnumFlag): Basic enum flag; its value can be any string from list of enum_values.

[ `class EnumParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/EnumParser): Parser of a string enum value (a string value from a given set).

[ `class Error` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Error): The base class for all flags errors.

[ `class Flag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Flag): Information about a command-line flag.

[ `class FlagNameConflictsWithMethodError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/FlagNameConflictsWithMethodError): Raised when a flag name conflicts with FlagValues methods.

[ `class FlagValues` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/FlagValues): Registry of 'Flag' objects.

[ `class FloatParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/FloatParser): Parser of floating point values.

[ `class IllegalFlagValueError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/IllegalFlagValueError): Raised when the flag command line argument is illegal.

[ `class IntegerParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/IntegerParser): Parser of an integer value.

[ `class ListParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ListParser): Parser for a comma-separated list of strings.

[ `class ListSerializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ListSerializer): Base class for generating string representations of a flag value.

[ `class MultiEnumClassFlag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/MultiEnumClassFlag): A multi_enum_class flag.

[ `class MultiFlag` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/MultiFlag): A flag that can appear multiple time on the command-line.

[ `class UnparsedFlagAccessError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/UnparsedFlagAccessError): Raised when accessing the flag value from unparsed FlagValues.

[ `class UnrecognizedFlagError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/UnrecognizedFlagError): Raised when a flag is unrecognized.

[ `class ValidationError` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ValidationError): Raised when flag validator constraint is not satisfied.

[ `class WhitespaceSeparatedListParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/WhitespaceSeparatedListParser): Parser for a whitespace-separated list of strings.

## 功能
[ `DEFINE(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE): Registers a generic Flag object.

[ `DEFINE_alias(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_alias): Defines an alias flag for an existing one.

[ `DEFINE_bool(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_bool): Registers a boolean flag.

[ `DEFINE_boolean(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_bool): Registers a boolean flag.

[ `DEFINE_enum(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_enum): Registers a flag whose value can be any string from enum_values.

[ `DEFINE_enum_class(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_enum_class): Registers a flag whose value can be the name of enum members.

[ `DEFINE_flag(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_flag): Registers a 'Flag' object with a 'FlagValues' object.

[ `DEFINE_float(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_float): Registers a flag whose value must be a float.

[ `DEFINE_integer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_integer): Registers a flag whose value must be an integer.

[ `DEFINE_list(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_list): Registers a flag whose value is a comma-separated list of strings.

[ `DEFINE_multi(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_multi): Registers a generic MultiFlag that parses its args with a given parser.

[ `DEFINE_multi_enum(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_multi_enum): Registers a flag whose value can be a list strings from enum_values.

[ `DEFINE_multi_enum_class(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_multi_enum_class): Registers a flag whose value can be a list of enum members.

[ `DEFINE_multi_float(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_multi_float): Registers a flag whose value can be a list of arbitrary floats.

[ `DEFINE_multi_integer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_multi_integer): Registers a flag whose value can be a list of arbitrary integers.

[ `DEFINE_multi_string(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_multi_string): Registers a flag whose value can be a list of any strings.

[ `DEFINE_spaceseplist(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_spaceseplist): Registers a flag whose value is a whitespace-separated list of strings.

[ `DEFINE_string(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/DEFINE_string): Registers a flag whose value can be any string.

[ `adopt_module_key_flags(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/adopt_module_key_flags): Declares that all flags key to a module are key to the current module.

[ `declare_key_flag(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/declare_key_flag): Declares one flag as key to the current module.

[ `disclaim_key_flags(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/disclaim_key_flags): Declares that the current module will not define any more key flags.

[ `doc_to_help(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/doc_to_help): Takes a **doc**  string and reformats it as help.

[ `flag_dict_to_args(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/flag_dict_to_args): Convert a dict of values into process call parameters.

[ `get_help_width(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/get_help_width): Returns the integer width of help lines that is used in TextWrap.

[ `mark_bool_flags_as_mutual_exclusive(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/mark_bool_flags_as_mutual_exclusive): Ensures that only one flag among flag_names is True.

[ `mark_flag_as_required(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/mark_flag_as_required): Ensures that flag is not None during program execution.

[ `mark_flags_as_mutual_exclusive(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/mark_flags_as_mutual_exclusive): Ensures that only one flag among flag_names is not None.

[ `mark_flags_as_required(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/mark_flags_as_required): Ensures that flags are not None during program execution.

[ `multi_flags_validator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/multi_flags_validator): A function decorator for defining a multi-flag validator.

[ `register_multi_flags_validator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/register_multi_flags_validator): Adds a constraint to multiple flags.

[ `register_validator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/register_validator): Adds a constraint, which will be enforced during program execution.

[ `text_wrap(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/text_wrap): Wraps a given text to a maximum line length and returns it.

[ `validator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/validator): A function decorator for defining a flag validator.

## 其他成员
-  `FLAGS`  []()
