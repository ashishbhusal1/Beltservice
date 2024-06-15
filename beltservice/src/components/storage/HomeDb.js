import {
  tick,
  cardImg1,
  cardImg2,
  apple,
  service1,
  service2,
  service3,
  iMac,
  mac,
  iPad,
  iPhone,
  apple1,
  jonathon,
  clara,
  angelina,
  aboutHero1,
  aboutHero2,
  services1,
  services2,
  faq1,
  faq2,
  contact1,
  contact2,
  About1,
  About2,
  clock,
  star,
  slide,
} from "../../scripts/Images";

export const HeaderMenu = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "FAQs", link: "/faqs" },
  { id: 5, title: "Contact", link: "/contact" },
];
export const HeroContent = [
  {
    img: tick,
    title: ["Quick diagnosis", "Quick delivery"],
    description: "Common Apple repairs & upgrades",
    miniDescription:
      "We offer up to 30% cheaper repairs and support fees locally.",
  },
];
export const HeroCard = [
  {
    id: 1,
    img: cardImg1,
    name: "Clara",
    message: "My iMac went dead 😖",
    time: "7AM",
    class: "card1 heroCard flexrow",
  },
  {
    id: 2,
    img: cardImg2,
    name: "Tesle",
    message: "Don't worry. Report to the email   😉",
    time: "9AM",
    class: "card2 heroCard flexrow",
  },
];
export const ServiceContent = {
  img: apple,
  title: "Authorized service provider",
  description: "We are able to visit your home or office in Melbourne",
  miniDescription:
    "Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibn, tincidunt ut eros",
  location: "Level 13, 2 Elizabeth St, Melbourne",
  mail: "Have a problem? noreply@envato.com",
};
export const GalleryImage = {
  img1: service1,
  img2: service2,
  img3: service3,
};
export const ProblemContent = {
  title: "We can solve all your problems with Your devices",
  description:
    "Ut ex turpis, faucibus sed feugiat ut, tempus nec nisi. Etiam venicula est ut erat congue, et pulvinar sit lorem nibh aliquet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  miniDescription: [
    "Fusce ut velit laoreet. temous arcu eu, molestie tortor. Nam vel usto cursus, faucibus lorem eget, egestas.",
    "Nullam consectetur auque non consequat egestas. Nam ante libero. finibus vel velit eu, luctus.",
  ],
  link: ["At vero eos accusam ?", "Cons eretur, sadioscindi."],
};
export const ProblemCard = [
  { id: 1, img: iMac, title: "iMac", description: "Purus dolor morbi." },
  { id: 2, img: mac, title: "mac", description: "Stet clita kasd gubergren." },
  { id: 3, img: iPad, title: "iPad", description: "Mauris accumsan, massa." },
  {
    id: 4,
    img: iPhone,
    title: "iPhone",
    description: "Tritique nibh,nec egestas",
  },
];
export const HelpContent = {
  title: "Here to help",
  description: "Nullam consectetur augue non consequat egestas.",
  img: apple1,
  rating: "4,8",
  ratings: "Average of our clients ratings",
};
export const HelpCard = [
  {
    id: 1,
    img: jonathon,
    name: "Jonathon",
    message: "Great! Thank you for vour help!",
    class: "helpCard flexrow helpCard1",
  },
  {
    id: 2,
    img: clara,
    name: "Clara",
    message: "Big, big thanks for your support!",
    class: "helpCard flexrow helpCard2",
  },
  {
    id: 3,
    img: angelina,
    name: "Angelina",
    message: "Reliability and involvement.",
    class: "helpCard flexrow helpCard3",
  },
];
export const HeroCardContent = {
  title: "What can we do for You?",
  description: "Vivamus in diam turpis maximus tristique.",
  button: "Contact",
  link: "/contact",
  img1: aboutHero1,
  img2: aboutHero2,
};
export const HeroServicesContent = {
  title: "We will repair your damage",
  description: "Maecenas non laoreet odio lobortis.",
  button: "Go to FAQ",
  link: "/faqs",
  img1: services2,
  img2: services1,
};
export const HeroFaqContent = {
  title: "Any questions?",
  description: "Fusce ut velit laoreet.",
  button: "Contact",
  link: "/contact",
  img1: faq1,
  img2: faq2,
};
export const HeroContactContent = {
  title: "Feel free to contact us",
  description: "Nam vel justo cursus, fabcibus lorem.",
  button: "Contact us",
  link: "/contact",
  img1: contact1,
  img2: contact2,
};
export const AboutCardContent = {
  img: About1,
  title: "Our service has been operating since 2007",
  description:
    "Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet mattis porta enim",
  class: "flexrow",
};
export const AboutCardContent1 = {
  img: About2,
  title: "We repair iMacs, MacBooks, iPhones and other Apple devices",
  description:
    "Vivamus in diam turpis. In condementum maximus tristique. Macecenas non laoreet odio. Fusce lobortis porttior purus,vel vestibulum libero.",
  class: "flexrowreverse",
};
export const AboutClientCard = [
  { id: 1, img: clock, title: "24/7", description: "Working time" },
  { id: 2, img: star, title: "6244", description: "Fixed devices" },
  { id: 3, img: slide, title: "788", description: "Daily reports" },
];
export const ServicesCardContent = [
  {
    img: iMac,
    title: "iMac",
    description: "Purus dolor morbi.",
    title2: "We repair your iMac",
    desc1:
      "Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit amet sem placerat tempor. Maecenas eget arcu venenatis, sagittis felis sit amet, dictum nisl.",
    desc2:
      "Curabitur sed iaculis dolor, non congue ligula. Maecenas imberdiet ante eget hendrerit oosuere. Nunc urna libero, conquel porta nion a, semper teuglat sem.",
    l1: "Fusce ut velit laoreet",
    l2: "Tortor eget sodales mollis",
    l3: "raucibus lorem eget",
    l4: "Hendrerit purus, porttitor",
    class: "ServicesCard flexrow",
  },
  {
    img: mac,
    title: "MacBook",
    description: "Stet clita kasd gubergren.",
    title2: "We repair your MacBook",
    desc1:
      "Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci. Integer pharetra magna non ante blandit lobortis. Sed mollis consequat eleifend.",
    desc2:
      "Aliquam consectetur orci eget dictum tristique. Aenean et sodales est, ut vestibulum lorem.",
    l1: " Vestibulum euismod",
    l2: " Cras massa nibh",
    l3: " Feugiat maximus",
    l4: "Tincidunt ut eros",
    class: "ServicesCard flexrowreverse",
  },
  {
    img: iPad,
    title: "iPad",
    description: "Purus dolor morbi.",
    title2: "We repair your iPad",
    desc1:
      "Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit amet sem placerat tempor. Maecenas eget arcu venenatis, sagittis felis sit amet, dictum nisl.",
    desc2:
      "Curabitur sed iaculis dolor, non congue ligula. Maecenas imberdiet ante eget hendrerit oosuere. Nunc urna libero, conquel porta nion a, semper teuglat sem.",
    l1: "Fusce ut velit laoreet",
    l2: "Tortor eget sodales mollis",
    l3: "raucibus lorem eget",
    l4: "Hendrerit purus, porttitor",
    class: "ServicesCard flexrow",
  },
  {
    img: iPhone,
    title: "iPhone",
    description: "Stet clita kasd gubergren.",
    title2: "We repair your iPhone",
    desc1:
      "Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci. Integer pharetra magna non ante blandit lobortis. Sed mollis consequat eleifend.",
    desc2:
      "Aliquam consectetur orci eget dictum tristique. Aenean et sodales est, ut vestibulum lorem.",
    l1: " Vestibulum euismod",
    l2: " Cras massa nibh",
    l3: " Feugiat maximus",
    l4: "Tincidunt ut eros",
    class: "ServicesCard flexrowreverse",
  },
];
