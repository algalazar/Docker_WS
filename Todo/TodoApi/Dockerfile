# verwende das Image microsoft/aspnetcore-build und gib den Namen 'build'
FROM microsoft/aspnetcore-build AS build

# setz das working directory auf '/app'
WORKDIR /app

# kopiere die #.csproj Datei in das working directory
COPY *.csproj .

# führe den Befehl 'dotnet resore' aus
RUN dotnet restore

# kopiere die restlichen Dateien aus dem aktuellen Verzeichnis in das working directory
COPY . .

# führe den Befehl 'dotnet publish -c Release -o out' aus
RUN dotnet publish -c Release -o out

# verwende jetzt das Image microsoft/aspnetcore
FROM microsoft/aspnetcore

# setze auch hier das working directory auf '/app'
WORKDIR /app

# kopiere den output des 'build' Images vom Verzeichnis '/app/out' in das working directory
COPY --from=build /app/out .

# erstelle ein Verzeichnis 'db' im working directory
RUN mkdir db

ENTRYPOINT [ "dotnet", "TodoApi.dll" ]
