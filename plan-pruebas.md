
# Plan de pruebas – EduLista

## 1. Objetivo
Comprobar que las funciones principales de EduLista respondan correctamente a las necesidades de los docentes.

## 2. Casos de prueba

### Caso 1. Registro de estudiantes
- Entrada: nombre y matrícula completos.
- Resultado esperado: el estudiante queda registrado.
- Escenario negativo: intentar registrar sin matrícula.
- Resultado esperado: el sistema debe indicar que falta ese dato.
- Estado: pendiente de implementación y ejecución.

### Caso 2. Inicio de sesión
- Entrada: usuario y contraseña correctos.
- Resultado esperado: permitir el acceso.
- Escenario negativo: contraseña incorrecta.
- Resultado esperado: rechazar el acceso y mostrar un mensaje.
- Estado: pendiente de implementación y ejecución.

### Caso 3. Registro de asistencia
- Entrada: estudiante con matrícula y estado Presente, Ausente o Tarde.
- Resultado esperado: registrar y conservar el estado seleccionado.
- Escenario negativo: enviar un estado no permitido.
- Resultado esperado: rechazar el dato inválido.
- Estado: cuenta con pruebas automatizadas del componente de asistencia; faltan pruebas de validación negativa.

### Caso 4. Consulta de asistencia
- Entrada: solicitar la asistencia de un estudiante registrado.
- Resultado esperado: mostrar sus registros.
- Escenario límite: consultar un estudiante sin registros.
- Resultado esperado: informar que no existen asistencias registradas.
- Estado: pendiente de implementación y ejecución.

### Caso 5. Modificación de asistencia
- Entrada: seleccionar un registro y cambiar su estado.
- Resultado esperado: actualizar el registro.
- Escenario negativo: intentar modificar un registro inexistente.
- Resultado esperado: informar que el registro no fue encontrado.
- Estado: pendiente de implementación y ejecución.

## 3. Herramientas
- GitHub.
- GitHub Actions.
- Node.js 20.
- JavaScript.
- Módulo integrado node:test.

## 4. Observaciones
Las pruebas automatizadas existentes se concentran en el componente de asistencia y el patrón Strategy. Los demás casos se documentan como escenarios de prueba pendientes porque sus funcionalidades todavía no están implementadas en el prototipo actual.
