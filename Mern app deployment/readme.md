username : admin
password : pass


refrence video : https://www.youtube.com/watch?v=7XDeI5fyj3w&t=1s

![alt text](/dumpimgs/imagess.png)



if you want to run app locally in web-app.yaml 

```
apiVersion: v1
kind: Service
metadata:
  name: webapp-service
spec:
  type: NodePort
  selector:
    app: webapp
  ports:
    - protocol: TCP
      port: 8081
      targetPort: 8081
      nodePort: 30100
```

if you want to deploy app on aks use loadbalancer to get publicip 

> deployed app url: http://4.224.64.138:8081/

```
apiVersion: v1
kind: Service
metadata:
  name: webapp-service
spec:
  type: NodePort
  selector:
    app: LoadBalancer
  ports:
    - protocol: TCP
      port: 8081
      targetPort: 8081
```