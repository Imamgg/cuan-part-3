import { Link } from "react-router";

const Komoditas = () => {
  let hasil = [
    {
      title: "Hasil Laut (Ikan)",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ipsa repellat tempora nam cumque impedit, soluta ullam recusandae officia tempore voluptatem modi sed itaque earum, aut quidem beatae iusto adipisci obcaecati, magnam architecto. Perspiciatis error ea repellendus maxime distinctio. Neque obcaecati saepe beatae minus sint sed officia aut delectus earum?",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
    },
    {
      title: "Hasil Laut",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ipsa repellat tempora nam cumque impedit, soluta ullam recusandae officia tempore voluptatem modi sed itaque earum, aut quidem beatae iusto adipisci obcaecati, magnam architecto. Perspiciatis error ea repellendus maxime distinctio. Neque obcaecati saepe beatae minus sint sed officia aut delectus earum?",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
    }
  ];
  let images = [
    {
      gambar: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      translatePosition: "translate-x-0"
    },
    {
      gambar: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      translatePosition: "-rotate-20 translate-y-6"
    },
    {
      gambar: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      translatePosition: "-translate-y-10"
    },
    {
      gambar: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      translatePosition: "rotate-20 translate-y-6"
    },
    {
      gambar: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      translatePosition: "translate-x-0"
    }
  ];
    return (
        <>
          <section className="px-10 pb-6 pt-28" id="komoditas">
            <h1 className="text-5xl font-bold text-center text-amber-950 mb-6">Komoditas</h1>
            <hr className="border-2 border-amber-950" />
            <div className="flex items-center justify-evenly">
              <p className="text-2xl font-semibold text-amber-950 mt-6">Hasil Laut</p>
              <p className="text-2xl font-semibold text-amber-950 mt-6">Hasil Pertanian</p>
              <p className="text-2xl font-semibold text-amber-950 mt-6">UMKM</p>
            </div>
            <div className="grid grid-cols-2 mt-10">
              <div className="flex flex-col gap-4 relative pr-10">
                <div className="absolute w-4 h-4 aspect-square top-0 right-0 rounded-full bg-amber-950"></div>
                <div className="w-[2px] bg-amber-950 h-full absolute right-[0.4rem]"></div>
                <div className="absolute w-4 h-4 aspect-square bottom-0 right-0 rounded-full bg-amber-950"></div>
                {hasil.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <img className="w-2/5 h-96 rounded-3xl object-cover" src={item.image} alt="" />
                    <div>
                      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className="bg-amber-950 font-semibold text-white rounded-2xl py-2 px-4 mt-4 text-sm w-fit block" to="/pesona">Lihat lebih detail tentang Hasil Laut</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center pl-10">
                <img className="w-full h-96 rounded-3xl object-cover" src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop" alt="gambar" />
              </div>
            </div>
          </section>
          <section className="mt-36">
            <div className="grid grid-cols-5 px-10">
              {images.map((item, index) => (
                <img key={index} className={`w-full h-72 object-cover ${item.translatePosition}`} src={item.gambar} alt="gambar" />
              ))}
            </div>
            <div className="mt-44 p-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop)"}}>
              <h1 className="text-5xl font-bold text-white mb-6">Hasil Laut (Ikan)</h1>
              <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique rerum blanditiis aliquam excepturi est sunt assumenda sint odio quis, veritatis sapiente asperiores minus. Illo officia laudantium cupiditate molestiae fuga, nemo, quae nihil reprehenderit modi quis dolorem quaerat incidunt nesciunt velit. Dolores esse vero architecto. Eligendi magni, ipsum est quasi maiores commodi nesciunt optio molestias voluptatibus exercitationem vero itaque cum id tempore at consequatur corrupti saepe sint nihil! Id, quasi repellendus. Iure, enim? Dignissimos laboriosam eum ipsa perferendis obcaecati reiciendis eos deleniti sapiente, quod, quis esse possimus vel dolorum omnis optio? Ut possimus ab facilis rem. Qui corrupti et temporibus quia.</p>
            </div>
          </section>
        </>
    )
}

export default Komoditas;