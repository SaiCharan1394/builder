import React from "react";
import MainCard from "./MainCard.js";
const MainCardData = () => {
  const mainCardData = [
    {
      suggestion: {
        icon: "https://i.ibb.co/T4kcDJy/trophy.png",
        text: "Best Choice",
        value: true,
      },
      cardNo: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__",
      imageHeading: "Builder 1",
      heading: "WixPro 72-Inch Responsive Website Builder-",
      headingText:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      subHeading: "Main highlights",
      whatYouGet:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      complement: "Exceptional",
      starRating: "https://i.ibb.co/yfh6Vqy/stars.png",
      ratingPercentage: [
        {
          rating: "9.9",
          text: "Building Responsive",
        },
        {
          rating: "8.9",
          text: "Cool",
        },
        {
          rating: "8.9",
          text: "Docs",
        },
      ],
      services: [
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Documentation",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Easy Use",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Out Of Box",
        },
      ],
      offer:"26% Off"
    },
    {
      suggestion: {
        icon: "https://i.ibb.co/Qm7J553/diamond.png",
        text: "Best Value",
        value: true,
      },
      cardNo: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__",
      imageHeading: "Biulder",
      heading: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
      headingText:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      subHeading: "Main highlights",
      whatYouGet:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      complement: "Excellent",
      starRating: "https://i.ibb.co/gMLB7rv/image.png",
      ratingPercentage: [
        {
          rating: "9.9",
          text: "Building Responsive",
        },
        {
          rating: "8.9",
          text: "Cool",
        },
        {
          rating: "8.9",
          text: "Docs",
        },
      ],
      services: [
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Documentation",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Easy Use",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Out Of Box",
        },
      ],
      offer:"26% Off"
    },
    {
      suggestion: {
        icon: null,
        text: "",
        value: false,
      },
      cardNo: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__",
      imageHeading: "Builder 1",
      heading: "WixPro 72-Inch Responsive Website Builder- ",
      headingText:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      subHeading: "Main highlights",
      whatYouGet:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.3",
      complement: "Exceptional",
      starRating: "https://i.ibb.co/yfh6Vqy/stars.png",
      ratingPercentage: [
        {
          rating: "9.9",
          text: "Building Responsive",
        },
        {
          rating: "8.9",
          text: "Cool",
        },
        {
          rating: "8.9",
          text: "Docs",
        },
      ],
      services: [
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Documentation",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Easy Use",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Out Of Box",
        },
      ],
      offer:"26% Off"
    },
    {
      suggestion: {
        icon: "",
        text: "",
        value: false,
      },
      cardNo: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__",
      imageHeading: "CDK",
      heading: "CDK Resposive Builder:",
      headingText:
        " An extensive library of widgets and apps, and detailed step-by-step guides",
      subHeading: "Main highlights",
      whatYouGet: "",
      rating: "9.1",
      complement: "Very Good",
      starRating: "https://i.ibb.co/gMLB7rv/image.png",
      ratingPercentage: [
        {
          rating: "9.9",
          text: "Building Responsive",
        },
        {
          rating: "8.9",
          text: "Cool",
        },
        {
          rating: "8.9",
          text: "Docs",
        },
      ],
      services: [
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Documentation",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Easy Use",
        },
        {
          icon: "https://i.ibb.co/dtSTj9j/image.png",
          text: "Out Of Box",
        },
      ],
      offer:"26% Off"
    },
  ];
  return (
    <div>
      {mainCardData.map((item, index) => (
        <MainCard
          key={index}
          image={item.image}
          imageHeading={item.imageHeading}
          heading={item.heading}
          offer={item.offer}
          headingText={item.headingText}
          subHeading={item.subHeading}
          whatYouGet={item.whatYouGet}
          rating={item.rating}
          complement={item.complement}
          cardNo={item.cardNo}
          suggestionIcon={item.suggestion.icon}
          suggestionText={item.suggestion.text}
          suggestionValue={item.suggestion.value}
          starRating={item.starRating}
          ratingPer={
            item.ratingPercentage &&
            item.ratingPercentage
              .map((ratingObj) => ratingObj.rating)
              .join(", ")
          }
          ratingText={
            item.ratingPercentage &&
            item.ratingPercentage.map((textObj) => textObj.text).join(", ")
          }
          servicesIcon={
            item.services &&
            item.services.map((iconObj) => iconObj.icon).join(", ")
          }
          servicesText={
            item.services &&
            item.services.map((textObj) => textObj.text).join(", ")
          }
        />
      ))}
    </div>
  );
};

export default MainCardData;
