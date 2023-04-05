import { Component, Input, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() selectedProduct:any;
  @Input() productos:any[] = [];
  @Input() modal:any;
  smsPromise:any;

  long: number;
  lat: number;


  constructor(private geolocation: Geolocation, private sms: SMS, public toastController:ToastController) { }

  ngOnInit() {}

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error obteniendo localizacion', error);
     });
  }

  enviarSMS(form:any){
    this.sms.send('04245142978', `SMS Desafio 3 Ionic\nNombre del cliente: ${form.form.value.name}\nTelefono del cliente: ${form.form.value.telf}\nUbicacion\nLongitud: ${this.long}\nLatitud: ${this.lat}\n \nProducto: ${this.selectedProduct.nombre}\nPrecio: ${this.selectedProduct.precio} US$`,
     {replaceLineBreaks: true}).then(()=>{
      this.presentToast('¡Mensaje enviado con éxito!');
      this.modal.dismiss(null, 'cancel');
     })
     .catch((err)=>{
      this.presentToast('Error al enviar el mensaje');
      console.log(err);
     })

  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  };

}
