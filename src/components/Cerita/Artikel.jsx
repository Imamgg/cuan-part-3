import { Link } from "react-router";

const Artikel = () => {
    let cardTitle = ["Perbaikan Jalan", "Pembersihan Sungai", "Musim Panen", "Warga Melaut", "Olah Padi"];
    let cards = [];
    cardTitle.forEach((title) => {
        cards.push(
            <div className="h-full">
                <div className="px-2 py-8 rounded-3xl flex flex-col gap-2 h-96 justify-end" style={{backgroundImage: "url('https://imgs.search.brave.com/vcIbgenQZXpFVLJbSHqVaQl7G29QIQc6-IC8Uc4JMVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYXdh/aC1kaS1jaXBhcmF5/LTI0MzUwOTk0Ny5q/cGc')"}}>
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <Link className="bg-amber-950 rounded-2xl px-4 p-1 text-sm w-full block" to="/cerita">Baca Selengkapnya...</Link>
                </div>
            </div>
        );
    })
    // for (let i = 0; i < 5; i++) {
    // }
    return (
        <>
            <section className="w-full min-h-screen pt-30 pb-10 px-10 text-white bg-cover bg-center relative bg-no-repeat" id="artikel" style={{ backgroundImage: "url('https://imgs.search.brave.com/XQMDAI78KWSkNZxRRptWBcUjj1efSGpQrskMjuuBbbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMy/MTA3MzYyL2lkL2Zv/dG8va3VjaW5nLW9i/ZXNpdGFzLW5ha2Fs/LWJlcm1hdGEtYmVz/YXItbWVsaWhhdC10/YXJnZXQtaW5nZ3Jp/cy1tZW55b3J0aXIt/a3VjaW5nLXJhbWJ1/dC5qcGc_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPUdvMGJ6/dlBZNlZjUU9sZ3FB/Q0hvdkxmNEVuMFFW/dElsSkNMcVpjUVdJ/cTg9')" }}>
                <div className="relative">
                    <img className="absolute w-10 opacity-70 left-8 top-1/2 -translate-1/2" src="./search.svg" alt="" />
                    <input className="px-16 py-3 bg-white/30 w-full rounded-2xl focus:outline-2 focus:outline-white font-bold" type="text" name="search" placeholder="Cari Berita/Kegiatan Desa Ijo" />
                </div>
                <div className="grid grid-cols-2 mt-8">
                    <div>
                        <h1 className="text-5xl mb-4 font-bold">Panen Singkong</h1>
                        <p className="w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat accusantium quis delectus quibusdam aspernatur, cum laborum tempora eveniet labore quos minus provident magni nulla itaque, explicabo ad neque architecto incidunt. Voluptatem et minus doloremque ipsa, sint optio saepe placeat, impedit voluptates earum consequatur ea assumenda laboriosam vel. Necessitatibus velit, pariatur recusandae, amet architecto, vero ab sit itaque nemo ullam deleniti placeat sint natus eveniet totam expedita neque ea magni incidunt perferendis quae libero saepe obcaecati. Similique magnam quas aut voluptates quod hic et dolorem sunt ut repellendus. Est quidem nobis assumenda eos veniam officiis labore nemo omnis odit recusandae nisi iusto sint illo eligendi amet aperiam iure beatae, sapiente numquam nihil modi. Aliquid sequi dignissimos voluptatem distinctio eius reiciendis, obcaecati eveniet amet veritatis tempora, repellendus consequuntur officia architecto tenetur delectus esse culpa qui nobis! Odio corporis similique temporibus quibusdam laudantium explicabo iste sed facere ut. Id commodi quos aperiam voluptates ipsum, quasi doloribus esse inventore at odit? Rem dicta, consequatur alias hic ipsa quo fugiat voluptatibus veritatis facilis qui laboriosam! Sit tempora amet, quae, necessitatibus suscipit ipsa repellendus natus reiciendis corporis hic impedit sequi. Quibusdam facere itaque, veritatis quisquam, voluptatem animi sunt magni ducimus dolore eos consequatur tempore voluptate!</p>
                        <div className="mt-6">
                            <p className="text-black mb-2 bg-white w-fit font-bold rounded-3xl p-1">Tanggal: 27 Juni 2025</p>
                            <p className="text-black bg-white w-fit font-bold rounded-3xl p-1">Lokasi : Kebun Singkong</p>
                        </div>
                    </div>
                    <div className="relative pl-24">
                        <div className="w-4 aspect-square rounded-full bg-white absolute left-8 top-0"></div>
                        <div className="w-[2px] bg-white h-full absolute left-[2.45rem]"></div>
                        <div className="w-4 aspect-square rounded-full bg-white absolute left-8 bottom-0"></div>
                        <div className="grid grid-cols-2 h-full gap-2 overflow-y-scroll max-h-screen scrollbar-none">
                            {cards.map((card) => (card))}
                            {/* <div className="rounded-3xl h-full">
                                <div className="px-2 py-8 flex flex-col gap-2 h-96 bg-red-500 justify-end">
                                    <h1 className="font-bold text-2xl">Perbaikan Jalan</h1>
                                    <Link className="bg-amber-950 rounded-2xl px-4 p-1 text-sm w-full block" to="/cerita">Baca Selengkapnya...</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Artikel;