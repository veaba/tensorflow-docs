(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{1122:function(t,e,a){"use strict";a.r(e);var o=a(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Warm-starts a model using the given settings.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" tf.compat.v1.train.warm_start(\n    ckpt_to_initialize_from,\n    vars_to_warm_start='.*',\n    var_name_to_vocab_info=None,\n    var_name_to_prev_var_name=None\n)\n")])])]),a("p",[t._v("If you are using a tf.estimator.Estimator, this will automatically be called during training.")]),t._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[t._v("#")]),t._v(" Args:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ckpt_to_initialize_from")]),t._v(": [Required] A string specifying the directory with checkpoint file(s) or path to checkpoint from which to warm-start the model parameters.")]),t._v(" "),a("li",[a("code",[t._v("vars_to_warm_start")]),t._v(": [Optional] One of the following:\nA regular expression (string) that captures which variables to warm-start (see tf.compat.v1.get_collection). This expression will only consider variables in the TRAINABLE_VARIABLES collection -- if you need to warm-start non_TRAINABLE vars (such as optimizer accumulators or batch norm statistics), please use the below option.\nA list of strings, each a regex scope provided to tf.compat.v1.get_collection with GLOBAL_VARIABLES (please see tf.compat.v1.get_collection). For backwards compatibility reasons, this is separate from the single-string argument type.\nA list of "),a("code",[t._v("Variable")]),t._v("s to warm-start. If you do not have access to the "),a("code",[t._v("Variable")]),t._v(" objects at the call site, please use the above option.\n"),a("code",[t._v("None")]),t._v(", in which case only TRAINABLE variables specified in "),a("code",[t._v("var_name_to_vocab_info")]),t._v(" will be warm-started.\nDefaults to "),a("code",[t._v("'.*'")]),t._v(", which warm-starts all variables in the TRAINABLE_VARIABLES collection. Note that this excludes variables such as accumulators and moving statistics from batch norm.")]),t._v(" "),a("li",[t._v("A regular expression (string) that captures which variables to warm-start (see tf.compat.v1.get_collection). This expression will only consider variables in the TRAINABLE_VARIABLES collection -- if you need to warm-start non_TRAINABLE vars (such as optimizer accumulators or batch norm statistics), please use the below option.")]),t._v(" "),a("li",[t._v("A list of strings, each a regex scope provided to tf.compat.v1.get_collection with GLOBAL_VARIABLES (please see tf.compat.v1.get_collection). For backwards compatibility reasons, this is separate from the single-string argument type.")]),t._v(" "),a("li",[t._v("A list of "),a("code",[t._v("Variable")]),t._v("s to warm-start. If you do not have access to the "),a("code",[t._v("Variable")]),t._v(" objects at the call site, please use the above option.")]),t._v(" "),a("li",[a("code",[t._v("None")]),t._v(", in which case only TRAINABLE variables specified in "),a("code",[t._v("var_name_to_vocab_info")]),t._v(" will be warm-started.")]),t._v(" "),a("li",[a("code",[t._v("var_name_to_vocab_info")]),t._v(": [Optional] Dict of variable names (strings) to "),a("code",[t._v("tf.estimator.VocabInfo")]),t._v('. The variable names should be "full" variables, not the names of the partitions. If not explicitly provided, the variable is assumed to have no (changes to) vocabulary.')]),t._v(" "),a("li",[a("code",[t._v("var_name_to_prev_var_name")]),t._v(": [Optional] Dict of variable names (strings) to name of the previously-trained variable in "),a("code",[t._v("ckpt_to_initialize_from")]),t._v(". If not explicitly provided, the name of the variable is assumed to be same between previous checkpoint and current model. Note that this has no effect on the set of variables that is warm-started, and only controls name mapping (use "),a("code",[t._v("vars_to_warm_start")]),t._v(" for controlling what variables to warm-start).")])]),t._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[t._v("#")]),t._v(" Raises:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ValueError")]),t._v(": If the WarmStartSettings contains prev_var_name or VocabInfo configuration for variable names that are not used. This is to ensure a stronger check for variable configuration than relying on users to examine the logs.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);