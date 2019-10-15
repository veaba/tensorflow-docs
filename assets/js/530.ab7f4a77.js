(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{718:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Convert a model using TOCO. (deprecated)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" tf.compat.v1.lite.toco_convert(\n    input_data,\n    input_tensors,\n    output_tensors,\n    *args,\n    **kwargs\n)\n")])])]),s("p",[t._v("Typically this function is used to convert from TensorFlow GraphDef to TFLite. Conversion can be customized by providing arguments that are forwarded to build_toco_convert_protos (see documentation for details). This function has been deprecated. Please use lite.TFLiteConverter instead.")]),t._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("input_data")]),t._v(": Input data (i.e. often "),s("code",[t._v("sess.graph_def")]),t._v("),")]),t._v(" "),s("li",[s("code",[t._v("input_tensors")]),t._v(": List of input tensors. Type and shape are computed using "),s("code",[t._v("foo.shape")]),t._v(" and "),s("code",[t._v("foo.dtype")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("output_tensors")]),t._v(": List of output tensors (only .name is used from this).")])]),t._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),s("p",[t._v("The converted data. For example if TFLite was the destination, then this will be a tflite flatbuffer in a bytes array.")]),t._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[t._v("#")]),t._v(" Raises:")]),t._v(" "),s("p",[t._v("Defined in build_toco_convert_protos.")])])}),[],!1,null,null,null);e.default=r.exports}}]);