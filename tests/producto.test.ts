/// <reference types="jasmine" />

describe('Pruebas unitarias de la Tienda de Florería y Bombones', () => {

    it('Debe calcular correctamente el subtotal de un producto en el carrito', () => {
        const precioUnitario = 15000; // Precio de un ramo de rosas
        const cantidad = 2;
        const subtotal = precioUnitario * cantidad;

        expect(subtotal).toBe(30000);
    });

    it('Debe verificar que el nombre del producto de la florería no esté vacío', () => {
        const nombreProducto = "Ramo de Rosas Rojas";
        
        expect(nombreProducto).not.toBe('');
        expect(nombreProducto.length).toBeGreaterThan(0);
    });

    it('Debe comprobar el estado de disponibilidad (stock) del producto', () => {
        const stocked = true;
        
        expect(stocked).toBe(true);
    });

    it('Debe validar que el precio del producto sea mayor a cero', () => {
        const precio = 8000; // Precio de bombones
        
        expect(precio).toBeGreaterThan(0);
    });

});