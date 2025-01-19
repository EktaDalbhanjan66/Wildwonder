import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(6); // Default for large screens

  const images = [
    { src: "https://scontent.cdninstagram.com/v/t51.75761-15/473885514_17999974106718928_5663911416514775367_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Zo2JDHKfvucQ7kNvgHyaBbg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYBTeOmoqxx2hfI8L1Bt8Aj0-QgIGhU7bVvqsSQykhSHag&oe=67927ADE", alt: "Celebration" },
    { src: "https://scontent.cdninstagram.com/v/t51.29350-15/473989590_1961093147726017_8442939506428817667_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=1ivZ31hg-JkQ7kNvgGdLVpg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYD3oKTX0aghEPue78xwUTIA7f6uT_39ZnUTJQ3TUxc_5A&oe=679283C8", alt: "Mango Drink" },
    { src: "https://scontent.cdninstagram.com/v/t51.75761-15/473822932_17999765570718928_7382965682884542671_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=1CGWF_pbC9cQ7kNvgHlLYa4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYBIFgG5pqz3DqdxHjXdu32BFPl3J1u4lhNuWXYgtNN7Lw&oe=679284CB", alt: "Whole Foods" },
    { src: "https://scontent.cdninstagram.com/v/t51.29350-15/473688474_1375606280271976_5024817070283598618_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=TlJtD1DSXyQQ7kNvgGeNp8F&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYD3DXhn6OJ0li-pPZU7Gcg4NfdsZyncvlAHUDpWcyhGzg&oe=679284EC", alt: "Street Food" },
    { src: "https://scontent.cdninstagram.com/v/t51.75761-15/472348253_17998277909718928_3310903025236233408_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=1oc7kwS3Q9MQ7kNvgEXxooc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYC1uIc9QF3k2mprYni8uTdYqNsdogqw30o2aOq1DJqATw&oe=67925786", alt: "Local Market" },
    { src: "https://scontent.cdninstagram.com/v/t51.75761-15/470425050_17996109713718928_8817211310949574448_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=cCv-fswTDOUQ7kNvgHI1_c6&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYC1GKalb3nKvi7KVUaT23kbZN05TlulmFvKv1bIDstCHg&oe=679259C2", alt: "Fresh Produce" },
    { src: "https://scontent.cdninstagram.com/v/t51.75761-15/468593085_17993767736718928_8373421568847572783_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=U2DUWIM-3CEQ7kNvgFg3_ez&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYCjDp7sBJAiHi8bfOX3KohTIunNNZcq7c7lYIf85cxHCg&oe=679262F5", alt: "Restaurant" },
    { src: "https://scontent.cdninstagram.com/v/t51.75761-15/468302197_17993641325718928_1751602968381668948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=9wb78GorPUUQ7kNvgECDakF&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AwXwgQ0iymgYnPY33VeUoZJ&oh=00_AYD51zJPiT5lPeva8aoW8xkI_sO6YfK-XwzY2HBH97ecAA&oe=679274C4", alt: "Cafe" },
  ];

  const handleResize = () => {
    if (window.innerWidth < 640) setVisibleCards(1); // 1 card for small screens
    else if (window.innerWidth < 1024) setVisibleCards(3); // 3 cards for tablets
    else setVisibleCards(6); // 6 cards for larger screens
  };

  useEffect(() => {
    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideNext = () => {
    setCurrentIndex((prev) => 
      (prev < images.length - visibleCards ? prev + 1 : prev)
    );
  };

  return (
    <main className="px-4 relative">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-full sm:w-1/3 md:w-1/6 relative group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={slidePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={slideNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg disabled:opacity-50"
          disabled={currentIndex >= images.length - visibleCards}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
};

export default ImageSlider;
