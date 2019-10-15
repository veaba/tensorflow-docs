(window.webpackJsonp=window.webpackJsonp||[]).push([[1621],{1812:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("Returns the symbolic shape of a tensor or variable.")]),a._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("tf.compat.v1.keras.backend.shape")])]),a._v(" "),s("li",[s("code",[a._v("tf.compat.v2.keras.backend.shape")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" tf.keras.backend.shape(x)\n")])])]),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[a._v("#")]),a._v(" Arguments:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("x")]),a._v(": A tensor or variable.")])]),a._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[a._v("#")]),a._v(" Returns:")]),a._v(" "),s("p",[a._v("A symbolic shape (which is itself a tensor).")]),a._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[a._v("#")]),a._v(" Examples:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("     # TensorFlow example\n    >>> from keras import backend as K\n    >>> tf_session = K.get_session()\n    >>> val = np.array([[1, 2], [3, 4]])\n    >>> kvar = K.variable(value=val)\n    >>> input = keras.backend.placeholder(shape=(2, 4, 5))\n    >>> K.shape(kvar)\n    <tf.Tensor 'Shape_8:0' shape=(2,) dtype=int32>\n    >>> K.shape(input)\n    <tf.Tensor 'Shape_9:0' shape=(3,) dtype=int32>\n    # To get integer shape (Instead, you can use K.int_shape(x))\n    >>> K.shape(kvar).eval(session=tf_session)\n    array([2, 2], dtype=int32)\n    >>> K.shape(input).eval(session=tf_session)\n    array([2, 4, 5], dtype=int32)\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);