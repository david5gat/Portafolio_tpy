import { Component } from '@angular/core';
import { Nabvar } from "../interface/nabvar/nabvar";
import { RouterOutlet } from '@angular/router';
import { Anuncio } from "../utilidades/anuncio/anuncio";

@Component({
  selector: 'app-inicio',
  imports: [Anuncio],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {


  videos = [
  {
    id: 1,
    title: 'Video 1',
    thumbnail: 'assets/videos/video-1.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCw_XYTLi9g2XhP94hH2X5245KxTrXiBOrA&s', // no funcional
    caption: 'Su familia también paga una condena silenciosa'
  },
  {
    id: 2,
    title: 'Video 2',
    thumbnail: 'assets/videos/video-2.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCw_XYTLi9g2XhP94hH2X5245KxTrXiBOrA&s', // no funcional
    caption: 'Conoce a ¡Tu Proceso Ya! en solo un minuto'
  },
  {
    id: 3,
    title: 'Video 3',
    thumbnail: 'assets/videos/video-3.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCw_XYTLi9g2XhP94hH2X5245KxTrXiBOrA&s', // no funcional
    caption: 'Tutorial para hacer el registro'
  },
  {
    id: 4,
    title: 'Video 4',
    thumbnail: 'assets/videos/video-4.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCw_XYTLi9g2XhP94hH2X5245KxTrXiBOrA&s', // no funcional
    caption: 'Conoce como funciona la app.'
  }
];


infoCards = [
  {
    id: 1,
    title: '¿Quiénes Somos?',
    image: 'https://t4.ftcdn.net/jpg/05/97/47/95/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg', // no funcional
    description: 'Somos una plataforma tecnológica orientada a facilitar el acceso a la justicia, promover la equidad y defender los derechos humanos. Brindamos herramientas digitales que permiten a las personas privadas de la libertad ejercer sus derechos de manera autónoma, fortaleciendo su bienestar y dignidad durante su estadía en prisión.'
  },
  {
    id: 2,
    title: '¿Qué Hacemos?',
    image: 'https://t4.ftcdn.net/jpg/05/97/47/95/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg', // no funcional
    description: 'Facilitamos a las personas privadas de la libertad y a sus seres queridos el acceso sencillo y seguro a servicios jurídicos como derechos de petición y tutelas. Contribuimos a que las familias mantengan el vínculo, participen activamente en la defensa de sus derechos y encuentren alivio en medio de la adversidad.'
  },
  {
    id: 3,
    title: '¿A Quién Va Dirigido?',
    image: 'https://t4.ftcdn.net/jpg/05/97/47/95/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg', // no funcional
    description: 'Esta plataforma nace como un puente para quienes, desde afuera, no se resignan a quedarse de brazos cruzados. Está pensada para familiares y personas cercanas a personas condenadas, que buscan acompañar con amor, esperanza y compromiso. Les brinda una herramienta clara y accesible para apoyar el seguimiento de los procesos legales y ser una voz activa en la defensa de los derechos de quienes más lo necesitan.'
  }
];


}
