1) Ver en qué rama estás y qué ramas existen
git branch

2) Crear una rama (sin cambiarte)
git branch nombre-rama

3) Crear una rama y cambiarte a esa rama (lo más común)
git switch -c nombre-rama


(alternativa vieja, también válida)

git checkout -b nombre-rama

4) Subir la rama al remoto (origin) y dejar “trackeado”
git push -u origin nombre-rama

5) Cambiarte a una rama que ya existe
git switch nombre-rama

6) Traer updates del remoto y ver ramas remotas
git fetch origin
git branch -a
