(window.webpackJsonp=window.webpackJsonp||[]).push([[2265],{2453:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"class-fifoqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-fifoqueue","aria-hidden":"true"}},[e._v("#")]),e._v(" Class FIFOQueue")]),e._v(" "),r("p",[e._v("A queue implementation that dequeues elements in first-in first-out order.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/queue/QueueBase",target:"_blank",rel:"noopener noreferrer"}},[e._v("QueueBase"),r("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),r("h3",{attrs:{id:"aliases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),r("ul",[r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.FIFOQueue")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.queue.FIFOQueue")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v2.queue.FIFOQueue")]),e._v(" "),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/queue/QueueBase",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.queue.QueueBase"),r("OutboundLink")],1),e._v("See  for a description of the methods on this class.")])]),e._v(" "),r("h2",{attrs:{id:"init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("init")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L719-L765",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __init__(\n    capacity,\n    dtypes,\n    shapes=None,\n    names=None,\n    shared_name=None,\n    name='fifo_queue'\n)\n")])])]),r("p",[e._v("Creates a queue that dequeues elements in a first-in first-out order.")]),e._v(" "),r("p",[e._v("A FIFOQueue has bounded capacity; supports multiple concurrent producers and consumers; and provides exactly-once delivery.")]),e._v(" "),r("p",[e._v("A FIFOQueue holds a list of up to capacity elements. Each element is a fixed-length tuple of tensors whose dtypes are described by dtypes, and whose shapes are optionally described by the shapes argument.")]),e._v(" "),r("p",[e._v("If the shapes argument is specified, each component of a queue element must have the respective fixed shape. If it is unspecified, different queue elements may have different shapes, but the use of dequeue_many is disallowed.")]),e._v(" "),r("h4",{attrs:{id:"args"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("capacity")]),e._v(": An integer. The upper bound on the number of elements that may be stored in this queue.")]),e._v(" "),r("li",[r("code",[e._v("dtypes")]),e._v(": A list of "),r("code",[e._v("DType")]),e._v(" objects. The length of "),r("code",[e._v("dtypes")]),e._v(" must equal the number of tensors in each queue element.")]),e._v(" "),r("li",[r("code",[e._v("shapes")]),e._v(": (Optional.) A list of fully-defined "),r("code",[e._v("TensorShape")]),e._v(" objects with the same length as "),r("code",[e._v("dtypes")]),e._v(", or "),r("code",[e._v("None")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("names")]),e._v(": (Optional.) A list of string naming the components in the queue with the same length as "),r("code",[e._v("dtypes")]),e._v(", or "),r("code",[e._v("None")]),e._v(". If specified the dequeue methods return a dictionary with the "),r("code",[e._v("names")]),e._v(" as keys.")]),e._v(" "),r("li",[r("code",[e._v("shared_name")]),e._v(": (Optional.) If non-empty, this queue will be shared under the given name across multiple sessions.")]),e._v(" "),r("li",[r("code",[e._v("name")]),e._v(": Optional "),r("code",[e._v("name")]),e._v(" for the queue operation.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"dtypes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dtypes","aria-hidden":"true"}},[e._v("#")]),e._v(" dtypes")]),e._v(" "),r("p",[e._v("The list of dtypes for each component of a queue element.")]),e._v(" "),r("h3",{attrs:{id:"name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),r("p",[e._v("The name of the underlying queue.")]),e._v(" "),r("h3",{attrs:{id:"names"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#names","aria-hidden":"true"}},[e._v("#")]),e._v(" names")]),e._v(" "),r("p",[e._v("The list of names for each component of a queue element.")]),e._v(" "),r("h3",{attrs:{id:"queue-ref"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#queue-ref","aria-hidden":"true"}},[e._v("#")]),e._v(" queue_ref")]),e._v(" "),r("p",[e._v("The underlying queue reference.")]),e._v(" "),r("h3",{attrs:{id:"shapes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shapes","aria-hidden":"true"}},[e._v("#")]),e._v(" shapes")]),e._v(" "),r("p",[e._v("The list of shapes for each component of a queue element.")]),e._v(" "),r("h2",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("h3",{attrs:{id:"close"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#close","aria-hidden":"true"}},[e._v("#")]),e._v(" close")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L544-L577",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" close(\n    cancel_pending_enqueues=False,\n    name=None\n)\n")])])]),r("p",[e._v("Closes this queue.")]),e._v(" "),r("p",[e._v("This operation signals that no more elements will be enqueued in the given queue. Subsequent enqueue and enqueue_many operations will fail. Subsequent dequeue and dequeue_many operations will continue to succeed if sufficient elements remain in the queue. Subsequently dequeue and dequeue_many operations that would otherwise block waiting for more elements (if close hadn't been called) will now fail immediately.")]),e._v(" "),r("p",[e._v("If cancel_pending_enqueues is True, all pending requests will also be canceled.")]),e._v(" "),r("h4",{attrs:{id:"args-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("cancel_pending_enqueues")]),e._v(": (Optional.) A boolean, defaulting to "),r("code",[e._v("False")]),e._v(" (described above).")]),e._v(" "),r("li",[r("code",[e._v("name")]),e._v(": A "),r("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),r("h4",{attrs:{id:"returns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The operation that closes the queue.")]),e._v(" "),r("h3",{attrs:{id:"dequeue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dequeue","aria-hidden":"true"}},[e._v("#")]),e._v(" dequeue")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L422-L458",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" dequeue(name=None)\n")])])]),r("p",[e._v("Dequeues one element from this queue.")]),e._v(" "),r("p",[e._v("If the queue is empty when this operation executes, it will block until there is an element to dequeue.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/OutOfRangeError",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.errors.OutOfRangeError"),r("OutboundLink")],1),e._v("At runtime, this operation may raise an error if the queue is tf.QueueBase.close before or during its execution. If the queue is closed, the queue is empty, and there are no pending enqueue operations that can fulfill this request,  will be raised. If the session is tf.Session.close, tf.errors.CancelledError will be raised.")]),e._v(" "),r("h4",{attrs:{id:"args-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("name")]),e._v(": A "),r("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),r("h4",{attrs:{id:"returns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The tuple of tensors that was dequeued.")]),e._v(" "),r("h3",{attrs:{id:"dequeue-many"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dequeue-many","aria-hidden":"true"}},[e._v("#")]),e._v(" dequeue_many")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L460-L501",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" dequeue_many(\n    n,\n    name=None\n)\n")])])]),r("p",[e._v("Dequeues and concatenates n elements from this queue.")]),e._v(" "),r("p",[e._v("This operation concatenates queue-element component tensors along the 0th dimension to make a single component tensor. All of the components in the dequeued tuple will have size n in the 0th dimension.")]),e._v(" "),r("p",[e._v("If the queue is closed and there are less than n elements left, then an OutOfRange exception is raised.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/OutOfRangeError",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.errors.OutOfRangeError"),r("OutboundLink")],1),e._v("At runtime, this operation may raise an error if the queue is tf.QueueBase.close before or during its execution. If the queue is closed, the queue contains fewer than n elements, and there are no pending enqueue operations that can fulfill this request,  will be raised. If the session is tf.Session.close, tf.errors.CancelledError will be raised.")]),e._v(" "),r("h4",{attrs:{id:"args-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("n")]),e._v(": A scalar "),r("code",[e._v("Tensor")]),e._v(" co"),r("code",[e._v("n")]),e._v("tai"),r("code",[e._v("n")]),e._v("i"),r("code",[e._v("n")]),e._v("g the "),r("code",[e._v("n")]),e._v("umber of eleme"),r("code",[e._v("n")]),e._v("ts to dequeue.")]),e._v(" "),r("li",[r("code",[e._v("n")]),e._v("ame: A "),r("code",[e._v("n")]),e._v("ame for the operatio"),r("code",[e._v("n")]),e._v(" (optio"),r("code",[e._v("n")]),e._v("al).")])]),e._v(" "),r("h4",{attrs:{id:"returns-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The list of concatenated tensors that was dequeued.")]),e._v(" "),r("h3",{attrs:{id:"dequeue-up-to"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dequeue-up-to","aria-hidden":"true"}},[e._v("#")]),e._v(" dequeue_up_to")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L503-L542",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" dequeue_up_to(\n    n,\n    name=None\n)\n")])])]),r("p",[e._v("Dequeues and concatenates n elements from this queue.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/UnimplementedError",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.errors.UnimplementedError"),r("OutboundLink")],1),e._v("Note This operation is not supported by all queues. If a queue does not support DequeueUpTo, then a  is raised.")]),e._v(" "),r("p",[e._v("This operation concatenates queue-element component tensors along the 0th dimension to make a single component tensor. If the queue has not been closed, all of the components in the dequeued tuple will have size n in the 0th dimension.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/OutOfRangeError",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.errors.OutOfRangeError"),r("OutboundLink")],1),e._v("If the queue is closed and there are more than 0 but fewer than n elements remaining, then instead of raising a  like tf.QueueBase.dequeue_many, less than n elements are returned immediately. If the queue is closed and there are 0 elements left in the queue, then a  is raised just like in dequeue_many. Otherwise the behavior is identical to dequeue_many.")]),e._v(" "),r("h4",{attrs:{id:"args-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("n")]),e._v(": A scalar "),r("code",[e._v("Tensor")]),e._v(" co"),r("code",[e._v("n")]),e._v("tai"),r("code",[e._v("n")]),e._v("i"),r("code",[e._v("n")]),e._v("g the "),r("code",[e._v("n")]),e._v("umber of eleme"),r("code",[e._v("n")]),e._v("ts to dequeue.")]),e._v(" "),r("li",[r("code",[e._v("n")]),e._v("ame: A "),r("code",[e._v("n")]),e._v("ame for the operatio"),r("code",[e._v("n")]),e._v(" (optio"),r("code",[e._v("n")]),e._v("al).")])]),e._v(" "),r("h4",{attrs:{id:"returns-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The tuple of concatenated tensors that was dequeued.")]),e._v(" "),r("h3",{attrs:{id:"enqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enqueue","aria-hidden":"true"}},[e._v("#")]),e._v(" enqueue")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L312-L349",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" enqueue(\n    vals,\n    name=None\n)\n")])])]),r("p",[e._v("Enqueues one element to this queue.")]),e._v(" "),r("p",[e._v("If the queue is full when this operation executes, it will block until the element has been enqueued.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/CancelledError",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.errors.CancelledError"),r("OutboundLink")],1),e._v("At runtime, this operation may raise an error if the queue is tf.QueueBase.close before or during its execution. If the queue is closed before this operation runs,  will be raised. If this operation is blocked, and either (i) the queue is closed by a close operation with cancel_pending_enqueues=True, or (ii) the session is tf.Session.close,  will be raised.")]),e._v(" "),r("h4",{attrs:{id:"args-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("vals")]),e._v(": A tensor, a list or tuple of tensors, or a dictionary containing the values to enqueue.")]),e._v(" "),r("li",[r("code",[e._v("name")]),e._v(": A "),r("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),r("h4",{attrs:{id:"returns-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The operation that enqueues a new tuple of tensors to the queue.")]),e._v(" "),r("h3",{attrs:{id:"enqueue-many"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enqueue-many","aria-hidden":"true"}},[e._v("#")]),e._v(" enqueue_many")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L351-L397",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" enqueue_many(\n    vals,\n    name=None\n)\n")])])]),r("p",[e._v("Enqueues zero or more elements to this queue.")]),e._v(" "),r("p",[e._v("This operation slices each component tensor along the 0th dimension to make multiple queue elements. All of the tensors in vals must have the same size in the 0th dimension.")]),e._v(" "),r("p",[e._v("If the queue is full when this operation executes, it will block until all of the elements have been enqueued.\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/errors/CancelledError",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.errors.CancelledError"),r("OutboundLink")],1),e._v("At runtime, this operation may raise an error if the queue is tf.QueueBase.close before or during its execution. If the queue is closed before this operation runs,  will be raised. If this operation is blocked, and either (i) the queue is closed by a close operation with cancel_pending_enqueues=True, or (ii) the session is tf.Session.close,  will be raised.")]),e._v(" "),r("h4",{attrs:{id:"args-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("vals")]),e._v(": A tensor, a list or tuple of tensors, or a dictionary from which the queue elements are taken.")]),e._v(" "),r("li",[r("code",[e._v("name")]),e._v(": A "),r("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),r("h4",{attrs:{id:"returns-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The operation that enqueues a batch of tuples of tensors to the queue.")]),e._v(" "),r("h3",{attrs:{id:"from-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from-list","aria-hidden":"true"}},[e._v("#")]),e._v(" from_list")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L185-L224",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" from_list(\n    index,\n    queues\n)\n")])])]),r("p",[e._v("Create a queue using the queue reference from queues[index].")]),e._v(" "),r("h4",{attrs:{id:"args-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("index")]),e._v(": An integer scalar tensor that determines the input that gets selected.")]),e._v(" "),r("li",[r("code",[e._v("queues")]),e._v(": A list of "),r("code",[e._v("QueueBase")]),e._v(" objects.")])]),e._v(" "),r("h4",{attrs:{id:"returns-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("A QueueBase object.")]),e._v(" "),r("h4",{attrs:{id:"raises"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("TypeError")]),e._v(": When "),r("code",[e._v("queues")]),e._v(" is not a list of "),r("code",[e._v("QueueBase")]),e._v(" objects, or when the data types of "),r("code",[e._v("queues")]),e._v(" are not all the same.")])]),e._v(" "),r("h3",{attrs:{id:"is-closed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#is-closed","aria-hidden":"true"}},[e._v("#")]),e._v(" is_closed")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L579-L596",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" is_closed(name=None)\n")])])]),r("p",[e._v("Returns true if queue is closed.")]),e._v(" "),r("p",[e._v("This operation returns true if the queue is closed and false if the queue is open.")]),e._v(" "),r("h4",{attrs:{id:"args-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("name")]),e._v(": A "),r("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),r("h4",{attrs:{id:"returns-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("True if the queue is closed and false if the queue is open.")]),e._v(" "),r("h3",{attrs:{id:"size"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#size","aria-hidden":"true"}},[e._v("#")]),e._v(" size")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L598-L612",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" size(name=None)\n")])])]),r("p",[e._v("Compute the number of elements in this queue.")]),e._v(" "),r("h4",{attrs:{id:"args-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-10","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("name")]),e._v(": A "),r("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),r("h4",{attrs:{id:"returns-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("A scalar tensor containing the number of elements in this queue.")])])}),[],!1,null,null,null);t.default=s.exports}}]);