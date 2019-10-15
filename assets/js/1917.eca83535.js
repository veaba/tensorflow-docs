(window.webpackJsonp=window.webpackJsonp||[]).push([[1917],{2108:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"class-polynomialdecay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-polynomialdecay","aria-hidden":"true"}},[e._v("#")]),e._v(" Class PolynomialDecay")]),e._v(" "),t("p",[e._v("A LearningRateSchedule that uses a polynomial decay schedule.\n"),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/schedules/LearningRateSchedule",target:"_blank",rel:"noopener noreferrer"}},[e._v("LearningRateSchedule"),t("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[e._v("Class "),t("code",[e._v("tf.compat.v1.keras.optimizers.schedules.PolynomialDecay")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.keras.optimizers.schedules.PolynomialDecay")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.optimizers.schedules.PolynomialDecay")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.optimizers.schedules.PolynomialDecay")])])]),e._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("init")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L270-L367",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __init__(\n    initial_learning_rate,\n    decay_steps,\n    end_learning_rate=0.0001,\n    power=1.0,\n    cycle=False,\n    name=None\n)\n")])])]),t("p",[e._v("Applies a polynomial decay to the learning rate.")]),e._v(" "),t("p",[e._v("It is commonly observed that a monotonically decreasing learning rate, whose degree of change is carefully chosen, results in a better performing model. This schedule applies a polynomial decay function to an optimizer step, given a provided initial_learning_rate, to reach an end_learning_rate in the given decay_steps.")]),e._v(" "),t("p",[e._v("It requires a step value to compute the decayed learning rate. You can just pass a TensorFlow variable that you increment at each training step.")]),e._v(" "),t("p",[e._v("The schedule is a 1-arg callable that produces a decayed learning rate when passed the current optimizer step. This can be useful for changing the learning rate value across different invocations of optimizer functions. It is computed as:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" def decayed_learning_rate(step):\n  step = min(step, decay_steps)\n  return ((initial_learning_rate - end_learning_rate) *\n          (1 - step / decay_steps) ^ (power)\n         ) + end_learning_rate\n")])])]),t("p",[e._v("If cycle is True then a multiple of decay_steps is used, the first one that is bigger than step.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" def decayed_learning_rate(step):\n  decay_steps = decay_steps * ceil(step / decay_steps)\n  return ((initial_learning_rate - end_learning_rate) *\n          (1 - step / decay_steps) ^ (power)\n         ) + end_learning_rate\n")])])]),t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras.optimizers.Optimizer"),t("OutboundLink")],1),e._v("You can pass this schedule directly into a  as the learning rate. Example: Fit a model while decaying from 0.1 to 0.01 in 10000 steps using sqrt (i.e. power=0.5):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" ...\nstarter_learning_rate = 0.1\nend_learning_rate = 0.01\ndecay_steps = 10000\nlearning_rate_fn = tf.keras.optimizers.schedules.PolynomialDecay(\n    starter_learning_rate,\n    decay_steps,\n    end_learning_rate,\n    power=0.5)\n\nmodel.compile(optimizer=tf.keras.optimizers.SGD(\n                  learning_rate=learning_rate_fn),\n              loss='sparse_categorical_crossentropy',\n              metrics=['accuracy'])\n\nmodel.fit(data, labels, epochs=5)\n")])])]),t("p",[t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/schedules/serialize",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras.optimizers.schedules.serialize"),t("OutboundLink")],1),e._v("The learning rate schedule is also serializable and deserializable using  and tf.keras.optimizers.schedules.deserialize.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("initial_learning_rate")]),e._v(": A scalar "),t("code",[e._v("float32")]),e._v(" or "),t("code",[e._v("float64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. The initial learning rate.")]),e._v(" "),t("li",[t("code",[e._v("decay_steps")]),e._v(": A scalar "),t("code",[e._v("int32")]),e._v(" or "),t("code",[e._v("int64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. Must be positive. See the decay computation above.")]),e._v(" "),t("li",[t("code",[e._v("end_learning_rate")]),e._v(": A scalar "),t("code",[e._v("float32")]),e._v(" or "),t("code",[e._v("float64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. The minimal end learning rate.")]),e._v(" "),t("li",[t("code",[e._v("power")]),e._v(": A scalar "),t("code",[e._v("float32")]),e._v(" or "),t("code",[e._v("float64")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(" or a Python number. The "),t("code",[e._v("power")]),e._v(" of the polynomial. Defaults to linear, 1.0.")]),e._v(" "),t("li",[t("code",[e._v("cycle")]),e._v(": A boolean, whether or not it should "),t("code",[e._v("cycle")]),e._v(" beyond "),t("code",[e._v("decay_steps")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": String. Optional "),t("code",[e._v("name")]),e._v(" of the operation. Defaults to 'PolynomialDecay'.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A 1-arg callable learning rate schedule that takes the current optimizer step and outputs the decayed learning rate, a scalar Tensor of the same type as initial_learning_rate.")]),e._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),t("h3",{attrs:{id:"call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("call")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L369-L396",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __call__(step)\n")])])]),t("p",[e._v("Call self as a function.")]),e._v(" "),t("h3",{attrs:{id:"from-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[e._v("#")]),e._v(" from_config")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L50-L60",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" from_config(\n    cls,\n    config\n)\n")])])]),t("p",[e._v("Instantiates a LearningRateSchedule from its config.")]),e._v(" "),t("h4",{attrs:{id:"args-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("config")]),e._v(": Output of "),t("code",[e._v("get_config")]),e._v("().")])]),e._v(" "),t("h4",{attrs:{id:"returns-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A LearningRateSchedule instance.")]),e._v(" "),t("h3",{attrs:{id:"get-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[e._v("#")]),e._v(" get_config")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/learning_rate_schedule.py#L398-L406",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" get_config()\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);