const Santerra = () => {
  const sections = [
    {
      title: "Santerra",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! ",
      image: "sejarah.png",
    },
    {
      title: "Aktivitas Populer",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae! ",
      image: "sejarah.png",
    },
    {
      title: "Fasilitas dan Layanan",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae!",
    },
    {
      title: "Lokasi",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere modi, accusamus pariatur temporibus voluptate ipsum harum impedit voluptatibus officia alias quisquam optio explicabo nesciunt illo quam corporis. Quidem, mollitia quae!",
      image: "sejarah.png",
    },
  ];

  return (
    <div className="h-screen w-full bg-white py-8">
      <div className="px-4 pb-20">
        <div className="flex">
          <div className="relative">
            <div className="absolute left-[231px] top-0 w-[2px] bg-amber-950 h-full"></div>
            <div className="w-4 h-4 rounded-full bg-amber-950 absolute left-56 -top-2 z-10"></div>
            <div className="w-4 h-4 rounded-full bg-amber-950 absolute left-56 -bottom-2 z-10"></div>
            <div className="space-y-2">
              {sections.map((section, index) => (
                <div key={index} className="relative">
                  {section.image && (
                    <div className="w-52 h-56">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="ml-16 space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex flex-col flex-1">
                  <h2 className="text-3xl font-bold text-amber-950">
                    {section.title}
                  </h2>
                  <p className="text-amber-950">{section.content}</p>
                </div>

                {section.title === "Lokasi" && (
                  <div className="ml-8 flex-1">
                    <h3 className="text-3xl font-bold text-amber-950 mb-4">
                      Maps
                    </h3>
                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663!2d106.8451!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNTAnNDIuNCJF!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Santerra;
