import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-interfazprincipal',
  templateUrl: './interfazprincipal.page.html',
  styleUrls: ['./interfazprincipal.page.scss'],
})
export class InterfazprincipalPage implements OnInit {
  valorNombreTienda: string = '';
  valorUrl: string = '';

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  // Navega a la página indicada
  navigateTo(path: string) {
    this.navCtrl.navigateForward(`/${path}`);
  }

  ngOnInit() {
    // Carga el nombre y la imagen de la tienda del usuario logueado
    this.valorNombreTienda = localStorage.getItem('activeShopName') || 'Nombre de Tienda';
    this.valorUrl = localStorage.getItem('activeShopImage') || 'ruta-imagen';
  }
}