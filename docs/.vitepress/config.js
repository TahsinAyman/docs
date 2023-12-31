import java from "../java/contents";
import cdr from "../cdr/v1.0.0/contents";

module.exports = {
  title: "Full Stack Ltd",
  description: "Full Stack Documentation Site",
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
      {
        text: "CDR",
        link: "/cdr/v1.0.0/getting-started",
      },
    ],
    sidebar: [
      {
        text: "Java",
        collapsed: true,
        items: java("/java"),
      },
      {
        text: "CDR",
        collapsed: true,
        items: cdr("/cdr/v1.0.0"),
      },
    ],
  },
};
