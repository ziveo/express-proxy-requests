## Proxy requests to other Express server

### App 1 - express-hello-world-1
Routes:
- http://localhost:3000/
- http://localhost:3000/proxy - This route will proxy the request to `http://localhost:3001/`
- http://localhost:3000/proxy/123 - This route will proxy the request to `http://localhost:3001/123`
- 
- ### App 2 - express-hello-world-2
Routes:
- http://localhost:3001/
- http://localhost:3001/123
