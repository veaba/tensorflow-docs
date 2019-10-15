(window.webpackJsonp=window.webpackJsonp||[]).push([[942],{1142:function(e,a,s){"use strict";s.r(a);var t=s(0),i=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Get a partitioner for VariableScope to keep shards below max_shard_bytes.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.compat.v1.variable_axis_size_partitioner(\n    max_shard_bytes,\n    axis=0,\n    bytes_per_string_element=16,\n    max_shards=None\n)\n")])])]),s("p",[e._v("This partitioner will shard a Variable along one axis, attempting to keep the maximum shard size below max_shard_bytes. In practice, this is not always possible when sharding along only one axis. When this happens, this axis is sharded as much as possible (i.e., every dimension becomes a separate shard).")]),e._v(" "),s("p",[e._v("If the partitioner hits the max_shards limit, then each shard may end up larger than max_shard_bytes. By default max_shards equals None and no limit on the number of shards is enforced.")]),e._v(" "),s("p",[e._v("One reasonable value for max_shard_bytes is (64 << 20) - 1, or almost 64MB, to keep below the protobuf byte limit.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("max_shard_bytes")]),e._v(": The maximum size any given shard is allowed to be.")]),e._v(" "),s("li",[s("code",[e._v("axis")]),e._v(": The "),s("code",[e._v("axis")]),e._v(" to partition along. Default: outermost "),s("code",[e._v("axis")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("bytes_per_string_element")]),e._v(": If the "),s("code",[e._v("Variable")]),e._v(" is of type string, this provides an estimate of how large each scalar in the "),s("code",[e._v("Variable")]),e._v(" is.")]),e._v(" "),s("li",[s("code",[e._v("max_shards")]),e._v(": The maximum number of shards in int created taking precedence over "),s("code",[e._v("max_shard_bytes")]),e._v(".")])]),e._v(" "),s("p",[e._v("A partition function usable as the partitioner argument to variable_scope and get_variable.")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ValueError")]),e._v(": If any of the byte counts are non-positive.")])])])}),[],!1,null,null,null);a.default=i.exports}}]);