Exception types for TensorFlow errors.
## Classes
`class AbortedError`: The operation was aborted, typically due to a concurrent action.
`class AlreadyExistsError`: Raised when an entity that we attempted to create already exists.
`class CancelledError`: Raised when an operation or step is cancelled.
`class DataLossError`: Raised when unrecoverable data loss or corruption is encountered.
`class DeadlineExceededError`: Raised when a deadline expires before an operation could complete.
`class FailedPreconditionError`: Operation was rejected because the system is not in a state to execute it.
`class InternalError`: Raised when the system experiences an internal error.
`class InvalidArgumentError`: Raised when an operation receives an invalid argument.
`class NotFoundError`: Raised when a requested entity (e.g., a file or directory) was not found.
`class OpError`: A generic error that is raised when TensorFlow execution fails.
`class OutOfRangeError`: Raised when an operation iterates past the valid input range.
`class PermissionDeniedError`: Raised when the caller does not have permission to run an operation.
`class ResourceExhaustedError`: Some resource has been exhausted.
`class UnauthenticatedError`: The request does not have valid authentication credentials.
`class UnavailableError`: Raised when the runtime is currently unavailable.
`class UnimplementedError`: Raised when an operation has not been implemented.
`class UnknownError`: Unknown error.
`class raise_exception_on_not_ok_status`: Context manager to check for C API status.
## Functions
