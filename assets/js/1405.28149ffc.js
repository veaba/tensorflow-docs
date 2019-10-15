(window.webpackJsonp=window.webpackJsonp||[]).push([[1405],{1596:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"class-gfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-gfile","aria-hidden":"true"}},[e._v("#")]),e._v(" Class GFile")]),e._v(" "),r("p",[e._v("File I/O wrappers without thread locking.")]),e._v(" "),r("h3",{attrs:{id:"aliases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),r("ul",[r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.gfile.GFile")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.gfile.Open")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.io.gfile.GFile")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v2.io.gfile.GFile")])])]),e._v(" "),r("p",[e._v("Note, that this is somewhat like builtin Python file I/O, but there are semantic differences to make it more efficient for some backing filesystems. For example, a write mode file will not be opened until the first write call (to minimize RPC invocations in network filesystems).")]),e._v(" "),r("h2",{attrs:{id:"init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("init")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/gfile.py#L51-L52",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __init__(\n    name,\n    mode='r'\n)\n")])])]),r("p",[e._v("Initialize self. See help(type(self)) for accurate signature.")]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[e._v("#")]),e._v(" mode")]),e._v(" "),r("p",[e._v("Returns the mode in which the file was opened.")]),e._v(" "),r("h3",{attrs:{id:"name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),r("p",[e._v("Returns the file name.")]),e._v(" "),r("h2",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("h3",{attrs:{id:"enter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("enter")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L202-L204",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __enter__()\n")])])]),r("p",[e._v('Make usable with "with" statement.')]),e._v(" "),r("h3",{attrs:{id:"exit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exit","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("exit")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L206-L208",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __exit__(\n    unused_type,\n    unused_value,\n    unused_traceback\n)\n")])])]),r("p",[e._v('Make usable with "with" statement.')]),e._v(" "),r("h3",{attrs:{id:"iter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("iter")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L210-L211",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __iter__()\n")])])]),r("h3",{attrs:{id:"close"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#close","aria-hidden":"true"}},[e._v("#")]),e._v(" close")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L234-L241",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" close()\n")])])]),r("p",[e._v("Closes FileIO. Should be called for the WritableFile to be flushed.")]),e._v(" "),r("h3",{attrs:{id:"flush"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flush","aria-hidden":"true"}},[e._v("#")]),e._v(" flush")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L222-L232",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" flush()\n")])])]),r("p",[e._v("Flushes the Writable file.")]),e._v(" "),r("p",[e._v("This only ensures that the data has made its way out of the process without any guarantees on whether it's written to disk. This means that the data would survive an application crash but not necessarily an OS crash.")]),e._v(" "),r("h3",{attrs:{id:"next"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next","aria-hidden":"true"}},[e._v("#")]),e._v(" next")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L213-L217",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" next()\n")])])]),r("h3",{attrs:{id:"read"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read","aria-hidden":"true"}},[e._v("#")]),e._v(" read")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L110-L128",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" read(n=-1)\n")])])]),r("p",[e._v("Returns the contents of a file as a string.")]),e._v(" "),r("p",[e._v("Starts reading from current position in file.")]),e._v(" "),r("h4",{attrs:{id:"args"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("n")]),e._v(": Read '"),r("code",[e._v("n")]),e._v("' bytes if "),r("code",[e._v("n")]),e._v(" != -1. If "),r("code",[e._v("n")]),e._v(" = -1, reads to e"),r("code",[e._v("n")]),e._v("d of file.")])]),e._v(" "),r("h4",{attrs:{id:"returns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("'n' bytes of the file (or whole file) in bytes mode or 'n' bytes of the string if in string (regular) mode.")]),e._v(" "),r("h3",{attrs:{id:"readline"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#readline","aria-hidden":"true"}},[e._v("#")]),e._v(" readline")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L176-L179",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" readline()\n")])])]),r("p",[e._v("Reads the next line from the file. Leaves the '\\n' at the end.")]),e._v(" "),r("h3",{attrs:{id:"readlines"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#readlines","aria-hidden":"true"}},[e._v("#")]),e._v(" readlines")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L181-L190",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" readlines()\n")])])]),r("p",[e._v("Returns all lines from the file in a list.")]),e._v(" "),r("h3",{attrs:{id:"seek"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#seek","aria-hidden":"true"}},[e._v("#")]),e._v(" seek")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L130-L174",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" seek(\n    offset=None,\n    whence=0,\n    position=None\n)\n")])])]),r("p",[e._v("Seeks to the offset in the file. (deprecated arguments)")]),e._v(" "),r("h4",{attrs:{id:"args-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("offset")]),e._v(": The byte count relative to the whence argument.")]),e._v(" "),r("li",[r("code",[e._v("whence")]),e._v(": Valid values for "),r("code",[e._v("whence")]),e._v(" are: 0: start of the file (default) 1: relative to the current position of the file 2: relative to the end of file. "),r("code",[e._v("offset")]),e._v(" is usually negative.")])]),e._v(" "),r("h3",{attrs:{id:"seekable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#seekable","aria-hidden":"true"}},[e._v("#")]),e._v(" seekable")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L243-L245",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" seekable()\n")])])]),r("p",[e._v("Returns True as FileIO supports random access ops of seek()/tell()")]),e._v(" "),r("h3",{attrs:{id:"size"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#size","aria-hidden":"true"}},[e._v("#")]),e._v(" size")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L100-L102",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" size()\n")])])]),r("p",[e._v("Returns the size of the file.")]),e._v(" "),r("h3",{attrs:{id:"tell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tell","aria-hidden":"true"}},[e._v("#")]),e._v(" tell")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L192-L200",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" tell()\n")])])]),r("p",[e._v("Returns the current position in the file.")]),e._v(" "),r("h3",{attrs:{id:"write"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write","aria-hidden":"true"}},[e._v("#")]),e._v(" write")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L104-L108",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" write(file_content)\n")])])]),r("p",[e._v("Writes file_content to the file. Appends to the end of the file.")])])}),[],!1,null,null,null);t.default=s.exports}}]);