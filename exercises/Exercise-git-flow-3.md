Pasos
1 - Crear una rama que se llame add-resources-lpi-page a partir de develop.
2 - Añadir en el archivo index.html dentro de la carpeta docs la siguiente porción de código dentro de la etiqueta <body>, debajo de la sección de Ubuntu:

<section id="linux-resources">
  <h2>Useful Linux Resources</h2>
  <ul>
    <li><a href="https://www.lpi.org/" target="_blank">LPI Official Website</a></li>
    <li><a href="https://ubuntu.com/" target="_blank">Ubuntu Official Website</a></li>
    <li><a href="https://www.gnu.org/" target="_blank">GNU Project</a></li>
  </ul>
</section>

3 - Cuando los cambios estén listos, hacer commit y pushear la rama al remoto.
4 - Crear una PR contra develop.
5 - Avisar al compañero para que revise la PR.
6 - compañero con más experiencia tiene que crear una rama release/1.1.0 a partir de develop.
