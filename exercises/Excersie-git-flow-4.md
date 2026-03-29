Contexto

El HTML actualmente deployado tiene un problema de estructura:

<body> está repetido
hay un <h1> duplicado
la sección de Ubuntu quedó mal ubicada

Pasos
1 - Crear una rama que se llame hotfix/fix-index-html-structure a partir de main.
2 - Corregir el archivo docs/index.html para que quede con una estructura HTML válida.
3 - El archivo debe quedar así:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Linux</title>
  </head>
  <body>
    <h1>Welcome to Linux</h1>

    <h2>LPI Linux Essentials Summary</h2>

    <ul>
      <li>Understand the Linux operating system and open-source concepts.</li>
      <li>Learn basic command-line usage and file management.</li>
      <li>Understand users, groups, permissions, and processes.</li>
      <li>Learn simple networking concepts and common Linux tools.</li>
      <li>Understand security basics and system administration foundations.</li>
    </ul>

    <section id="ubuntu-info">
      <h2>About Ubuntu</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
        alt="Tux Penguin"
        width="120"
      />
      <p>
        Ubuntu is a popular Linux distribution based on Debian. It is known for
        being user-friendly, stable, and widely used by developers, students, and
        companies around the world.
      </p>
    </section>

  </body>
</html>

4 - Cuando los cambios estén listos, hacer commit y pushear la rama al remoto.
5 - Crear una PR contra main.
6 - Avisar al compañerito para que revise y haga merge.
7- Después del merge en main, el compañerito también tiene que llevar ese hotfix de vuelta a develop para que ambas ramas queden alineadas.
