(window.webpackJsonp=window.webpackJsonp||[]).push([[1716],{1907:function(t,a,e){"use strict";e.r(a);var r=e(0),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"class-variancescaling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-variancescaling","aria-hidden":"true"}},[t._v("#")]),t._v(" Class VarianceScaling")]),t._v(" "),e("p",[t._v("Initializer capable of adapting its scale to the shape of weights tensors.\n"),e("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/initializers/Initializer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initializer"),e("OutboundLink")],1),t._v("Inherits From:")]),t._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),e("ul",[e("li",[t._v("Class "),e("code",[t._v("tf.compat.v2.initializers.VarianceScaling")])]),t._v(" "),e("li",[t._v("Class "),e("code",[t._v("tf.compat.v2.keras.initializers.VarianceScaling")])]),t._v(" "),e("li",[t._v("Class "),e("code",[t._v("tf.initializers.VarianceScaling")])])]),t._v(" "),e("p",[t._v('With distribution="truncated_normal" or "untruncated_normal", samples are drawn from a truncated/untruncated normal distribution with a mean of zero and a standard deviation (after truncation, if used) stddev = sqrt(scale / n) where n is: - number of input units in the weight tensor, if mode = "fan_in" - number of output units, if mode = "fan_out" - average of the numbers of input and output units, if mode = "fan_avg"')]),t._v(" "),e("p",[t._v('With distribution="uniform", samples are drawn from a uniform distribution within [-limit, limit], with limit = sqrt(3 * scale / n).')]),t._v(" "),e("h4",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("scale")]),t._v(": Scaling factor (positive float).")]),t._v(" "),e("li",[e("code",[t._v("mode")]),t._v(': One of "fan_in", "fan_out", "fan_avg".')]),t._v(" "),e("li",[e("code",[t._v("distribution")]),t._v(": Random "),e("code",[t._v("distribution")]),t._v(' to use. One of "truncated_normal", "untruncated_normal" and "uniform".')]),t._v(" "),e("li",[e("code",[t._v("seed")]),t._v(": A Python integer. Used to create random "),e("code",[t._v("seed")]),t._v("s. See "),e("code",[t._v("tf.compat.v1.set_random_seed")]),t._v(" for behavior.")])]),t._v(" "),e("h4",{attrs:{id:"raises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[t._v("#")]),t._v(" Raises:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ValueError")]),t._v(': In case of an invalid value for the "scale", mode" or "distribution" arguments.')])]),t._v(" "),e("h2",{attrs:{id:"init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("init")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L382-L402",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" __init__(\n    scale=1.0,\n    mode='fan_in',\n    distribution='truncated_normal',\n    seed=None\n)\n")])])]),e("p",[t._v("Initialize self. See help(type(self)) for accurate signature.")]),t._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("h3",{attrs:{id:"call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("call")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L404-L437",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" __call__(\n    shape,\n    dtype=tf.dtypes.float32\n)\n")])])]),e("p",[t._v("Returns a tensor object initialized as specified by the initializer.")]),t._v(" "),e("h4",{attrs:{id:"args-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("shape")]),t._v(": Shape of the tensor.")]),t._v(" "),e("li",[e("code",[t._v("dtype")]),t._v(": Optional "),e("code",[t._v("dtype")]),t._v(" of the tensor. Only floating point types are supported.")])]),t._v(" "),e("h4",{attrs:{id:"raises-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raises-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Raises:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ValueError")]),t._v(": If the dtype is not floating point")])]),t._v(" "),e("h3",{attrs:{id:"from-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[t._v("#")]),t._v(" from_config")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" from_config(\n    cls,\n    config\n)\n")])])]),e("p",[t._v("Instantiates an initializer from a configuration dictionary.")]),t._v(" "),e("h4",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" initializer = RandomUniform(-1, 1)\nconfig = initializer.get_config()\ninitializer = RandomUniform.from_config(config)\n")])])]),e("h4",{attrs:{id:"args-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("config")]),t._v(": A Python dictionary. It will typically be the output of "),e("code",[t._v("get_config")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),e("p",[t._v("An Initializer instance.")]),t._v(" "),e("h3",{attrs:{id:"get-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[t._v("#")]),t._v(" get_config")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L439-L445",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" get_config()\n")])])]),e("p",[t._v("Returns the configuration of the initializer as a JSON-serializable dict.")]),t._v(" "),e("h4",{attrs:{id:"returns-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),e("p",[t._v("A JSON-serializable Python dict.")])])}),[],!1,null,null,null);a.default=i.exports}}]);