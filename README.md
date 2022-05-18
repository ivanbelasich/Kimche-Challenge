# Desafío para Software Engineers

Nombre postulante: [IVAN BELASICH]
Link a la app en producción: [https://kimche-challenge-rose.vercel.app/]

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Una solucion rápida que se me ocurre, es mantener las tablas hasta cierta fecha, y las fechas muy antiguas tratar de archivarlas. 
Otra solución puede ser paginar resultados y mostrar solo cierta cantidad de asistencias.
