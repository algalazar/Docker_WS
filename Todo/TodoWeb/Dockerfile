# verwende das Image node:9-alpine und gib den Namen builder
FROM node:9-alpine ...

COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

# verwende als working directory '/ng-app'

# kopiere alle Dateien aus dem aktuellen Verzeichnis in das working directory

# führe den Befehl '$(npm bin)/ng build --prod --build-optimizer' aus


# verwende jetzt das Image nginx:alpine

# kopiere die default config von 'nginx' nach '/etc/nginx/conf.d/'

# entferne die default nginx webseite mit 'rm -rf /usr/share/nginx/html/*'

# kopiere den Output des builders aus '/ng-app/dist' in das nginx html Verzeichnis



CMD ["nginx", "-g", "daemon off;"]