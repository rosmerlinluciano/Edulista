
class EstrategiaAsistencia {
    registrar(estudiantes) {
        throw new Error('Este método debe ser implementado');
    }
}

// Validar los datos de los estudiantes
function validarEstudiantes(estudiantes) {
    if (!Array.isArray(estudiantes)) {
        throw new Error('Debe proporcionar una lista de estudiantes');
    }

    estudiantes.forEach(estudiante => {
        if (!estudiante || typeof estudiante !== 'object') {
            throw new Error('Estudiante inválido');
        }

        if (!estudiante.nombre || !estudiante.nombre.trim()) {
            throw new Error('El nombre es obligatorio');
        }

        if (!estudiante.matricula || !String(estudiante.matricula).trim()) {
            throw new Error('La matrícula es obligatoria');
        }

        if (!['Presente', 'Ausente', 'Tarde'].includes(estudiante.estado)) {
            throw new Error('Estado de asistencia inválido');
        }
    });

    return estudiantes;
}

// Registro manual
class RegistroManual extends EstrategiaAsistencia {
    registrar(estudiantes) {
        validarEstudiantes(estudiantes);
        return estudiantes.map(estudiante => ({ ...estudiante }));
    }
}

// Registro por lista
class RegistroPorLista extends EstrategiaAsistencia {
    registrar(estudiantes) {
        validarEstudiantes(estudiantes);
        return estudiantes.map(estudiante => ({ ...estudiante }));
    }
}

// Administrador de estrategias
class GestorAsistencia {
    constructor(estrategia) {
        this.cambiarEstrategia(estrategia);
    }

    cambiarEstrategia(estrategia) {
        if (!estrategia || typeof estrategia.registrar !== 'function') {
            throw new Error('Estrategia de asistencia inválida');
        }

        this.estrategia = estrategia;
    }

    registrarAsistencia(estudiantes) {
        return this.estrategia.registrar(estudiantes);
    }
}

if (typeof module !== 'undefined') {
    module.exports = {
        EstrategiaAsistencia,
        RegistroManual,
        RegistroPorLista,
        GestorAsistencia
    };
}
