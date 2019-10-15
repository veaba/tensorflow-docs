(window.webpackJsonp=window.webpackJsonp||[]).push([[1310],{1499:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("A CategoricalColumn that returns identity values.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.feature_column.categorical_column_with_identity")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.feature_column.categorical_column_with_identity")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.feature_column.categorical_column_with_identity(\n    key,\n    num_buckets,\n    default_value=None\n)\n")])])]),a("p",[e._v("Use this when your inputs are integers in the range [0, num_buckets), and you want to use the input value itself as the categorical ID. Values outside this range will result in default_value if specified, otherwise it will fail.")]),e._v(" "),a("p",[e._v("Typically, this is used for contiguous ranges of integer indexes, but it doesn't have to be. This might be inefficient, however, if many of IDs are unused. Consider categorical_column_with_hash_bucket in that case.")]),e._v(" "),a("p",[e._v("For input dictionary features, features[key] is either Tensor or SparseTensor. If Tensor, missing values can be represented by -1 for int and '' for string, which will be dropped by this feature column.")]),e._v(" "),a("p",[e._v("In the following examples, each input in the range [0, 1000000) is assigned the same value. All other inputs are assigned default_value 0. Note that a literal 0 in inputs will result in the same default ID.")]),e._v(" "),a("h4",{attrs:{id:"linear-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-model","aria-hidden":"true"}},[e._v("#")]),e._v(" Linear model:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" video_id = categorical_column_with_identity(\n    key='video_id', num_buckets=1000000, default_value=0)\ncolumns = [video_id, ...]\nfeatures = tf.io.parse_example(..., features=make_parse_example_spec(columns))\nlinear_prediction, _, _ = linear_model(features, columns)\n")])])]),a("p",[e._v("Embedding for a DNN model:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" columns = [embedding_column(video_id, 9),...]\nfeatures = tf.io.parse_example(..., features=make_parse_example_spec(columns))\ndense_tensor = input_layer(features, columns)\n")])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("key")]),e._v(": A unique string identifying the input feature. It is used as the column name and the dictionary "),a("code",[e._v("key")]),e._v(" for feature parsing configs, feature "),a("code",[e._v("Tensor")]),e._v(" objects, and feature columns.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A CategoricalColumn that returns identity values.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": if "),a("code",[e._v("num_buckets")]),e._v(" is less than one.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);