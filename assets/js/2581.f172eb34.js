(window.webpackJsonp=window.webpackJsonp||[]).push([[2581],{2772:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("scan on the list of tensors unpacked from "),s("code",[e._v("elems")]),e._v(" on dimension 0.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.scan")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.scan")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.scan(\n    fn,\n    elems,\n    initializer=None,\n    parallel_iterations=10,\n    back_prop=True,\n    swap_memory=False,\n    infer_shape=True,\n    reverse=False,\n    name=None\n)\n")])])]),s("p",[e._v("The simplest version of "),s("code",[e._v("scan")]),e._v(" repeatedly applies the callable "),s("code",[e._v("fn")]),e._v(" to a sequence of elements from first to last. The elements are made of the tensors unpacked from "),s("code",[e._v("elems")]),e._v(" on dimension 0. The callable "),s("code",[e._v("fn")]),e._v(" takes two tensors as arguments. The first argument is the accumulated value computed from the preceding invocation of "),s("code",[e._v("fn")]),e._v(", and the second is the value at the current position of "),s("code",[e._v("elems")]),e._v(". If "),s("code",[e._v("initializer")]),e._v(" is None, "),s("code",[e._v("elems")]),e._v(" must contain at least one element, and its first element is used as the "),s("code",[e._v("initializer")]),e._v(".\nSuppose that "),s("code",[e._v("elems")]),e._v(" is unpacked into "),s("code",[e._v("values")]),e._v(", a list of tensors. The shape of the result tensor is [len("),s("code",[e._v("values")]),e._v(")] + fn(initializer, "),s("code",[e._v("values")]),e._v("[0]).shape. If reverse=True, it's fn(initializer, "),s("code",[e._v("values")]),e._v("[-1]).shape.\nThis method also allows multi-arity "),s("code",[e._v("elems")]),e._v(" and accumulator. If "),s("code",[e._v("elems")]),e._v(" is a (possibly nested) list or tuple of tensors, then each of these tensors must have a matching first (unpack) dimension. The second argument of "),s("code",[e._v("fn")]),e._v(" must match the structure of "),s("code",[e._v("elems")]),e._v(".\nIf no "),s("code",[e._v("initializer")]),e._v(" is provided, the output structure and dtypes of "),s("code",[e._v("fn")]),e._v(" are assumed to be the same as its input; and in this case, the first argument of "),s("code",[e._v("fn")]),e._v(" must match the structure of "),s("code",[e._v("elems")]),e._v(".\nIf an "),s("code",[e._v("initializer")]),e._v(" is provided, then the output of "),s("code",[e._v("fn")]),e._v(" must have the same structure as "),s("code",[e._v("initializer")]),e._v("; and the first argument of "),s("code",[e._v("fn")]),e._v(" must match this structure.\nFor ex"),s("code",[e._v("mple, if `elems` is (`t1, [t2, t3]t1, [t2, t3]`)")]),e._v("nd "),s("code",[e._v("initializer")]),e._v(" is "),s("code",[e._v("[i1, i2]")]),e._v(" "),s("code",[e._v("hen")]),e._v("n "),s("code",[e._v("ppropri````e sign````ure for `fn` in `python2` is: `fn` = l")]),e._v("mbd"),s("code",[e._v("(")]),e._v("cc_p1, "),s("code",[e._v("cc_p2), (`t1, [t2, t3]t1, [t2, t3]`):")]),e._v("nd "),s("code",[e._v("fn")]),e._v(" mus"),s("code",[e._v("re")]),e._v("urn "),s("code",[e._v("lis")]),e._v(", "),s("code",[e._v("[acc_n1, acc_n2]")]),e._v(". An "),s("code",[e._v("l")]),e._v("ern"),s("code",[e._v("ive correc`` sign")]),e._v("ure for "),s("code",[e._v("fn")]),e._v(", "),s("code",[e._v("nd")]),e._v("he one "),s("code",[e._v("h```` works in `python3`, is: `fn` = l")]),e._v("mbd"),s("code"),e._v(", "),s("code",[e._v(":, where")]),e._v(" "),s("code",[e._v("nd")]),e._v(" correspond "),s("code",[e._v("o")]),e._v("he inpu"),s("code"),e._v("uples.")]),e._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("fn")]),e._v(": The callable to be performed. It accepts two arguments. The first will have the same structure as "),s("code",[e._v("initializer")]),e._v(" if one is provided, otherwise it will have the same structure as "),s("code",[e._v("elems")]),e._v(". The second will have the same (possibly nested) structure as "),s("code",[e._v("elems")]),e._v(". Its output must have the same structure as "),s("code",[e._v("initializer")]),e._v(" if one is provided, otherwise it must have the same structure as "),s("code",[e._v("elems")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("elems")]),e._v(": A tensor or (possibly nested) sequence of tensors, each of which will be unpacked along their first dimension. The nested sequence of the resulting slices will be the first argument to "),s("code",[e._v("fn")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("initializer")]),e._v(": (optional) A tensor or (possibly nested) sequence of tensors, initial value for the accumulator, and the expected output type of "),s("code",[e._v("fn")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("parallel_iterations")]),e._v(": (optional) The number of iterations allowed to run in parallel.")]),e._v(" "),s("li",[s("code",[e._v("back_prop")]),e._v(": (optional) True enables support for back propagation.")]),e._v(" "),s("li",[s("code",[e._v("swap_memory")]),e._v(": (optional) True enables GPU-CPU memory swapping.")]),e._v(" "),s("li",[s("code",[e._v("infer_shape")]),e._v(": (optional) False disables tests for consistent output shapes.")]),e._v(" "),s("li",[s("code",[e._v("reverse")]),e._v(": (optional) True scans the tensor last to first (instead of first to last).")]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(": (optional) Name prefix for the returned tensors.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A tensor or (possibly nested) sequence of tensors. Each tensor packs the results of applying "),s("code",[e._v("fn")]),e._v(" to tensors unpacked from "),s("code",[e._v("elems")]),e._v(" along the first dimension, and the previous accumulator value(s), from first to last (or last to first, if "),s("code",[e._v("reverse=True")]),e._v(").")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("TypeError")]),e._v(": if "),s("code",[e._v("fn")]),e._v(" is not callable or the structure of the output of "),s("code",[e._v("fn")]),e._v(" and "),s("code",[e._v("initializer")]),e._v(" do not match.")]),e._v(" "),s("li",[s("code",[e._v("ValueError")]),e._v(": if the lengths of the output of "),s("code",[e._v("fn")]),e._v(" and "),s("code",[e._v("initializer")]),e._v(" do not match.")])]),e._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" elems = np.array([1, 2, 3, 4, 5, 6])\nsum = scan(lambda a, x: a + x, elems)\n# sum == [1, 3, 6, 10, 15, 21]\nsum = scan(lambda a, x: a + x, elems, reverse=True)\n# sum == [21, 20, 18, 15, 11, 6]\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" elems = np.array([1, 2, 3, 4, 5, 6])\ninitializer = np.array(0)\nsum_one = scan(\n    lambda a, x: x[0] - x[1] + a, (elems + 1, elems), initializer)\n# sum_one == [1, 2, 3, 4, 5, 6]\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" elems = np.array([1, 0, 0, 0, 0, 0])\ninitializer = (np.array(0), np.array(1))\nfibonaccis = scan(lambda a, _: (a[1], a[0] + a[1]), elems, initializer)\n# fibonaccis == ([1, 1, 2, 3, 5, 8], [1, 2, 3, 5, 8, 13])\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);