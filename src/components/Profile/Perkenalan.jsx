const Perkenalan = () => {
    return (
        <section className="grid grid-cols-2 w-full h-screen">
            <div className="w-full h-full bg-[url('/perkenalan.png')] bg-cover flex flex-col justify-center text-white px-32">
                <div>
                    <h1 className="text-7xl font-bold mb-10 mt-28">Desa Ijo</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio excepturi voluptate maiores eum magnam tenetur minima possimus! Eos reiciendis reprehenderit perspiciatis nam quo, adipisci porro dolor maxime minus eligendi voluptatibus placeat harum exercitationem. Necessitatibus voluptas sequi, voluptates alias reprehenderit sunt. Molestias, iusto? Nesciunt ea est inventore ullam labore beatae ipsum nemo? Enim nulla facere nam, dolor quia porro error et culpa unde reprehenderit rerum maxime mollitia quo quaerat a ducimus atque, ad accusantium magnam quae odit reiciendis exercitationem delectus? Non quisquam consequatur, illum quis voluptatibus aliquid dolorum odio possimus laudantium nulla alias! Placeat itaque magni voluptates illo alias quisquam, vel ex facilis nostrum quos ea.
                    </p>
                </div>
                <div className="w-full h-80 mt-10">
                    <h2 className="text-center text-3xl font-bold mb-2">Peta Desa</h2>
                    <div className="w-full h-64 bg-slate-500"></div>
                </div>
            </div>
            <div className="text-amber-950 px-20 flex flex-col justify-center">
                <div className="mb-20">
                    <h1 className="text-5xl font-bold text-center mb-2">Visi</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium aspernatur repellendus ab corporis? Repudiandae commodi iusto totam et perspiciatis a vitae iste illum eaque veritatis voluptatibus eligendi fugit consequuntur ex quaerat veniam corrupti expedita id, sed dolore modi rerum sunt? Vero eaque facilis a quidem recusandae beatae illo facere!
                    </p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-center mb-2">Misi</h1>
                    <ul className="flex flex-col gap-1 text-sm">
                        {[1, 2, 3].map((_, index) => (
                            <li key={index}>
                                {_}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos accusamus dolores non, ipsam alias impedit beatae? Natus vitae voluptatum fugiat repellendus magni quod distinctio, totam culpa nostrum aut, facilis explicabo, eius ex. A vitae iusto accusantium hic, possimus in?
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Perkenalan;