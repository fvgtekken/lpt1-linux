Contexto

Queremos mejorar la página HTML agregando una nueva sección informativa, pero sin tocar producción directo ni hacer hotfix.

Pasos
1 - Crear una rama que se llame add-linux-benefits-section a partir de develop.
2 - Modificar el archivo docs/index.html.
3 - Añadir la siguiente porción de código dentro de la etiqueta <body>, debajo de la sección ubuntu-info:

<section id="linux-benefits">
  <h2>Why Learn Linux?</h2>
  <p>
    Linux is widely used in servers, cloud platforms, cybersecurity, software
    development, and DevOps environments. Learning Linux gives you strong
    technical foundations and helps you understand how modern systems work.
  </p>
</section>

4 -Verificar que el HTML siga teniendo una estructura correcta:

- un solo <body>
- un solo <h1> principal
- la nueva sección debe quedar dentro del body
  5 - Cuando los cambios estén listos, hacer commit y pushear la rama al remoto.
  6 - Crear una PR contra develop.
  7 - Avisar al compañerito para que revise la PR.
  8 - Compañerito con más experiencia tiene que crear una rama release/1.2.0 a partir de develop.
