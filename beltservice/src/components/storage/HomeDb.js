import { tick, cardImg1, cardImg2, apple } from "../../scripts/Images";

export const HeaderMenu = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "FAQs", link: "/faqs" },
  { id: 5, title: "Contact", link: "/contact" },
  { id: 6, title: "Buy now", link: "/buynow" },
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
