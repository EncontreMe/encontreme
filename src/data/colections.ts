import { CeramicProduct } from "./products";

export type Collection = {
    id: number;
    name: string;
    totalProducts: number;
    visibility: boolean;
    products: CeramicProduct[];
  };

export const collections: Collection[] = [
    { id: 1, name: "Xícaras",totalProducts: 2, visibility: false, products: [
        {
            id: 1,
            slug: "vaso-rustico-terracota",
            name: "Vaso Rústico Terracota",
            price: 120.0,
            description: "Vaso artesanal em terracota, ideal para ambientes rústicos e jardins internos.",
            imageURL: "/vaso_rustico.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
          {
            id: 2,
            slug: "vaso-minimalista-branco",
            name: "Vaso Minimalista Branco",
            price: 85.5,
            description: "Vaso de cerâmica com design minimalista e acabamento fosco, perfeito para decoração moderna.",
            imageURL: "/vaso_minimalista_branco.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 80.0,
          },
    ] },
    { id: 2, name: "Mais Vendidos",totalProducts: 5, visibility: true, products: [
        {
            id: 2,
            slug: "vaso-minimalista-branco",
            name: "Vaso Minimalista Branco",
            price: 85.5,
            description: "Vaso de cerâmica com design minimalista e acabamento fosco, perfeito para decoração moderna.",
            imageURL: "/vaso_minimalista_branco.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 80.0,
          },
          {
            id: 3,
            slug: "centro-de-mesa-esmaltado",
            name: "Centro de Mesa Esmaltado",
            price: 200.0,
            description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
            imageURL: "/centro_de_mesa_esmaltado.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 192.0,
          },
          {
            id: 4,
            slug: "vaso-geométrico-cinza",
            name: "Vaso Geométrico Cinza",
            price: 95.0,
            description: "Vaso com formato geométrico e acabamento texturizado, excelente para plantas suculentas.",
            imageURL: "/vaso_geometrico_cinza.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 90.0,
          },
          {
            id: 5,
            slug: "conjunto-de-vasos-coloridos",
            name: "Conjunto de Vasos Coloridos",
            price: 180.0,
            description: "Conjunto com três vasos de tamanhos diferentes, decorados à mão em cores vibrantes.",
            imageURL: "/conjunto_de_vasos_coloridos.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
          {
            id: 6,
            slug: "vaso-boho-em-ceramica-natural",
            name: "Vaso Boho em Cerâmica Natural",
            price: 75.0,
            description: "Vaso com padrão boho em cerâmica natural, perfeito para criar um ambiente aconchegante.",
            imageURL: "/vaso_boho_em_ceramica_natural.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 70.0,
          },
          {
            id: 7,
            slug: "vaso-de-parede-com-alca",
            name: "Vaso de Parede com Alça",
            price: 110.0,
            description: "Vaso suspenso com alça de couro, ideal para decorar paredes com plantas pendentes.",
            imageURL: "/vaso_de_parede_com_alca.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
          {
            id: 8,
            slug: "vaso-pequeno-com-detalhes-dourados",
            name: "Vaso Pequeno com Detalhes Dourados",
            price: 50.0,
            description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
            imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
            compare: false,
            visibility: false,
            pricePromotion: 0.0,
          },
    ] },
    { id: 3, name: "Cozinha",totalProducts: 10,visibility: false, products: [
        {
            id: 3,
            slug: "centro-de-mesa-esmaltado",
            name: "Centro de Mesa Esmaltado",
            price: 200.0,
            description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
            imageURL: "/centro_de_mesa_esmaltado.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 192.0,
          },
          {
            id: 4,
            slug: "vaso-geométrico-cinza",
            name: "Vaso Geométrico Cinza",
            price: 95.0,
            description: "Vaso com formato geométrico e acabamento texturizado, excelente para plantas suculentas.",
            imageURL: "/vaso_geometrico_cinza.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 90.0,
          },
          {
            id: 8,
            slug: "vaso-pequeno-com-detalhes-dourados",
            name: "Vaso Pequeno com Detalhes Dourados",
            price: 50.0,
            description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
            imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
            compare: false,
            visibility: false,
            pricePromotion: 0.0,
          },
    ] },
    { id: 4, name: "Escritório",totalProducts: 7,visibility: true, products: [
        {
            id: 8,
            slug: "vaso-pequeno-com-detalhes-dourados",
            name: "Vaso Pequeno com Detalhes Dourados",
            price: 50.0,
            description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
            imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
            compare: false,
            visibility: false,
            pricePromotion: 0.0,
          },
    ] },
    { id: 5, name: "Decoração",totalProducts: 12,visibility: true, products: [
        {
            id: 2,
            slug: "vaso-minimalista-branco",
            name: "Vaso Minimalista Branco",
            price: 85.5,
            description: "Vaso de cerâmica com design minimalista e acabamento fosco, perfeito para decoração moderna.",
            imageURL: "/vaso_minimalista_branco.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 80.0,
          },
          {
            id: 3,
            slug: "centro-de-mesa-esmaltado",
            name: "Centro de Mesa Esmaltado",
            price: 200.0,
            description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
            imageURL: "/centro_de_mesa_esmaltado.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 192.0,
          },
          {
            id: 4,
            slug: "vaso-geométrico-cinza",
            name: "Vaso Geométrico Cinza",
            price: 95.0,
            description: "Vaso com formato geométrico e acabamento texturizado, excelente para plantas suculentas.",
            imageURL: "/vaso_geometrico_cinza.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 90.0,
          },
          {
            id: 5,
            slug: "conjunto-de-vasos-coloridos",
            name: "Conjunto de Vasos Coloridos",
            price: 180.0,
            description: "Conjunto com três vasos de tamanhos diferentes, decorados à mão em cores vibrantes.",
            imageURL: "/conjunto_de_vasos_coloridos.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
          {
            id: 6,
            slug: "vaso-boho-em-ceramica-natural",
            name: "Vaso Boho em Cerâmica Natural",
            price: 75.0,
            description: "Vaso com padrão boho em cerâmica natural, perfeito para criar um ambiente aconchegante.",
            imageURL: "/vaso_boho_em_ceramica_natural.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 70.0,
          },
          {
            id: 7,
            slug: "vaso-de-parede-com-alca",
            name: "Vaso de Parede com Alça",
            price: 110.0,
            description: "Vaso suspenso com alça de couro, ideal para decorar paredes com plantas pendentes.",
            imageURL: "/vaso_de_parede_com_alca.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
          {
            id: 8,
            slug: "vaso-pequeno-com-detalhes-dourados",
            name: "Vaso Pequeno com Detalhes Dourados",
            price: 50.0,
            description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
            imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
            compare: false,
            visibility: false,
            pricePromotion: 0.0,
          },
    ] },
    { id: 6, name: "Banheiro",totalProducts: 4,visibility: true, products: [
        {
            id: 2,
            slug: "vaso-minimalista-branco",
            name: "Vaso Minimalista Branco",
            price: 85.5,
            description: "Vaso de cerâmica com design minimalista e acabamento fosco, perfeito para decoração moderna.",
            imageURL: "/vaso_minimalista_branco.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 80.0,
          },
          {
            id: 3,
            slug: "centro-de-mesa-esmaltado",
            name: "Centro de Mesa Esmaltado",
            price: 200.0,
            description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
            imageURL: "/centro_de_mesa_esmaltado.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 192.0,
          },
          {
            id: 4,
            slug: "vaso-geométrico-cinza",
            name: "Vaso Geométrico Cinza",
            price: 95.0,
            description: "Vaso com formato geométrico e acabamento texturizado, excelente para plantas suculentas.",
            imageURL: "/vaso_geometrico_cinza.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 90.0,
          },
          {
            id: 8,
            slug: "vaso-pequeno-com-detalhes-dourados",
            name: "Vaso Pequeno com Detalhes Dourados",
            price: 50.0,
            description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
            imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
            compare: false,
            visibility: false,
            pricePromotion: 0.0,
          },
    ] },
    { id: 7, name: "Quarto",totalProducts: 8,visibility: false, products: [
          {
            id: 3,
            slug: "centro-de-mesa-esmaltado",
            name: "Centro de Mesa Esmaltado",
            price: 200.0,
            description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
            imageURL: "/centro_de_mesa_esmaltado.jpg",
            compare: true,
            visibility: true,
            pricePromotion: 192.0,
          },
          {
            id: 4,
            slug: "vaso-geométrico-cinza",
            name: "Vaso Geométrico Cinza",
            price: 95.0,
            description: "Vaso com formato geométrico e acabamento texturizado, excelente para plantas suculentas.",
            imageURL: "/vaso_geometrico_cinza.jpg",
            compare: true,
            visibility: false,
            pricePromotion: 90.0,
          },
    
          {
            id: 7,
            slug: "vaso-de-parede-com-alca",
            name: "Vaso de Parede com Alça",
            price: 110.0,
            description: "Vaso suspenso com alça de couro, ideal para decorar paredes com plantas pendentes.",
            imageURL: "/vaso_de_parede_com_alca.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
          {
            id: 8,
            slug: "vaso-pequeno-com-detalhes-dourados",
            name: "Vaso Pequeno com Detalhes Dourados",
            price: 50.0,
            description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
            imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
            compare: false,
            visibility: false,
            pricePromotion: 0.0,
          },
    ] },
    { id: 8, name: "Sala",totalProducts: 6, visibility: true, products: [    {
        id: 2,
        slug: "vaso-minimalista-branco",
        name: "Vaso Minimalista Branco",
        price: 85.5,
        description: "Vaso de cerâmica com design minimalista e acabamento fosco, perfeito para decoração moderna.",
        imageURL: "/vaso_minimalista_branco.jpg",
        compare: true,
        visibility: false,
        pricePromotion: 80.0,
      },
      {
        id: 3,
        slug: "centro-de-mesa-esmaltado",
        name: "Centro de Mesa Esmaltado",
        price: 200.0,
        description: "Peça única com acabamento esmaltado em tons azulados, ideal como centro de mesa.",
        imageURL: "/centro_de_mesa_esmaltado.jpg",
        compare: true,
        visibility: true,
        pricePromotion: 192.0,
      },
        {
        id: 8,
        slug: "vaso-pequeno-com-detalhes-dourados",
        name: "Vaso Pequeno com Detalhes Dourados",
        price: 50.0,
        description: "Pequeno vaso decorativo com detalhes dourados, ideal para flores de pequeno porte.",
        imageURL: "/vaso_pequeno_com_detalhes_dourados.jpg",
        compare: false,
        visibility: false,
        pricePromotion: 0.0,
      },]},
    { id: 9, name: "Promoções",totalProducts: 3, visibility: true, products: [] },
    { id: 10, name: "Novidades",totalProducts: 9, visibility: false, products: [] },
    { id: 11, name: "BlackFriday",totalProducts: 9, visibility: true, products: [
        {
            id: 1,
            slug: "vaso-rustico-terracota",
            name: "Vaso Rústico Terracota",
            price: 120.0,
            description: "Vaso artesanal em terracota, ideal para ambientes rústicos e jardins internos.",
            imageURL: "/vaso_rustico.jpg",
            compare: false,
            visibility: true,
            pricePromotion: 0.0,
          },
    ] }
];