(window.webpackJsonp=window.webpackJsonp||[]).push([[878],{1066:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-scaffold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-scaffold","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Scaffold")]),e._v(" "),a("p",[e._v("Structure to create or gather pieces commonly needed to train a model.")]),e._v(" "),a("h3",{attrs:{id:"used-in-the-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("T")]),e._v("r"),a("code",[e._v("a")]),e._v("i"),a("code",[e._v("n")]),e._v("i"),a("code",[e._v("n")]),e._v("g"),a("code"),e._v("c"),a("code",[e._v("h")]),e._v("e"),a("code",[e._v("c")]),e._v("k"),a("code",[e._v("p")]),e._v("o"),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("t")]),e._v("s``")])]),e._v(" "),a("p",[e._v("When you build a model for training you usually need ops to initialize variables, a Saver to checkpoint them, an op to collect summaries for the visualizer, and so on.")]),e._v(" "),a("p",[e._v("Various libraries built on top of the core TensorFlow library take care of creating some or all of these pieces and storing them in well known collections in the graph. The Scaffold class helps pick these pieces from the graph collections, creating and adding them to the collections if needed.")]),e._v(" "),a("p",[e._v("If you call the scaffold constructor without any arguments, it will pick pieces from the collections, creating default ones if needed when scaffold.finalize() is called. You can pass arguments to the constructor to provide your own pieces. Pieces that you pass to the constructor are not added to the graph collections.")]),e._v(" "),a("p",[e._v("The following pieces are directly accessible as attributes of the Scaffold object:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("saver")]),e._v(": A "),a("code",[e._v("tf.compat.v1.train.Saver")]),e._v(" object taking care of saving the variables. Picked from and stored into the "),a("code",[e._v("SAVERS")]),e._v(" collection in the graph by default.")]),e._v(" "),a("li",[a("code",[e._v("init_op")]),e._v(": An op to run to initialize the variables. Picked from and stored into the "),a("code",[e._v("INIT_OP")]),e._v(" collection in the graph by default.")]),e._v(" "),a("li",[a("code",[e._v("ready_op")]),e._v(": An op to verify that the variables are initialized. Picked from and stored into the "),a("code",[e._v("READY_OP")]),e._v(" collection in the graph by default.")]),e._v(" "),a("li",[a("code",[e._v("ready_for_local_init_op")]),e._v(": An op to verify that global state has been initialized and it is alright to run "),a("code",[e._v("local_init_op")]),e._v(". Picked from and stored into the "),a("code",[e._v("READY_FOR_LOCAL_INIT_OP")]),e._v(" collection in the graph by default. This is needed when the initialization of local variables depends on the values of global variables.")]),e._v(" "),a("li",[a("code",[e._v("local_init_op")]),e._v(": An op to initialize the local variables. Picked from and stored into the "),a("code",[e._v("LOCAL_INIT_OP")]),e._v(" collection in the graph by default.")]),e._v(" "),a("li",[a("code",[e._v("summary_op")]),e._v(": An op to run and merge the summaries in the graph. Picked from and stored into the "),a("code",[e._v("SUMMARY_OP")]),e._v(" collection in the graph by default.")])]),e._v(" "),a("p",[e._v("You can also pass the following additional pieces to the constructor:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("init_feed_dict")]),e._v(": A session feed dictionary that should be used when running the init op.")]),e._v(" "),a("li",[a("code",[e._v("init_fn")]),e._v(": A callable to run after the init op to perform additional initializations. The callable will be called as "),a("code",[e._v("init_fn")]),e._v("(scaffold, session).")])]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L107-L182",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    init_op=None,\n    init_feed_dict=None,\n    init_fn=None,\n    ready_op=None,\n    ready_for_local_init_op=None,\n    local_init_op=None,\n    summary_op=None,\n    saver=None,\n    copy_from_scaffold=None\n)\n")])])]),a("p",[e._v("Create a scaffold.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("init_op")]),e._v(": Optional op for initializing variables.")]),e._v(" "),a("li",[a("code",[e._v("init_feed_dict")]),e._v(": Optional session feed dictionary to use when running the "),a("code",[e._v("init_op")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("init_fn")]),e._v(": Optional function to use to initialize the model after running the "),a("code",[e._v("init_op")]),e._v(". Will be called as "),a("code",[e._v("init_fn")]),e._v("(scaffold, session).")]),e._v(" "),a("li",[a("code",[e._v("ready_op")]),e._v(": Optional op to verify that the variables are initialized. Must return an empty 1D string tensor when the variables are initialized, or a non-empty 1D string tensor listing the names of the non-initialized variables.")]),e._v(" "),a("li",[a("code",[e._v("ready_for_local_init_op")]),e._v(": Optional op to verify that the global variables are initialized and "),a("code",[e._v("local_init_op")]),e._v(" can be run. Must return an empty 1D string tensor when the global variables are initialized, or a non-empty 1D string tensor listing the names of the non-initialized global variables.")]),e._v(" "),a("li",[a("code",[e._v("local_init_op")]),e._v(": Optional op to initialize local variables.")]),e._v(" "),a("li",[a("code",[e._v("summary_op")]),e._v(": Optional op to gather all summaries. Must return a scalar string tensor containing a serialized "),a("code",[e._v("Summary")]),e._v(" proto.")]),e._v(" "),a("li",[a("code",[e._v("saver")]),e._v(": Optional "),a("code",[e._v("tf.compat.v1.train.Saver")]),e._v(" object to use to save and restore variables. May also be a "),a("code",[e._v("tf.train.Checkpoint")]),e._v(" object, in which case object-based checkpoints are saved. This will also load some object-based checkpoints saved from elsewhere, but that loading may be fragile since it uses fixed keys rather than performing a full graph-based match. For example if a variable has two paths from the "),a("code",[e._v("Checkpoint")]),e._v(" object because two "),a("code",[e._v("Model")]),e._v(" objects share the "),a("code",[e._v("Layer")]),e._v(" object that owns it, removing one "),a("code",[e._v("Model")]),e._v(" may change the keys and break checkpoint loading through this API, whereas a graph-based match would match the variable through the other "),a("code",[e._v("Model")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("copy_from_scaffold")]),e._v(": Optional scaffold object to copy fields from. Its fields will be overwritten by the provided fields in this function.")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"init-feed-dict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-feed-dict","aria-hidden":"true"}},[e._v("#")]),e._v(" init_feed_dict")]),e._v(" "),a("h3",{attrs:{id:"init-fn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-fn","aria-hidden":"true"}},[e._v("#")]),e._v(" init_fn")]),e._v(" "),a("h3",{attrs:{id:"init-op"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-op","aria-hidden":"true"}},[e._v("#")]),e._v(" init_op")]),e._v(" "),a("h3",{attrs:{id:"local-init-op"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-init-op","aria-hidden":"true"}},[e._v("#")]),e._v(" local_init_op")]),e._v(" "),a("h3",{attrs:{id:"ready-for-local-init-op"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ready-for-local-init-op","aria-hidden":"true"}},[e._v("#")]),e._v(" ready_for_local_init_op")]),e._v(" "),a("h3",{attrs:{id:"ready-op"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ready-op","aria-hidden":"true"}},[e._v("#")]),e._v(" ready_op")]),e._v(" "),a("h3",{attrs:{id:"saver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saver","aria-hidden":"true"}},[e._v("#")]),e._v(" saver")]),e._v(" "),a("h3",{attrs:{id:"summary-op"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-op","aria-hidden":"true"}},[e._v("#")]),e._v(" summary_op")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"default-local-init-op"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-local-init-op","aria-hidden":"true"}},[e._v("#")]),e._v(" default_local_init_op")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L292-L308",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" @staticmethod\ndefault_local_init_op()\n")])])]),a("p",[e._v("Returns an op that groups the default local init ops.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/local_variables_initializer",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.compat.v1.local_variables_initializer"),a("OutboundLink")],1),e._v("This op is used during session initialization when a Scaffold is initialized without specifying the local_init_op arg. It includes , tf.compat.v1.tables_initializer, and also initializes local session resources.")]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("The default Scaffold local init op.")]),e._v(" "),a("h3",{attrs:{id:"finalize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finalize","aria-hidden":"true"}},[e._v("#")]),e._v(" finalize")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L184-L241",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" finalize()\n")])])]),a("p",[e._v("Creates operations if needed and finalizes the graph.")]),e._v(" "),a("h3",{attrs:{id:"get-or-default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-or-default","aria-hidden":"true"}},[e._v("#")]),e._v(" get_or_default")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L275-L290",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" @staticmethod\nget_or_default(\n    arg_name,\n    collection_key,\n    default_constructor\n)\n")])])]),a("p",[e._v("Get from cache or create a default operation.")])])}),[],!1,null,null,null);t.default=o.exports}}]);