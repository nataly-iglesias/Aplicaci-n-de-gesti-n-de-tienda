import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorNombre = '';
  valorDescripcion = '';
  valorCantidad: number | null = null;
  valorPrecioCosto: number | null = null;
  valorPrecioVenta: number | null = null;
  urlProducto = '';

  mostrarBoton: boolean = true;
  actualizarBoton: boolean = false;

  productos: {
    id: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    precioCosto: number;
    precioVenta: number;
    url: string; }[] = [];

  posicion: number = 0;

  constructor() {
    // Obtener productos del localStorage
    let productosLocal = localStorage.getItem('productos');
    if (productosLocal) {
      this.productos = JSON.parse(productosLocal);
    }

    this.mostrarBoton = true;
    this.actualizarBoton = false;
  }

  // Botón eliminar 
  Borrar(i: number) {
    if (confirm('¿Deseas eliminar este producto?')) {
      this.productos.splice(i, 1);
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }

  // Botón agregar
  Agregar() {
    if (
      this.valorNombre &&
      this.valorDescripcion &&
      this.valorCantidad &&
      this.valorPrecioCosto &&
      this.valorPrecioVenta &&
      this.urlProducto
    ) {
      // Agregar producto
      this.productos.push({
        id: Date.now(), 
        nombre: this.valorNombre,
        descripcion: this.valorDescripcion,
        cantidad: this.valorCantidad,
        precioCosto: this.valorPrecioCosto,
        precioVenta: this.valorPrecioVenta,
        url: this.urlProducto,
      });
      // Guardar en localStorage
      localStorage.setItem('productos', JSON.stringify(this.productos));

      alert('Producto agregado con éxito');

      // Limpiar valores
      this.valorNombre = '';
      this.valorDescripcion = '';
      this.valorCantidad = null;
      this.valorPrecioCosto = null;
      this.valorPrecioVenta = null;
      this.urlProducto = '';
    } else {
      alert('Debes completar todos los campos');
    }
  }

  // Botón actualizar
  Actualizar() {
    if (
      this.valorCantidad !== null &&
      this.valorPrecioCosto !== null &&
      this.valorPrecioVenta !== null
    ) {
      // Actualizar producto
      this.productos[this.posicion].nombre = this.valorNombre;
      this.productos[this.posicion].descripcion = this.valorDescripcion;
      this.productos[this.posicion].cantidad = this.valorCantidad;
      this.productos[this.posicion].precioCosto = this.valorPrecioCosto;
      this.productos[this.posicion].precioVenta = this.valorPrecioVenta;
      this.productos[this.posicion].url = this.urlProducto;

      this.mostrarBoton = true;
      this.actualizarBoton = false;

      alert('Producto actualizado con éxito');

      // Limpiar valores
      this.valorNombre = '';
      this.valorDescripcion = '';
      this.valorCantidad = null;
      this.valorPrecioCosto = null;
      this.valorPrecioVenta = null;
      this.urlProducto = '';

      // Guardar en localStorage
      localStorage.setItem('productos', JSON.stringify(this.productos));
    } else {
      alert('Debes completar todos los campos');
    }
  }

  // Botón cancelar
  Cancelar() {
    this.mostrarBoton = true;
    this.actualizarBoton = false;
    this.valorNombre = '';
    this.valorDescripcion = '';
    this.valorCantidad = null;
    this.valorPrecioCosto = null;
    this.valorPrecioVenta = null;
    this.urlProducto = '';

    this.mostrarBoton = true;
    this.actualizarBoton = false;
  }

  // Botón editar
  Editar(i: number) {
    this.mostrarBoton = false;
    this.actualizarBoton = true;

    // Obtener valores del producto
    this.posicion = i;
    this.valorNombre = this.productos[i].nombre;
    this.valorDescripcion = this.productos[i].descripcion;
    this.valorCantidad = this.productos[i].cantidad;
    this.valorPrecioCosto = this.productos[i].precioCosto;
    this.valorPrecioVenta = this.productos[i].precioVenta;
    this.urlProducto = this.productos[i].url;
  }
}
