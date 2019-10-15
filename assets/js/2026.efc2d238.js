(window.webpackJsonp=window.webpackJsonp||[]).push([[2026],{2217:function(e,o,t){"use strict";t.r(o);var a=t(0),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Defined in generated file: python/ops/gen_linalg_ops.py")]),e._v(" "),t("p",[e._v("Solves systems of linear equations.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.linalg.solve")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v1.matrix_solve")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.linalg.solve")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.linalg.solve(\n    matrix,\n    rhs,\n    adjoint=False,\n    name=None\n)\n")])])]),t("p",[e._v("Matrix is a tensor of shape [..., M, M] whose inner-most 2 dimensions form square matrices. Rhs is a tensor of shape [..., M, K]. The output is a tensor shape [..., M, K]. If adjoint is False then each output matrix satisfies matrix[..., :, :] * output[..., :, :] = rhs[..., :, :]. If adjoint is True then each output matrix satisfies adjoint(matrix[..., :, :]) * output[..., :, :] = rhs[..., :, :].")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("matrix")]),e._v(":"),t("code"),e._v("A"),t("code",[e._v("``Tensor``.`` ``M")]),e._v("ust"),t("code"),e._v("be"),t("code"),e._v("one"),t("code"),e._v("of"),t("code"),e._v("the"),t("code"),e._v("following"),t("code"),e._v("types:"),t("code",[e._v("``float64``,`` ``float32``,`` ``half``,`` ``complex64``,`` ``complex128``.``")]),e._v("Shape"),t("code"),e._v("is"),t("code"),e._v("["),t("code",[e._v(".``.``.``,`` ``M``,`` ``M")]),e._v("]"),t("code",[e._v(".")])]),e._v(" "),t("li",[t("code",[e._v("rhs")]),e._v(":"),t("code"),e._v("A"),t("code",[e._v("``Tensor``.`` ``M")]),e._v("ust"),t("code"),e._v("have"),t("code"),e._v("the"),t("code"),e._v("same"),t("code"),e._v("type"),t("code"),e._v("as"),t("code",[e._v("``matrix``.``")]),e._v("Shape"),t("code"),e._v("is"),t("code"),e._v("["),t("code",[e._v(".``.``.``,`` ``M``,`` ``K")]),e._v("]"),t("code",[e._v(".")])]),e._v(" "),t("li",[t("code",[e._v("adjoint")]),e._v(":"),t("code"),e._v("An"),t("code"),e._v("optional"),t("code",[e._v("``bool``.``")]),e._v("Defaults"),t("code"),e._v("to"),t("code",[e._v("``False``.``")]),e._v("Boolean"),t("code"),e._v("indicating"),t("code"),e._v("whether"),t("code"),e._v("to"),t("code"),e._v("solve"),t("code"),e._v("with"),t("code",[e._v("``matrix``")]),e._v("or"),t("code"),e._v("its"),t("code"),e._v("(block-wise)"),t("code",[e._v("``adjoint``.")])]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(":"),t("code"),e._v("A"),t("code",[e._v("``name``")]),e._v("for"),t("code"),e._v("the"),t("code"),e._v("operation"),t("code"),e._v("(optional)"),t("code",[e._v(".")])])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A Tensor. Has the same type as matrix.")])])}),[],!1,null,null,null);o.default=s.exports}}]);