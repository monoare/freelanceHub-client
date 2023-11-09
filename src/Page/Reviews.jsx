import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from "../assets/image/image-1.jpg";
import img2 from "../assets/image/image-2.jpg";
import img3 from "../assets/image/image-3.jpg";
import img4 from "../assets/image/image-4.jpg";

import "swiper/css/navigation";
import Container from "../Components/UI/Container";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      img: img1,
      comment:
        "As a digital marketer, FreelanceHub has been a game-changer. The variety of projects and the ease of communication make it my go-to platform.",
    },
    {
      id: 2,
      name: "Christina Milli",
      img: img2,
      comment:
        "FreelanceHub connected me with amazing web development projects. The platform is user-friendly, and the support team is fantastic!",
    },
    {
      id: 3,
      name: "Jane Smith",
      img: img3,
      comment:
        "Finding creative projects on FreelanceHub has been a joy. The clients appreciate quality, and the platform ensures smooth collaboration.",
    },
    {
      id: 4,
      name: "Samantha White",
      img: img4,
      comment:
        "FreelanceHub is the perfect place for web developers. I've built a strong portfolio and networked with clients who value my skills and expertise.",
    },
  ];

  return (
    <Container>
      <div className="w-96 md:w-full my-20 mx-auto">
        <p className="text-3xl text-center font-semibold">Reviews</p>
        <AwesomeSlider className="w-96 md:w-full md:h-96 my-20">
          {reviews?.map((item, id) => (
            <div key={id} className="text-white text-center">
              <img
                className="w-24 h-24 mx-auto rounded-full"
                src={item.img}
                alt=""
              />
              <p className="py-5 text-lg">{item.name}</p>
              <p className="px-3">{item.comment}</p>
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </Container>
  );
};

export default Reviews;
