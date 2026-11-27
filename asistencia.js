// EduLista - Sistema de asistencia
// Patrón de diseño Strategy

class EstrategiaAsistencia {
    registrar(estudiantes) {
        throw new Error("Método no implementado");
    }
}

// Registro individual
class RegistroManual extends EstrategiaAsistencia {
    registrar(estudiantes) {
        return estudiantes.map(estudiante => ({
            ...estudiante,
            estado: estudiante.estado
        }));
    }
}

// Registro por lista
class RegistroPorLista extends EstrategiaAsistencia {
    registrar(estudiantes) {
        return estudiantes.map(estudiante => ({
            ...estudiante,
            estado: estudiante.estado
        }));
    }
}

// Administrador de estrategias
class GestorAsistencia {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    cambiarEstrategia(estrategia) {
        this.estrategia = estrategia;
    }

    registrarAsistencia(estudiantes) {
        return this.estrategia.registrar(estudiantes);
    }
}

// Exportar las clases para las pruebas
if (typeof module !== "undefined") {
    module.exports = {
        EstrategiaAsistencia,
        RegistroManual,
        RegistroPorLista,
        GestorAsistencia
    };
}
