import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @ViewChild(IonModal) modal: IonModal;
  
  selectedProduct:any;
  productos: any[] = [{
    id: '001',
    nombre: 'Nevera Con Congelador Tres Puertas 25 Pies. Whirlpool. Nueva',
    precio: 1800,
    descripcion: 'Nevera con congelador Whirlpool tres puertas estilo Francés nueva en su empaque original y plástico adicional para protegerla, 25 pies, ensamblada y comprada en USA. Color Acero Inoxidable. Modelo GX5FHDXVY00. Dimensiones: 35.5 x 35.5 x 69.9 pulgadas.',
    img: 'https://http2.mlstatic.com/D_NQ_NP_646769-MLV32041955927_092019-V.webp'
  },

  {
    id: '002',
    nombre: 'Freidora De Aire Brentwood Af-202bkc De 1200w 2 Litros',
    precio: 59.99,
    descripcion: 'La potente freidora de aire eléctrica pequeña Brentwood AF-202BK de 1200 w y 2 cuartos de galón fríe rápida y uniformemente con poco o ningún aceite. Haga crujientes papas fritas, aros de cebolla, alitas de pollo, verduras asadas y más. Utilice la guía rápida de temperatura y el temporizador de 30 minutos con apagado automático para obtener resultados rápidos y crujientes. La cesta para freír extraíble de tacto frío hace que servir sea muy fácil. Superficie antiadherente fácil de limpiar.',
    img: 'https://http2.mlstatic.com/D_NQ_NP_770166-MLV47559349310_092021-V.webp'
  },
  
  {
    id: '003',
    nombre: 'Microondas Samsung 0.8 Ame83m Ceramica Gris',
    precio: 114.20,
    descripcion: 'Con la tecnología SDT (Sistema de Triple Distribución de ondas), Samsung ofrece un desempeño único y revolucionario en la cocción uniforme de alimentos, mejorando el desempeño actual de los microondas en el mercado.',
    img: 'https://http2.mlstatic.com/D_NQ_NP_846394-MLV47131630917_082021-O.webp'
  }
];

cancel() {
  this.modal.dismiss(null, 'cancel');
}

openModal(selId:string){
  for(let p of this.productos){
    if(selId == p.id){
      this.selectedProduct = p;
      break;
    }
  }
  this.modal.present();
}

}
