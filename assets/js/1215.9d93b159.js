(window.webpackJsonp=window.webpackJsonp||[]).push([[1215],{1404:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"class-invalidargumenterror"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-invalidargumenterror","aria-hidden":"true"}},[e._v("#")]),e._v(" Class InvalidArgumentError")]),e._v(" "),t("p",[e._v("Raised when an operation receives an invalid argument.\n"),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/OpError",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpError"),t("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[e._v("Class "),t("code",[e._v("tf.compat.v1.errors.InvalidArgumentError")])]),e._v(" "),t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.errors.InvalidArgumentError")]),e._v(" "),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/linalg/matmul",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.matmul"),t("OutboundLink")],1),e._v("This may occur, for example, if an operation is receives an input tensor that has an invalid value or shape. For example, the  op will raise this error if it receives an input that is not a matrix, and the tf.reshape op will raise this error if the new shape does not match the number of elements in the input tensor.")])]),e._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("init")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L266-L269",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __init__(\n    node_def,\n    op,\n    message\n)\n")])])]),t("p",[e._v("Creates an InvalidArgumentError.")]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("h3",{attrs:{id:"error-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-code","aria-hidden":"true"}},[e._v("#")]),e._v(" error_code")]),e._v(" "),t("p",[e._v("The integer error code that describes the error.")]),e._v(" "),t("h3",{attrs:{id:"message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message","aria-hidden":"true"}},[e._v("#")]),e._v(" message")]),e._v(" "),t("p",[e._v("The error message that describes the error.")]),e._v(" "),t("h3",{attrs:{id:"node-def"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-def","aria-hidden":"true"}},[e._v("#")]),e._v(" node_def")]),e._v(" "),t("p",[e._v("The NodeDef proto representing the op that failed.")]),e._v(" "),t("h3",{attrs:{id:"op"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#op","aria-hidden":"true"}},[e._v("#")]),e._v(" op")]),e._v(" "),t("p",[e._v("The operation that failed, if known.\n"),t("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/Operation",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Operation"),t("OutboundLink")],1),e._v("N.B. If the failed op was synthesized at runtime, e.g. a Send or Recv op, there will be no corresponding  object. In that case, this will return None, and you should instead use the tf.errors.OpError.node_def to discover information about the op.")]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("The Operation that failed, or None.")])])}),[],!1,null,null,null);r.default=s.exports}}]);