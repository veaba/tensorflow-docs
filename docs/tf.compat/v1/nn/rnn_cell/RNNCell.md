## Class RNNCell
Abstract object representing an RNN cell.
Inherits From: `Layer`
Every `RNNCell` must have the properties below and implement `call` with the signature (output, next_state) = `call`(input, state). The optional third input argument, ``, is allowed for backwards compatibility purposes; but should be left off for new subclasses.
This definition of cell differs from the definition used in the literature. In the literature, 'cell' refers to an object with a single scalar output. This definition refers to a horizontal array of such units.
