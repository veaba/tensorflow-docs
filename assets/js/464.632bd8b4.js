(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{653:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"class-grucell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-grucell","aria-hidden":"true"}},[e._v("#")]),e._v(" Class GRUCell")]),e._v(" "),r("p",[e._v("Cell class for the GRU layer.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Layer"),r("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),r("h4",{attrs:{id:"arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("units")]),e._v(": Positive integer, dimensionality of the output space.")]),e._v(" "),r("li",[r("code",[e._v("activation")]),e._v(": Activation function to use. Default: hyperbolic tangent ("),r("code",[e._v("tanh")]),e._v("). If you pass None, no "),r("code",[e._v("activation")]),e._v(' is applied (ie. "linear" '),r("code",[e._v("activation")]),e._v(": a(x) = x).")]),e._v(" "),r("li",[r("code",[e._v("recurrent_activation")]),e._v(": Activation function to use for the recurrent step. Default: hard sigmoid ("),r("code",[e._v("hard_sigmoid")]),e._v("). If you pass "),r("code",[e._v("None")]),e._v(", no "),r("code",[e._v("activation")]),e._v(' is applied (ie. "linear" '),r("code",[e._v("activation")]),e._v(": a(x) = x).")]),e._v(" "),r("li",[r("code",[e._v("use_bias")]),e._v(": Boolean, whether the layer uses a bias vector.")]),e._v(" "),r("li",[r("code",[e._v("kernel_initializer")]),e._v(": Initializer for the "),r("code",[e._v("kernel")]),e._v(" weights matrix, used for the linear transformation of the inputs.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_initializer")]),e._v(": Initializer for the "),r("code",[e._v("recurrent_kernel")]),e._v(" weights matrix, used for the linear transformation of the recurrent state.")]),e._v(" "),r("li",[r("code",[e._v("bias_initializer")]),e._v(": Initializer for the bias vector.")]),e._v(" "),r("li",[r("code",[e._v("kernel")]),e._v("_regularizer: Regularizer function applied to the "),r("code",[e._v("kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_regularizer")]),e._v(": Regularizer function applied to the "),r("code",[e._v("recurrent_kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("bias_regularizer")]),e._v(": Regularizer function applied to the bias vector.")]),e._v(" "),r("li",[r("code",[e._v("kernel")]),e._v("_constraint: Constraint function applied to the "),r("code",[e._v("kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_constraint")]),e._v(": Constraint function applied to the "),r("code",[e._v("recurrent_kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("bias_constraint")]),e._v(": Constraint function applied to the bias vector.")]),e._v(" "),r("li",[r("code",[e._v("dropout")]),e._v(": Float between 0 and 1. Fraction of the "),r("code",[e._v("units")]),e._v(" to drop for the linear transformation of the inputs.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_dropout")]),e._v(": Float between 0 and 1. Fraction of the "),r("code",[e._v("units")]),e._v(" to drop for the linear transformation of the recurrent state.")]),e._v(" "),r("li",[r("code",[e._v("implementation")]),e._v(": Implementation mode, either 1 or 2. Mode 1 will structure its operations as a larger number of smaller dot products and additions, whereas mode 2 will batch them into fewer, larger operations. These modes will have different performance profiles on different hardware and for different applications.")]),e._v(" "),r("li",[r("code",[e._v("reset_after")]),e._v(': GRU convention (whether to apply reset gate after or before matrix multiplication). False = "before" (default), True = "after" (CuDNN compatible).')])]),e._v(" "),r("h4",{attrs:{id:"call-arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#call-arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Call arguments:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("inputs")]),e._v(": A 2D tensor.")]),e._v(" "),r("li",[r("code",[e._v("states")]),e._v(": List of state tensors corresponding to the previous timestep.")]),e._v(" "),r("li",[r("code",[e._v("training")]),e._v(": Python boolean indicating whether the layer should behave in "),r("code",[e._v("training")]),e._v(" mode or in inference mode. Only relevant when "),r("code",[e._v("dropout")]),e._v(" or "),r("code",[e._v("recurrent_dropout")]),e._v(" is used.")])]),e._v(" "),r("h2",{attrs:{id:"init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("init")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1550-L1592",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __init__(\n    units,\n    activation='tanh',\n    recurrent_activation='hard_sigmoid',\n    use_bias=True,\n    kernel_initializer='glorot_uniform',\n    recurrent_initializer='orthogonal',\n    bias_initializer='zeros',\n    kernel_regularizer=None,\n    recurrent_regularizer=None,\n    bias_regularizer=None,\n    kernel_constraint=None,\n    recurrent_constraint=None,\n    bias_constraint=None,\n    dropout=0.0,\n    recurrent_dropout=0.0,\n    implementation=1,\n    reset_after=False,\n    **kwargs\n)\n")])])]),r("h2",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("h3",{attrs:{id:"get-dropout-mask-for-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-dropout-mask-for-cell","aria-hidden":"true"}},[e._v("#")]),e._v(" get_dropout_mask_for_cell")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" get_dropout_mask_for_cell(\n    inputs,\n    training,\n    count=1\n)\n")])])]),r("p",[e._v("Get the dropout mask for RNN cell's input.")]),e._v(" "),r("p",[e._v("It will create mask based on context if there isn't any existing cached mask. If a new mask is generated, it will update the cache in the cell.")]),e._v(" "),r("h4",{attrs:{id:"args"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("inputs")]),e._v(": the input tensor whose shape will be used to generate dropout mask.")]),e._v(" "),r("li",[r("code",[e._v("training")]),e._v(": boolean tensor, whether its in "),r("code",[e._v("training")]),e._v(" mode, dropout will be ignored in non-"),r("code",[e._v("training")]),e._v(" mode.")]),e._v(" "),r("li",[r("code",[e._v("count")]),e._v(": int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.")])]),e._v(" "),r("h4",{attrs:{id:"returns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("List of mask tensor, generated or cached mask based on context.")]),e._v(" "),r("h3",{attrs:{id:"get-initial-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-initial-state","aria-hidden":"true"}},[e._v("#")]),e._v(" get_initial_state")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1761-L1762",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" get_initial_state(\n    inputs=None,\n    batch_size=None,\n    dtype=None\n)\n")])])]),r("h3",{attrs:{id:"get-recurrent-dropout-mask-for-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-recurrent-dropout-mask-for-cell","aria-hidden":"true"}},[e._v("#")]),e._v(" get_recurrent_dropout_mask_for_cell")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1069-L1105",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" get_recurrent_dropout_mask_for_cell(\n    inputs,\n    training,\n    count=1\n)\n")])])]),r("p",[e._v("Get the recurrent dropout mask for RNN cell.")]),e._v(" "),r("p",[e._v("It will create mask based on context if there isn't any existing cached mask. If a new mask is generated, it will update the cache in the cell.")]),e._v(" "),r("h4",{attrs:{id:"args-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("inputs")]),e._v(": the input tensor whose shape will be used to generate dropout mask.")]),e._v(" "),r("li",[r("code",[e._v("training")]),e._v(": boolean tensor, whether its in "),r("code",[e._v("training")]),e._v(" mode, dropout will be ignored in non-"),r("code",[e._v("training")]),e._v(" mode.")]),e._v(" "),r("li",[r("code",[e._v("count")]),e._v(": int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.")])]),e._v(" "),r("h4",{attrs:{id:"returns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("List of mask tensor, generated or cached mask based on context.")]),e._v(" "),r("h3",{attrs:{id:"reset-dropout-mask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset-dropout-mask","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_dropout_mask")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" reset_dropout_mask()\n")])])]),r("p",[e._v("Reset the cached dropout masks if any.")]),e._v(" "),r("p",[e._v("This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.")]),e._v(" "),r("h3",{attrs:{id:"reset-recurrent-dropout-mask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset-recurrent-dropout-mask","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_recurrent_dropout_mask")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" reset_recurrent_dropout_mask()\n")])])]),r("p",[e._v("Reset the cached recurrent dropout masks if any.")]),e._v(" "),r("p",[e._v("This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.")])])}),[],!1,null,null,null);t.default=n.exports}}]);