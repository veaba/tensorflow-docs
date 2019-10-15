(window.webpackJsonp=window.webpackJsonp||[]).push([[2554],{2745:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"class-name-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-name-scope","aria-hidden":"true"}},[e._v("#")]),e._v(" Class name_scope")]),e._v(" "),t("p",[e._v("A context manager for use when defining a Python op.\n"),t("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/backend/name_scope",target:"_blank",rel:"noopener noreferrer"}},[e._v("name_scope"),t("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[e._v("Class "),t("code",[e._v("tf.compat.v2.name_scope")]),e._v("\nThis context manager pushes a name scope, which will make the name of all operations added within it have a prefix.\nFor example, to define a new Python op called "),t("code",[e._v("my_op")]),e._v(":")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' def my_op(a, b, c, name=None):\n  with tf.name_scope("MyOp") as scope:\n    a = tf.convert_to_tensor(a, name="a")\n    b = tf.convert_to_tensor(b, name="b")\n    c = tf.convert_to_tensor(c, name="c")\n    # Define some computation that uses `a`, `b`, and `c`.\n    return foo_op(..., name=scope)\n')])])]),t("p",[e._v("When exe"),t("code",[e._v("c")]),e._v("uted, the Tensors "),t("code",[e._v("a")]),e._v(", "),t("code",[e._v("b")]),e._v(", "),t("code",[e._v("c")]),e._v(", will h"),t("code",[e._v("a")]),e._v("ve n"),t("code",[e._v("a")]),e._v("mes "),t("code",[e._v("MyOp/a")]),e._v(", "),t("code",[e._v("MyOp/b")]),e._v(", "),t("code",[e._v("a")]),e._v("nd "),t("code",[e._v("MyOp/c")]),e._v(".\nIf the scope name already exists, the name will be made unique by appending "),t("code",[e._v("_n")]),e._v(". For example, calling "),t("code",[e._v("my_op")]),e._v(" the second time will generate "),t("code",[e._v("MyOp_1/a")]),e._v(", etc.")]),e._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("init")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6412-L6424",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __init__(name)\n")])])]),t("p",[e._v("Initialize the context manager.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("name")]),e._v(": The prefix to use on all "),t("code",[e._v("name")]),e._v("s created within the "),t("code",[e._v("name")]),e._v(" scope.")])]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": If name is None, or not a string.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),t("h3",{attrs:{id:"enter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("enter")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6430-L6449",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __enter__()\n")])])]),t("p",[e._v("Start the scope block.")]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("The scope name.")]),e._v(" "),t("h4",{attrs:{id:"raises-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": if neither "),t("code",[e._v("name")]),e._v(" nor "),t("code",[e._v("default_name")]),e._v(" is provided but "),t("code",[e._v("values")]),e._v(" are.")])]),e._v(" "),t("h3",{attrs:{id:"exit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exit","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("strong",[e._v("exit")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6451-L6454",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" __exit__(\n    type_arg,\n    value_arg,\n    traceback_arg\n)\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);