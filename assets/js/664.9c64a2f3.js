(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{852:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"class-rnncell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-rnncell","aria-hidden":"true"}},[t._v("#")]),t._v(" Class RNNCell")]),t._v(" "),s("p",[t._v("Abstract object representing an RNN cell.\n"),s("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/layers/Layer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Layer"),s("OutboundLink")],1),t._v("Inherits From:")]),t._v(" "),s("p",[t._v("Every RNNCell must have the properties below and implement call with the signature (output, next_state) = call(input, state). The optional third input argument, scope, is allowed for backwards compatibility purposes; but should be left off for new subclasses.")]),t._v(" "),s("p",[t._v("This definition of cell differs from the definition used in the literature. In the literature, 'cell' refers to an object with a single scalar output. This definition refers to a horizontal array of such units.")]),t._v(" "),s("p",[t._v("An RNN cell, in the most abstract setting, is anything that has a state and performs some operation that takes a matrix of inputs. This operation results in an output matrix with self.output_size columns. If self.state_size is an integer, this operation also results in a new state matrix with self.state_size columns. If self.state_size is a (possibly nested tuple of) TensorShape object(s), then it should return a matching structure of Tensors having shape [batch_size].concatenate(s) for each s in self.batch_size.")]),t._v(" "),s("h2",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[t._v("init")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L205-L212",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" __init__(\n    trainable=True,\n    name=None,\n    dtype=None,\n    **kwargs\n)\n")])])]),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"graph"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graph","aria-hidden":"true"}},[t._v("#")]),t._v(" graph")]),t._v(" "),s("p",[t._v("DEPRECATED FUNCTION")]),t._v(" "),s("h3",{attrs:{id:"output-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-size","aria-hidden":"true"}},[t._v("#")]),t._v(" output_size")]),t._v(" "),s("p",[t._v("Integer or TensorShape: size of outputs produced by this cell.")]),t._v(" "),s("h3",{attrs:{id:"scope-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope-name","aria-hidden":"true"}},[t._v("#")]),t._v(" scope_name")]),t._v(" "),s("h3",{attrs:{id:"state-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-size","aria-hidden":"true"}},[t._v("#")]),t._v(" state_size")]),t._v(" "),s("p",[t._v("size(s) of state(s) used by this cell.")]),t._v(" "),s("p",[t._v("It can be represented by an Integer, a TensorShape or a tuple of Integers or TensorShapes.")]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("h3",{attrs:{id:"get-initial-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-initial-state","aria-hidden":"true"}},[t._v("#")]),t._v(" get_initial_state")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" get_initial_state(\n    inputs=None,\n    batch_size=None,\n    dtype=None\n)\n")])])]),s("h3",{attrs:{id:"zero-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zero-state","aria-hidden":"true"}},[t._v("#")]),t._v(" zero_state")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L311-L340",target:"_blank",rel:"noopener noreferrer"}},[t._v("View source"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" zero_state(\n    batch_size,\n    dtype\n)\n")])])]),s("p",[t._v("Return zero-filled state tensor(s).")]),t._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("batch_size")]),t._v(": int, float, or unit Tensor representing the batch size.")]),t._v(" "),s("li",[s("code",[t._v("dtype")]),t._v(": the data type to use for the state.")])]),t._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),s("p",[t._v("If state_size is an int or TensorShape, then the return value is a N-D tensor of shape [batch_size, state_size] filled with zeros.")]),t._v(" "),s("p",[t._v("If state_size is a nested list or tuple, then the return value is a nested list or tuple (of the same structure) of 2-D tensors with the shapes [batch_size, s] for each s in state_size.")])])}),[],!1,null,null,null);e.default=r.exports}}]);