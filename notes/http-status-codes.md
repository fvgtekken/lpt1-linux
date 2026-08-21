##1xx – Informational: 100, 101

##100 (continue) --> son respuestas temporales, cuando el pedido (body) es muy grande, el servidor podría devolver expected:100 y seguir procesando el pedido.

##101 (switching protocols) --> ocurre cuando la app cambia el protocolo de comunicación con el servidor.
http --> operaciones puntuales
WebSocket (protocolo más usado)--> comunicación continua y en tiempo real


##2xx – Success: 200, 201, 202, 203, 204

##200 (OK) --> el servidor obtuvo la request y la procesó con éxito. ej: se editó un recurso ya creado con éxito.

##201 (created) --> cuando el servidor recibe la request, y ademas de procesarla con éxito, crea algo nuevo segun lo que solicites crear (puede ser un nuevo usuario, dashboard, comentario, etc.)

##202 (accepted) --> el servidor recibió la request, la aceptó, pero no terminó de procesarla. (Tranquilamente podría aceptar en el comienzo, y luego fallar). Ej: cuando procesas un video, haces una exportación o hacer un reporte pesado.

##203 (Non-Authoritative Information) -->  un intermediario técnico modificó la respuesta HTTP original. Ej: cliente --> proxy (intermediario técnico) --> servidor original. El servidor responde con ciertos datos, pero el proxy los modifica antes de entregarlo.

##204 (No content) --> respuesta exitosa por parte del servidor, pero sin necesidad de enviar contenido en el body. Ej: cambio de configuración, eliminación de usuario.

##3xx – Redirection: 301, 302, 303, 304

##301 (moved permanently) --> el recurso solicitado no está más en la URL, está en otra. ¿Qué mirar? buscar en HEADERS --> LOCATION, allí estará la URL actualizada.

##302 (found) --> el recurso está en otra URL de manera temporal.Ej: promocion o campaña temporal. URL destino: buscar en HEADERS --> LOCATION.

##303 (see other) --> para obtener/ver el resultado, tenes que ir a otra URL usando GET. Ej: HAGO ALGO --> POST /reports --> 303“Para ver o consultar el resultado, andá acá” --> GET /reports/87

##304 () --> Ese recurso no cambió desde la última vez que se lo pide al servidor, así que se puede usar la "copia" que hay en caché.304 normalmente no trae body, porque evita volver a traer el contenido.


##4xx – Client Error: 400, 401, 403, 404, 405, 409, 422, 429

##400 (bad request) --> El servidor recibió la request, pero  no quiere procesarla porque hay algo incorrecto en la request.

##401 (Unauthorized) --> el servidor detecta que el usuario no se autenticó correctamente. Es un problema de autenticación, no necesariamente de permisos.

##403(forbidden) --> el problema no es la autenticación, es de permisos. El usuario no tiene permisos para realizar la acción.

##404 (not found) --> El servidor recibió la request, pero no encuentra el recurso que el usuario pide.

##405 (methot not allowed) --> La URL/endpoint existe, pero no acepta el método/protocolo HTTP que el usuario usa. ¿qué mirar?--> la URL y el método (GET, POST, PUT, PATCH, DELETE) y en HEADERS podría encontrar qué métodos sí estan permitidos.

##409 (conflict) --> La request está bien, pero entra en conflicto con el estado actual del recurso. Ej: el usuario quiere crear otro usuario con un email que ya existe.

##422 (unprocessable content) --> laa request está bien formada, pero no se puede procesar porque los datos no cumplen las reglas que se esperan. Ej: email: "natalia..." / age: -5 (los datos son inválidos)

##429 (too many requests) --> el servidor limita las requests porque el usuario está haciendo muchas en un corto período de tiempo (rate limiting). posibles razones:
→ demasiados clicks o requests muy seguidos
→ un frontend que está llamando a la API en  loop
→ un script de testing demasiado agresivo
→ demasiadas requests desde la misma IP o usuario
→ límites específicos de una API externa

##5xx – Server Error: 500, 502, 503, 504

##500 (internal server error) --> La request llegó al servidor, pero algo falló internamente mientras intentaba procesarla, posibles razones:
→ excepción no controlada en el backend
→ error al consultar la base de datos
→ variable inesperadamente null
→ bug en la lógica del servidor
→ servicio interno que falla
el problema está en el servidor porque falló intentando procesarlo.

##502 (bad gateway) --> el servidor recibió la request, pero depende de otro servidor, y este otro servidor falló o devolvió una respuesta inválida.
posibles servidores intermedios: proxy, load balancer o API gateway.

##503 (service unavailable) --> El servidor existe, pero ahora mismo no puede atender la request. posibles razones:
→ servidor en mantenimiento
→ servidor saturado
→ demasiada carga
→ servicio interno temporalmente caído

##504 (gateway timeout) --> Un servidor intermediario estaba esperando la respuesta del otro servidor, pero ese otro servidor tardó demasiado en responder.
Ej: el usuario pide un reporte pesado, el backend tarda mucho en generarlo y el proxy tiene un timeout de 30 segundos. Si en esos 30 segundos no recibe respuesta, puede devolver 504




RESUMEN

100 → podés seguir enviando la request

101 → el servidor aceptó cambiar de protocolo

200 → la request fue procesada con éxito

201 → la request fue exitosa y creó un recurso nuevo

202 → la request fue aceptada, pero todavía no terminó de procesarse

203 → la respuesta fue modificada por un intermediario

204 → la request fue exitosa, pero no devuelve contenido

301 → el recurso se movió permanentemente a otra URL

302 → el recurso está temporalmente en otra URL

303 → consultá el resultado en otra URL usando GET

304 → el recurso no cambió; usá la copia en caché

400 → la request es inválida

401 → no estás autenticada correctamente

403 → estás autenticada, pero no tenés permiso

404 → el recurso o ruta no fue encontrado

405 → la ruta existe, pero ese método HTTP no está permitido

409 → la request entra en conflicto con el estado actual

422 → la request se entiende, pero los datos no pasan las validaciones

429 → hiciste demasiadas requests en poco tiempo

500 → algo interno falló procesando la request

502 → un intermediario recibió una mala respuesta de otro servidor

503 → el servicio está temporalmente no disponible

504 → un intermediario esperó demasiado la respuesta de otro servidor