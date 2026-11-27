
const test = require('node:test');
const assert = require('node:assert/strict');

const {
    RegistroManual,
    RegistroPorLista,
    GestorAsistencia
} = require('./asistencia.js');

// Prueba 1: registro manual
test('Prueba 1: registro manual', () => {
    const estrategia = new RegistroManual();

    const resultado = estrategia.registrar([
        { nombre: 'Ana', matricula: '001', estado: 'Presente' }
    ]);

    assert.equal(resultado.length, 1);
    assert.equal(resultado[0].estado, 'Presente');
});

// Prueba 2: registro por lista
test('Prueba 2: registro por lista', () => {
    const estrategia = new RegistroPorLista();

    const resultado = estrategia.registrar([
        { nombre: 'Ana', matricula: '001', estado: 'Presente' },
        { nombre: 'Luis', matricula: '002', estado: 'Ausente' }
    ]);

    assert.equal(resultado.length, 2);
});

// Prueba 3: conservar el estado Tarde
test('Prueba 3: conservar los estados', () => {
    const estrategia = new RegistroManual();

    const resultado = estrategia.registrar([
        { nombre: 'Pedro', matricula: '003', estado: 'Tarde' }
    ]);

    assert.equal(resultado[0].estado, 'Tarde');
});

// Prueba 4: cambiar de estrategia
test('Prueba 4: cambiar de estrategia', () => {
    const gestor = new GestorAsistencia(new RegistroManual());

    gestor.cambiarEstrategia(new RegistroPorLista());

    assert.ok(gestor.estrategia instanceof RegistroPorLista);
});

// Prueba 5: integración del gestor
test('Prueba 5: integración del gestor', () => {
    const gestor = new GestorAsistencia(new RegistroPorLista());

    const resultado = gestor.registrarAsistencia([
        { nombre: 'Maria', matricula: '004', estado: 'Presente' },
        { nombre: 'Jose', matricula: '005', estado: 'Ausente' }
    ]);

    assert.equal(resultado.length, 2);
});

// Prueba 6: rechazar matrícula vacía
test('Prueba 6: rechazar matrícula vacía', () => {
    const estrategia = new RegistroManual();

    assert.throws(() => {
        estrategia.registrar([
            { nombre: 'Ana', matricula: '', estado: 'Presente' }
        ]);
    }, /matrícula es obligatoria/);
});

// Prueba 7: rechazar estado inválido
test('Prueba 7: rechazar estado inválido', () => {
    const estrategia = new RegistroManual();

    assert.throws(() => {
        estrategia.registrar([
            { nombre: 'Luis', matricula: '006', estado: 'En duda' }
        ]);
    }, /Estado de asistencia inválido/);
});

// Prueba 8: rechazar lista incorrecta
test('Prueba 8: rechazar datos que no sean una lista', () => {
    const estrategia = new RegistroManual();

    assert.throws(() => {
        estrategia.registrar(null);
    }, /Debe proporcionar una lista/);
});

// Prueba 9: rechazar estrategia inválida
test('Prueba 9: rechazar estrategia inválida', () => {
    assert.throws(() => {
        new GestorAsistencia(null);
    }, /Estrategia de asistencia inválida/);
});



