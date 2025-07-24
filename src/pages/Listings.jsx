import React from "react";
import "./Listings.css";

const listings = [
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

const Listings = () => (
  <main className="listings">
    <div style={{
      maxWidth: 1100, margin: "0 auto", textAlign: "center",
      fontFamily: "'Inter', sans-serif", color: "#23283b"
    }}>
      <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#ad5b00", marginBottom: 18 }}>
        Exclusive Listings
      </h2>
      <p style={{ marginBottom: 30, color: "#79573b" }}>
        Explore our portfolio of extraordinary homes—where every listing is as unique as autumn itself.
      </p>
      <div className="listings-grid">
        {listings.map((item, idx) => (
          <div className="listing-card animated-card" key={idx} tabIndex={0}>
            <div className="listing-img-wrap">
              <img src={item.img} alt={item.title} />
              {item.status && (
                <span className={`listing-badge ${item.status.toLowerCase().replace(/\s/g, "-")}`}>
                  {item.status}
                </span>
              )}
              <button className="listing-heart-btn" title="Save listing">
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none">
                  <path
                    d="M13.5 22.3l-1.35-1.23C5.4 15.1 1 11.12 1 6.85 1 3.53 3.54 1 6.75 1c1.92 0 3.73.92 4.75 2.36C12.52 1.92 14.33 1 16.25 1 19.46 1 22 3.53 22 6.85c0 4.27-4.4 8.25-11.15 14.22L13.5 22.3z"
                    stroke="#eeb88d" strokeWidth="2" fill="none"
                  />
                </svg>
              </button>
            </div>
            <div className="listing-details">
              <h3>{item.title}</h3>
              <div className="listing-address">{item.address}</div>
              <div className="meta">
                <span>{item.price}</span>
                <span className="dot" />
                <span>{item.beds}bd / {item.baths}ba</span>
                <span className="dot" />
                <span>{item.sqft.toLocaleString()} sqft</span>
              </div>
              <div className="desc">{item.description}</div>
              <button className="listing-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Listings;

