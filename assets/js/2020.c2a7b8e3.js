(window.webpackJsonp=window.webpackJsonp||[]).push([[2020],{2211:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Transposes last two dimensions of tensor a.")]),t._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliases:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("tf.compat.v1.linalg.matrix_transpose")])]),t._v(" "),e("li",[e("code",[t._v("tf.compat.v1.linalg.transpose")])]),t._v(" "),e("li",[e("code",[t._v("tf.compat.v1.matrix_transpose")])]),t._v(" "),e("li",[e("code",[t._v("tf.compat.v2.linalg.matrix_transpose")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" tf.linalg.matrix_transpose(\n    a,\n    name='matrix_transpose',\n    conjugate=False\n)\n")])])]),e("h4",{attrs:{id:"for-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[t._v("#")]),t._v(" For example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" x = tf.constant([[1, 2, 3], [4, 5, 6]])\ntf.linalg.matrix_transpose(x)  # [[1, 4],\n                               #  [2, 5],\n                               #  [3, 6]]\n\nx = tf.constant([[1 + 1j, 2 + 2j, 3 + 3j],\n                 [4 + 4j, 5 + 5j, 6 + 6j]])\ntf.linalg.matrix_transpose(x, conjugate=True)  # [[1 - 1j, 4 - 4j],\n                                               #  [2 - 2j, 5 - 5j],\n                                               #  [3 - 3j, 6 - 6j]]\n\n# Matrix with two batch dimensions.\n# x.shape is [1, 2, 3, 4]\n# tf.linalg.matrix_transpose(x) is shape [1, 2, 4, 3]\n")])])]),e("p",[e("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/linalg/matmul",target:"_blank",rel:"noopener noreferrer"}},[t._v("tf.matmul"),e("OutboundLink")],1),t._v("Note that  provides kwargs allowing for transpose of arguments. This is done with minimal cost, and is preferable to using this function. E.g.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" # Good!  Transpose is taken at minimal additional cost.\ntf.matmul(matrix, b, transpose_b=True)\n\n# Inefficient!\ntf.matmul(matrix, tf.linalg.matrix_transpose(b))\n")])])]),e("h4",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("a")]),t._v(": A "),e("code",[t._v("Tensor")]),t._v(" with "),e("code",[t._v("rank >= 2")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("name")]),t._v(": A "),e("code",[t._v("name")]),t._v(" for the oper"),e("code",[t._v("a")]),t._v("tion (option"),e("code",[t._v("a")]),t._v("l).")]),t._v(" "),e("li",[e("code",[t._v("conjugate")]),t._v(": Option"),e("code",[t._v("a")]),t._v("l bool. Setting it to "),e("code",[t._v("True")]),t._v(" is m"),e("code",[t._v("a")]),t._v("them"),e("code",[t._v("a")]),t._v("tic"),e("code",[t._v("a")]),t._v("lly equiv"),e("code",[t._v("a")]),t._v("lent to tf.m"),e("code",[t._v("a")]),t._v("th.conj(tf.lin"),e("code",[t._v("a")]),t._v("lg.m"),e("code",[t._v("a")]),t._v("trix_tr"),e("code",[t._v("a")]),t._v("nspose(input)).")])]),t._v(" "),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[t._v("#")]),t._v(" Returns:")]),t._v(" "),e("p",[t._v("A transposed batch matrix Tensor.")]),t._v(" "),e("h4",{attrs:{id:"raises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[t._v("#")]),t._v(" Raises:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ValueError")]),t._v(": If "),e("code",[t._v("a")]),t._v(" is determined st"),e("code",[t._v("a")]),t._v("tic"),e("code",[t._v("a")]),t._v("lly to h"),e("code",[t._v("a")]),t._v("ve "),e("code",[t._v("rank < 2")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"numpy-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#numpy-compatibility","aria-hidden":"true"}},[t._v("#")]),t._v(" Numpy Compatibility")]),t._v(" "),e("p",[t._v("In numpy transposes are memory-efficient constant time operations as they simply return a new view of the same data with adjusted strides.\n"),e("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/linalg/matrix_transpose",target:"_blank",rel:"noopener noreferrer"}},[t._v("linalg.matrix_transpose"),e("OutboundLink")],1),t._v("TensorFlow does not support strides,  returns a new tensor with the items permuted.")])])}),[],!1,null,null,null);a.default=r.exports}}]);