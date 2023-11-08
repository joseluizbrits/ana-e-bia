import cookie from "../assets/img/cookie.jpg";
import donut from "../assets/img/donut.jpg";
import cake from "../assets/img/cake.jpg";
import macaron from "../assets/img/macaron.jpg";

import cookieHero from "../assets/img/hero-cookie.jpg";
import cookieDesc1 from "../assets/img/cookie-desc-1.jpg";
import cookieDesc2 from "../assets/img/cookie-desc-2.jpg";
import cookieDesc3 from "../assets/img/cookie-desc-3.jpg";
import cookieDesc4 from "../assets/img/cookie-desc-4.jpg";
import cookieDesc5 from "../assets/img/cookie-desc-5.jpg";

import donutHero from "../assets/img/hero-donut.jpg";
import donutDesc1 from "../assets/img/donut-desc-1.jpg";
import donutDesc2 from "../assets/img/donut-desc-2.jpg";
import donutDesc3 from "../assets/img/donut-desc-3.jpg";
import donutDesc4 from "../assets/img/donut-desc-4.jpg";
import donutDesc5 from "../assets/img/services-menus.jpg";

import cakeHero from "../assets/img/hero-cake.jpg";
import cakeDesc1 from "../assets/img/cake-desc-1.jpg";
import cakeDesc2 from "../assets/img/cake-handsOn.jpg";
import cakeDesc3 from "../assets/img/cake-desc-3.jpg";
import cakeDesc4 from "../assets/img/cake-desc-4.jpg";
import cakeDesc5 from "../assets/img/services-menus.jpg";

import macaronHero from "../assets/img/hero-macaron.jpg";
import macaronDesc1 from "../assets/img/macaron-desc-1.jpg";
import macaronDesc2 from "../assets/img/macaron-desc-2.jpg";
import macaronDesc3 from "../assets/img/macaron-desc-3.jpg";
import macaronDesc4 from "../assets/img/macaron-desc-4.jpg";
import macaronDesc5 from "../assets/img/macaron-desc-5.jpg";

export const products = [
  {
    name: "Croc Cookie",
    type: "cookie",
    desc: "Nosso cookie clássico combina textura crocante por fora e maciez por dentro,com pedaços generosos de chocolate belga",
    descShort:
      "Com cobertura de glacê cremoso e confeitos coloridos, perfeito para adoçar seu dia",
    img: cookie,
    alt: "Coluna de cookies",
  },
  {
    name: "Dude Donut",
    type: "donut",
    desc: "Nosso donut é uma explosão de sabor e cor, com cobertura de glacê cremoso e confeitos coloridos, perfeito para adoçar o seu dia",
    descShort:
      "Crocante por fora, macio por dentro e com pedaços generosos de chocolate belga",
    img: donut,
    alt: "Donut de chocolate",
  },
  {
    name: "Choco Cake",
    type: "cake",
    desc: "Nosso bolo de chocolate é irresistivelmente rico e saboroso, coberto com um ganache sedoso e enfeitado com raspas de chocolate",
    descShort:
      "Coberto com um ganache sedoso e enfeitado com raspas de chocolate",
    img: cake,
    alt: "Bolo de chocolate",
  },
  {
    name: "Mag Macaron",
    type: "macaron",
    desc: "Nosso macaron é uma pequena joia de confeitaria, com casquinha crocante, recheio delicado e uma variedade de sabores requintados",
    descShort:
      "Com casquinha crocante, recheio delicado e uma variedade de sabores",
    img: macaron,
    alt: "Coluna de macarons",
  },
];

/* ----------------- PRODUCT PAGES ----------------- */
export const productsPage = [
  {
    /* ----------------- COOKIE ----------------- */
    type: "cookie",
    name: "CROC COOKIE",
    title: "Cookies frescos e saborosos",
    circleColor: "rgba(255, 150, 174, 0.5)",
    img: cookieHero,
    desc: [
      {
        id: "cookie-desc-1",
        item: "Variedade de Sabores",
        text: "Desde os clássicos como chocolate chip e aveia com passas até opções mais criativas",
        subItem: "Para todos os gostos",
        subText:
          "Oferecemos uma ampla variedade de sabores de cookies, desde os mais clássicos, como chocolate chip e aveia com passas, até as opções mais criativas, como cookies de caramelo salgado e os de cranberry com laranja",
        img: cookieDesc1,
      },
      {
        id: "cookie-desc-2",
        item: "Textura Perfeita",
        text: "Crocantes por fora e macios por dentro. Cada mordida é uma experiência equilibrada de sabor e textura",
        subItem: "Crocância e maciez",
        subText:
          "Os cookies são conhecidos por sua textura perfeita  - crocantes por fora e macios por dentro. Cada mordida é uma experiência equilibrada de sabor e textura que explodem na boca",
        img: cookieDesc2,
      },
      {
        id: "cookie-desc-3",
        item: "Ingredientes de Qualidade",
        text: "Gotas de chocolate belga e manteiga artesanal que garantem um sabor excepcional",
        subItem: "As melhores iguarias",
        subText:
          "Usamos os ingredientes da mais alta qualidade, aqueles que são considerados os melhores do mercado. De chocolate belga à manteiga artesanal, sempre garantimos aquele sabor excepcional",
        img: cookieDesc3,
      },
      {
        id: "cookie-desc-4",
        item: "Tamanho Generoso",
        text: "Uma porção caprichada que propociona a medida ideal de satisfação e doçura a cada unidade",
        subItem: "Sem desfeita",
        subText:
          "Mantemos um padrão de tamanho generoso com os nossos cookies. Proporcionamos uma porção satisfatória de doçura em cada unidade",
        img: cookieDesc4,
      },
      {
        id: "cookie-desc-5",
        item: "Decorações Criativas",
        text: "Drizzles de chocolate, pedaços de frutas secas e até mesmo povilhados de açucar de confeiteiro",
        subItem: "Cookie ousados",
        subText:
          "Além dos sabores deliciosos, os cookies muitas vezes são decorados de forma criativa. Isso pode incluir drizzles de chocolate, pedaços de frutas secas ou nozes e até mesmo polvilhados de açucar de confeiteiro",
        img: cookieDesc5,
      },
    ],
  },
  {
    /* ----------------- DONUT ----------------- */
    type: "donut",
    name: "DUDE DONUT",
    title: "Donuts únicos e combinações incríveis",
    circleColor: "rgba(255, 100, 136, 0.8)",
    img: donutHero,
    desc: [
      {
        id: "donut-desc-1",
        item: "Variedade de Sabores",
        text: "Oferecemos diversos tipos, desde os mais clássicos com açucar e canela até opções mais ousadas",
        subItem: "Para todos os gostos",
        subText:
          "Oferecemos uma ampla gama de sabores de donut, desde os clássicos, como açucar e canela, até as opções mais ousadas, como framboesa com chocolate branco e pistache",
        img: donutDesc1,
      },
      {
        id: "donut-desc-2",
        item: "Textura Inigualável",
        text: "Fritos até obterem um dourado crocante por fora, enquanto mantêm a maciez irresistível por dentro",
        subItem: "Crocância e maciez",
        subText:
          "Os nosso donuts são apreciados pela sua textura perfeita. Eles são fritos até obterem um dourado crocante por fora, enquanto mantêm uma maciez irresistível por dentro",
        img: donutDesc2,
      },
      {
        id: "donut-desc-3",
        item: "Coberturas Deliciosas",
        text: "Cobertos com glacê, chocolate, confeitos e outros ingredientes deliciosos de dar água na boca",
        subItem: "Acabamento ousado",
        subText:
          "Os donuts são generosamente cobertos com glacê, chocolate confeitos e outros ingredientes deliciosos. Cada mordida é uma explosão de sabor e textura",
        img: donutDesc3,
      },
      {
        id: "donut-desc-4",
        item: "Tamanho Variados",
        text: "Uma variação de tamanhos pensada para o seu desejo, desde os tamanhos clássicos até os maiores",
        subItem: "Medida perfeita",
        subText:
          "Temos donuts de tamanhos variados que acompanham o seu apetite. Desde aqueles mais clássicos até os maiores que são perfeitos para compartilhar e dividir",
        img: donutDesc4,
      },
      {
        id: "donut-desc-5",
        item: "Especias Sazonais",
        text: "Além dos sabores regulares, oferecemos donuts especias comemorativos e temáticos",
        subItem: "Donuts temáticos",
        subText:
          "Além dos sabores regulares, oferecemos donuts especiais sazonais, comemorativos e temáticos para ocasiões especiais, tornando cada visita à nossa confeitaria uma experiência emocionante",
        img: donutDesc5,
      },
    ],
  },
  {
    /* ----------------- CAKE ----------------- */
    type: "cake",
    name: "CHOCO CAKE",
    title: "Bolos recheados de doçura e maciez",
    circleColor: "rgba(255, 100, 136, 0.8)",
    img: cakeHero,
    desc: [
      {
        id: "cake-desc-1",
        item: "Sabor Rico e Intenso",
        text: "Com cacau de alta qualidade, resultando em sabor de chocolate rico, intenso e com muita qualidade",
        subItem: "Prazeroso na boca",
        subText:
          "Nosso bolo é feito com cacau de altíssima qualidade, resultando em um sabor de chocolate rico e intenso que satisfaz os paladares mais exigentes",
        img: cakeDesc1,
      },
      {
        id: "cake-desc-2",
        item: "Textura Deliciosa",
        text: "Combinação perfeita entre úmido e macio. Cada garfada derrete na boca de maneira entremamente prazerosa",
        subItem: "Úmido e macio",
        subText:
          "A textura do nosso bolo é a combinação perfeita entre o úmido e o macio. Cada gargafada derrete na boca, proporcionando uma experiência sensorial inesquecível",
        img: cakeDesc2,
      },
      {
        id: "cake-desc-3",
        item: "Recheio e Cobertura",
        text: "Recheado com um ganache sedoso de chocolate que adicionando uma camada adicional de sabor",
        subItem: "Recheio escaldante",
        subText:
          "Nossos bolos são muitas vezes recheado e coberto com um ganache sedoso de chocolate. Isso adicion uma camada adicional de sabor e indulgência à sobremasa",
        img: cakeDesc3,
      },
      {
        id: "cake-desc-4",
        item: "Decoração Elegante",
        text: "Decorados com maestria e elegância: raspas de chocolate, flores comestíveis ou enfeites personalizados",
        subItem: "Acabamento criativo",
        subText:
          "Os nossos bolos são decorados com maestria, muitas veze apresentando detalhes criativos e elegantes, como raspas de chocolate, flores comestíveis ou enfeites personalizados, tornando-os uma atração visual",
        img: cakeDesc4,
      },
      {
        id: "cake-desc-5",
        item: "Especiais Únicos",
        text: "Bolos especiais com camadas alternadas de diferentes sabores e recheios. Perfeitos para eventos diferenciados",
        subItem: "Bolos diferenciados",
        subText:
          "Além de nossos bolos padrões, criamos bolos especiais com camadas alternadas de diferente sabores e recheios, proporcionando uma experiência gastronômica variada. Perfeitos",
        img: cakeDesc5,
      },
    ],
  },
  {
    /* ----------------- MACARON ----------------- */
    type: "macaron",
    name: "MAG MACARON",
    title: "Macarons delicados de puro sabor",
    circleColor: "rgba(255, 100, 136, 0.5)",
    img: macaronHero,
    desc: [
      {
        id: "macaron-desc-1",
        item: "Variedade de Sabores",
        text: "Uma ampla variedade de sabores de macarons, além dos clássicos, como fambroesa e chocolate",
        subItem: "Para todos os gostos",
        subText:
          "Oferecemos uma ampla variedade de sabores de macarons, desde os clássicos, como fambroesa e chocolate, até as opções mais exóticas, como lavanda com mel e maracujá",
        img: macaronDesc1,
      },
      {
        id: "macaron-desc-2",
        item: "Casquinha Crocante",
        text: "Característica marcante de nossos macarons: uma casquinha crocante e extremamente saborosa",
        subItem: "Crocante e macio",
        subText:
          "Cada macaron nosso é caracterizado por uma casquinha crocante por fora que contrasta perfeitamente com a maciez do recheio",
        img: macaronDesc2,
      },
      {
        id: "macaron-desc-3",
        item: "Recheio Suave",
        text: "Cremoso e repleto de sabores intensos e autênticos, o que faz cada mordida ser uma experiencia única e magnífica",
        subItem: "Sabor cremoso",
        subText:
          "O recheio de cada macaron é suave, cremoso e repleto de sabor. Os sabores são intensos e autênticos, trnando cada mordida uma experiência única",
        img: macaronDesc3,
      },
      {
        id: "macaron-desc-4",
        item: "Tamanho delicado",
        text: "Pequenos, mas embalados com sabor, o que os torna ideais para sabores como um mimo doce",
        subItem: "Pequenas joias",
        subText:
          "Os nossos macarons são pequenos e delicados, porém embalados com sabor, o que os tornam ideais para saborear como um mimo doce ou para degustar uma variedade de sabores em uma única sessão",
        img: macaronDesc4,
      },
      {
        id: "macaron-desc-5",
        item: "Apresentação Encantadora",
        text: "Cuidadosamente embalados, tornando-os uma escolha perfeita para presentes",
        subItem: "Acabamento criativo",
        subText:
          "Nossos macarons são cuidadosamente apresentados, sempre dispostos em caixas elegantes, tornando-os uma escolha perfeita para presentes ou para eventos especiais",
        img: macaronDesc5,
      },
    ],
  },
];
