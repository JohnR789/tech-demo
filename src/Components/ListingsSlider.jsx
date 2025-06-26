import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ListingsSlider.css";

const dummyListings = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Maplewood Retreat",
    price: "$799,000",
    beds: 4,
    baths: 3.5,
    description: "Cozy craftsman nestled among brilliant autumn foliage.",
  },
  {
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    title: "Harvest Hill Estate",
    price: "$1,550,000",
    beds: 5,
    baths: 5,
    description: "Elegant stone home with pumpkin-hued accents, sweeping lawns, and a classic red barn.",
  },
  {
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    title: "Chestnut Lane Cottage",
    price: "$520,000",
    beds: 3,
    baths: 2,
    description: "Charming cottage with wraparound porch, perfect for cider on crisp mornings.",
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    title: "Amber Pines Residence",
    price: "$1,120,000",
    beds: 4,
    baths: 4,
    description: "Modern, airy design with floor-to-ceiling windows and golden pine views.",
  },
  {
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    title: "Golden Oaks Manor",
    price: "$2,095,000",
    beds: 6,
    baths: 7,
    description: "Sophisticated estate with arched windows, golden oak floors, and formal gardens.",
  },
  {
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    title: "Willowbrook Haven",
    price: "$1,800,000",
    beds: 5,
    baths: 6,
    description: "Secluded luxury nestled by a willow-lined stream. Entertain in style all season.",
  },
];

const ListingsSlider = () => (
  <section className="listings" id="listings">
    <div className="listings-headline-wrapper" data-aos="fade-up">
      <h2 className="listings-headline">Featured Listings</h2>
      <div className="listings-headline-bar" />
    </div>
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={42}
      slidesPerView={1}
      breakpoints={{
        600: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1300: { slidesPerView: 3 },
      }}
      className="listings-swiper"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {dummyListings.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="listing-card" tabIndex={0}>
            <div className="listing-img-wrap">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="listing-img-overlay" />
            </div>
            <div className="listing-details">
              <h3>{item.title}</h3>
              <p className="meta">
                <span>{item.price}</span>
                <span className="dot" />
                <span>
                  {item.beds}bd / {item.baths}ba
                </span>
              </p>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ListingsSlider;

