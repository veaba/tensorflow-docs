(window.webpackJsonp=window.webpackJsonp||[]).push([[2251],{2439:function(a,t,e){"use strict";e.r(t);var i=e(0),s=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Performs op on the space-to-batch representation of input.")]),a._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("tf.compat.v1.nn.with_space_to_batch")])]),a._v(" "),e("li",[e("code",[a._v("tf.compat.v2.nn.with_space_to_batch")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" tf.nn.with_space_to_batch(\n    input,\n    dilation_rate,\n    padding,\n    op,\n    filter_shape=None,\n    spatial_dims=None,\n    data_format=None\n)\n")])])]),e("p",[a._v('This has the effect of transforming sliding window operations into the corresponding "atrous" operation in which the input is sampled at the specified dilation_rate.')]),a._v(" "),e("p",[a._v("In the special case that dilation_rate is uniformly 1, this simply returns:")]),a._v(" "),e("p",[a._v("op(input, num_spatial_dims, padding)")]),a._v(" "),e("p",[a._v("Otherwise, it returns:")]),a._v(" "),e("p",[a._v('batch_to_space_nd( op(space_to_batch_nd(input, adjusted_dilation_rate, adjusted_paddings), num_spatial_dims, "VALID") adjusted_dilation_rate, adjusted_crops),')]),a._v(" "),e("p",[a._v("where:")]),a._v(" "),e("p",[a._v("adjusted_dilation_rate is an int64 tensor of shape [max(spatialdims)], adjusted{paddings,crops} are int64 tensors of shape [max(spatial_dims), 2]")]),a._v(" "),e("p",[a._v("defined as follows:")]),a._v(" "),e("p",[a._v("We first define two int64 tensors paddings and crops of shape [num_spatial_dims, 2] based on the value of padding and the spatial dimensions of the input:")]),a._v(" "),e("p",[a._v('If padding = "VALID", then:')]),a._v(" "),e("p",[a._v("paddings, crops = required_space_to_batch_paddings( input_shape[spatial_dims], dilation_rate)")]),a._v(" "),e("p",[a._v('If padding = "SAME", then:')]),a._v(" "),e("p",[a._v("dilated_filter_shape = filter_shape + (filter_shape - 1) * (dilation_rate - 1)")]),a._v(" "),e("p",[a._v("paddings, crops = required_space_to_batch_paddings( input_shape[spatial_dims], dilation_rate, [(dilated_filter_shape - 1) // 2, dilated_filter_shape - 1 - (dilated_filter_shape - 1) // 2])")]),a._v(" "),e("p",[a._v("Because space_to_batch_nd and batch_to_space_nd assume that the spatial dimensions are contiguous starting at the second dimension, but the specified spatial_dims may not be, we must adjust dilation_rate, paddings and crops in order to be usable with these operations. For a given dimension, if the block size is 1, and both the starting and ending padding and crop amounts are 0, then space_to_batch_nd effectively leaves that dimension alone, which is what is needed for dimensions not part of spatial_dims. Furthermore, space_to_batch_nd and batch_to_space_nd handle this case efficiently for any number of leading and trailing dimensions.")]),a._v(" "),e("p",[a._v("For 0 <= i < len(spatial_dims), we assign:")]),a._v(" "),e("p",[a._v("adjusted_dilation_rate[spatial_dims[i] - 1] = dilation_rate[i] adjusted_paddings[spatial_dims[i] - 1, :] = paddings[i, :] adjusted_crops[spatial_dims[i] - 1, :] = crops[i, :]")]),a._v(" "),e("p",[a._v("All unassigned values of adjusted_dilation_rate default to 1, while all unassigned values of adjusted_paddings and adjusted_crops default to 0.")]),a._v(" "),e("p",[a._v('Note in the case that dilation_rate is not uniformly 1, specifying "VALID" padding is equivalent to specifying padding = "SAME" with a filter_shape of [1]*N.')]),a._v(" "),e("p",[a._v('Advanced usage. Note the following optimization: A sequence of with_space_to_batch operations with identical (not uniformly 1) dilation_rate parameters and "VALID" padding')]),a._v(" "),e("p",[a._v('net = with_space_to_batch(net, dilation_rate, "VALID", op_1) ... net = with_space_to_batch(net, dilation_rate, "VALID", op_k)')]),a._v(" "),e("p",[a._v("can be combined into a single with_space_to_batch operation as follows:")]),a._v(" "),e("p",[a._v('def combined_op(converted_input, num_spatial_dims, _): result = op_1(converted_input, num_spatial_dims, "VALID") ... result = op_k(result, num_spatial_dims, "VALID")')]),a._v(" "),e("p",[a._v('net = with_space_to_batch(net, dilation_rate, "VALID", combined_op)')]),a._v(" "),e("p",[a._v("This eliminates the overhead of k-1 calls to space_to_batch_nd and batch_to_space_nd.")]),a._v(" "),e("p",[a._v('Similarly, a sequence of with_space_to_batch operations with identical (not uniformly 1) dilation_rate parameters, "SAME" padding, and odd filter dimensions')]),a._v(" "),e("p",[a._v('net = with_space_to_batch(net, dilation_rate, "SAME", op_1, filter_shape_1) ... net = with_space_to_batch(net, dilation_rate, "SAME", op_k, filter_shape_k)')]),a._v(" "),e("p",[a._v("can be combined into a single with_space_to_batch operation as follows:")]),a._v(" "),e("p",[a._v('def combined_op(converted_input, num_spatial_dims, _): result = op_1(converted_input, num_spatial_dims, "SAME") ... result = op_k(result, num_spatial_dims, "SAME")')]),a._v(" "),e("p",[a._v('net = with_space_to_batch(net, dilation_rate, "VALID", combined_op)')]),a._v(" "),e("h4",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[a._v("#")]),a._v(" Args:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("input")]),a._v(": Tensor of rank > max(spatial_dims).")]),a._v(" "),e("li",[e("code",[a._v("dilation_rate")]),a._v(": int32 Tensor of known shape [num_spatial_dims].")]),a._v(" "),e("li",[e("code",[a._v("padding")]),a._v(': str constant equal to "VALID" or "SAME"')]),a._v(" "),e("li",[e("code",[a._v("op")]),a._v(": Function that maps ("),e("code",[a._v("input")]),a._v(", num_spatial_dims, "),e("code",[a._v("padding")]),a._v(") -> output")]),a._v(" "),e("li",[e("code",[a._v("filter_shape")]),a._v(": If "),e("code",[a._v("padding")]),a._v(' = "SAME", specifies the shape of the convolution kernel/pooling window as an integer Tensor of shape [>=num_spatial_dims]. If '),e("code",[a._v("padding")]),a._v(' = "VALID", '),e("code",[a._v("filter_shape")]),a._v(" is ignored and need not be specified.")]),a._v(" "),e("li",[e("code",[a._v("spatial_dims")]),a._v(": Monotonically increasing sequence of "),e("code",[a._v("num_spatial_dims")]),a._v(" integers (which are >= 1) specifying the spatial dimensions of "),e("code",[a._v("input")]),a._v(" and output. Defaults to: range(1, "),e("code",[a._v("num_spatial_dims")]),a._v("+1).")]),a._v(" "),e("li",[e("code",[a._v("data_format")]),a._v(": A string or None. Specifies whether the channel dimension of the "),e("code",[a._v("input")]),a._v(" and output is the last dimension (default, or if "),e("code",[a._v("data_format")]),a._v(' does not start with "NC"), or the second dimension (if '),e("code",[a._v("data_format")]),a._v(' starts with "NC"). For N=1, the valid values are "NWC" (default) and "NCW". For N=2, the valid values are "NHWC" (default) and "NCHW". For N=3, the valid values are "NDHWC" (default) and "NCDHW".')])]),a._v(" "),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[a._v("#")]),a._v(" Returns:")]),a._v(" "),e("p",[a._v("The output Tensor as described above, dimensions will vary based on the op provided.")]),a._v(" "),e("h4",{attrs:{id:"raises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[a._v("#")]),a._v(" Raises:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("ValueError")]),a._v(": if "),e("code",[a._v("padding")]),a._v(" is invalid or the arguments are incompatible.")]),a._v(" "),e("li",[e("code",[a._v("ValueError")]),a._v(": if "),e("code",[a._v("spatial_dims")]),a._v(" are invalid.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);