(window.webpackJsonp=window.webpackJsonp||[]).push([[2016],{2207:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Defined in generated file: python/ops/gen_linalg_ops.py")]),e._v(" "),a("p",[e._v("Computes the matrix logarithm of one or more square matrices:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.linalg.logm")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.linalg.logm")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.linalg.logm(\n    input,\n    name=None\n)\n")])])]),a("p",[e._v("This op is only defined for complex matrices. If A is positive-definite and real, then casting to a complex matrix, taking the logarithm and casting back to a real matrix will give the correct result.")]),e._v(" "),a("p",[e._v("This function computes the matrix logarithm using the Schur-Parlett algorithm. Details of the algorithm can be found in Section 11.6.2 of: Nicholas J. Higham, Functions of Matrices: Theory and Computation, SIAM 2008. ISBN 978-0-898716-46-7.")]),e._v(" "),a("p",[e._v("The input is a tensor of shape [..., M, M] whose inner-most 2 dimensions form square matrices. The output is a tensor of the same shape as the input containing the exponential for all input submatrices [..., :, :].")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("input")]),e._v(":"),a("code"),e._v("A"),a("code",[e._v("``Tensor``.`` ``M")]),e._v("ust"),a("code"),e._v("be"),a("code"),e._v("one"),a("code"),e._v("of"),a("code"),e._v("the"),a("code"),e._v("following"),a("code"),e._v("types:"),a("code",[e._v("``complex64``,`` ``complex128``.``")]),e._v("Shape"),a("code"),e._v("is"),a("code"),e._v("["),a("code",[e._v(".``.``.``,`` ``M``,`` ``M")]),e._v("]"),a("code",[e._v(".")])]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(":"),a("code"),e._v("A"),a("code",[e._v("``name``")]),e._v("for"),a("code"),e._v("the"),a("code"),e._v("operation"),a("code"),e._v("(optional)"),a("code",[e._v(".")])])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A Tensor. Has the same type as input.")])])}),[],!1,null,null,null);t.default=s.exports}}]);