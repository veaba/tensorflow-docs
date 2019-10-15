(window.webpackJsonp=window.webpackJsonp||[]).push([[1901],{2092:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-adagrad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-adagrad","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Adagrad")]),e._v(" "),a("p",[e._v("Optimizer that implements the Adagrad algorithm.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Optimizer"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.optimizers.Adagrad")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.optimizers.Adagrad")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.optimizers.Adagrad")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.optimizers.Adagrad")])])]),e._v(" "),a("p",[e._v("Adagrad is an optimizer with parameter-specific learning rates, which are adapted relative to how frequently a parameter gets updated during training. The more updates a parameter receives, the smaller the updates.")]),e._v(" "),a("h4",{attrs:{id:"initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization","aria-hidden":"true"}},[e._v("#")]),e._v(" Initialization:")]),e._v(" "),a("h4",{attrs:{id:"update-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-step","aria-hidden":"true"}},[e._v("#")]),e._v(" Update step:")]),e._v(" "),a("h4",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("P")]),e._v("a"),a("code",[e._v("p")]),e._v("e"),a("code",[e._v("r")]),e._v(".``")]),e._v(" "),a("li",[a("code",[e._v("I")]),e._v("n"),a("code",[e._v("t")]),e._v("r"),a("code",[e._v("o")]),e._v("d"),a("code",[e._v("u")]),e._v("c"),a("code",[e._v("t")]),e._v("i"),a("code",[e._v("o")]),e._v("n"),a("code",[e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L61-L102",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    learning_rate=0.001,\n    initial_accumulator_value=0.1,\n    epsilon=1e-07,\n    name='Adagrad',\n    **kwargs\n)\n")])])]),a("p",[e._v("Construct a new Adagrad optimizer.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("learning_rate")]),e._v(": A "),a("code",[e._v("Tensor")]),e._v(" or a floating point value. The learning rate.")]),e._v(" "),a("li",[a("code",[e._v("initial_accumulator_value")]),e._v(": A floating point value. Starting value for the accumulators, must be positive.")]),e._v(" "),a("li",[a("code",[e._v("epsilon")]),e._v(": A floating point value. Starting value for the accumulators, must be positive.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(' prefix for the operations created when applying gradients. Defaults to "Adagrad".')])]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If the "),a("code",[e._v("initial_accumulator_value")]),e._v(" or "),a("code",[e._v("epsilon")]),e._v(" is invalid.")])]),e._v(" "),a("h4",{attrs:{id:"eager-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),a("p",[e._v("When eager execution is enabled, learning_rate can be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.")]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"iterations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterations","aria-hidden":"true"}},[e._v("#")]),e._v(" iterations")]),e._v(" "),a("p",[e._v("Variable. The number of training steps this Optimizer has run.")]),e._v(" "),a("h3",{attrs:{id:"weights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weights","aria-hidden":"true"}},[e._v("#")]),e._v(" weights")]),e._v(" "),a("p",[e._v("Returns variables of this Optimizer based on the order created.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"add-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" add_slot")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L567-L594",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" add_slot(\n    var,\n    slot_name,\n    initializer='zeros'\n)\n")])])]),a("p",[e._v("Add a new slot variable for var.")]),e._v(" "),a("h3",{attrs:{id:"add-weight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-weight","aria-hidden":"true"}},[e._v("#")]),e._v(" add_weight")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L768-L808",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" add_weight(\n    name,\n    shape,\n    dtype=None,\n    initializer='zeros',\n    trainable=None,\n    synchronization=tf.VariableSynchronization.AUTO,\n    aggregation=tf.compat.v1.VariableAggregation.NONE\n)\n")])])]),a("h3",{attrs:{id:"apply-gradients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-gradients","aria-hidden":"true"}},[e._v("#")]),e._v(" apply_gradients")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L408-L441",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" apply_gradients(\n    grads_and_vars,\n    name=None\n)\n")])])]),a("p",[e._v("Apply gradients to variables.")]),e._v(" "),a("p",[e._v("This is the second part of minimize(). It returns an Operation that applies gradients.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("grads_and_vars")]),e._v(": List of (gradient, variable) pairs.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the returned operation. Default to the "),a("code",[e._v("name")]),e._v(" passed to the "),a("code",[e._v("Optimizer")]),e._v(" constructor.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("An Operation that applies the specified gradients. If global_step was not None, that operation also increments global_step.")]),e._v(" "),a("h4",{attrs:{id:"raises-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TypeError")]),e._v(": If "),a("code",[e._v("grads_and_vars")]),e._v(" is malformed.")]),e._v(" "),a("li",[a("code",[e._v("ValueError")]),e._v(": If none of the variables have gradients.")])]),e._v(" "),a("h3",{attrs:{id:"from-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[e._v("#")]),e._v(" from_config")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L128-L149",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" @classmethod\nfrom_config(\n    cls,\n    config,\n    custom_objects=None\n)\n")])])]),a("p",[e._v("Creates an optimizer from its config.")]),e._v(" "),a("p",[e._v("This method is the reverse of get_config, capable of instantiating the same optimizer from the config dictionary.")]),e._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("config")]),e._v(": A Python dictionary, typically the output of get_"),a("code",[e._v("config")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("custom_objects")]),e._v(": A Python dictionary mapping names to additional Python objects used to create this optimizer, such as a function used for a hyperparameter.")])]),e._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("An optimizer instance.")]),e._v(" "),a("h3",{attrs:{id:"get-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[e._v("#")]),e._v(" get_config")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L198-L206",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_config()\n")])])]),a("p",[e._v("Returns the config of the optimimizer.")]),e._v(" "),a("p",[e._v("An optimizer config is a Python dictionary (serializable) containing the configuration of an optimizer. The same optimizer can be reinstantiated later (without any saved state) from this configuration.")]),e._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Python dictionary.")]),e._v(" "),a("h3",{attrs:{id:"get-gradients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-gradients","aria-hidden":"true"}},[e._v("#")]),e._v(" get_gradients")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L374-L406",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_gradients(\n    loss,\n    params\n)\n")])])]),a("p",[e._v("Returns gradients of loss with respect to params.")]),e._v(" "),a("h4",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("loss")]),e._v(": Loss tensor.")]),e._v(" "),a("li",[a("code",[e._v("params")]),e._v(": List of variables.")])]),e._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("List of gradient tensors.")]),e._v(" "),a("h4",{attrs:{id:"raises-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": In case any gradient cannot be computed (e.g. if gradient function not implemented).")])]),e._v(" "),a("h3",{attrs:{id:"get-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" get_slot")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L596-L599",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_slot(\n    var,\n    slot_name\n)\n")])])]),a("h3",{attrs:{id:"get-slot-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-slot-names","aria-hidden":"true"}},[e._v("#")]),e._v(" get_slot_names")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L563-L565",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_slot_names()\n")])])]),a("p",[e._v("A list of names for this optimizer's slots.")]),e._v(" "),a("h3",{attrs:{id:"get-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-updates","aria-hidden":"true"}},[e._v("#")]),e._v(" get_updates")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_updates(\n    loss,\n    params\n)\n")])])]),a("h3",{attrs:{id:"get-weights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-weights","aria-hidden":"true"}},[e._v("#")]),e._v(" get_weights")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L743-L745",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_weights()\n")])])]),a("h3",{attrs:{id:"minimize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimize","aria-hidden":"true"}},[e._v("#")]),e._v(" minimize")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L290-L319",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" minimize(\n    loss,\n    var_list,\n    grad_loss=None,\n    name=None\n)\n")])])]),a("p",[e._v("Minimize loss by updating var_list.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/GradientTape",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.GradientTape"),a("OutboundLink")],1),e._v("This method simply computes gradient using  and calls apply_gradients(). If you want to process the gradient before applying then call  and apply_gradients() explicitly instead of using this function.")]),e._v(" "),a("h4",{attrs:{id:"args-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("loss")]),e._v(": A callable taking no arguments which returns the value to minimize.")]),e._v(" "),a("li",[a("code",[e._v("var_list")]),e._v(": list or tuple of "),a("code",[e._v("Variable")]),e._v(" objects to update to "),a("code",[e._v("minimize")]),e._v(" "),a("code",[e._v("loss")]),e._v(", or a callable returning the list or tuple of "),a("code",[e._v("Variable")]),e._v(" objects. Use callable when the variable list would otherwise be incomplete before "),a("code",[e._v("minimize")]),e._v(" since the variables are created at the first time "),a("code",[e._v("loss")]),e._v(" is called.")]),e._v(" "),a("li",[a("code",[e._v("grad_loss")]),e._v(": Optional. A "),a("code",[e._v("Tensor")]),e._v(" holding the gradient computed for "),a("code",[e._v("loss")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the returned operation.")])]),e._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("An Operation that updates the variables in var_list. If global_step was not None, that operation also increments global_step.")]),e._v(" "),a("h4",{attrs:{id:"raises-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If some of the variables are not "),a("code",[e._v("Variable")]),e._v(" objects.")])]),e._v(" "),a("h3",{attrs:{id:"set-weights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-weights","aria-hidden":"true"}},[e._v("#")]),e._v(" set_weights")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L119-L126",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" set_weights(weights)\n")])])]),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[e._v("#")]),e._v(" variables")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" variables()\n")])])]),a("p",[e._v("Returns variables of this Optimizer based on the order created.")])])}),[],!1,null,null,null);t.default=s.exports}}]);