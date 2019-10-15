(window.webpackJsonp=window.webpackJsonp||[]).push([[1916],{2107:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-piecewiseconstantdecay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-piecewiseconstantdecay","aria-hidden":"true"}},[e._v("#")]),e._v(" Class PiecewiseConstantDecay")]),e._v(" "),a("p",[e._v("A LearningRateSchedule that uses a piecewise constant decay schedule.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule",target:"_blank",rel:"noopener noreferrer"}},[e._v("LearningRateSchedule"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.optimizers.schedules.PiecewiseConstantDecay")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.optimizers.schedules.PiecewiseConstantDecay")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.optimizers.schedules.PiecewiseConstantDecay")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.optimizers.schedules.PiecewiseConstantDecay")])])]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L171-L233",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    boundaries,\n    values,\n    name=None\n)\n")])])]),a("p",[e._v("Piecewise constant from boundaries and interval values.")]),e._v(" "),a("p",[e._v("The function returns a 1-arg callable to compute the piecewise constant when passed the current optimizer step. This can be useful for changing the learning rate value across different invocations of optimizer functions.")]),e._v(" "),a("p",[e._v("Example: use a learning rate that's 1.0 for the first 100001 steps, 0.5 for the next 10000 steps, and 0.1 for any additional steps.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" step = tf.Variable(0, trainable=False)\nboundaries = [100000, 110000]\nvalues = [1.0, 0.5, 0.1]\nlearning_rate_fn = keras.optimizers.schedules.PiecewiseConstantDecay(\n    boundaries, values)\n\n# Later, whenever we perform an optimization step, we pass in the step.\nlearning_rate = learning_rate_fn(step)\n")])])]),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras.optimizers.Optimizer"),a("OutboundLink")],1),e._v("You can pass this schedule directly into a  as the learning rate. The learning rate schedule is also serializable and deserializable using tf.keras.optimizers.schedules.serialize and tf.keras.optimizers.schedules.deserialize.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("boundaries")]),e._v(": A list of "),a("code",[e._v("Tensor")]),e._v("s or "),a("code",[e._v("int")]),e._v("s or "),a("code",[e._v("float")]),e._v("s with strictly increasing entries, and with all elements having the same type as the optimizer step.")]),e._v(" "),a("li",[a("code",[e._v("values")]),e._v(": A list of "),a("code",[e._v("Tensor")]),e._v("s or "),a("code",[e._v("float")]),e._v("s or "),a("code",[e._v("int")]),e._v("s that specifies the "),a("code",[e._v("values")]),e._v(" for the "),a("code",[e._v("int")]),e._v("ervals defined by "),a("code",[e._v("boundaries")]),e._v(". It should have one more element than "),a("code",[e._v("boundaries")]),e._v(", and all elements should have the same type.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A string. Optional "),a("code",[e._v("name")]),e._v(" of the operation. Defaults to 'PiecewiseConstant'.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A 1-arg callable learning rate schedule that takes the current optimizer step and outputs the decayed learning rate, a scalar Tensor of the same type as the boundary tensors.")]),e._v(" "),a("p",[e._v("The output of the 1-arg function that takes the step is values[0] when step <= boundaries[0], values[1] when step > boundaries[0] and step <= boundaries[1], ..., and values[-1] when step > boundaries[-1].")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": if the number of elements in the lists do not match.")])]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("call")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L235-L256",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __call__(step)\n")])])]),a("p",[e._v("Call self as a function.")]),e._v(" "),a("h3",{attrs:{id:"from-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[e._v("#")]),e._v(" from_config")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" from_config(\n    cls,\n    config\n)\n")])])]),a("p",[e._v("Instantiates a LearningRateSchedule from its config.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("config")]),e._v(": Output of "),a("code",[e._v("get_config")]),e._v("().")])]),e._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A LearningRateSchedule instance.")]),e._v(" "),a("h3",{attrs:{id:"get-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[e._v("#")]),e._v(" get_config")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L258-L263",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_config()\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);