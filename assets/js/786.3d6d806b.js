(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{974:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Inserts a placeholder for a sparse tensor that will be always fed.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.sparse.placeholder")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.compat.v1.sparse_placeholder(\n    dtype,\n    shape=None,\n    name=None\n)\n")])])]),s("p",[e._v("Important: This sparse tensor will produce an error if evaluated. Its value must be fed using the feed_dict optional argument to Session.run(), Tensor.eval(), or Operation.run().")]),e._v(" "),s("h4",{attrs:{id:"for-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" x = tf.compat.v1.sparse.placeholder(tf.float32)\ny = tf.sparse.reduce_sum(x)\n\nwith tf.compat.v1.Session() as sess:\n  print(sess.run(y))  # ERROR: will fail because x was not fed.\n\n  indices = np.array([[3, 2, 0], [4, 5, 1]], dtype=np.int64)\n  values = np.array([1.0, 2.0], dtype=np.float32)\n  shape = np.array([7, 9, 2], dtype=np.int64)\n  print(sess.run(y, feed_dict={\n    x: tf.compat.v1.SparseTensorValue(indices, values, shape)}))  # Will\n    succeed.\n  print(sess.run(y, feed_dict={\n    x: (indices, values, shape)}))  # Will succeed.\n\n  sp = tf.SparseTensor(indices=indices, values=values, dense_shape=shape)\n  sp_value = sp.eval(session=sess)\n  print(sess.run(y, feed_dict={x: sp_value}))  # Will succeed.\n")])])]),s("p",[e._v("@compatibility{eager} Placeholders are not compatible with eager execution.")]),e._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("dtype")]),e._v(": The type of "),s("code",[e._v("values")]),e._v(" elements in the tensor to be fed.")]),e._v(" "),s("li",[s("code",[e._v("shape")]),e._v(": The "),s("code",[e._v("shape")]),e._v(" of the tensor to be fed (optional). If the "),s("code",[e._v("shape")]),e._v(" is not specified, you can feed a sparse tensor of any "),s("code",[e._v("shape")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(": A "),s("code",[e._v("name")]),e._v(" for prefixing the operations (optional).")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A SparseTensor that may be used as a handle for feeding a value, but not evaluated directly.")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("RuntimeError")]),e._v(": if eager execution is enabled")])])])}),[],!1,null,null,null);a.default=r.exports}}]);