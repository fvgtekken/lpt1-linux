Hacer listado de Commits
---
Este comando nos permite ver el hostiral de commits con el hash(id) de cada commit, para poder volver atras a una version especifica de commit

git log --online

Ejemplo Tipico ->
(hash_id) - Mensaje Creado por el user
a1b2c3d Fix login redirect
9f8e7d6 Add users drawer

Este comando nos permite hash fecha autor
git log --pretty=format:"%h %ad %an | %s" --date=short


Manejar Historial de Commits
---
Para volver a un commit especifico y crear uno nuevo en base al commit elegido ->

git revert <hash>
