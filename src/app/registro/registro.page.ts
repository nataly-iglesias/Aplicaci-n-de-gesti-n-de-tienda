import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nuevoUsuario = {
    valorUsuario: '',
    valorPassword: '',
    valorNombreTienda: '',
    valorUrl: '',
  };

  constructor( private navCtrl: NavController, private modalCtrl: ModalController) {}

  RegistrarUsuario() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Crea un nuevo usuario con los campos de entrada
    const nuevoUsuario = {
      id: Date.now(),
      username: this.nuevoUsuario.valorUsuario.trim(), 
      password: this.nuevoUsuario.valorPassword.trim(), 
      shopName: this.nuevoUsuario.valorNombreTienda,
      shopImage: this.nuevoUsuario.valorUrl,
    };

    //Valida que los datos no estén vacíos
    if (!nuevoUsuario.username || !nuevoUsuario.password || !nuevoUsuario.shopName || !nuevoUsuario.shopImage) {
      alert('Debes completar todos los campos');
      return;
    }

    // Verifica si el usuario ya existe
    const usuarioExistente = usuarios.find((usuario: any) => usuario.username === nuevoUsuario.username);
    if (usuarioExistente) {
      alert('El usuario ya existe');
      return;
    }

    // Agrega el nuevo usuario al array y lo guarda en `localStorage`
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario registrado con éxito');
    console.log('Usuarios registrados:', JSON.parse(localStorage.getItem('usuarios') || '[]')); 

    this.navCtrl.navigateForward('/login');
  }
}
