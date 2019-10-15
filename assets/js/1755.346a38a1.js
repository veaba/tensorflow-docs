(window.webpackJsonp=window.webpackJsonp||[]).push([[1755],{1946:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"class-gru"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-gru","aria-hidden":"true"}},[e._v("#")]),e._v(" Class GRU")]),e._v(" "),r("p",[e._v("Gated Recurrent Unit - Cho et al. 2014.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/layers/GRU",target:"_blank",rel:"noopener noreferrer"}},[e._v("GRU"),r("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),r("h3",{attrs:{id:"aliases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),r("ul",[r("li",[e._v("Class "),r("code",[e._v("tf.compat.v2.keras.layers.GRU")])])]),e._v(" "),r("h3",{attrs:{id:"used-in-the-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("R")]),e._v("e"),r("code",[e._v("c")]),e._v("u"),r("code",[e._v("r")]),e._v("r"),r("code",[e._v("e")]),e._v("n"),r("code",[e._v("t")]),e._v(" "),r("code",[e._v("N")]),e._v("e"),r("code",[e._v("u")]),e._v("r"),r("code",[e._v("a")]),e._v("l"),r("code"),e._v("N"),r("code",[e._v("e")]),e._v("t"),r("code",[e._v("w")]),e._v("o"),r("code",[e._v("r")]),e._v("k"),r("code",[e._v("s")]),e._v(" "),r("code",[e._v("(")]),e._v("R"),r("code",[e._v("N")]),e._v("N"),r("code",[e._v(")")]),e._v(" "),r("code",[e._v("w")]),e._v("i"),r("code",[e._v("t")]),e._v("h"),r("code"),e._v("K"),r("code",[e._v("e")]),e._v("r"),r("code",[e._v("a")]),e._v("s``")])]),e._v(" "),r("h3",{attrs:{id:"used-in-the-tutorials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("I")]),e._v("m"),r("code",[e._v("a")]),e._v("g"),r("code",[e._v("e")]),e._v(" "),r("code",[e._v("c")]),e._v("a"),r("code",[e._v("p")]),e._v("t"),r("code",[e._v("i")]),e._v("o"),r("code",[e._v("n")]),e._v("i"),r("code",[e._v("n")]),e._v("g"),r("code"),e._v("w"),r("code",[e._v("i")]),e._v("t"),r("code",[e._v("h")]),e._v(" "),r("code",[e._v("v")]),e._v("i"),r("code",[e._v("s")]),e._v("u"),r("code",[e._v("a")]),e._v("l"),r("code"),e._v("a"),r("code",[e._v("t")]),e._v("t"),r("code",[e._v("e")]),e._v("n"),r("code",[e._v("t")]),e._v("i"),r("code",[e._v("o")]),e._v("n``")]),e._v(" "),r("li",[r("code",[e._v("N")]),e._v("e"),r("code",[e._v("u")]),e._v("r"),r("code",[e._v("a")]),e._v("l"),r("code"),e._v("m"),r("code",[e._v("a")]),e._v("c"),r("code",[e._v("h")]),e._v("i"),r("code",[e._v("n")]),e._v("e"),r("code"),e._v("t"),r("code",[e._v("r")]),e._v("a"),r("code",[e._v("n")]),e._v("s"),r("code",[e._v("l")]),e._v("a"),r("code",[e._v("t")]),e._v("i"),r("code",[e._v("o")]),e._v("n"),r("code"),e._v("w"),r("code",[e._v("i")]),e._v("t"),r("code",[e._v("h")]),e._v(" "),r("code",[e._v("a")]),e._v("t"),r("code",[e._v("t")]),e._v("e"),r("code",[e._v("n")]),e._v("t"),r("code",[e._v("i")]),e._v("o"),r("code",[e._v("n")])]),e._v(" "),r("li",[r("code",[e._v("T")]),e._v("e"),r("code",[e._v("x")]),e._v("t"),r("code"),e._v("g"),r("code",[e._v("e")]),e._v("n"),r("code",[e._v("e")]),e._v("r"),r("code",[e._v("a")]),e._v("t"),r("code",[e._v("i")]),e._v("o"),r("code",[e._v("n")]),e._v(" "),r("code",[e._v("w")]),e._v("i"),r("code",[e._v("t")]),e._v("h"),r("code"),e._v("a"),r("code",[e._v("n")]),e._v(" "),r("code",[e._v("R")]),e._v("N"),r("code",[e._v("N")])])]),e._v(" "),r("p",[e._v("Based on available runtime hardware and constraints, this layer will choose different implementations (cuDNN-based or pure-TensorFlow) to maximize the performance. If a GPU is available and all the arguments to the layer meet the requirement of the CuDNN kernel (see below for details), the layer will use a fast cuDNN implementation.")]),e._v(" "),r("p",[e._v("The requirements to use the cuDNN implementation are:\n"),r("a",{attrs:{href:"https://arxiv.org/abs/1406.1078v3",target:"_blank",rel:"noopener noreferrer"}},[e._v("v3"),r("OutboundLink")],1),e._v("There are two variants of the GRU implementation. The default one is based on  and has reset gate applied to hidden state before matrix multiplication. The other one is based on original and has the order reversed.")]),e._v(" "),r("p",[e._v("The second variant is compatible with CuDNNGRU (GPU-only) and allows inference on CPU. Thus it has separate biases for kernel and recurrent_kernel. To use this variant, set 'reset_after'=True and recurrent_activation='sigmoid'.")]),e._v(" "),r("h4",{attrs:{id:"arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("units")]),e._v(": Positive integer, dimensionality of the output space.")]),e._v(" "),r("li",[r("code",[e._v("activation")]),e._v(": Activation function to use. Default: hyperbolic tangent ("),r("code",[e._v("tanh")]),e._v("). If you pass "),r("code",[e._v("None")]),e._v(", no "),r("code",[e._v("activation")]),e._v(' is applied (ie. "linear" '),r("code",[e._v("activation")]),e._v(": a(x) = x).")]),e._v(" "),r("li",[r("code",[e._v("recurrent_activation")]),e._v(": Activation function to use for the recurrent step. Default: "),r("code",[e._v("sigmoid")]),e._v(" ("),r("code",[e._v("sigmoid")]),e._v("). If you pass "),r("code",[e._v("None")]),e._v(", no "),r("code",[e._v("activation")]),e._v(' is applied (ie. "linear" '),r("code",[e._v("activation")]),e._v(": a(x) = x).")]),e._v(" "),r("li",[r("code",[e._v("use_bias")]),e._v(": Boolean, whether the layer uses a bias vector.")]),e._v(" "),r("li",[r("code",[e._v("kernel_initializer")]),e._v(": Initializer for the "),r("code",[e._v("kernel")]),e._v(" weights matrix, used for the linear transformation of the inputs.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_initializer")]),e._v(": Initializer for the "),r("code",[e._v("recurrent_kernel")]),e._v(" weights matrix, used for the linear transformation of the recurrent state.")]),e._v(" "),r("li",[r("code",[e._v("bias_initializer")]),e._v(": Initializer for the bias vector.")]),e._v(" "),r("li",[r("code",[e._v("kernel")]),e._v("_regularizer: Regularizer function applied to the "),r("code",[e._v("kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_regularizer")]),e._v(": Regularizer function applied to the "),r("code",[e._v("recurrent_kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("bias_regularizer")]),e._v(": Regularizer function applied to the bias vector.")]),e._v(" "),r("li",[r("code",[e._v("activity_regularizer")]),e._v(': Regularizer function applied to the output of the layer (its "'),r("code",[e._v("activation")]),e._v('")..')]),e._v(" "),r("li",[r("code",[e._v("kernel")]),e._v("_constraint: Constraint function applied to the "),r("code",[e._v("kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_constraint")]),e._v(": Constraint function applied to the "),r("code",[e._v("recurrent_kernel")]),e._v(" weights matrix.")]),e._v(" "),r("li",[r("code",[e._v("bias_constraint")]),e._v(": Constraint function applied to the bias vector.")]),e._v(" "),r("li",[r("code",[e._v("dropout")]),e._v(": Float between 0 and 1. Fraction of the "),r("code",[e._v("units")]),e._v(" to drop for the linear transformation of the inputs.")]),e._v(" "),r("li",[r("code",[e._v("recurrent_dropout")]),e._v(": Float between 0 and 1. Fraction of the "),r("code",[e._v("units")]),e._v(" to drop for the linear transformation of the recurrent state.")]),e._v(" "),r("li",[r("code",[e._v("implementation")]),e._v(": Implementation mode, either 1 or 2. Mode 1 will structure its operations as a larger number of smaller dot products and additions, whereas mode 2 will batch them into fewer, larger operations. These modes will have different performance profiles on different hardware and for different applications.")]),e._v(" "),r("li",[r("code",[e._v("return_sequences")]),e._v(": Boolean. Whether to return the last output in the output sequence, or the full sequence.")]),e._v(" "),r("li",[r("code",[e._v("return_state")]),e._v(": Boolean. Whether to return the last state in addition to the output.")]),e._v(" "),r("li",[r("code",[e._v("go_backwards")]),e._v(": Boolean (default False). If True, process the input sequence backwards and return the reversed sequence.")]),e._v(" "),r("li",[r("code",[e._v("stateful")]),e._v(": Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.")]),e._v(" "),r("li",[r("code",[e._v("unroll")]),e._v(": Boolean (default False). If True, the network will be "),r("code",[e._v("unroll")]),e._v("ed, else a symbolic loop will be used. Unrolling can speed-up a RNN, although it tends to be more memory-intensive. Unrolling is only suitable for short sequences.")]),e._v(" "),r("li",[r("code",[e._v("reset_after")]),e._v(': GRU convention (whether to apply reset gate after or before matrix multiplication). False = "before", True = "after" (default and CuDNN compatible).')])]),e._v(" "),r("h4",{attrs:{id:"call-arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#call-arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Call arguments:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("inputs")]),e._v(": A 3D tensor.")]),e._v(" "),r("li",[r("code",[e._v("mask")]),e._v(": Binary tensor of shape ("),r("code",[e._v("samples, timesteps")]),e._v(") indicating whether a given timestep should be "),r("code",[e._v("mask")]),e._v("ed.")]),e._v(" "),r("li",[r("code",[e._v("training")]),e._v(": Python boolean indicating whether the layer should behave in "),r("code",[e._v("training")]),e._v(" mode or in inference mode. This argument is passed to the cell when calling it. This is only relevant if "),r("code",[e._v("dropout")]),e._v(" or "),r("code",[e._v("recurrent_dropout")]),e._v(" is used.")]),e._v(" "),r("li",[r("code",[e._v("initial_state")]),e._v(": List of initial state tensors to be passed to the first call of the cell.")])]),e._v(" "),r("h2",{attrs:{id:"init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("init")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent_v2.py#L249-L309",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __init__(\n    units,\n    activation='tanh',\n    recurrent_activation='sigmoid',\n    use_bias=True,\n    kernel_initializer='glorot_uniform',\n    recurrent_initializer='orthogonal',\n    bias_initializer='zeros',\n    kernel_regularizer=None,\n    recurrent_regularizer=None,\n    bias_regularizer=None,\n    activity_regularizer=None,\n    kernel_constraint=None,\n    recurrent_constraint=None,\n    bias_constraint=None,\n    dropout=0.0,\n    recurrent_dropout=0.0,\n    implementation=2,\n    return_sequences=False,\n    return_state=False,\n    go_backwards=False,\n    stateful=False,\n    unroll=False,\n    time_major=False,\n    reset_after=True,\n    **kwargs\n)\n")])])]),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"activation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activation","aria-hidden":"true"}},[e._v("#")]),e._v(" activation")]),e._v(" "),r("h3",{attrs:{id:"bias-constraint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bias-constraint","aria-hidden":"true"}},[e._v("#")]),e._v(" bias_constraint")]),e._v(" "),r("h3",{attrs:{id:"bias-initializer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bias-initializer","aria-hidden":"true"}},[e._v("#")]),e._v(" bias_initializer")]),e._v(" "),r("h3",{attrs:{id:"bias-regularizer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bias-regularizer","aria-hidden":"true"}},[e._v("#")]),e._v(" bias_regularizer")]),e._v(" "),r("h3",{attrs:{id:"dropout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dropout","aria-hidden":"true"}},[e._v("#")]),e._v(" dropout")]),e._v(" "),r("h3",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[e._v("#")]),e._v(" implementation")]),e._v(" "),r("h3",{attrs:{id:"kernel-constraint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kernel-constraint","aria-hidden":"true"}},[e._v("#")]),e._v(" kernel_constraint")]),e._v(" "),r("h3",{attrs:{id:"kernel-initializer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kernel-initializer","aria-hidden":"true"}},[e._v("#")]),e._v(" kernel_initializer")]),e._v(" "),r("h3",{attrs:{id:"kernel-regularizer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kernel-regularizer","aria-hidden":"true"}},[e._v("#")]),e._v(" kernel_regularizer")]),e._v(" "),r("h3",{attrs:{id:"recurrent-activation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recurrent-activation","aria-hidden":"true"}},[e._v("#")]),e._v(" recurrent_activation")]),e._v(" "),r("h3",{attrs:{id:"recurrent-constraint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recurrent-constraint","aria-hidden":"true"}},[e._v("#")]),e._v(" recurrent_constraint")]),e._v(" "),r("h3",{attrs:{id:"recurrent-dropout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recurrent-dropout","aria-hidden":"true"}},[e._v("#")]),e._v(" recurrent_dropout")]),e._v(" "),r("h3",{attrs:{id:"recurrent-initializer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recurrent-initializer","aria-hidden":"true"}},[e._v("#")]),e._v(" recurrent_initializer")]),e._v(" "),r("h3",{attrs:{id:"recurrent-regularizer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recurrent-regularizer","aria-hidden":"true"}},[e._v("#")]),e._v(" recurrent_regularizer")]),e._v(" "),r("h3",{attrs:{id:"reset-after"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset-after","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_after")]),e._v(" "),r("h3",{attrs:{id:"states"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#states","aria-hidden":"true"}},[e._v("#")]),e._v(" states")]),e._v(" "),r("h3",{attrs:{id:"units"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#units","aria-hidden":"true"}},[e._v("#")]),e._v(" units")]),e._v(" "),r("h3",{attrs:{id:"use-bias"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-bias","aria-hidden":"true"}},[e._v("#")]),e._v(" use_bias")]),e._v(" "),r("h2",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("h3",{attrs:{id:"get-dropout-mask-for-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-dropout-mask-for-cell","aria-hidden":"true"}},[e._v("#")]),e._v(" get_dropout_mask_for_cell")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" get_dropout_mask_for_cell(\n    inputs,\n    training,\n    count=1\n)\n")])])]),r("p",[e._v("Get the dropout mask for RNN cell's input.")]),e._v(" "),r("p",[e._v("It will create mask based on context if there isn't any existing cached mask. If a new mask is generated, it will update the cache in the cell.")]),e._v(" "),r("h4",{attrs:{id:"args"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("inputs")]),e._v(": the input tensor whose shape will be used to generate dropout mask.")]),e._v(" "),r("li",[r("code",[e._v("training")]),e._v(": boolean tensor, whether its in "),r("code",[e._v("training")]),e._v(" mode, dropout will be ignored in non-"),r("code",[e._v("training")]),e._v(" mode.")]),e._v(" "),r("li",[r("code",[e._v("count")]),e._v(": int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.")])]),e._v(" "),r("h4",{attrs:{id:"returns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("List of mask tensor, generated or cached mask based on context.")]),e._v(" "),r("h3",{attrs:{id:"get-initial-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-initial-state","aria-hidden":"true"}},[e._v("#")]),e._v(" get_initial_state")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L593-L614",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" get_initial_state(inputs)\n")])])]),r("h3",{attrs:{id:"get-recurrent-dropout-mask-for-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-recurrent-dropout-mask-for-cell","aria-hidden":"true"}},[e._v("#")]),e._v(" get_recurrent_dropout_mask_for_cell")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1069-L1105",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" get_recurrent_dropout_mask_for_cell(\n    inputs,\n    training,\n    count=1\n)\n")])])]),r("p",[e._v("Get the recurrent dropout mask for RNN cell.")]),e._v(" "),r("p",[e._v("It will create mask based on context if there isn't any existing cached mask. If a new mask is generated, it will update the cache in the cell.")]),e._v(" "),r("h4",{attrs:{id:"args-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("inputs")]),e._v(": the input tensor whose shape will be used to generate dropout mask.")]),e._v(" "),r("li",[r("code",[e._v("training")]),e._v(": boolean tensor, whether its in "),r("code",[e._v("training")]),e._v(" mode, dropout will be ignored in non-"),r("code",[e._v("training")]),e._v(" mode.")]),e._v(" "),r("li",[r("code",[e._v("count")]),e._v(": int, how many dropout mask will be generated. It is useful for cell that has internal weights fused together.")])]),e._v(" "),r("h4",{attrs:{id:"returns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("List of mask tensor, generated or cached mask based on context.")]),e._v(" "),r("h3",{attrs:{id:"reset-dropout-mask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset-dropout-mask","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_dropout_mask")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" reset_dropout_mask()\n")])])]),r("p",[e._v("Reset the cached dropout masks if any.")]),e._v(" "),r("p",[e._v("This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.")]),e._v(" "),r("h3",{attrs:{id:"reset-recurrent-dropout-mask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset-recurrent-dropout-mask","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_recurrent_dropout_mask")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" reset_recurrent_dropout_mask()\n")])])]),r("p",[e._v("Reset the cached recurrent dropout masks if any.")]),e._v(" "),r("p",[e._v("This is important for the RNN layer to invoke this in it call() method so that the cached mask is cleared before calling the cell.call(). The mask should be cached across the timestep within the same batch, but shouldn't be cached between batches. Otherwise it will introduce unreasonable bias against certain index of data within the batch.")]),e._v(" "),r("h3",{attrs:{id:"reset-states"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset-states","aria-hidden":"true"}},[e._v("#")]),e._v(" reset_states")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L806-L858",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" reset_states(states=None)\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);