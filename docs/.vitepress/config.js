import java from "../java/contents";

module.exports = {
  title: "Full Stack Ltd",
  themeConfig: {
    logo: "https://fullstackbd.com/assets/images/logo-monogram.png",
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Java",
        link: "/java/introduction",
      },
    ],
    sidebar: [
      {
        text: "Java",
        collapsed: true,
        items: java("/java"),
      },
    ],
  },
};
