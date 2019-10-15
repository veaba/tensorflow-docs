(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{682:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-flatten"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-flatten","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Flatten")]),e._v(" "),a("p",[e._v("Flattens an input tensor while preserving the batch axis (axis 0).\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/layers/Flatten",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flatten"),a("OutboundLink")],1),e._v("Inherits From: , Layer")]),e._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("data_format")]),e._v(": A string, one of "),a("code",[e._v("channels_last")]),e._v(" (default) or "),a("code",[e._v("channels_first")]),e._v(". The ordering of the dimensions in the inputs. "),a("code",[e._v("channels_last")]),e._v(" corresponds to inputs with shape ("),a("code",[e._v("batch, ..., channels")]),e._v(") while "),a("code",[e._v("channels_first")]),e._v(" corresponds to inputs with shape ("),a("code",[e._v("batch, channels, ...")]),e._v(").")])]),e._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   x = tf.compat.v1.placeholder(shape=(None, 4, 4), dtype='float32')\n  y = Flatten()(x)\n  # now `y` has shape `(None, 16)`\n\n  x = tf.compat.v1.placeholder(shape=(None, 3, None), dtype='float32')\n  y = Flatten()(x)\n  # now `y` has shape `(None, None)`\n")])])]),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L569-L572",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    data_format=None,\n    **kwargs\n)\n")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph","aria-hidden":"true"}},[e._v("#")]),e._v(" graph")]),e._v(" "),a("p",[e._v("DEPRECATED FUNCTION")]),e._v(" "),a("h3",{attrs:{id:"scope-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope-name","aria-hidden":"true"}},[e._v("#")]),e._v(" scope_name")])])}),[],!1,null,null,null);t.default=s.exports}}]);