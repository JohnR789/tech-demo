import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ListingsSlider.css";

const dummyListings = [
  {
    img: "/house1.png",
    title: "Autumn A-Frame",
    address: "11 Mountain Trail, Summit Valley",
    price: "$684,000",
    beds: 3,
    baths: 2,
    sqft: 1960,
    status: "New",
    description: "Contemporary A-frame with soaring windows and panoramic mountain views.",
  },
  {
    img: "/house2.png",
    title: "Golden Log Cabin",
    address: "92 Timber Rd, Maple Ridge",
    price: "$539,000",
    beds: 2,
    baths: 2.5,
    sqft: 1540,
    status: "Open House",
    description: "Classic log cabin retreat with front porch and cozy fireplace for autumn evenings.",
  },
  {
    img: "/house3.png",
    title: "Stonefront Chalet",
    address: "204 Pine Cone Lane, Autumn Woods",
    price: "$749,000",
    beds: 3,
    baths: 2.5,
    sqft: 2250,
    status: "Sold",
    description: "Chalet-style home with stone accents and private balcony overlooking the hills.",
  },
  {
    img: "/house4.png",
    title: "Sunset Peaks Home",
    address: "301 Aspen Dr, Loon Mountain",
    price: "$689,000",
    beds: 3,
    baths: 2,
    sqft: 2000,
    status: "Open House",
    description: "Custom mountain home with dramatic windows and scenic outdoor living spaces.",
  },
  {
    img: "/house5.png",
    title: "Pinecrest Cottage",
    address: "8 Birch Lane, Owl's Nest",
    price: "$599,000",
    beds: 2,
    baths: 2,
    sqft: 1280,
    status: "New",
    description: "Quaint stone and wood cottage nestled in golden autumn forests.",
  },
  {
  img: "/house6.png",
  title: "Modern Glass Retreat",
  address: "111 Panorama Rd, Alpine Springs",
  price: "$1,195,000",
  beds: 4,
  baths: 3.5,
  sqft: 2870,
  status: "New",
  description: "Sleek, modern retreat with floor-to-ceiling windows, breathtaking mountain views, and elegant finishes throughout.",
},
{
  img: "/house7.png",
  title: "Mountainview Craftsman",
  address: "44 Evergreen Way, Cedar Ridge",
  price: "$765,000",
  beds: 3,
  baths: 2.5,
  sqft: 2060,
  status: "Open House",
  description: "Handsome craftsman with stone and wood exterior, attached garage, and spacious porch for autumn evenings.",
},
{
  img: "/house8.png",
  title: "Sunrise Timber Home",
  address: "8 Oak Tree Lane, Summit Estates",
  price: "$899,000",
  beds: 4,
  baths: 3,
  sqft: 2540,
  status: "Sold",
  description: "Gorgeous timber home with classic gables, stone foundation, and open-concept living.",
},
{
  img: "/house9.png",
  title: "Rustic Cabin",
  address: "122 Aspen Hollow, Pinecrest",
  price: "$495,000",
  beds: 2,
  baths: 2,
  sqft: 1210,
  status: "",
  description: "Quaint rustic log cabin with vintage charm and cozy front porch for rocking chairs.",
},
{
  img: "/house10.png",
  title: "Autumn Pines Estate",
  address: "2 Trailside Ave, Maple Valley",
  price: "$1,095,000",
  beds: 4,
  baths: 3.5,
  sqft: 2990,
  status: "New",
  description: "Grand family home with stone and timber details, sweeping driveway, and mountain views.",
},
{
  img: "/house11.png",
  title: "Glass Mountain Chalet",
  address: "98 Reflection Dr, Echo Lake",
  price: "$1,249,000",
  beds: 3,
  baths: 3.5,
  sqft: 2375,
  status: "Open House",
  description: "Light-filled modern chalet with expansive windows and a private pond.",
},
{
  img: "/house12.png",
  title: "Stone Ridge Home",
  address: "34 Ridgeview Rd, Golden Summit",
  price: "$839,000",
  beds: 3,
  baths: 2,
  sqft: 1840,
  status: "New",
  description: "Rustic and refined, this two-story retreat features classic stonework and a welcoming porch.",
},
{
  img: "/house13.png",
  title: "Chalet du Soleil",
  address: "17 Chamonix Ct, Alpine Peaks",
  price: "$985,000",
  beds: 4,
  baths: 2.5,
  sqft: 2180,
  status: "",
  description: "Charming European-style chalet nestled in vibrant fall foliage with decorative woodwork.",
},
{
  img: "/house14.png",
  title: "Sunshine Cottage",
  address: "27 Goldfinch Lane, Yellow Birch",
  price: "$429,000",
  beds: 2,
  baths: 1,
  sqft: 900,
  status: "",
  description: "Cheerful yellow cottage, red roof, and inviting porch in a storybook mountain setting.",
},
{
  img: "/house15.png",
  title: "Eco Ridge Cabin",
  address: "66 Sunrise Path, Fern Hollow",
  price: "$559,000",
  beds: 2,
  baths: 2,
  sqft: 1120,
  status: "New",
  description: "Sustainable green-roofed cabin with solar, surrounded by forest and mountain tranquility.",
},
{
  img: "/house16.png",
  title: "Summit Vista Home",
  address: "409 Sunrise Ridge, Highland Springs",
  price: "$1,179,000",
  beds: 4,
  baths: 3.5,
  sqft: 2760,
  status: "New",
  description: "Dramatic modern design with unique rooflines, expansive glass, and spectacular mountain views.",
},
{
  img: "/house17.png",
  title: "Chestnut Grove Colonial",
  address: "255 Valley Rd, Chestnut Grove",
  price: "$965,000",
  beds: 4,
  baths: 3,
  sqft: 2500,
  status: "Open House",
  description: "Classic colonial-style home with double garage, covered porch, and autumn landscaping.",
},
{
  img: "/house18.png",
  title: "Hillside Timber Chalet",
  address: "118 Slope Dr, Mountain View",
  price: "$799,000",
  beds: 3,
  baths: 2,
  sqft: 1810,
  status: "",
  description: "Striking timber-frame home perched above the valley, featuring large decks and open living areas.",
},
{
  img: "/house19.png",
  title: "Willow Pond A-Frame",
  address: "22 Willow Pond Ln, Pine Hill",
  price: "$679,000",
  beds: 3,
  baths: 2,
  sqft: 1590,
  status: "Sold",
  description: "Charming lakeside A-frame with dual decks, cathedral windows, and serene water views.",
},
{
  img: "/house20.png",
  title: "Crimson Maple Farmhouse",
  address: "77 Maple Lane, Red Leaf Acres",
  price: "$749,000",
  beds: 4,
  baths: 2.5,
  sqft: 2200,
  status: "Open House",
  description: "Inviting farmhouse in classic red with wraparound porch and peaceful wooded setting.",
},
];

const SkeletonCard = () => (
  <div className="listing-card skeleton">
    <div className="listing-img-wrap skeleton-img" />
    <div className="listing-details">
      <div className="skeleton-line skeleton-title"></div>
      <div className="skeleton-line skeleton-meta"></div>
      <div className="skeleton-line skeleton-meta short"></div>
      <div className="skeleton-line skeleton-desc"></div>
    </div>
  </div>
);

const ListingsSlider = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="listings" id="listings">
      <div className="listings-headline-wrapper" data-aos="fade-up">
        <h2 className="listings-headline">Featured Listings</h2>
        <div className="listings-headline-bar" />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={34}
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
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <SwiperSlide key={`skeleton-${idx}`}>
                <SkeletonCard />
              </SwiperSlide>
            ))
          : dummyListings.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`listing-card animated-card`}
                  tabIndex={0}
                  data-aos="fade-up"
                  data-aos-delay={100 + idx * 40}
                >
                  <div className="listing-img-wrap">
                    <img src={item.img} alt={item.title} loading="lazy" />
                    {item.status && (
                      <span className={`listing-badge ${item.status.replace(" ", "-").toLowerCase()}`}>
                        {item.status}
                      </span>
                    )}
                    <button className="listing-heart-btn" aria-label="Save this home">
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path
                          d="M11.5 21s-6.29-4.97-8.47-7.82C1.02 10.31 2.27 7.06 5.22 6.16c1.45-.42 3.07.05 4.28 1.23L11.5 9.4l2-2.01c1.21-1.18 2.83-1.65 4.28-1.23 2.95.9 4.2 4.15 2.19 7.02C17.79 16.03 11.5 21 11.5 21z"
                          stroke="#eeb88d"
                          strokeWidth="2"
                          fill="none"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="listing-details">
                    <h3>{item.title}</h3>
                    <div className="listing-address">{item.address}</div>
                    <p className="meta">
                      <span>{item.price}</span>
                      <span className="dot" />
                      <span>
                        {item.beds}bd / {item.baths}ba
                      </span>
                      <span className="dot" />
                      <span>{item.sqft.toLocaleString()} sqft</span>
                    </p>
                    <p className="desc">{item.description}</p>
                    <a className="listing-details-btn" href="#">
                      View Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default ListingsSlider;
