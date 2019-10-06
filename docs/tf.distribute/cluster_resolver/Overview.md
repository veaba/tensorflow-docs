
Library imports for ClusterResolvers.

This library contains all implementations of ClusterResolvers. ClusterResolvers are a way of specifying cluster information for distributed execution. Built on top of existing ClusterSpec framework, ClusterResolvers are a way for TensorFlow to communicate with various cluster management systems (e.g. GCE, AWS, etc...).
## Classes
[class ClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver): Abstract class for all implementations of ClusterResolvers.

[class GCEClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/GCEClusterResolver): ClusterResolver for Google Compute Engine.

[class KubernetesClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/KubernetesClusterResolver): ClusterResolver for Kubernetes.

[class SimpleClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/SimpleClusterResolver): Simple implementation of ClusterResolver that accepts a ClusterSpec.

[class SlurmClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver): ClusterResolver for system with Slurm workload manager.

[class TFConfigClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver): Implementation of a ClusterResolver which reads the TF_CONFIG EnvVar.

[class TPUClusterResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver): Cluster Resolver for Google Cloud TPUs.

[class UnionResolver](https://www.tensorflow.org/api_docs/python/tf/distribute/cluster_resolver/UnionResolver): Performs a union on underlying ClusterResolvers.

