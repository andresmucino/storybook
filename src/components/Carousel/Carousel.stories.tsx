import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomCarrusel } from "./Carousel";

export default {
  title: "Carousels",
  component: AtomCarrusel,
} as ComponentMeta<typeof AtomCarrusel>;

const data = [
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/Loreal-logo-1-500x234.jpg",
    title: "loreal-logo",
  },
  {
    src: "https://comunidadblogger.net/wp-content/uploads/2020/09/Privalia-750x430.png",
    title: "privalia-logo",
  },
  {
    src: "https://p.kindpng.com/picc/s/198-1984328_sears-logo-png-png-download-sears-transparent-png.png",
    title: "sears-logo",
  },
  {
    src: "https://sitio.sanluis.gob.mx/turismo/images/places/petco%20global.jpg",
    title: "petco-logo",
  },
  {
    src: "https://phantom-elmundo.unidadeditorial.es/72a72f73b1c374c9483771e86eccecab/crop/0x313/809x850/resize/473/f/webp/assets/multimedia/imagenes/2020/04/05/15860819579560.jpg",
    title: "zara-logo",
  },
];

const TemplateAtomCorousel: ComponentStory<typeof AtomCarrusel> = (args) => (
  <AtomCarrusel data={data} />
);

export const Carousel = TemplateAtomCorousel.bind({});
