// Product
let products = [
  {
    productId: 1,
    name: 'Nike Air Max Plus',
    price: 175,
    img: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d373e88e-83f7-4c8b-8870-74dd12ed4ed7/air-max-plus-mens-shoes-x9G2xF.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/87d7f156-14a4-48d5-9594-bb63db387375/air-max-plus-mens-shoes-x9G2xF.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4752946c-d959-4244-82d8-c27fe98725a8/air-max-plus-mens-shoes-x9G2xF.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/62858c13-717c-437e-a308-80f6b7f51009/air-max-plus-mens-shoes-x9G2xF.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/388cf8c8-ce94-4988-800a-934aa119d368/air-max-plus-mens-shoes-x9G2xF.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/36e4a79d-36bf-4a85-97fd-4c762b0197b4/air-max-plus-mens-shoes-x9G2xF.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/02e15aeb-3b12-4e13-b8ea-57c2241f4e31/air-max-plus-mens-shoes-x9G2xF.png',
    ],
    description: `Every Air Max has a story. For the Air Max Plus, that story begins on a beach. A prominent arch draws inspiration from a whale's tail, while wavy plastic overlays are a nod to palm trees blowing in the breeze. Nike Air units in the heel and forefoot create a Tuned Air experience that offers incredible stability and unbelievable cushioning. Lace them up and step into defiant style.`,
  },
  {
    productId: 2,
    name: 'Nike Air Max 90 SE',
    price: 130,
    img: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aaf4b0a7-8724-4356-bda2-6d5d4a69f4e2/calzado-air-max-90-se-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c6fffe0e-7f59-4381-8953-3cfd47c9ca25/calzado-air-max-90-se-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6b6b1b9-d7f4-4d31-880f-4920635cf208/calzado-air-max-90-se-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/09f143ef-363e-4be8-9c93-53e48cb354bc/calzado-air-max-90-se-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bfd17274-9e1a-4b09-b67f-235ea20dafab/calzado-air-max-90-se-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/89048d68-e103-4a44-b6ad-d353b5f341e2/calzado-air-max-90-se-g5nqKN.png',
    ],
    description: ``,
  },
  {
    productId: 3,
    name: "Nike Blazer Mid '77 Vintage",
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/684b4b52-6c9a-4703-b1cb-c881fe41a3c0/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_0/8751f64f-406b-4f70-b6b0-9aca362c1faf/blazer-mid-77-vintage-mens-shoes-nw30B2.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/2eca4a1a-78c1-444d-a616-3fde4583b2ac/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/0fdb3f7d-f1d9-4694-a513-702a4b02302c/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/291a1fb9-ca1b-4323-b615-244f489643ae/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/f5f6a3fe-8141-4725-87ed-5444914e9e7a/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/8a3ff804-1a19-41ab-a155-069e695b9412/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/68247388-7b60-4b0b-8931-2109a8978638/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/da6cb48f-9382-4827-9a43-673a4b94efcd/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
    ],
    description:
      'In the ‘70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic since the beginning.',
  },
  {
    productId: 4,
    name: 'Nike Air Max 97',
    price: 185,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/fcdc95a5-2407-4f96-b4d9-5f6f138a1255/air-max-97-mens-shoes-127hcQ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/5b244d09-1114-494a-b9b0-377996ec861b/air-max-97-mens-shoes-127hcQ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/3cff3eed-ce29-4932-acbc-b0415ce9569c/air-max-97-mens-shoes-127hcQ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/4bad796a-d988-4b3f-b21b-e4bb6ec4bd53/air-max-97-mens-shoes-127hcQ.png',
    ],
    description:
      "The wavy, streamlined 97's, originally inspired by bullet trains, are back with fresh pops of color and a Nike Athletic Club insole for throwback vibes. The full-length Max Air unit puts a bouncy spring in every step.",
  },
  {
    productId: 5,
    name: 'Air Jordan XXXVI',
    price: 185,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/0e9157d7-d70c-4f23-874a-9f996a7f9a6b/air-jordan-xxxvi-basketball-shoes-1D0pp7.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_4.12/8e8f82fe-7309-4322-bd23-2fd0e112ca1a/air-jordan-xxxvi-basketball-shoes-1D0pp7.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/6922c4fb-c80f-4ed8-bf4f-2d7ff8c87b21/air-jordan-xxxvi-basketball-shoes-1D0pp7.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/2c602a0a-3a64-4a3d-a15a-542960b839c5/air-jordan-xxxvi-basketball-shoes-1D0pp7.png',
    ],
    description:
      "The Air Jordan XXXVI isn't just the next up in the iconic franchise; it's an expression of the drive and energy that sparked a basketball revolution. It's one of the lightest Air Jordan game shoes to date, featuring a minimal but durable Leno-Weave upper reinforced with a TPU ribbon. It also comes equipped with a full-length Zoom Air Strobel unit stitched directly to the upper, stacked with a Zoom Air unit underneath the forefoot, providing a sensation of energy return and elite responsiveness. Step on the court with the confidence that whatever you do—it's light work.",
  },
  {
    productId: 6,
    name: 'Jordan ADG 4',
    price: 185,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/18f63d14-3acc-44e0-b198-c4b7c91d1d6d/jordan-adg-4-mens-golf-shoes-zw1ZGK.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/933d700d-1101-46c0-aa9a-94493b1f9acb/jordan-adg-4-mens-golf-shoes-zw1ZGK.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/a4817ddd-be90-48d0-a9f0-51c122ebbe72/jordan-adg-4-mens-golf-shoes-zw1ZGK.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/c7e1b95f-2af6-4417-996e-a858868f4266/jordan-adg-4-mens-golf-shoes-zw1ZGK.png',
    ],
    description:
      'A request from MJ himself, the Jordan ADG 4 infuses an incredibly classic silhouette with retro Jordan flavor. Supple, full-grain leather shows off the iconic elephant print on the heel. The rubber sole has an integrated traction pattern that perfectly pairs the grip you need with the versatility and comfort you want.',
  },
  {
    productId: 7,
    name: 'Zion 1',
    price: 120,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/4de8128a-1762-4d36-9d00-e27a078c629b/zion-1-basketball-shoes-bJ0hLJ.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_0.83/3eaa4305-476c-4410-9c5a-e86498e35f37/zion-1-basketball-shoes-bJ0hLJ.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/6ec295ce-9cb7-4869-adcc-e3b2a73c0c79/zion-1-basketball-shoes-bJ0hLJ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/c1ba40a2-e404-4202-bc14-dc898f32b83e/zion-1-basketball-shoes-bJ0hLJ.png',
    ],
    description:
      "With a down-to-earth persona and abilities that are out of this world, Zion is unlike anybody else. On court, the gentle spirit who's all about family transforms into an unmatched force of unstoppable athleticism and speed. The Zion 1 kicks off his signature line with a design inspired by his duality of humility meets superhuman ability. Full-length Air Strobel cushioning is stacked with a Zoom Air unit in the forefoot—a sensational mix of plush underfoot comfort and rapid responsiveness. It's light, stable and strong, with aggressive traction to help Zion grip the court and control his power.",
  },
  {
    productId: 8,
    name: 'Nike Asuna 2',
    price: 45,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/a29c93e1-4e9e-4c45-873b-291d3233dd1c/asuna-2-mens-slides-6cnDsC.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_0/525fa496-170c-4636-b2f9-a96727ae93dc/asuna-2-mens-slides-6cnDsC.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/40d5f4af-8f1f-403c-bb87-6c436e621ac4/asuna-2-mens-slides-6cnDsC.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e5e1b9bf-5ff2-4db2-8e8c-ddf3f95873e4/asuna-2-mens-slides-6cnDsC.png',
    ],
    description:
      'Want to transition effortlessly between worlds? Built to feel good all day, this plush slide uses a rugged tread pattern for traction on a variety of surfaces. Step in, cinch it closed, and get going.',
  },
  {
    productId: 9,
    name: 'Zoom Freak 3',
    price: 120,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/26539751-d716-40e0-80f9-2edc5bb33662/zoom-freak-3-basketball-shoes-tMHdRM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/8a05458b-3117-414b-9021-8c3f66cabceb/zoom-freak-3-basketball-shoes-tMHdRM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/f646591d-9ca9-4edf-b942-f5e845b442f9/zoom-freak-3-basketball-shoes-tMHdRM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/674d1d2f-a549-4adf-a465-6d05cde24280/zoom-freak-3-basketball-shoes-tMHdRM.png',
    ],
    description:
      'UNO has been a go-to for Giannis and his brothers since they were kids. This special edition of Giannis’s signature shoe celebrates the good-natured competition and fun that the card game always brings the Antetokounmpo family. It still has a sleek silhouette and responsive cushioning for players who stay on their toes, but just with a playful game-night twist.',
  },
  {
    productId: 10,
    name: 'Nike SB Zoom Blazer Mid Premium',
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/c9b91d8a-d9c7-4ec1-a17b-9e1e0dd15b11/sb-zoom-blazer-mid-premium-skate-shoes-cDgJVQ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/fdccfa2e-f315-46aa-8483-9e4251c3edd2/sb-zoom-blazer-mid-premium-skate-shoes-cDgJVQ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/0351b64a-6f82-43f5-8e0b-08fba0c8f0f8/sb-zoom-blazer-mid-premium-skate-shoes-cDgJVQ.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/99fc9898-61c6-4fc7-8880-c32fd3e659f4/sb-zoom-blazer-mid-premium-skate-shoes-cDgJVQ.png',
    ],
    description:
      'The Nike SB Zoom Blazer Mid Premium has something for everyone. Each detail, from the mosaic-like mix of materials to the patchwork details to the faded, printed canvas, celebrates unity and the beauty that can emerge when different elements are held in equal importance.',
  },
  {
    productId: 11,
    name: 'Nike SB Chron 2',
    price: 70,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/1eb68ea0-6441-4c48-96fa-65dede08fb3b/sb-chron-2-skate-shoes-71Mh0H.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_0/916fb268-149e-41f7-8143-f43c1bfb79e8/sb-chron-2-skate-shoes-71Mh0H.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/353e239b-0334-4b27-b1dc-e4499d808a2f/sb-chron-2-skate-shoes-71Mh0H.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/6db86fbc-a36a-431d-a7f2-23dfcf7c0984/sb-chron-2-skate-shoes-71Mh0H.png',
    ],
    description:
      'Flexible and breathable, the Nike SB Chron 2 is a sequel worthy of its predecessor. The revamped design includes a reshaped collar and heel for an improved fit—all while maintaining the comfort and performance you expect from Nike SB.',
  },
  {
    productId: 12,
    name: 'Air Max Dawn',
    price: 120,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/d8d6d808-29b6-4223-8845-fe3d701edd28/air-max-dawn-mens-shoes-Rg69GM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/12c8eba9-2afd-4a0e-a9c5-9dd72cb7780b/air-max-dawn-mens-shoes-Rg69GM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/75ea3e91-59b3-4ba2-ab19-041d85e4f6ad/air-max-dawn-mens-shoes-Rg69GM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/1f022d0b-a584-4827-a14e-5937b49169ee/air-max-dawn-mens-shoes-Rg69GM.png',
    ],
    description:
      "Spring is in the Air. Pops of color and a floral instep add bright details to your favorite track-inspired kicks. Enjoy a breathable, flexible, cushioned ride that's ready for whatever comes your way.",
  },
  {
    productId: 13,
    name: 'Nike Air Zoom Pegasus 38',
    price: 101,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/5ded7992-ca1c-4ddd-bff2-3c7062782fbf/air-zoom-pegasus-38-womens-road-running-shoes-gg8GBK.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/5640ac7f-7ff3-4636-bba8-22853adab278/air-zoom-pegasus-38-womens-road-running-shoes-gg8GBK.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/b7c4ec38-af2e-493c-8114-1669911b5b77/air-zoom-pegasus-38-womens-road-running-shoes-gg8GBK.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/b0187e77-bc62-4807-b630-d5f6d57a3270/air-zoom-pegasus-38-womens-road-running-shoes-gg8GBK.png',
    ],
    description:
      'Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes.',
  },
  {
    productId: 14,
    name: 'Nike Free Metcon 4',
    price: 120,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/c0e45e21-774e-43d8-933a-67aa403b24c2/free-metcon-4-womens-training-shoes-pxHVt9.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/2bf0b3ae-df48-4bed-be5d-c25f820412ee/free-metcon-4-womens-training-shoes-pxHVt9.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/22f9545d-af39-48fe-b689-cd57b3ef1372/free-metcon-4-womens-training-shoes-pxHVt9.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/f431b90a-fe45-4b67-ad2b-4410d379248b/free-metcon-4-womens-training-shoes-pxHVt9.png',
    ],
    description:
      'The Nike Free Metcon 4 combines flexibility with stability to help you get the most out of your training program. Updated "chain-link" mesh cools and flexes as you speed through agility drills, while support at the midfoot and heel braces you for your heaviest sets in the weight room.',
  },
  {
    productId: 15,
    name: 'Nike Air Max 90',
    price: 130,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/3c66a641-8b76-4d39-8456-98aa622494b5/air-max-90-womens-shoes-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/34690c75-a474-4f2f-a9ca-6e669050af95/air-max-90-womens-shoes-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/29790067-0985-4937-8bf9-af34486f9171/air-max-90-womens-shoes-g5nqKN.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/99fb7a39-c0ca-492a-9b12-a9b444590c3c/air-max-90-womens-shoes-g5nqKN.png',
    ],
    description:
      'Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents. Fresh details give a modern look while Max Air cushioning adds comfort to your journey.',
  },
  {
    productId: 16,
    name: 'Nike React Infinity Run Flyknit 2 Premium',
    price: 135,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/34405f42-3a27-4af4-aaa9-57d2a8f09809/react-infinity-run-flyknit-2-premium-womens-road-running-shoes-rfh6Z8.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/4d095d4b-9cf3-4942-98c6-144747430b47/react-infinity-run-flyknit-2-premium-womens-road-running-shoes-rfh6Z8.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/38a1cfec-aa73-4a3d-b397-efeb8407e48f/react-infinity-run-flyknit-2-premium-womens-road-running-shoes-rfh6Z8.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e69e142b-e7ec-4976-bc80-3e7066c4d0c8/react-infinity-run-flyknit-2-premium-womens-road-running-shoes-rfh6Z8.png',
    ],
    description:
      "The Nike React Infinity Run Flyknit 2 Premium continues to help keep you running, this time with colors and shapes inspired by winter favorites. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.",
  },
  {
    productId: 17,
    name: "Nike Air Force 1 '07",
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/112fb638-8963-4089-bb0f-b66e8103c376/air-force-1-07-womens-shoes-1tvpbP.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/56b6842f-724c-496a-89d3-2aafe207b3c0/air-force-1-07-womens-shoes-1tvpbP.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/1433517b-6ad3-4619-b71b-60dc59ab1ef6/air-force-1-07-womens-shoes-1tvpbP.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/08d8542d-8fc4-4dac-8bb3-fe8161ef10bd/air-force-1-07-womens-shoes-1tvpbP.png',
    ],
    description:
      'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you remember best: crisp leather, bold colors and the perfect amount of flash to make you shine.',
  },
  {
    productId: 18,
    name: 'Nike Metcon 7',
    price: 130,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/afb08832-be12-4215-9872-bcb1d30f6c0a/metcon-7-womens-training-shoes-wgK0XX.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_3.59/af595804-8a81-4c0a-91e5-2b04bef3ba1e/metcon-7-womens-training-shoes-wgK0XX.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/8210abd6-220d-4b4d-aaff-78b651ef6da5/metcon-7-womens-training-shoes-wgK0XX.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/289d022e-5659-4f54-a6ac-447bb2ceaf74/metcon-7-womens-training-shoes-wgK0XX.png',
    ],
    description:
      "The Nike Metcon 7 is the gold standard for weight training—even tougher and more stable than previous versions. We've also added React foam that ups the comfort to keep you ready for high-intensity cardio. Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.",
  },
  {
    productId: 19,
    name: 'Nike Wildhorse 7',
    price: 130,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/ef0288e1-2add-4bb7-95e1-7ad48b8f7957/wildhorse-7-womens-trail-running-shoes-0FnFns.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/d3ba6501-126d-4d11-8b69-0de5ee8e1036/wildhorse-7-womens-trail-running-shoes-0FnFns.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/199ef5f9-8683-4604-b376-a86b91a8fa73/wildhorse-7-womens-trail-running-shoes-0FnFns.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/dab7232f-deca-46a8-b132-09796624489f/wildhorse-7-womens-trail-running-shoes-0FnFns.png',
    ],
    description:
      'Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7. Confidently run rocky terrain with high-abrasion rubber on the outsole that adds durable traction. The upper delivers durable ventilation with support where you need it. Foam midsole cushioning gives a neutral feel and provides responsiveness on every mile.',
  },
  {
    productId: 20,
    name: 'Nike Air Max Bella TR 5',
    price: 85,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e91c594c-8e6e-4ff4-948f-70e01c817755/air-max-bella-tr-5-womens-training-shoes-npHrGC.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/df54cee0-36ba-4eee-bcb9-0ce7401edaac/air-max-bella-tr-5-womens-training-shoes-npHrGC.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e4ea95b8-9964-4c6c-a1cc-7fe390d4c658/air-max-bella-tr-5-womens-training-shoes-npHrGC.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/682ddfb9-72c8-46ee-8282-01f6ecf9e3b4/air-max-bella-tr-5-womens-training-shoes-npHrGC.png',
    ],
    description:
      'The Nike Air Max Bella TR 5 combines the bounce and beauty of Max Air cushioning with a flat sole that lends a stabilizing advantage while you tone and sculpt with weight. This updated design increases the containment and support around the sides and top of your foot to help keep you steady on your feet and secure during demanding strength workouts.',
  },
  {
    productId: 21,
    name: 'Nike Air Force 1 LV8',
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/5ed01b7e-9ae9-4edf-9016-7b1a4f3c4775/air-force-1-lv8-big-kids-shoes-1jq1pP.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/01db483c-ad1b-4c29-b67f-87067bef530a/air-force-1-lv8-big-kids-shoes-1jq1pP.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/2363cc0c-d652-4097-acfc-618e315f39ee/air-force-1-lv8-big-kids-shoes-1jq1pP.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e51be1d2-d608-4630-ae43-bf5202181cfa/air-force-1-lv8-big-kids-shoes-1jq1pP.png',
    ],
    description:
      'Relive that giddy feeling when you’re about the scream, “UNO!” as you pull on this special edition of the Nike Air Force 1. We celebrate the 50th anniversary of everyone’s favorite card game—played everywhere from road trips and parties to family get-togethers. Inspired by the game’s colors and graphics, you won’t want to miss this one.',
  },
  {
    productId: 22,
    name: 'Freak 3 SE',
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/bff71538-5243-4c23-8277-4ecb06560e80/freak-3-se-big-kids-basketball-shoes-NsKbL3.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/84106dc1-e12f-4cdf-a696-e35986f22ec1/freak-3-se-big-kids-basketball-shoes-NsKbL3.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/599e10e3-dc98-436a-af0b-2c9b64fbb1a6/freak-3-se-big-kids-basketball-shoes-NsKbL3.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/5c0b8dde-2edc-494c-88ec-4d4512f9b91b/freak-3-se-big-kids-basketball-shoes-NsKbL3.png',
    ],
    description:
      'From quick cuts to Eurosteps, the Freak 3 SE captures the speed and mobility of Giannis Antetokounmpo. The 3rd edition of the MVP’s signature shoe gets better with more flexibility and stability with each move. This special edition is inspired by Giannis’ love for family games—like the classic card game, UNO!',
  },
  {
    productId: 23,
    name: 'Nike Dunk High',
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/a034c1df-2577-4ad9-8212-d21687554c95/dunk-high-big-kids-shoes-GssLQn.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/9b662f72-58c5-4e4d-ad1c-80484fce27ea/dunk-high-big-kids-shoes-GssLQn.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/738118bf-6ca1-4eeb-99c8-16583cb947f1/dunk-high-big-kids-shoes-GssLQn.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/d92d9031-3c52-4b74-90f2-9dceb39b614b/dunk-high-big-kids-shoes-GssLQn.png',
    ],
    description:
      'Take your day sky high in this hoops legend. The Nike Dunk returns with durability and support for every baller. With vintage vibes and sized for kids, this is an easy slam dunk for your kicks collection.',
  },
  {
    productId: 24,
    name: 'Kyrie Infinity SE',
    price: 110,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/1740dc09-f534-45c4-b755-2f6b55160111/kyrie-infinity-se-big-kids-basketball-shoes-PKjHsM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/05706b4c-7d2c-4f1b-a437-0327c48e43e9/kyrie-infinity-se-big-kids-basketball-shoes-PKjHsM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/4ace8d42-2868-4bba-8c79-0ea003b6330f/kyrie-infinity-se-big-kids-basketball-shoes-PKjHsM.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/724ccaac-7656-4b91-9fc5-168dbb83e80a/kyrie-infinity-se-big-kids-basketball-shoes-PKjHsM.png',
    ],
    description:
      "Sizzle. Flair. Do it all like one of the game's best in the Kyrie Infinity SE basketball shoes. Flexibility is key while keeping your feet snug and comfortable so you can cross over and change directions quickly on the court. His signature logo on the tongue is the stamp of the champ while you play.",
  },
  {
    productId: 25,
    name: 'Nike Air Force 1 LV8',
    price: 95,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/68e9d631-1326-477b-9607-1896c4abdf67/air-force-1-lv8-big-kids-shoes-N8WT68.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/4fd1b9b0-abe8-4fa4-b641-a8b2fd1e4197/air-force-1-lv8-big-kids-shoes-N8WT68.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e91e6407-0315-4509-b2ec-fd7bf808fd0d/air-force-1-lv8-big-kids-shoes-N8WT68.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e862a0f5-a5fb-4b6b-bf40-32e210360069/air-force-1-lv8-big-kids-shoes-N8WT68.png',
    ],
    description:
      'This is what legends are made of. The Nike Air Force 1 LV8 turns the ’82 hardwood icon into a playtime-ready everyday style. Of course, the durability, feel and Air are still there for those who love a classic.',
  },
  {
    productId: 26,
    name: 'Nike Crater Impact',
    price: 80,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/339da7f5-887d-46fd-9600-b1f7c567d271/crater-impact-big-kids-shoes-0v9q0S.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/aff375fb-5619-47c5-ac20-a7bece056edb/crater-impact-big-kids-shoes-0v9q0S.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/8be569b2-9541-4e25-b322-e8643920c47e/crater-impact-big-kids-shoes-0v9q0S.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/6fc7ae71-4892-4594-95d7-a0f5c715eb8a/crater-impact-big-kids-shoes-0v9q0S.png',
    ],
    description:
      'From the playground to the sidewalks, the Nike Crater Impact makes a statement. The feel-good design is made with at least 20% recycled content by weight. They feature Crater foam cushioning, so you can make an impact while you play—in more ways than one.',
  },
  {
    productId: 27,
    name: 'Nike Huarache Run',
    price: 95,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/5ef8cd21-ceba-492d-b877-15b6ce09b12f/huarache-run-big-kids-shoes-2KTrWZKn.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/f34de27a-35cb-4fe3-bb16-8854a627b1d7/huarache-run-big-kids-shoes-2KTrWZKn.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/9de86820-689b-4d1a-8ba2-bb485a4023c9/huarache-run-big-kids-shoes-2KTrWZKn.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/deee3f80-6ad4-4c84-8ab2-949940cb9ad5/huarache-run-big-kids-shoes-2KTrWZKn.png',
    ],
    description:
      "Built to fit your foot and designed for comfort, the Nike Huarache Run brings back a street-level favorite. Soft leather accents on the upper mix with super-breathable, perfectly shined neoprene-like fabric for easy styling. The low-cut collar and inner sleeve keep it sleek while its iconic heel clip and stripped-away branding keep the early-'90s look you love.",
  },
  {
    productId: 28,
    name: 'Nike Air Force 1 Impact',
    price: 95,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/fd76a5f2-e3e6-4358-9edd-e23395305368/air-force-1-impact-big-kids-shoes-1vQt3r.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/8dc8ece9-ce2d-498d-8d01-41a0c926eefb/air-force-1-impact-big-kids-shoes-1vQt3r.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/f0666334-8917-4522-b1de-a54e17a64e46/air-force-1-impact-big-kids-shoes-1vQt3r.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/29e44b59-6d99-4a78-b08e-507f16e213df/air-force-1-impact-big-kids-shoes-1vQt3r.png',
    ],
    description:
      "This is what legends are made of. The Nike Air Force 1 Impact brings back the ’82 hardwood icon with cool, mellow colors. See the speckles on the outsole? That means it's made with at least 13% Nike Grind material. The durability, feel and Air are still there for those who love a classic.",
  },
  {
    productId: 29,
    name: 'Nike Air Force 1 LV8',
    price: 95,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/b7868af9-3936-4a6d-9c6a-fa2abed591a1/air-force-1-lv8-big-kids-shoes-5x8TXm.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/feeb036e-6879-4f22-964e-c841a3941fc8/air-force-1-lv8-big-kids-shoes-5x8TXm.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/9082265d-3b66-4f2e-8c69-61150ce6c953/air-force-1-lv8-big-kids-shoes-5x8TXm.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/c3965671-8076-49e8-81a7-cf8fdc348040/air-force-1-lv8-big-kids-shoes-5x8TXm.png',
    ],
    description:
      'The radiance lives on in the Nike Air Force 1 LV8, the b-ball original that puts a fresh spin on what you know best: bold colors and the right amount of flash to make you shine. Slip into a classic look accented with a furry friend to take you into the New Year.',
  },
  {
    productId: 30,
    name: 'Nike Air Max 90',
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/e876528b-ffb9-4970-a218-ac5977f9f375/air-max-90-big-kids-shoes-JqztKB.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/9c57c952-10a4-45af-88bc-fd560acb37d3/air-max-90-big-kids-shoes-JqztKB.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/764467d8-d033-419a-a892-281b9cd9b505/air-max-90-big-kids-shoes-JqztKB.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/183035ce-bd97-4bc9-8de4-2fc33d41adb1/air-max-90-big-kids-shoes-JqztKB.png',
    ],
    description:
      'Beloved for more than 30 years, the Air Max 90 returns with fresh colors. You still get the distinctive TPU accents, the Waffle sole and the exposed Air unit that are still as fresh as the day they came out.',
  },
  {
    productId: 31,
    name: 'Nike Air Max Dawn',
    price: 100,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/3e6d1ad0-c738-4cc8-95d3-570a537a79d2/air-max-dawn-big-kids-shoes-psBvHR.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_0.58/8437b0be-8d2d-40e6-824a-9b5592a07f6c/air-max-dawn-big-kids-shoes-psBvHR.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/4d692a10-87dd-4afa-bbc5-9649a6646149/air-max-dawn-big-kids-shoes-psBvHR.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/50f1404a-8d75-4ba9-afe7-0c8c74545561/air-max-dawn-big-kids-shoes-psBvHR.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/504d0175-092b-4499-845d-5cce9e5886d3/air-max-dawn-big-kids-shoes-psBvHR.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/bafacda7-4cdd-496d-a601-27666624d8cb/air-max-dawn-big-kids-shoes-psBvHR.png',
    ],
    description:
      'In the Air Max world, it’s a new day with the Nike Air Max Dawn. We bring classic vibes with soft suede details and build a look for the future with a shoe made with at least 20% recycled materials by weight. Simple, versatile and cushioned with Air—you can’t go wrong starting your day off in these kicks.',
  },
  {
    productId: 32,
    name: 'Nike Flex Advance',
    price: 65,
    img: [
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/0b14f262-dacb-45ef-9d9c-23ab61769be1/flex-advance-little-kids-shoes-qSNNNF.png',
      'https://static.nike.com/a/videos/t_PDP_LOADING_v1/f_auto,q_auto:eco,so_0.7/d9f038f1-86e0-4a14-b641-b8d004fdbdfe/flex-advance-little-kids-shoes-qSNNNF.jpg',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/d3ab0859-e106-40a5-9cdc-33af40fc1b37/flex-advance-little-kids-shoes-qSNNNF.png',
      'https://static.nike.com/a/images/t_PDP_LOADING_v1/f_auto,q_auto:eco/064dd315-0a5b-4dc4-a2ca-771c493de1f1/flex-advance-little-kids-shoes-qSNNNF.png',
    ],
    description:
      'The Nike Flex Advance is easy as 1, 2, 3. Nike FlyEase technology provides an extra-wide opening so little feet slip right in—seriously, it’s a piece of cake. Criss cross the straps (to help prep kiddos for real laces), and it’s done! They are super-duper flexible, comfy and durable—perfect for little ones to walk, run and play.',
  },
];

module.exports = products;

/*

clear()
let product = {}
product.productId = 3
product.name = document.querySelectorAll('#pdp_product_title')[0].innerText
product.price = parseInt(document.querySelectorAll('.product-price')[0].innerText.substr(1))
let allImages = document.querySelectorAll('img.u-full-width.css-yxqyqh')
let source = []
allImages.forEach(image=> source.push(image.src))
product.img = source
product.description = document.querySelector('div.description-preview').querySelector('p').innerText
product


*/
