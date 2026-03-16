export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Smartphone Galaxy X Pro",
    description:
      "Smartphone de última geração com tela AMOLED de 6.7 polegadas",
    price: 3499.9,
    category: "Smartphones",
    rating: 4.8,
    features: [
      'Tela AMOLED 6.7" 120Hz',
      "Câmera tripla 108MP",
      "12GB RAM + 256GB",
      "Bateria 5000mAh",
      "5G",
    ],
  },
  {
    id: "2",
    title: "Notebook UltraBook Pro",
    description: "Notebook leve e potente para trabalho e entretenimento",
    price: 5299.9,
    category: "Notebooks",
    rating: 4.9,
    features: [
      "Intel Core i7 13ª geração",
      "16GB RAM DDR5",
      "SSD 512GB NVMe",
      'Tela 15.6" Full HD',
      "Peso: 1.5kg",
    ],
  },
  {
    id: "3",
    title: "Fone de Ouvido Bluetooth Premium",
    description: "Fone com cancelamento de ruído ativo e som de alta qualidade",
    price: 899.9,
    category: "Áudio",
    rating: 4.7,
    features: [
      "Cancelamento de ruído ativo",
      "Bateria até 30 horas",
      "Bluetooth 5.3",
      "Confortável para uso prolongado",
      "Resistente à água IPX4",
    ],
  },
  {
    id: "4",
    title: "Smartwatch Fitness Plus",
    description: "Relógio inteligente com monitoramento completo de saúde",
    price: 1299.9,
    category: "Wearables",
    rating: 4.6,
    features: [
      "Monitor cardíaco 24h",
      "GPS integrado",
      "Resistente à água 5ATM",
      "Bateria 7 dias",
      "Mais de 100 modos esportivos",
    ],
  },
  {
    id: "5",
    title: 'Tablet Pro 12.9"',
    description: "Tablet profissional com caneta stylus e teclado opcional",
    price: 4199.9,
    category: "Tablets",
    rating: 4.9,
    features: [
      'Tela Liquid Retina 12.9"',
      "Processador M2",
      "8GB RAM + 128GB",
      "Suporte para Apple Pencil",
      "Face ID",
    ],
  },
  {
    id: "6",
    title: "Câmera Mirrorless 4K",
    description: "Câmera profissional para fotografia e vídeo em 4K",
    price: 6799.9,
    category: "Câmeras",
    rating: 4.8,
    features: [
      "Sensor CMOS 24MP",
      "Vídeo 4K 60fps",
      "Estabilização de 5 eixos",
      "Wi-Fi e Bluetooth",
      "Visor eletrônico OLED",
    ],
  },
  {
    id: "7",
    title: "Console de Videogame NextGen",
    description: "Console de última geração com gráficos em 4K e ray tracing",
    price: 3999.9,
    category: "Games",
    rating: 4.9,
    features: [
      "Gráficos 4K a 120fps",
      "Ray Tracing em tempo real",
      "SSD ultra-rápido 1TB",
      "Compatível com jogos anteriores",
      "Controle sem fio incluído",
    ],
  },
];
