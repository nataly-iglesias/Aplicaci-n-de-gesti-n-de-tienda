import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage {
  valorNombre = "";
  valorDireccion = "";
  valorTelefono = "";
  valorCorreo = "";
  urlCliente = "";

  mostrarBoton: boolean = true;
  actualizarBoton: boolean = false;

  clientes: {
    id: number; 
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    url: string; }[] = [];

  posicion: number = 0;

  constructor() {
    // Obtener clientes del localStorage
    let clientesLocal = localStorage.getItem("clientes");
    if (clientesLocal) {
      this.clientes = JSON.parse(clientesLocal);
    }
    this.mostrarBoton = true; 
    this.actualizarBoton = false; 
   }

   // Botón eliminar
  Borrar(i: number) {
    if (confirm("¿Deseas eliminar a este cliente?")) {
      this.clientes.splice(i, 1);
      localStorage.setItem("clientes", JSON.stringify(this.clientes));
    }
  }

   //Botón agregar
   Agregar() {
     if (this.valorNombre && this.valorDireccion && this.valorTelefono && this.valorCorreo && this.urlCliente) {
       this.clientes.push({
         id:Date.now(),
         nombre: this.valorNombre,
         direccion: this.valorDireccion,
         telefono: this.valorTelefono,
         correo: this.valorCorreo,
         url: this.urlCliente
       });
       // Guardar en localStorage
       localStorage.setItem("clientes", JSON.stringify(this.clientes));

       alert("Cliente agregado con éxito");

       // Limpiar valores
       this.valorNombre = "";
       this.valorDireccion = "";
       this.valorTelefono = "";
       this.valorCorreo = "";
       this.urlCliente = "";
     }
      else {
        alert("Debes completar todos los campos");
      }
   }

  // Botón actualizar
  Actualizar() {
    // Validar campos
    if (this.valorNombre && this.valorDireccion && this.valorTelefono && this.valorCorreo && this.urlCliente) {
      this.clientes[this.posicion].nombre = this.valorNombre;
      this.clientes[this.posicion].direccion = this.valorDireccion;
      this.clientes[this.posicion].telefono = this.valorTelefono;
      this.clientes[this.posicion].correo = this.valorCorreo;
      this.clientes[this.posicion].url = this.urlCliente;

      this.mostrarBoton = true;
      this.actualizarBoton = false;

      alert("Cliente actualizado con éxito");

      // Limpiar valores
      this.valorNombre = "";
      this.valorDireccion = "";
      this.valorTelefono = "";
      this.valorCorreo = "";
      this.urlCliente = "";

      localStorage.setItem("clientes", JSON.stringify(this.clientes));
    }
    else {
      alert("Debes completar todos los campos");
    }
  }

  // Botón cancelar
  Cancelar() {
    this.mostrarBoton = true;
    this.actualizarBoton = false;

    this.valorNombre = "";
    this.valorDireccion = "";
    this.valorTelefono = "";
    this.valorCorreo = "";
    this.urlCliente = "";
  }

  // Botón editar
  Editar(i: number) {
    this.mostrarBoton = false;
    this.actualizarBoton = true;

    this.posicion = i;

    this.valorNombre = this.clientes[i].nombre;
    this.valorDireccion = this.clientes[i].direccion;
    this.valorTelefono = this.clientes[i].telefono;
    this.valorCorreo = this.clientes[i].correo;
    this.urlCliente = this.clientes[i].url;
  }
}
