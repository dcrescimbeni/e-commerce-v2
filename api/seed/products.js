// Product
let products = [
  {
    //ID: 1
    name: 'Air Jordan Max 200',
    price: 134.99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/5032b056-d892-4990-adb2-214137b2d4a4/jordan-air-max-200.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/4b06ca08-a705-4de5-8ad8-2cd40ee6314d/jordan-air-max-200.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/9ba6f4f0-211a-42a2-9e55-c84dc75ca152/jordan-air-max-200.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/97888e7a-a01a-4d31-a5ec-ba0968dfd65f/jordan-air-max-200.png',
    ],
    description:
      'Con elementos de diseño inspirados en las clásicas Air Jordan 4, las Jordan Max 200 garantizan un nuevo nivel de Air para seguir sosteniendo detalles asociados al legado y la comodidad creados para el futuro.',
    stock: 20,
    size: 41,
  },
  {
    //ID: 2
    name: 'Air Max Dawn Mujer',
    price: 120,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/d1d992a7-baf6-4a6d-be4c-bd3274722002/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/e627d243-01c3-4f76-8801-7afbe4fa9f66/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/dae30283-bbfa-4255-9a58-3763e048a876/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/cce27091-63be-47c2-bfbd-5ab6fa304ccb/air-max-dawn.png',
    ],
    description:
      'Las Air Max Dawn, fiel a sus orígenes, están confeccionadas con al menos un 20% de material reciclado por peso. La gamuza sintética y los demás materiales combinan el estilo vintage del running con detalles nuevos. La amortiguación Nike Air brinda comodidad para todo el día.',
    stock: 50,
    size: 36,
  },
  {
    //ID: 3
    name: 'Air Max Dawn Hombre',
    price: 120,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/37892566-76ea-41a7-bd02-36a1c612e024/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/bb6f17d0-dee1-4f7f-9b25-293f7090afd5/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/6b43a13d-1053-4c20-a227-65d9d9fe72c4/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/24c07d26-82d8-497e-9ee5-7c81d3d6968a/air-max-dawn.png',
    ],
    description:
      'Las Air Max Dawn, fiel a sus orígenes, están confeccionadas con al menos un 20% de material reciclado por peso. La gamuza sintética y los demás materiales combinan el estilo vintage del running con detalles nuevos. La amortiguación Nike Air brinda comodidad para todo el día.',
    stock: 15,
    size: 40,
  },
  {
    //ID: 4
    name: 'Nike React Infinity Run',
    price: 139.99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/76611f17-568f-454b-86e8-1da6d9445aef/react-infinity-run.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/4643517b-9add-44b9-899b-64dce9a7ca8f/react-infinity-run.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/facd151d-f221-4116-9e78-18c6fff9033a/react-infinity-run.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/f5f3fa7c-f5d4-4217-b0e5-e4dcf5854b49/react-infinity-run.jpg',
    ],
    description:
      'Diseñamos las Nike React Infinity Run para ayudar a reducir lesiones y seguir corriendo. En uno de nuestros estudios independientes más grandes, estas zapatillas ayudaron a los participantes a correr mientras entrenaban para una media maratón.',
    stock: 5,
    size: 37,
  },
  {
    //ID: 5
    name: 'Nike Joyride Dual Run',
    price: 159.99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/d92c8b89-96a1-4be7-9de8-99bfdc3d8883/nike-joyride.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/e4958e33-ec8f-4cd7-9306-302184b0071c/nike-joyride.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/7e972a76-4a49-4f1c-892a-50a5294fe231/nike-joyride.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/93f1999b-7a7d-4d06-b9aa-9c0ee442b911/nike-joyride.jpg',
    ],
    description:
      'Microesferas ubicadas en las áreas de mayor impacto y una entresuela con capacidad de respuesta que te lleva rápido y fácilmente de un paso a otro.',
    stock: 45,
    size: 36,
  },
  {
    //ID: 6
    name: 'Nike Dunk Low Retro Halloween',
    price: 120,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/bcd3ed66-6efb-4351-8355-6f62a95063b0/nike-dunk-low-retro-prm-halloween.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/6e739f74-3b00-46b5-9920-51b0297a2f24/nike-dunk-low-retro-prm-halloween.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/2270db00-3088-4281-96f9-930829aeef9f/nike-dunk-low-retro-prm-halloween.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/67c56739-5e4a-4792-8b44-a192f1911409/nike-dunk-low-retro-prm-halloween.jpg',
    ],
    description:
      'Creadas originalmente para las canchas, las Dunk salieron a la calle y, como dicen, el resto es historia. Más de 35 años después de su debut, la silueta aún ofrece un estilo audaz y desafiante.',
    stock: 20,
    size: 40,
  },
  {
    //ID: 7
    name: 'Wmns Nike Dunk Low Next Nature',
    price: 115,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/be6b6fae-9301-4a5a-a249-819a9b50f5e4/wmns-nike-dunk-low-next-nature.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/6d781be8-810f-49ff-8378-48d75be33d94/wmns-nike-dunk-low-next-nature.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/4d5e766e-89cf-4144-8ed0-ea9daa6c4249/wmns-nike-dunk-low-next-nature.jpg',
    ],
    description:
      'Creada para la cancha pero llevado a las calles, el ícono de los años 80 regresa para que hagas el bien luciendo bien.',
    stock: 25,
    size: 37,
  },
  {
    //ID: 8
    name: 'Crater Impact',
    price: 119,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/fe15cca3-b707-4377-b059-268f92162922/crater-impact.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/7307eccc-5472-49d9-ac4f-57aa61275b21/crater-impact.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/5d8bb4db-38eb-4899-b6a0-2cc020ce1d11/crater-impact.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/ebfd31e9-a2ff-4080-b59b-aa5cd8f6e382/crater-impact.png',
    ],
    description:
      'Nike Crater Impact forma parte de nuestro viaje de sustentabilidad para transformar los desechos en un calzado que se siente un poco más ligero.',
    stock: 10,
    size: 39,
  },
  {
    //ID: 9
    name: 'Blazer',
    price: 99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/a26d4947-1e7d-4e57-bf21-96d5278ab7f0/nike-blazer.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/53d52799-cecd-47b8-9b46-14c42cdb7ee0/nike-blazer.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/eb068052-55c8-403a-b91e-6bc0f1d15cc7/nike-blazer.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/75d79453-07ba-4424-b439-4c27218b8ce0/nike-blazer.png',
    ],
    description:
      'Las Blazer lo vieron todo. Desde las canchas de la NBA hasta rampas de skate y mucho más. Siempre están listas para más. En casa, en cualquier lugar y momento, tan diversas como las personas que las usan.',
    stock: 60,
    size: 37,
  },
];
