(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{762:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Math Operations.")]),e._v(" "),r("p",[e._v("TensorFlow provides a variety of math functions including:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("B")]),e._v("a"),r("code",[e._v("s")]),e._v("i"),r("code",[e._v("c")]),e._v(" "),r("code",[e._v("a")]),e._v("r"),r("code",[e._v("i")]),e._v("t"),r("code",[e._v("h")]),e._v("m"),r("code",[e._v("e")]),e._v("t"),r("code",[e._v("i")]),e._v("c"),r("code"),e._v("o"),r("code",[e._v("p")]),e._v("e"),r("code",[e._v("r")]),e._v("a"),r("code",[e._v("t")]),e._v("o"),r("code",[e._v("r")]),e._v("s"),r("code"),e._v("a"),r("code",[e._v("n")]),e._v("d"),r("code"),e._v("t"),r("code",[e._v("r")]),e._v("i"),r("code",[e._v("g")]),e._v("o"),r("code",[e._v("n")]),e._v("o"),r("code",[e._v("m")]),e._v("e"),r("code",[e._v("t")]),e._v("r"),r("code",[e._v("i")]),e._v("c"),r("code"),e._v("f"),r("code",[e._v("u")]),e._v("n"),r("code",[e._v("c")]),e._v("t"),r("code",[e._v("i")]),e._v("o"),r("code",[e._v("n")]),e._v("s"),r("code",[e._v(".")])]),e._v(" "),r("li",[e._v("Special math functions (like: "),r("code",[e._v("tf.math.igamma")]),e._v(" and "),r("code",[e._v("tf.math.zeta")]),e._v(")")]),e._v(" "),r("li",[e._v("Complex number functions (like: "),r("code",[e._v("tf.math.imag")]),e._v(" and "),r("code",[e._v("tf.math.angle")]),e._v(")")]),e._v(" "),r("li",[e._v("Reductions and scans (like: "),r("code",[e._v("tf.math.reduce_mean")]),e._v(" and "),r("code",[e._v("tf.math.cumsum")]),e._v(")")]),e._v(" "),r("li",[e._v("Segment functions (like: "),r("code",[e._v("tf.math.segment_sum")]),e._v(")\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/linalg",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.linalg"),r("OutboundLink")],1),e._v("See:  for matrix and tensor functions.")])]),e._v(" "),r("h2",{attrs:{id:"about-segmentation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about-segmentation","aria-hidden":"true"}},[e._v("#")]),e._v(" About Segmentation")]),e._v(" "),r("p",[e._v("TensorFlow provides several operations that you can use to perform common math computations on tensor segments. Here a segmentation is a partitioning of a tensor along the first dimension, i.e. it defines a mapping from the first dimension onto segment_ids. The segment_ids tensor should be the size of the first dimension, d0, with consecutive IDs in the range 0 to k, where k<d0. In particular, a segmentation of a matrix tensor is a mapping of rows to segments.")]),e._v(" "),r("h4",{attrs:{id:"for-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])\ntf.math.segment_sum(c, tf.constant([0, 0, 1]))\n#  ==>  [[0 0 0 0]\n#        [5 6 7 8]]\n")])])]),r("p",[e._v("The standard segment_* functions assert that the segment indices are sorted. If you have unsorted indices use the equivalent unsorted_segment_ function. Thses functions take an additional argument num_segments so that the output tensor can be efficiently allocated.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])\ntf.math.unsorted_segment_sum(c, tf.constant([0, 1, 0]), num_segments=2)\n# ==> [[ 6,  8, 10, 12],\n#       [-1, -2, -3, -4]]\n")])])]),r("h2",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/abs",target:"_blank",rel:"noopener noreferrer"}},[e._v("abs(...)"),r("OutboundLink")],1),e._v(": Computes the absolute value of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/accumulate_n",target:"_blank",rel:"noopener noreferrer"}},[e._v("accumulate_n(...)"),r("OutboundLink")],1),e._v(": Returns the element-wise sum of a list of tensors.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/acos",target:"_blank",rel:"noopener noreferrer"}},[e._v("acos(...)"),r("OutboundLink")],1),e._v(": Computes acos of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/acosh",target:"_blank",rel:"noopener noreferrer"}},[e._v("acosh(...)"),r("OutboundLink")],1),e._v(": Computes inverse hyperbolic cosine of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/add",target:"_blank",rel:"noopener noreferrer"}},[e._v("add(...)"),r("OutboundLink")],1),e._v(": Returns x + y element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/add_n",target:"_blank",rel:"noopener noreferrer"}},[e._v("add_n(...)"),r("OutboundLink")],1),e._v(": Adds all input tensors element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/angle",target:"_blank",rel:"noopener noreferrer"}},[e._v("angle(...)"),r("OutboundLink")],1),e._v(": Returns the element-wise argument of a complex (or real) tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/argmax",target:"_blank",rel:"noopener noreferrer"}},[e._v("argmax(...)"),r("OutboundLink")],1),e._v(": Returns the index with the largest value across axes of a tensor. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/argmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("argmin(...)"),r("OutboundLink")],1),e._v(": Returns the index with the smallest value across axes of a tensor. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/asin",target:"_blank",rel:"noopener noreferrer"}},[e._v("asin(...)"),r("OutboundLink")],1),e._v(": Computes the trignometric inverse sine of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/asinh",target:"_blank",rel:"noopener noreferrer"}},[e._v("asinh(...)"),r("OutboundLink")],1),e._v(": Computes inverse hyperbolic sine of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/atan",target:"_blank",rel:"noopener noreferrer"}},[e._v("atan(...)"),r("OutboundLink")],1),e._v(": Computes the trignometric inverse tangent of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/atan2",target:"_blank",rel:"noopener noreferrer"}},[e._v("atan2(...)"),r("OutboundLink")],1),e._v(": Computes arctangent of y/x element-wise, respecting signs of the arguments.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/atanh",target:"_blank",rel:"noopener noreferrer"}},[e._v("atanh(...)"),r("OutboundLink")],1),e._v(": Computes inverse hyperbolic tangent of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/bessel_i0",target:"_blank",rel:"noopener noreferrer"}},[e._v("bessel_i0(...)"),r("OutboundLink")],1),e._v(": Computes the Bessel i0 function of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/bessel_i0e",target:"_blank",rel:"noopener noreferrer"}},[e._v("bessel_i0e(...)"),r("OutboundLink")],1),e._v(": Computes the Bessel i0e function of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/bessel_i1",target:"_blank",rel:"noopener noreferrer"}},[e._v("bessel_i1(...)"),r("OutboundLink")],1),e._v(": Computes the Bessel i1 function of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/bessel_i1e",target:"_blank",rel:"noopener noreferrer"}},[e._v("bessel_i1e(...)"),r("OutboundLink")],1),e._v(": Computes the Bessel i1e function of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/betainc",target:"_blank",rel:"noopener noreferrer"}},[e._v("betainc(...)"),r("OutboundLink")],1),e._v(": Compute the regularized incomplete beta integral\n.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/bincount",target:"_blank",rel:"noopener noreferrer"}},[e._v("bincount(...)"),r("OutboundLink")],1),e._v(": Counts the number of occurrences of each value in an integer array.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/ceil",target:"_blank",rel:"noopener noreferrer"}},[e._v("ceil(...)"),r("OutboundLink")],1),e._v(": Returns element-wise smallest integer not less than x.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/confusion_matrix",target:"_blank",rel:"noopener noreferrer"}},[e._v("confusion_matrix(...)"),r("OutboundLink")],1),e._v(": Computes the confusion matrix from predictions and labels.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/conj",target:"_blank",rel:"noopener noreferrer"}},[e._v("conj(...)"),r("OutboundLink")],1),e._v(": Returns the complex conjugate of a complex number.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/cos",target:"_blank",rel:"noopener noreferrer"}},[e._v("cos(...)"),r("OutboundLink")],1),e._v(": Computes cos of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/cosh",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosh(...)"),r("OutboundLink")],1),e._v(": Computes hyperbolic cosine of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/count_nonzero",target:"_blank",rel:"noopener noreferrer"}},[e._v("count_nonzero(...)"),r("OutboundLink")],1),e._v(": Computes number of nonzero elements across dimensions of a tensor. (deprecated arguments) (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/cumprod",target:"_blank",rel:"noopener noreferrer"}},[e._v("cumprod(...)"),r("OutboundLink")],1),e._v(": Compute the cumulative product of the tensor x along axis.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/cumsum",target:"_blank",rel:"noopener noreferrer"}},[e._v("cumsum(...)"),r("OutboundLink")],1),e._v(": Compute the cumulative sum of the tensor x along axis.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/cumulative_logsumexp",target:"_blank",rel:"noopener noreferrer"}},[e._v("cumulative_logsumexp(...)"),r("OutboundLink")],1),e._v(": Compute the cumulative log-sum-exp of the tensor x along axis.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/digamma",target:"_blank",rel:"noopener noreferrer"}},[e._v("digamma(...)"),r("OutboundLink")],1),e._v(": Computes Psi, the derivative of Lgamma (the log of the absolute value of")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/divide",target:"_blank",rel:"noopener noreferrer"}},[e._v("divide(...)"),r("OutboundLink")],1),e._v(": Computes Python style division of x by y.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/divide_no_nan",target:"_blank",rel:"noopener noreferrer"}},[e._v("divide_no_nan(...)"),r("OutboundLink")],1),e._v(": Computes an unsafe divide which returns 0 if the y is zero.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/equal",target:"_blank",rel:"noopener noreferrer"}},[e._v("equal(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of (x == y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/erf",target:"_blank",rel:"noopener noreferrer"}},[e._v("erf(...)"),r("OutboundLink")],1),e._v(": Computes the Gauss error function of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/erfc",target:"_blank",rel:"noopener noreferrer"}},[e._v("erfc(...)"),r("OutboundLink")],1),e._v(": Computes the complementary error function of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/exp",target:"_blank",rel:"noopener noreferrer"}},[e._v("exp(...)"),r("OutboundLink")],1),e._v(": Computes exponential of x element-wise.\n.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/expm1",target:"_blank",rel:"noopener noreferrer"}},[e._v("expm1(...)"),r("OutboundLink")],1),e._v(": Computes exp(x) - 1 element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/floor",target:"_blank",rel:"noopener noreferrer"}},[e._v("floor(...)"),r("OutboundLink")],1),e._v(": Returns element-wise largest integer not greater than x.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/floordiv",target:"_blank",rel:"noopener noreferrer"}},[e._v("floordiv(...)"),r("OutboundLink")],1),e._v(": Divides x / y elementwise, rounding toward the most negative integer.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/floormod",target:"_blank",rel:"noopener noreferrer"}},[e._v("floormod(...)"),r("OutboundLink")],1),e._v(": Returns element-wise remainder of division. When x < 0 xor y < 0 is")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/greater",target:"_blank",rel:"noopener noreferrer"}},[e._v("greater(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of (x > y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/greater_equal",target:"_blank",rel:"noopener noreferrer"}},[e._v("greater_equal(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of (x >= y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/igamma",target:"_blank",rel:"noopener noreferrer"}},[e._v("igamma(...)"),r("OutboundLink")],1),e._v(": Compute the lower regularized incomplete Gamma function P(a, x).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/igammac",target:"_blank",rel:"noopener noreferrer"}},[e._v("igammac(...)"),r("OutboundLink")],1),e._v(": Compute the upper regularized incomplete Gamma function Q(a, x).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/imag",target:"_blank",rel:"noopener noreferrer"}},[e._v("imag(...)"),r("OutboundLink")],1),e._v(": Returns the imaginary part of a complex (or real) tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/math/in_top_k",target:"_blank",rel:"noopener noreferrer"}},[e._v("in_top_k(...)"),r("OutboundLink")],1),e._v(": Says whether the targets are in the top K predictions.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/invert_permutation",target:"_blank",rel:"noopener noreferrer"}},[e._v("invert_permutation(...)"),r("OutboundLink")],1),e._v(": Computes the inverse permutation of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/is_finite",target:"_blank",rel:"noopener noreferrer"}},[e._v("is_finite(...)"),r("OutboundLink")],1),e._v(": Returns which elements of x are finite.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/is_inf",target:"_blank",rel:"noopener noreferrer"}},[e._v("is_inf(...)"),r("OutboundLink")],1),e._v(": Returns which elements of x are Inf.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/is_nan",target:"_blank",rel:"noopener noreferrer"}},[e._v("is_nan(...)"),r("OutboundLink")],1),e._v(": Returns which elements of x are NaN.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/is_non_decreasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("is_non_decreasing(...)"),r("OutboundLink")],1),e._v(": Returns True if x is non-decreasing.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/is_strictly_increasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("is_strictly_increasing(...)"),r("OutboundLink")],1),e._v(": Returns True if x is strictly increasing.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/linalg/l2_normalize",target:"_blank",rel:"noopener noreferrer"}},[e._v("l2_normalize(...)"),r("OutboundLink")],1),e._v(": Normalizes along dimension axis using an L2 norm. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/lbeta",target:"_blank",rel:"noopener noreferrer"}},[e._v("lbeta(...)"),r("OutboundLink")],1),e._v(": Computes\n, reducing along the last dimension.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/less",target:"_blank",rel:"noopener noreferrer"}},[e._v("less(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of (x < y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/less_equal",target:"_blank",rel:"noopener noreferrer"}},[e._v("less_equal(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of (x <= y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/lgamma",target:"_blank",rel:"noopener noreferrer"}},[e._v("lgamma(...)"),r("OutboundLink")],1),e._v(": Computes the log of the absolute value of Gamma(x) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/log",target:"_blank",rel:"noopener noreferrer"}},[e._v("log(...)"),r("OutboundLink")],1),e._v(": Computes natural logarithm of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/log1p",target:"_blank",rel:"noopener noreferrer"}},[e._v("log1p(...)"),r("OutboundLink")],1),e._v(": Computes natural logarithm of (1 + x) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/log_sigmoid",target:"_blank",rel:"noopener noreferrer"}},[e._v("log_sigmoid(...)"),r("OutboundLink")],1),e._v(": Computes log sigmoid of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/math/log_softmax",target:"_blank",rel:"noopener noreferrer"}},[e._v("log_softmax(...)"),r("OutboundLink")],1),e._v(": Computes log softmax activations. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/logical_and",target:"_blank",rel:"noopener noreferrer"}},[e._v("logical_and(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of x AND y element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/logical_not",target:"_blank",rel:"noopener noreferrer"}},[e._v("logical_not(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of NOT x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/logical_or",target:"_blank",rel:"noopener noreferrer"}},[e._v("logical_or(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of x OR y element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/logical_xor",target:"_blank",rel:"noopener noreferrer"}},[e._v("logical_xor(...)"),r("OutboundLink")],1),e._v(": Logical XOR function.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/maximum",target:"_blank",rel:"noopener noreferrer"}},[e._v("maximum(...)"),r("OutboundLink")],1),e._v(": Returns the max of x and y (i.e. x > y ? x : y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/minimum",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimum(...)"),r("OutboundLink")],1),e._v(": Returns the min of x and y (i.e. x < y ? x : y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/floormod",target:"_blank",rel:"noopener noreferrer"}},[e._v("mod(...)"),r("OutboundLink")],1),e._v(": Returns element-wise remainder of division. When x < 0 xor y < 0 is")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/multiply",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiply(...)"),r("OutboundLink")],1),e._v(": Returns x * y element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/multiply_no_nan",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiply_no_nan(...)"),r("OutboundLink")],1),e._v(": Computes the product of x and y and returns 0 if the y is zero, even if x is NaN or infinite.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/negative",target:"_blank",rel:"noopener noreferrer"}},[e._v("negative(...)"),r("OutboundLink")],1),e._v(": Computes numerical negative value element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/nextafter",target:"_blank",rel:"noopener noreferrer"}},[e._v("nextafter(...)"),r("OutboundLink")],1),e._v(": Returns the next representable value of x1 in the direction of x2, element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/not_equal",target:"_blank",rel:"noopener noreferrer"}},[e._v("not_equal(...)"),r("OutboundLink")],1),e._v(": Returns the truth value of (x != y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/polygamma",target:"_blank",rel:"noopener noreferrer"}},[e._v("polygamma(...)"),r("OutboundLink")],1),e._v(": Compute the polygamma function\n.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/polyval",target:"_blank",rel:"noopener noreferrer"}},[e._v("polyval(...)"),r("OutboundLink")],1),e._v(": Computes the elementwise value of a polynomial.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/pow",target:"_blank",rel:"noopener noreferrer"}},[e._v("pow(...)"),r("OutboundLink")],1),e._v(": Computes the power of one value to another.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/real",target:"_blank",rel:"noopener noreferrer"}},[e._v("real(...)"),r("OutboundLink")],1),e._v(": Returns the real part of a complex (or real) tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/reciprocal",target:"_blank",rel:"noopener noreferrer"}},[e._v("reciprocal(...)"),r("OutboundLink")],1),e._v(": Computes the reciprocal of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/reciprocal_no_nan",target:"_blank",rel:"noopener noreferrer"}},[e._v("reciprocal_no_nan(...)"),r("OutboundLink")],1),e._v(": Performs a safe reciprocal operation, element wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_all",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_all(...)"),r("OutboundLink")],1),e._v(': Computes the "logical and" of elements across dimensions of a tensor. (deprecated arguments)')]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_any",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_any(...)"),r("OutboundLink")],1),e._v(': Computes the "logical or" of elements across dimensions of a tensor. (deprecated arguments)')]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/reduce_euclidean_norm",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_euclidean_norm(...)"),r("OutboundLink")],1),e._v(": Computes the Euclidean norm of elements across dimensions of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_logsumexp",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_logsumexp(...)"),r("OutboundLink")],1),e._v(": Computes log(sum(exp(elements across dimensions of a tensor))). (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_max",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_max(...)"),r("OutboundLink")],1),e._v(": Computes the maximum of elements across dimensions of a tensor. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_mean",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_mean(...)"),r("OutboundLink")],1),e._v(": Computes the mean of elements across dimensions of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_min",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_min(...)"),r("OutboundLink")],1),e._v(": Computes the minimum of elements across dimensions of a tensor. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_prod",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_prod(...)"),r("OutboundLink")],1),e._v(": Computes the product of elements across dimensions of a tensor. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/reduce_std",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_std(...)"),r("OutboundLink")],1),e._v(": Computes the standard deviation of elements across dimensions of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/reduce_sum",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_sum(...)"),r("OutboundLink")],1),e._v(": Computes the sum of elements across dimensions of a tensor. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/reduce_variance",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduce_variance(...)"),r("OutboundLink")],1),e._v(": Computes the variance of elements across dimensions of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/rint",target:"_blank",rel:"noopener noreferrer"}},[e._v("rint(...)"),r("OutboundLink")],1),e._v(": Returns element-wise integer closest to x.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/round",target:"_blank",rel:"noopener noreferrer"}},[e._v("round(...)"),r("OutboundLink")],1),e._v(": Rounds the values of a tensor to the nearest integer, element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/rsqrt",target:"_blank",rel:"noopener noreferrer"}},[e._v("rsqrt(...)"),r("OutboundLink")],1),e._v(": Computes reciprocal of square root of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/scalar_mul",target:"_blank",rel:"noopener noreferrer"}},[e._v("scalar_mul(...)"),r("OutboundLink")],1),e._v(": Multiplies a scalar times a Tensor or IndexedSlices object.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/segment_max",target:"_blank",rel:"noopener noreferrer"}},[e._v("segment_max(...)"),r("OutboundLink")],1),e._v(": Computes the maximum along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/segment_mean",target:"_blank",rel:"noopener noreferrer"}},[e._v("segment_mean(...)"),r("OutboundLink")],1),e._v(": Computes the mean along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/segment_min",target:"_blank",rel:"noopener noreferrer"}},[e._v("segment_min(...)"),r("OutboundLink")],1),e._v(": Computes the minimum along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/segment_prod",target:"_blank",rel:"noopener noreferrer"}},[e._v("segment_prod(...)"),r("OutboundLink")],1),e._v(": Computes the product along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/segment_sum",target:"_blank",rel:"noopener noreferrer"}},[e._v("segment_sum(...)"),r("OutboundLink")],1),e._v(": Computes the sum along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/sigmoid",target:"_blank",rel:"noopener noreferrer"}},[e._v("sigmoid(...)"),r("OutboundLink")],1),e._v(": Computes sigmoid of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/sign",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign(...)"),r("OutboundLink")],1),e._v(": Returns an element-wise indication of the sign of a number.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/sin",target:"_blank",rel:"noopener noreferrer"}},[e._v("sin(...)"),r("OutboundLink")],1),e._v(": Computes sine of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/sinh",target:"_blank",rel:"noopener noreferrer"}},[e._v("sinh(...)"),r("OutboundLink")],1),e._v(": Computes hyperbolic sine of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/math/softmax",target:"_blank",rel:"noopener noreferrer"}},[e._v("softmax(...)"),r("OutboundLink")],1),e._v(": Computes softmax activations. (deprecated arguments)")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/softplus",target:"_blank",rel:"noopener noreferrer"}},[e._v("softplus(...)"),r("OutboundLink")],1),e._v(": Computes softplus: log(exp(features) + 1).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/nn/softsign",target:"_blank",rel:"noopener noreferrer"}},[e._v("softsign(...)"),r("OutboundLink")],1),e._v(": Computes softsign: features / (abs(features) + 1).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/sqrt",target:"_blank",rel:"noopener noreferrer"}},[e._v("sqrt(...)"),r("OutboundLink")],1),e._v(": Computes square root of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/square",target:"_blank",rel:"noopener noreferrer"}},[e._v("square(...)"),r("OutboundLink")],1),e._v(": Computes square of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/squared_difference",target:"_blank",rel:"noopener noreferrer"}},[e._v("squared_difference(...)"),r("OutboundLink")],1),e._v(": Returns (x - y)(x - y) element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/subtract",target:"_blank",rel:"noopener noreferrer"}},[e._v("subtract(...)"),r("OutboundLink")],1),e._v(": Returns x - y element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/tan",target:"_blank",rel:"noopener noreferrer"}},[e._v("tan(...)"),r("OutboundLink")],1),e._v(": Computes tan of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/tanh",target:"_blank",rel:"noopener noreferrer"}},[e._v("tanh(...)"),r("OutboundLink")],1),e._v(": Computes hyperbolic tangent of x element-wise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/top_k",target:"_blank",rel:"noopener noreferrer"}},[e._v("top_k(...)"),r("OutboundLink")],1),e._v(": Finds values and indices of the k largest entries for the last dimension.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/truediv",target:"_blank",rel:"noopener noreferrer"}},[e._v("truediv(...)"),r("OutboundLink")],1),e._v(": Divides x / y elementwise (using Python 3 division operator semantics).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/unsorted_segment_max",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsorted_segment_max(...)"),r("OutboundLink")],1),e._v(": Computes the maximum along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/unsorted_segment_mean",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsorted_segment_mean(...)"),r("OutboundLink")],1),e._v(": Computes the mean along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/unsorted_segment_min",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsorted_segment_min(...)"),r("OutboundLink")],1),e._v(": Computes the minimum along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/unsorted_segment_prod",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsorted_segment_prod(...)"),r("OutboundLink")],1),e._v(": Computes the product along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/unsorted_segment_sqrt_n",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsorted_segment_sqrt_n(...)"),r("OutboundLink")],1),e._v(": Computes the sum along segments of a tensor divided by the sqrt(N).")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/unsorted_segment_sum",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsorted_segment_sum(...)"),r("OutboundLink")],1),e._v(": Computes the sum along segments of a tensor.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/xdivy",target:"_blank",rel:"noopener noreferrer"}},[e._v("xdivy(...)"),r("OutboundLink")],1),e._v(": Returns 0 if x == 0, and x / y otherwise, elementwise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/xlogy",target:"_blank",rel:"noopener noreferrer"}},[e._v("xlogy(...)"),r("OutboundLink")],1),e._v(": Returns 0 if x == 0, and x * log(y) otherwise, elementwise.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/zero_fraction",target:"_blank",rel:"noopener noreferrer"}},[e._v("zero_fraction(...)"),r("OutboundLink")],1),e._v(": Returns the fraction of zeros in value.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/zeta",target:"_blank",rel:"noopener noreferrer"}},[e._v("zeta(...)"),r("OutboundLink")],1),e._v(": Compute the Hurwitz zeta function\n.")])])}),[],!1,null,null,null);t.default=n.exports}}]);