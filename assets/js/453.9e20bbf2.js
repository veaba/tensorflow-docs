(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{642:function(t,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"class-glorot-normal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-glorot-normal","aria-hidden":"true"}},[t._v("#")]),t._v(" Class glorot_normal")]),t._v(" "),a("p",[t._v("The Glorot normal initializer, also called Xavier normal initializer.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/initializers/VarianceScaling",target:"_blank",rel:"noopener noreferrer"}},[t._v("VarianceScaling"),a("OutboundLink")],1),t._v("Inherits From:")]),t._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),a("ul",[a("li",[t._v("Class "),a("code",[t._v("tf.compat.v1.glorot_normal_initializer")])]),t._v(" "),a("li",[t._v("Class "),a("code",[t._v("tf.compat.v1.initializers.glorot_normal")])])]),t._v(" "),a("p",[t._v("It draws samples from a truncated normal distribution centered on 0 with standard deviation (after truncation) given by stddev = sqrt(2 / (fan_in + fan_out)) where fan_in is the number of input units in the weight tensor and fan_out is the number of output units in the weight tensor.")]),t._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("seed")]),t._v(": A Python integer. Used to create random "),a("code",[t._v("seed")]),t._v("s. See "),a("code",[t._v("tf.compat.v1.set_random_seed")]),t._v(" for behavior.")]),t._v(" "),a("li",[a("code",[t._v("dtype")]),t._v(": Default data type, used if no "),a("code",[t._v("dtype")]),t._v(" argument is provided when calling the initializer. Only floating point types are supported.")])]),t._v(" "),a("h4",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[t._v("#")]),t._v(" References:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://proceedings.mlr.press/v9/glorot10a.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Glorot et al., 2010"),a("OutboundLink")],1),t._v(" (pdf)")]),t._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("strong",[t._v("init")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1275-L1280",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" __init__(\n    seed=None,\n    dtype=tf.dtypes.float32\n)\n")])])]),a("p",[t._v("DEPRECATED FUNCTION ARGUMENTS")]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("h3",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("strong",[t._v("call")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L508-L533",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" __call__(\n    shape,\n    dtype=None,\n    partition_info=None\n)\n")])])]),a("p",[t._v("Returns a tensor object initialized as specified by the initializer.")]),t._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("shape")]),t._v(": Shape of the tensor.")]),t._v(" "),a("li",[a("code",[t._v("dtype")]),t._v(": Optional "),a("code",[t._v("dtype")]),t._v(" of the tensor. If not provided use the initializer "),a("code",[t._v("dtype")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("partition_info")]),t._v(": Optional information about the possible partitioning of a tensor.")])]),t._v(" "),a("h3",{attrs:{id:"from-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-config","aria-hidden":"true"}},[t._v("#")]),t._v(" from_config")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L78-L97",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" from_config(\n    cls,\n    config\n)\n")])])]),a("p",[t._v("Instantiates an initializer from a configuration dictionary.")]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" initializer = RandomUniform(-1, 1)\nconfig = initializer.get_config()\ninitializer = RandomUniform.from_config(config)\n")])])]),a("h4",{attrs:{id:"args-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("config")]),t._v(": A Python dictionary. It will typically be the output of "),a("code",[t._v("get_config")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),a("p",[t._v("An Initializer instance.")]),t._v(" "),a("h3",{attrs:{id:"get-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[t._v("#")]),t._v(" get_config")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1282-L1283",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" get_config()\n")])])]),a("p",[t._v("Returns the configuration of the initializer as a JSON-serializable dict.")]),t._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),a("p",[t._v("A JSON-serializable Python dict.")])])}),[],!1,null,null,null);e.default=n.exports}}]);