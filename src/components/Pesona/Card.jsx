const Card = ({ destinations, currentIndex, setCurrentIndex }) => {
  // console.log(`from card ${currentIndex}`)
  // const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  const getVisibleDestinations = () => {
    const prev = (currentIndex - 1 + destinations.length) % destinations.length;
    const next = (currentIndex + 1) % destinations.length;
    return [destinations[prev], destinations[currentIndex], destinations[next]];
  };

  const visibleDestinations = getVisibleDestinations();
  console.log(visibleDestinations);

  return (
    <div id="wisata" className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-6xl font-bold text-amber-950 drop-shadow-lg">
        Wisata
      </h1>
      <div className="relative w-full mx-auto px-4">
        <div className="relative z-10 flex items-center justify-center h-[600px]">
          <button
            className="absolute left-8 z-20 bg-amber-950 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-12 h-12 border-none cursor-pointer transition-all duration-200 flex items-center justify-center"
            onClick={prevSlide}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center justify-center space-x-4 max-w-6xl">
            {visibleDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`transition-all duration-300 bg-white rounded-lg shadow-lg overflow-hidden ${
                  index === 1
                    ? "scale-100 z-10 shadow-2xl"
                    : "scale-75 opacity-60 z-0"
                } ${
                  index === 0 ? "-rotate-12" : index === 2 ? "rotate-12" : ""
                }`}
                style={{
                  width: index === 1 ? "350px" : "280px",
                  height: index === 1 ? "500px" : "400px",
                }}
              >
                <div className="p-0 h-full flex flex-col">
                  <div className="relative h-3/5 overflow-hidden rounded-t-lg">
                    <img
                      src={destination.images[0]}
                      alt={destination.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-amber-950 mb-4">
                      {destination.title}
                    </h2>
                    <p
                      className="text-sm text-amber-900 leading-relaxed overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {destination.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-8 z-20 bg-amber-950 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-12 h-12 border-none cursor-pointer transition-all duration-200 flex items-center justify-center"
            onClick={nextSlide}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
