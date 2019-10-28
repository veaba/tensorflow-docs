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
