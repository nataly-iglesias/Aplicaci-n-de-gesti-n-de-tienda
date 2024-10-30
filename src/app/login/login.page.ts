import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username = '';
  password = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  constructor(
    private navCtrl: NavController, private modalCtrl: ModalController) {
    this.CheckRememberedUser(); 
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  OpenRegisterModal() {
    // Navega a la página de registro
    this.navCtrl.navigateForward('/registro');
  }

  // Método para manejar el inicio de sesión //
  async Login() {
    try {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      console.log('Usuarios disponibles:', usuarios);
      console.log('Usuario ingresado:', this.username);
      console.log('Contraseña ingresada:', this.password);

      // Verifica si hay usuarios registrados
      if (Array.isArray(usuarios)) {
        const usuarioEncontrado = usuarios.find(
          (usuario: any) =>
            usuario.username === this.username &&
            usuario.password === this.password
        );
        if (usuarioEncontrado) {
          console.log('Inicio de sesión exitoso');

          // Guarda los datos de la tienda del usuario en sesión
          localStorage.setItem('activeShopName', usuarioEncontrado.shopName);
          localStorage.setItem('activeShopImage', usuarioEncontrado.shopImage);

          // Guardar en `localStorage` si la opción "Remember me" está activado
          if (this.rememberMe) {
            localStorage.setItem(
              'rememberedUser',
              JSON.stringify({
                username: this.username,
                password: this.password,
              })
            );
          } else {
            // Elimina cualquier usuario recordado si "Remember me" no está activado
            localStorage.removeItem('rememberedUser');
          }
          await this.navCtrl.navigateForward('/interfazprincipal');
          // Muestra un mensaje de error al usuario
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      } else {
        alert('No hay usuarios registrados');
      }
      //Manejo de errores
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  }

  // Método para verificar si hay un usuario recordado //
  CheckRememberedUser() {
    const rememberedUser = JSON.parse(
      localStorage.getItem('rememberedUser') || '{}'
    );
    if (rememberedUser.username) {
      this.username = rememberedUser.username;
      this.password = rememberedUser.password;
      this.rememberMe = true;
    }
  }
}
