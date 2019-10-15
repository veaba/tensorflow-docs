(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{1088:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Returns MetaGraphDef proto.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.compat.v1.train.export_meta_graph(\n    filename=None,\n    meta_info_def=None,\n    graph_def=None,\n    saver_def=None,\n    collection_list=None,\n    as_text=False,\n    graph=None,\n    export_scope=None,\n    clear_devices=False,\n    clear_extraneous_savers=False,\n    strip_default_attrs=False,\n    save_debug_info=False,\n    **kwargs\n)\n")])])]),a("p",[e._v("Optionally writes it to filename.")]),e._v(" "),a("p",[e._v("This function exports the graph, saver, and collection objects into MetaGraphDef protocol buffer with the intention of it being imported at a later time or location to restart training, run inference, or be a subgraph.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("filename")]),e._v(": Optional "),a("code",[e._v("filename")]),e._v(" including the path for writing the generated "),a("code",[e._v("MetaGraphDef")]),e._v(" protocol buffer.")]),e._v(" "),a("li",[a("code",[e._v("meta_info_def")]),e._v(": "),a("code",[e._v("MetaInfoDef")]),e._v(" protocol buffer.")]),e._v(" "),a("li",[a("code",[e._v("graph_def")]),e._v(": "),a("code",[e._v("GraphDef")]),e._v(" protocol buffer.")]),e._v(" "),a("li",[a("code",[e._v("saver_def")]),e._v(": "),a("code",[e._v("SaverDef")]),e._v(" protocol buffer.")]),e._v(" "),a("li",[a("code",[e._v("collection_list")]),e._v(": List of string keys to collect.")]),e._v(" "),a("li",[a("code",[e._v("as_text")]),e._v(": If "),a("code",[e._v("True")]),e._v(", writes the "),a("code",[e._v("MetaGraphDef")]),e._v(" as an ASCII proto.")]),e._v(" "),a("li",[a("code",[e._v("graph")]),e._v(": The "),a("code",[e._v("Graph")]),e._v(" to export. If "),a("code",[e._v("None")]),e._v(", use the default "),a("code",[e._v("graph")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("export_scope")]),e._v(": Optional "),a("code",[e._v("string")]),e._v(". Name scope under which to extract the sub"),a("code",[e._v("graph")]),e._v(". The scope name will be striped from the node definitions for easy import later into new name scopes. If "),a("code",[e._v("None")]),e._v(", the whole "),a("code",[e._v("graph")]),e._v(" is exported. "),a("code",[e._v("graph_def")]),e._v(" and "),a("code",[e._v("export_scope")]),e._v(" cannot both be specified.")]),e._v(" "),a("li",[a("code",[e._v("clear_devices")]),e._v(": Whether or not to clear the device field for an "),a("code",[e._v("Operation")]),e._v(" or "),a("code",[e._v("Tensor")]),e._v(" during export.")]),e._v(" "),a("li",[a("code",[e._v("clear_extraneous_savers")]),e._v(": Remove any Saver-related information from the "),a("code",[e._v("graph")]),e._v(" (both Save/Restore ops and "),a("code",[e._v("SaverDef")]),e._v("s) that are not associated with the provided "),a("code",[e._v("SaverDef")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("strip_default_attrs")]),e._v(": Boolean. If "),a("code",[e._v("True")]),e._v(", default-valued attributes will be removed from the NodeDefs. For a detailed guide, see Stripping Default-Valued Attributes.")]),e._v(" "),a("li",[a("code",[e._v("save_debug_info")]),e._v(": If "),a("code",[e._v("True")]),e._v(", save the "),a("code",[e._v("Graph")]),e._v("DebugInfo to a separate file, which in the same directory of "),a("code",[e._v("filename")]),e._v(" and with "),a("code",[e._v("_debug")]),e._v(" added before the file extend.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A MetaGraphDef proto.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": When the "),a("code",[e._v("GraphDef")]),e._v(" is larger than 2GB.")]),e._v(" "),a("li",[a("code",[e._v("RuntimeError")]),e._v(": If called with eager execution enabled.")])]),e._v(" "),a("h4",{attrs:{id:"eager-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eager-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Eager Compatibility")]),e._v(" "),a("p",[e._v("Exporting/importing meta graphs is not supported unless both graph_def and graph are provided. No graph exists when eager execution is enabled.")])])}),[],!1,null,null,null);t.default=o.exports}}]);