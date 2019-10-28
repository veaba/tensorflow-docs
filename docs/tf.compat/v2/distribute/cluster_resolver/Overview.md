Library imports for ClusterResolvers.
This library contains all implementations of ClusterResolvers. ClusterResolvers are a way of specifying cluster information for distributed execution. Built on top of existing `ClusterSpec` framework, ClusterResolvers are a way for TensorFlow to communicate with various cluster management systems (e.g. GCE, AWS, etc...).
## Classes
`class ClusterResolver`: Abstract class for all implementations of ClusterResolvers.
`class GCEClusterResolver`: ClusterResolver for Google Compute Engine.
`class KubernetesClusterResolver`: ClusterResolver for Kubernetes.
`class SimpleClusterResolver`: Simple implementation of ClusterResolver that accepts a ClusterSpec.
`class SlurmClusterResolver`: ClusterResolver for system with Slurm workload manager.
`class TFConfigClusterResolver`: Implementation of a ClusterResolver which reads the TF_CONFIG EnvVar.
`class TPUClusterResolver`: Cluster Resolver for Google Cloud TPUs.
`class UnionResolver`: Performs a union on underlying ClusterResolvers.
