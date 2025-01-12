
### Kubernetes: Container Orchestration tool

Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications.

kubectl: commad line interface
minikube: use to learn kubernates 


### concepts : 
- config : db-url
- secrets : (env)
- Deployment : take my app and just put it in the pod (A Deployment provides declarative updates for Pods and ReplicaSets.)
    - mongo
- service : allows us to take the deployment and allow to org (exposes the port)
- NodePort :  makes availabe for external world
- ConfigMaps : A ConfigMap is an API object used to store non-confidential data in key-value pairs. Pods can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a volume.



![App arch](/dumpimgs/image.png)


Write config files in yaml 
- yaml > json


execute yaml file
- kubectl apply -f secret.yaml

Kubectl commands:
- kubectl get pod -o wide
- kubectl get services
- kubectl get secrets
- kubectl get configmap

minikube commands: 
- minikube ip
- minikube service webapp-service


deleting all resources
- kubectl delete deployment --all
- kubectl delete service --all
- kubectl delete secret --all
- kubectl delete configmap --all


