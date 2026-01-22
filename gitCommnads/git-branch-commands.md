## para crear una rama

git branch nueva-rama

## para crear una rama para cambiar a la rama en la que quiero hacer cambios

git switch nueva-rama
para hacer cambios en archivos, si se trata de .txt --> nano nombre-archivo.txt

## para crear una rama para preparar cambios

git add

## para crear una ramapara crear commit

git commit -m --> mensaje claro del cambio

## para subir la rama al remoto

git push -u origin nueva-rama

## para volver a main

git switch main

## para traer ultimo estado de remoto

git pull

## para mergear la rama en main

git merge nueva-rama

## subir main actualizado

git push

## si quiero borrar la nueva rama

local--> git branch -d nueva-rama
remoto--> git push origin :nueva-rama
