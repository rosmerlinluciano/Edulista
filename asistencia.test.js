const test = require('node:test');
const assert = require('node:assert/strict');

const {
    RegistroManual,
    RegistroPorLista,
    GestorAsistencia
} = require('./asistencia.js');

test('Prueba 1: registro manual', () => {
    const estrategia = new RegistroManual();

    const resultado = estrategia.registrar([
        { nombre: 'Ana', matricula: '001', estado: 'Presente' }
    ]);

    assert.equal(resultado.length, 1);
    assert.equal(resultado[0].estado, 'Presente');
});

test('Prueba 2: registro por lista', () => {
    const estrategia = new RegistroPorLista();

    const resultado = estrategia.registrar([
        { nombre: 'Ana', matricula: '001', estado: 'Presente' },
        { nombre: 'Luis', matricula: '002', estado: 'Ausente' }
    ]);

    assert.equal(resultado.length, 2);
});

test('Prueba 3: conservar los estados', () => {
    const estrategia = new RegistroManual();

    const resultado = estrategia.registrar([
        { nombre: 'Pedro', matricula: '003', estado: 'Tarde' }
    ]);

    assert.equal(resultado[0].estado, 'Tarde');
});

test('Prueba 4: cambiar de estrategia', () => {
    const gestor = new GestorAsistencia(new RegistroManual());

    gestor.cambiarEstrategia(new RegistroPorLista());

    assert.ok(gestor.estrategia instanceof RegistroPorLista);
});

test('Prueba 5: integración del gestor', () => {
    const gestor = new GestorAsistencia(new RegistroPorLista());

    const resultado = gestor.registrarAsistencia([
        { nombre: 'Maria', matricula: '004', estado: 'Presente' },
        { nombre: 'Jose', matricula: '005', estado: 'Ausente' }
    ]);

    assert.equal(resultado.length, 2);
});
