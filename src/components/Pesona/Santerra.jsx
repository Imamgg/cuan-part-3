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
    <div className="h-full w-full bg-white py-8">
      <div className="px-4">
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
              <div key={index} className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-amber-950">
                  {section.title}
                </h2>
                <p className="text-amber-950">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Santerra;
