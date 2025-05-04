const categories = [
  {
    slug: "damen-mode",
    name: "Damen-Mode",
    image:
      "https://images.unsplash.com/photo-1669479033025-01bc44921fff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 1,
        slug: "sommerkleid",
        name: "Sommerkleid",
        description: "Leichtes Sommerkleid aus Baumwolle",
        price: 49.99,
        image:
          "https://images.unsplash.com/photo-1669479033025-01bc44921fff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1669479033025-01bc44921fff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://unsplash.com/photos/a-woman-in-a-red-dress-is-posing-for-a-picture-nHBXfvZMPag",
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["pink", "white", "blue"],
      },
      {
        id: 2,
        slug: "bluse",
        name: "Bluse",
        description: "Elegante Bluse mit Spitzenverzierung",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1698146704088-e09d6acb99ce?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://unsplash.com/photos/a-woman-in-an-orange-dress-posing-for-a-picture-Axw62HghLFk",
          "https://unsplash.com/photos/a-person-with-a-flower-in-the-hair--o8QapEx06w",
        ],
        sizes: ["S", "M", "L"],
        colors: ["white", "black"],
      },
      {
        id: 3,
        slug: "wintermantel",
        name: "Wintermantel",
        description: "Isolierter Daunenmantel mit Pelzkragen",
        price: 99.99,
        originalPrice: 149.99,
        image:
          "https://images.unsplash.com/photo-1680970951081-d074d025c997?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1680971315871-91f219b6cee8?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://unsplash.com/photos/a-woman-holding-a-tennis-racquet-on-top-of-a-tennis-court-PMQdJr83ATQ",
          "https://unsplash.com/photos/a-woman-standing-in-front-of-a-brick-wall-7xCKjrJt2HQ",
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["black", "navy", "burgundy"],
      },
    ],
  },
  {
    slug: "herren-mode",
    name: "Herren-Mode",
    image: "../assets/images/categories/Jackets-v1.jpg",
    products: [
      {
        id: 4,
        slug: "hemd",
        name: "Business Hemd",
        description: "Formelles Hemd aus Baumwolle",
        price: 59.99,
        image:
          "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://unsplash.com/photos/man-in-blue-suit-jacket-and-black-pants-NxtxmmHc2OE",
        ],
        sizes: ["M", "L", "XL"],
        colors: ["blue", "white"],
      },
      {
        id: 5,
        slug: "jeans",
        name: "Slim Fit Jeans",
        description: "Moderne Slim-Fit Jeans mit Stretch",
        price: 79.99,
        image:
          "https://unsplash.com/photos/man-in-blue-dress-shirt-wearing-black-sunglasses-4fkUAduhoSY",
        images: [
          "https://images.unsplash.com/photo-1642886513052-d24b4f4745ea?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://unsplash.com/photos/man-in-black-suit-holding-red-rose-bouquet-jyVA8bQnxhY",
        ],
        sizes: ["28/32", "30/34", "32/36"],
        colors: ["dark blue", "black"],
      },
    ],
  },
  {
    slug: "baby-und-kind",
    name: "Baby & Kind",
    image:
      "https://images.unsplash.com/photo-1602863211758-e35574d21b22?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 6,
        slug: "baby-strampler",
        name: "Baby Strampler",
        description: "Weicher Baumwoll-Strampler mit Druckknöpfen",
        price: 19.99,
        image:
          "https://unsplash.com/photos/girl-in-blue-denim-dungaree-pants-holding-blue-and-white-polka-dot-handbag-Br-ayoAxFuQ",
        images: [
          "https://images.unsplash.com/photo-1542645547-f49307cab5ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["0-3M", "3-6M", "6-12M"],
        colors: ["pastel blue", "soft pink"],
      },
      {
        id: 7,
        slug: "kinderspielzeug",
        name: "Kinderspielzeug",
        description: "Sicheres Lernspielzeug aus Holz",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1655087751307-45dd20333827?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://unsplash.com/photos/a-close-up-of-a-toy-COOyHVwudqw",
          "https://images.unsplash.com/photo-1655087751183-13adbff5dd7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1654847695141-dffef9835ada?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["Standard"],
        colors: ["multicolor"],
      },
    ],
  },
  {
    slug: "sport",
    name: "Sport",
    image: "https://unsplash.com/photos/man-skiing-on-land-Pf6e3o0GL4M",
    products: [
      {
        id: 8,
        slug: "yoga-matte",
        name: "Yoga Matte",
        description: "Rutschfeste Yogamatte mit Tragegurt",
        price: 34.99,
        image:
          "https://unsplash.com/photos/group-of-women-doing-yoga-gJtDg6WfMlQ",
        images: [
          "https://unsplash.com/photos/group-of-women-doing-yoga-oLStrTTMz2s",
          "https://unsplash.com/photos/group-of-women-exercise-using-dumbbells-y0SMHt74yqc",
          "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        ],
        sizes: ["Standard"],
        colors: ["purple", "blue"],
      },
      {
        id: 9,
        slug: "fitness-hose",
        name: "Fitness Hose",
        description: "Atmungsaktive Sportleggings mit Taschen",
        price: 39.99,
        image:
          "https://images.unsplash.com/photo-1601005625935-5a2e39372a3c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["S", "M", "L"],
        colors: ["black", "dark gray"],
      },
      {
        id: 10,
        slug: "sportschuhe",
        name: "Laufschuhe Pro",
        description: "Hochleistungsschuhe mit Dämpfungstechnologie",
        price: 59.99,
        originalPrice: 89.99,
        image:
          "https://unsplash.com/photos/white-and-blue-nike-air-force-1-high-jvoZ-Aux9aw",
        images: [
          "https://images.unsplash.com/photo-1679284393460-fbaecec5fcab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1679284392387-250597360be3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1679284392348-c49d99a976d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["36", "38", "40", "42", "44"],
        colors: ["white/red", "black/silver", "blue/orange"],
      },
    ],
  },
  {
    slug: "beauty-und-drogerie",
    name: "Beauty & Drogerie",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 11,
        slug: "gesichtscreme",
        name: "Gesichtscreme",
        description: "Feuchtigkeitsspendende Tagescreme mit SPF 30",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1525845859779-54d477ff291f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["50ml", "100ml"],
        colors: ["white"],
      },
      {
        id: 12,
        slug: "shampoo",
        name: "Pflegeshampoo",
        description: "Milde Formel für geschädigtes Haar",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1561444326-baba43294667?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1599847903756-c359cd73f9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1599847987657-881f11b92a75?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["250ml", "500ml"],
        colors: ["transparent"],
      },
    ],
  },
  {
    slug: "haushalt",
    name: "Haushalt",
    image:
      "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 13,
        slug: "staubsauger",
        name: "Staubsauger",
        description: "Leistungsstarker Akku-Staubsauger mit Zubehör",
        price: 89.99,
        image:
          "https://unsplash.com/photos/a-laundry-room-with-a-washer-and-dryer-R_pCJvo1lNQ",
        images: [
          "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1663068307522-1731d9c8fbc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["Kompakt", "Groß"],
        colors: ["red", "silver"],
      },
      {
        id: 14,
        slug: "buegeleisen",
        name: "Bügeleisen",
        description: "Dampfbügeleisen mit Automatik-Abschaltung",
        price: 49.99,
        image:
          "https://images.unsplash.com/photo-1662221156544-3355c817ed74?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1518168334734-591c8bfc5445?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["Standard"],
        colors: ["white", "blue"],
      },
    ],
  },
  {
    slug: "kueche",
    name: "Küche",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 15,
        slug: "pfannenset",
        name: "Pfannenset",
        description: "Antihaftbeschichtetes 3-teiliges Set",
        price: 59.99,
        image:
          "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1630699144429-c9912507ef53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["20cm", "24cm", "28cm"],
        colors: ["schwarz", "rot"],
      },
      {
        id: 16,
        slug: "wasserkocher",
        name: "Wasserkocher",
        description: "Schnellkocher mit Temperaturregelung",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1643114786355-ff9e52736eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1583538338169-9f08bb74c2b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1587377224179-1bd375f0fe3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["1.5L", "2.0L"],
        colors: ["silver", "white"],
      },
    ],
  },
  {
    slug: "heimtextilien",
    name: "Heimtextilien",
    image:
      "https://images.unsplash.com/photo-1561578428-5d58d0d965ec?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 17,
        slug: "bettwaesche",
        name: "Bettwäsche Set",
        description: "Atmungsaktives Baumwoll-Bettwäsche Set",
        price: 39.99,
        image: "https://unsplash.com/photos/background-pattern-DrZQZnEtYTM",
        images: [
          "https://unsplash.com/photos/maroon-and-blue-textile-11VE08qZZgQ",
          "https://images.unsplash.com/photo-1550697318-16817b2dab3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["140x200", "200x200"],
        colors: ["beige", "gray"],
      },
      {
        id: 18,
        slug: "gardinen",
        name: "Gardinen",
        description: "Hochwertige Gardinen für Ihr Zuhause",
        price: 44.99,
        image:
          "https://images.unsplash.com/photo-1688732324812-9c67f0a35b4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1723065147450-5bb55f2d6d8d?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1734960152076-d1a2ebe8f3d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1553252385-3171ce29d97b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1614533947294-785a4aa2a194?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["red", "blue", "green", "black"],
      },
    ],
  },
  {
    slug: "moebel",
    name: "Möbel",
    image: "../assets/images/categories/Jackets-v1.jpg",
    products: [
      {
        id: 19,
        slug: "esstisch",
        name: "Esstisch",
        description: "Massiver Holztisch mit ausziehbarer Platte",
        price: 199.99,
        image: "../assets/images/categories/Jackets-v1.jpg",
        images: [
          "../assets/images/categories/Wardrobes.jpg",
          "../assets/images/categories/Sweaters.jpg",
        ],
        sizes: ["120x80cm", "160x90cm"],
        colors: ["natur", "weiß"],
      },
      {
        id: 20,
        slug: "stuhlset",
        name: "Stuhlset (4-teilig)",
        description: "Modernes Stuhlset mit Polsterung",
        price: 149.99,
        image:
          "https://images.unsplash.com/photo-1713097459439-627b8c52bccf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://unsplash.com/photos/a-group-of-blue-glass-objects-sitting-on-top-of-a-table-fT5lYSglfCo",
          "https://images.unsplash.com/photo-1713097458865-34f9821d60f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        ],
        sizes: ["Standard"],
        colors: ["schwarz", "grau"],
      },
    ],
  },
  {
    slug: "baumarkt",
    name: "Baumarkt",
    image:
      "https://unsplash.com/photos/a-store-filled-with-lots-of-shelves-filled-with-items-kLwgUwv_m_g",
    products: [
      {
        id: 21,
        slug: "bohrmaschine",
        name: "Bohrmaschine",
        description: "Akku-Bohrschrauber mit 2 Geschwindigkeiten",
        price: 89.99,
        image:
          "https://unsplash.com/photos/a-store-aisle-filled-with-lots-of-yellow-and-red-items-keS16pDFiCM",
        images: [
          "https://images.unsplash.com/photo-1631856954655-966f97d809de?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://unsplash.com/photos/a-man-standing-in-a-store-aisle-looking-at-items-EvtlbRUm66A",
        ],
        sizes: ["10.8V", "18V"],
        colors: ["black", "yellow"],
      },
      {
        id: 22,
        slug: "werkzeugkoffer",
        name: "Werkzeugkoffer",
        description: "156-teiliges Werkzeugset in Aufbewahrungskoffer",
        price: 69.99,
        image:
          "https://images.unsplash.com/photo-1653933686284-8414eb9ebdf4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://unsplash.com/photos/person-in-blue-denim-jeans-and-black-and-white-adidas-sneakers-riding-on-black-motorcycle-3uHlGFnzPDU",
        ],
        sizes: ["Standard"],
        colors: ["red", "black"],
      },
    ],
  },
  {
    slug: "marken",
    name: "Marken",
    image:
      "https://images.unsplash.com/photo-1601313143232-49b1270f8917?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: [
      {
        id: 23,
        slug: "nike-sneaker",
        name: "Nike Sneaker",
        description: "Leichte Laufschuhe mit Air Dämpfung",
        price: 99.99,
        image:
          "https://images.unsplash.com/photo-1602552939132-104ddf8b9003?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1659018791675-bba7adfde9b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1659018753736-2d194b549392?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["38", "40", "42", "44"],
        colors: ["black/white", "blue/white"],
      },
      {
        id: 24,
        slug: "adidas-jacke",
        name: "Adidas Jacke",
        description: "Winddichte Sportjacke mit Kapuze",
        price: 89.99,
        image:
          "https://images.unsplash.com/photo-1646228843811-1a75ac4f04f7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://unsplash.com/photos/a-man-in-a-black-jacket-uiHmV218l3M",
          "https://images.unsplash.com/photo-1607664375900-f1da8779f77b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        sizes: ["S", "M", "L"],
        colors: ["black", "dark blue"],
      },
    ],
  },
];

export default categories;
