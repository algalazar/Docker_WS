# Dockerfile für Node.js app
#
# Dieses Verzeichniss enthält eine Node.js app, welche in einem Container laufen muss.
# Es sind keine Änderungen an der app notwendig.
#
# Aufgabe: Erstellen des Dockerfiles welches folgende Schritte ausführt:

# 1. Als Basis soll das offizielle 'node' Image mit dem 'alpine' Branch '6.x' verwendet werden
FROM node:6-alpine
# 2. Der Port 3000 soll zur verfügung gestellt werden.
EXPOSE 3000
# 3. 'tini' muss mit dem alpine package manager installiert werden:
#    apk add --update tini
RUN apk add --update tini
# 4. Es muss ein Verzeichnis '/usr/src/app' mit 'mkdir -p' erstellt werden.
#    In dieses Verzeichnis müssen die app Dateien kopiert werden.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# 5. Node verwendet einen "Package Manager", also muss die Datei 'package.json' kopiert werden.
COPY package.json .
# 6. Damit alle Abhängigkeiten installiert werden, muss 'npm install' ausgeführt werden.
#    Damit das Image nicht zu viel Platz in Anspruch nimmt, sollte noch 'npm cache clean --force' ausgeführt werden.
RUN npm install && npm cache clean --force
# 7. Jetzt müssen alle Dateien aus dem aktuellen Verzeichnis hierher kopiert werden.
COPY . .
# 8. Der Container muss mit dem Command 'tini -- node ./bin/www' gestartet werden.
CMD ["tini", "--", "node", "./bin/www"]

# Idealerwerise werden die Commands FROM, RUN, WORKDIR, EXPOSE und CMD verwendet.