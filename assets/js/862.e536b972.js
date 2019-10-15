(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1050:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-ftrloptimizer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-ftrloptimizer","aria-hidden":"true"}},[e._v("#")]),e._v(" Class FtrlOptimizer")]),e._v(" "),a("p",[e._v("Optimizer that implements the FTRL algorithm.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/train/Optimizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Optimizer"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.eecs.tufts.edu/~dsculley/papers/ad-click-prediction.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("paper"),a("OutboundLink")],1),e._v("See this . This version has support for both online L2 (the L2 penalty given in the  above) and shrinkage-type L2 (which is the addition of an L2 penalty to the loss function).")]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/ftrl.py#L39-L123",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    learning_rate,\n    learning_rate_power=-0.5,\n    initial_accumulator_value=0.1,\n    l1_regularization_strength=0.0,\n    l2_regularization_strength=0.0,\n    use_locking=False,\n    name='Ftrl',\n    accum_name=None,\n    linear_name=None,\n    l2_shrinkage_regularization_strength=0.0\n)\n")])])]),a("p",[e._v("Construct a new FTRL optimizer.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("learning_rate")]),e._v(": A float value or a constant float "),a("code",[e._v("Tensor")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("learning_rate")]),e._v("_power: A float value, must be less or equal to zero. Controls how the learning rate decreases during training. Use zero for a fixed learning rate. See section 3.1 in the paper.")]),e._v(" "),a("li",[a("code",[e._v("initial_accumulator_value")]),e._v(": The starting value for accumulators. Only zero or positive values are allowed.")]),e._v(" "),a("li",[a("code",[e._v("l1_regularization_strength")]),e._v(": A float value, must be greater than or equal to zero.")]),e._v(" "),a("li",[a("code",[e._v("l2_regularization_strength")]),e._v(": A float value, must be greater than or equal to zero.")]),e._v(" "),a("li",[a("code",[e._v("use_locking")]),e._v(": If "),a("code",[e._v("True")]),e._v(" use locks for update operations.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(' prefix for the operations created when applying gradients. Defaults to "Ftrl".')]),e._v(" "),a("li",[a("code",[e._v("accum_name")]),e._v(": The suffix for the variable that keeps the gradient squared accumulator. If not present, defaults to "),a("code",[e._v("name")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("linear_name")]),e._v(": The suffix for the variable that keeps the linear gradient accumulator. If not present, defaults to "),a("code",[e._v("name")]),e._v(' + "_1".')]),e._v(" "),a("li",[a("code",[e._v("l2_shrinkage_regularization_strength")]),e._v(": A float value, must be greater than or equal to zero. This differs from L2 above in that the L2 above is a stabilization penalty, whereas this L2 shrinkage is a magnitude penalty. The FTRL formulation can be written as: w_{t+1} = argminw(\\hat{g}{1:t}w + L1||w||_1 + L2||w||"),a("em",[e._v("2^2), where \\hat{g} = g + (2L2_shrinkagew), and g is the gradient of the loss function w.r.t. the weights w. Specifically, in the absence of L1 regularization, it is equivalent to the following update rule: w")]),e._v("{t+1} = w_t - lr_t / (1 + 2L2lr_t) * g_t - 2L2_shrinkagelr_t / (1 + 2L2lr_t) * w_t where lr_t is the learning rate at t. When input is sparse shrinkage will only happen on the active weights.")])]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If one of the arguments is invalid.")])]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"apply-gradients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-gradients","aria-hidden":"true"}},[e._v("#")]),e._v(" apply_gradients")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L531-L638",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" apply_gradients(\n    grads_and_vars,\n    global_step=None,\n    name=None\n)\n")])])]),a("p",[e._v("Apply gradients to variables.")]),e._v(" "),a("p",[e._v("This is the second part of minimize(). It returns an Operation that applies gradients.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("grads_and_vars")]),e._v(": List of (gradient, variable) pairs as returned by "),a("code",[e._v("compute_gradients")]),e._v("().")]),e._v(" "),a("li",[a("code",[e._v("global_step")]),e._v(": Optional "),a("code",[e._v("Variable")]),e._v(" to increment by one after the variables have been updated.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the returned operation. Default to the "),a("code",[e._v("name")]),e._v(" passed to the "),a("code",[e._v("Optimizer")]),e._v(" constructor.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("An Operation that applies the specified gradients. If global_step was not None, that operation also increments global_step.")]),e._v(" "),a("h4",{attrs:{id:"raises-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TypeError")]),e._v(": If "),a("code",[e._v("grads_and_vars")]),e._v(" is malformed.")]),e._v(" "),a("li",[a("code",[e._v("ValueError")]),e._v(": If none of the variables have gradients.")]),e._v(" "),a("li",[a("code",[e._v("RuntimeError")]),e._v(": If you should use "),a("code",[e._v("_distributed_apply")]),e._v("() instead.")])]),e._v(" "),a("h3",{attrs:{id:"compute-gradients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compute-gradients","aria-hidden":"true"}},[e._v("#")]),e._v(" compute_gradients")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L415-L519",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" compute_gradients(\n    loss,\n    var_list=None,\n    gate_gradients=GATE_OP,\n    aggregation_method=None,\n    colocate_gradients_with_ops=False,\n    grad_loss=None\n)\n")])])]),a("p",[e._v("Compute gradients of loss for the variables in var_list.")]),e._v(" "),a("p",[e._v('This is the first part of minimize(). It returns a list of (gradient, variable) pairs where "gradient" is the gradient for "variable". Note that "gradient" can be a Tensor, an IndexedSlices, or None if there is no gradient for the given variable.')]),e._v(" "),a("h4",{attrs:{id:"args-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("loss")]),e._v(": A Tensor containing the value to minimize or a callable taking no arguments which returns the value to minimize. When eager execution is enabled it must be a callable.")]),e._v(" "),a("li",[a("code",[e._v("var_list")]),e._v(": Optional list or tuple of "),a("code",[e._v("tf.Variable")]),e._v(" to update to minimize "),a("code",[e._v("loss")]),e._v(". Defaults to the list of variables collected in the graph under the key "),a("code",[e._v("GraphKeys.TRAINABLE_VARIABLES")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("gate_gradients")]),e._v(": How to gate the computation of gradients. Can be "),a("code",[e._v("GATE_NONE")]),e._v(", "),a("code",[e._v("GATE_OP")]),e._v(", or "),a("code",[e._v("GATE_GRAPH")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("aggregation_method")]),e._v(": Specifies the method used to combine gradient terms. Valid values are defined in the class "),a("code",[e._v("AggregationMethod")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("colocate_gradients_with_ops")]),e._v(": If True, try colocating gradients with the corresponding op.")]),e._v(" "),a("li",[a("code",[e._v("grad_loss")]),e._v(": Optional. A "),a("code",[e._v("Tensor")]),e._v(" holding the gradient computed for "),a("code",[e._v("loss")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A list of (gradient, variable) pairs. Variable is always present, but gradient can be None.")]),e._v(" "),a("h4",{attrs:{id:"raises-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TypeError")]),e._v(": If "),a("code",[e._v("var_list")]),e._v(" contains anything else than "),a("code",[e._v("Variable")]),e._v(" objects.")]),e._v(" "),a("li",[a("code",[e._v("ValueError")]),e._v(": If some arguments are invalid.")]),e._v(" "),a("li",[a("code",[e._v("RuntimeError")]),e._v(": If called with eager execution enabled and "),a("code",[e._v("loss")]),e._v(" is not callable.")])]),e._v(" "),a("h4",{attrs:{id:"eager-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),a("p",[e._v("When eager execution is enabled, gate_gradients, aggregation_method, and colocate_gradients_with_ops are ignored.")]),e._v(" "),a("h3",{attrs:{id:"get-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-name","aria-hidden":"true"}},[e._v("#")]),e._v(" get_name")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L352-L353",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_name()\n")])])]),a("h3",{attrs:{id:"get-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" get_slot")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L735-L771",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_slot(\n    var,\n    name\n)\n")])])]),a("p",[e._v("Return a slot named name created for var by the Optimizer.")]),e._v(" "),a("p",[e._v("Some Optimizer subclasses use additional variables. For example Momentum and Adagrad use variables to accumulate updates. This method gives access to these Variable objects if for some reason you need them.")]),e._v(" "),a("p",[e._v("Use get_slot_names() to get the list of slot names created by the Optimizer.")]),e._v(" "),a("h4",{attrs:{id:"args-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("var")]),e._v(": A "),a("code",[e._v("var")]),e._v("iable passed to "),a("code",[e._v("minimize")]),e._v("() or "),a("code",[e._v("apply_gradients")]),e._v("().")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A string.")])]),e._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("The Variable for the slot if it was created, None otherwise.")]),e._v(" "),a("h3",{attrs:{id:"get-slot-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-slot-names","aria-hidden":"true"}},[e._v("#")]),e._v(" get_slot_names")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L773-L781",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_slot_names()\n")])])]),a("p",[e._v("Return a list of the names of slots created by the Optimizer.")]),e._v(" "),a("p",[e._v("See get_slot().")]),e._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A list of strings.")]),e._v(" "),a("h3",{attrs:{id:"minimize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimize","aria-hidden":"true"}},[e._v("#")]),e._v(" minimize")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L355-L413",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" minimize(\n    loss,\n    global_step=None,\n    var_list=None,\n    gate_gradients=GATE_OP,\n    aggregation_method=None,\n    colocate_gradients_with_ops=False,\n    name=None,\n    grad_loss=None\n)\n")])])]),a("p",[e._v("Add operations to minimize loss by updating var_list.")]),e._v(" "),a("p",[e._v("This method simply combines calls compute_gradients() and apply_gradients(). If you want to process the gradient before applying them call compute_gradients() and apply_gradients() explicitly instead of using this function.")]),e._v(" "),a("h4",{attrs:{id:"args-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("loss")]),e._v(": A "),a("code",[e._v("Tensor")]),e._v(" containing the value to minimize.")]),e._v(" "),a("li",[a("code",[e._v("global_step")]),e._v(": Optional "),a("code",[e._v("Variable")]),e._v(" to increment by one after the variables have been updated.")]),e._v(" "),a("li",[a("code",[e._v("var_list")]),e._v(": Optional list or tuple of "),a("code",[e._v("Variable")]),e._v(" objects to update to minimize "),a("code",[e._v("loss")]),e._v(". Defaults to the list of variables collected in the graph under the key "),a("code",[e._v("GraphKeys.TRAINABLE_VARIABLES")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("gate_gradients")]),e._v(": How to gate the computation of gradients. Can be "),a("code",[e._v("GATE_NONE")]),e._v(", "),a("code",[e._v("GATE_OP")]),e._v(", or "),a("code",[e._v("GATE_GRAPH")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("aggregation_method")]),e._v(": Specifies the method used to combine gradient terms. Valid values are defined in the class "),a("code",[e._v("AggregationMethod")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("colocate_gradients_with_ops")]),e._v(": If True, try colocating gradients with the corresponding op.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the returned operation.")]),e._v(" "),a("li",[a("code",[e._v("grad_loss")]),e._v(": Optional. A "),a("code",[e._v("Tensor")]),e._v(" holding the gradient computed for "),a("code",[e._v("loss")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("An Operation that updates the variables in var_list. If global_step was not None, that operation also increments global_step.")]),e._v(" "),a("h4",{attrs:{id:"raises-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If some of the variables are not "),a("code",[e._v("Variable")]),e._v(" objects.")])]),e._v(" "),a("h4",{attrs:{id:"eager-compatibility-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),a("p",[e._v("When eager execution is enabled, loss should be a Python function that takes no arguments and computes the value to be minimized. Minimization (and gradient computation) is done with respect to the elements of var_list if not None, else with respect to any trainable variables created during the execution of the loss function. gate_gradients, aggregation_method, colocate_gradients_with_ops and grad_loss are ignored when eager execution is enabled.")]),e._v(" "),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[e._v("#")]),e._v(" variables")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L783-L809",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" variables()\n")])])]),a("p",[e._v("A list of variables which encode the current state of Optimizer.")]),e._v(" "),a("p",[e._v("Includes slot variables and additional global variables created by the optimizer in the current default graph.")]),e._v(" "),a("h4",{attrs:{id:"returns-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A list of variables.")]),e._v(" "),a("h2",{attrs:{id:"class-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-members","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Members")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GATE_GRAPH = 2")])]),e._v(" "),a("li",[a("code",[e._v("GATE_NONE = 0")])]),e._v(" "),a("li",[a("code",[e._v("GATE_OP = 1")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);