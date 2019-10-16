
Exception types for TensorFlow errors.
## Classes
[class AbortedError](https://www.tensorflow.org/api_docs/python/tf/errors/AbortedError): The operation was aborted, typically due to a concurrent action.

[class AlreadyExistsError](https://www.tensorflow.org/api_docs/python/tf/errors/AlreadyExistsError): Raised when an entity that we attempted to create already exists.

[class CancelledError](https://www.tensorflow.org/api_docs/python/tf/errors/CancelledError): Raised when an operation or step is cancelled.

[class DataLossError](https://www.tensorflow.org/api_docs/python/tf/errors/DataLossError): Raised when unrecoverable data loss or corruption is encountered.

[class DeadlineExceededError](https://www.tensorflow.org/api_docs/python/tf/errors/DeadlineExceededError): Raised when a deadline expires before an operation could complete.

[class FailedPreconditionError](https://www.tensorflow.org/api_docs/python/tf/errors/FailedPreconditionError): Operation was rejected because the system is not in a state to execute it.

[class InternalError](https://www.tensorflow.org/api_docs/python/tf/errors/InternalError): Raised when the system experiences an internal error.

[class InvalidArgumentError](https://www.tensorflow.org/api_docs/python/tf/errors/InvalidArgumentError): Raised when an operation receives an invalid argument.

[class NotFoundError](https://www.tensorflow.org/api_docs/python/tf/errors/NotFoundError): Raised when a requested entity (e.g., a file or directory) was not found.

[class OpError](https://www.tensorflow.org/api_docs/python/tf/errors/OpError): A generic error that is raised when TensorFlow execution fails.

[class OutOfRangeError](https://www.tensorflow.org/api_docs/python/tf/errors/OutOfRangeError): Raised when an operation iterates past the valid input range.

[class PermissionDeniedError](https://www.tensorflow.org/api_docs/python/tf/errors/PermissionDeniedError): Raised when the caller does not have permission to run an operation.

[class ResourceExhaustedError](https://www.tensorflow.org/api_docs/python/tf/errors/ResourceExhaustedError): Some resource has been exhausted.

[class UnauthenticatedError](https://www.tensorflow.org/api_docs/python/tf/errors/UnauthenticatedError): The request does not have valid authentication credentials.

[class UnavailableError](https://www.tensorflow.org/api_docs/python/tf/errors/UnavailableError): Raised when the runtime is currently unavailable.

[class UnimplementedError](https://www.tensorflow.org/api_docs/python/tf/errors/UnimplementedError): Raised when an operation has not been implemented.

[class UnknownError](https://www.tensorflow.org/api_docs/python/tf/errors/UnknownError): Unknown error.

[class raise_exception_on_not_ok_status](https://www.tensorflow.org/api_docs/python/tf/compat/v1/errors/raise_exception_on_not_ok_status): Context manager to check for C API status.

## Functions
[error_code_from_exception_type(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/errors/error_code_from_exception_type)

[exception_type_from_error_code(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/errors/exception_type_from_error_code)

## Other Members
- `ABORTED = 10`
- `ALREADY_EXISTS = 6`
- `CANCELLED = 1`
- `DATA_LOSS = 15`
- `DEADLINE_EXCEEDED = 4`
- `FAILED_PRECONDITION = 9`
- `INTERNAL = 13`
- `INVALID_ARGUMENT = 3`
- `NOT_FOUND = 5`
- `OK = 0`
- `OUT_OF_RANGE = 11`
- `PERMISSION_DENIED = 7`
- `RESOURCE_EXHAUSTED = 8`
- `UNAUTHENTICATED = 16`
- `UNAVAILABLE = 14`
- `UNIMPLEMENTED = 12`
- `UNKNOWN = 2`
