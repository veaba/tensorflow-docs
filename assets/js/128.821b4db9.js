(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{316:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Converts a Python entity into a TensorFlow graph.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" tf.compat.v1.autograph.to_graph(\n    entity,\n    recursive=True,\n    arg_values=None,\n    arg_types=None,\n    experimental_optional_features=None\n)\n")])])]),n("p",[n("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/autograph/to_code",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.autograph.to_code"),n("OutboundLink")],1),e._v("Also see: , tf.function.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/function",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.function"),n("OutboundLink")],1),e._v("Unlike , to_graph is a low-level transpiler that converts Python code to TensorFlow graph code. It does not implement any caching, variable management or create any actual ops, and is best used where greater control over the generated TensorFlow graph is desired. Another difference from  is that to_graph will not wrap the graph into a TensorFlow function or a Python callable. Internally,  uses to_graph.")]),e._v(" "),n("p",[e._v("Example Usage")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   def foo(x):\n    if x > 0:\n      y = x * x\n    else:\n      y = -x\n    return y\n\n  converted_foo = to_graph(foo)\n\n  x = tf.constant(1)\n  y = converted_foo(x)  # converted_foo is a TensorFlow Op-like.\n  assert is_tensor(y)\n")])])]),n("p",[e._v("Supported Python entities include: * functions * classes * object methods")]),e._v(" "),n("p",[e._v("Functions are converted into new functions with converted code.")]),e._v(" "),n("p",[e._v("Classes are converted by generating a new class whose methods use converted code.")]),e._v(" "),n("p",[e._v("Methods are converted into unbound function that have an additional first argument called self.")]),e._v(" "),n("h4",{attrs:{id:"args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("entity")]),e._v(": Python callable or class to convert.")]),e._v(" "),n("li",[n("code",[e._v("recursive")]),e._v(": Whether to "),n("code",[e._v("recursive")]),e._v("ly convert any functions that the converted function may call.")]),e._v(" "),n("li",[n("code",[e._v("arg_values")]),e._v(": Deprecated.")]),e._v(" "),n("li",[n("code",[e._v("arg_types")]),e._v(": Deprecated.")]),e._v(" "),n("li",[n("code",[e._v("experimental_optional_features")]),e._v(": "),n("code",[e._v("None")]),e._v(", a tuple of, or a single "),n("code",[e._v("tf.autograph.experimental.Feature")]),e._v(" value. Controls the use of optional features in the conversion process.")])]),e._v(" "),n("h4",{attrs:{id:"returns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),n("p",[e._v("Same as entity, the converted Python function or class.")]),e._v(" "),n("h4",{attrs:{id:"raises"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("ValueError")]),e._v(": If the entity could not be converted.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);