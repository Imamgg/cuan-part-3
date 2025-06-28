import { useState } from "react";

const AlbumFoto = () => {
    // isi data gambar disini
    let dataGambar = [];
    // default selected adalah index 0 dari dataGambar
    const [selected, setSelected] = useState('https://imgs.search.brave.com/nJ2Beh3qyiTaTjrfza_GczYmTErUqZUnM8-Ufe98y9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/Mi8xOS8wNi80OS9y/aWNlLWZpZWxkLTcw/MjE5OTdfNjQwLmpw/Zw');
    // pake foreach buat looping
    for(let i = 0; i < 5; i++) {
        dataGambar.push((
            // set state menjadi path gambar dari db
            <img key={i} className="block w-full h-56 object-cover rounded-3xl" onClick={() => setSelected('https://imgs.search.brave.com/JlDNFjQ22KRN7gB1XrDwE4lMhvSXuXzx6114J2ZkdwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/Mi8xMi8wMS81Ni9y/aWNlLWZpZWxkcy03/MDA4MjUyXzY0MC5q/cGc')} src="https://imgs.search.brave.com/nJ2Beh3qyiTaTjrfza_GczYmTErUqZUnM8-Ufe98y9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/Mi8xOS8wNi80OS9y/aWNlLWZpZWxkLTcw/MjE5OTdfNjQwLmpw/Zw" alt="gambar" />
        ));
    }
    return (
        <>
        <section className="w-full px-10" id="albumFoto">
            <h1 className="text-6xl font-bold text-center pt-24 mb-8 text-amber-950">Album Foto</h1>
            <div className="flex">
                <div className="w-1/3 relative pr-10">
                    <div className="w-4 aspect-square rounded-full bg-amber-950 absolute right-0 top-0"></div>
                    <div className="w-[2px] bg-amber-950 h-full absolute right-[0.4rem]"></div>
                    <div className="w-4 aspect-square rounded-full bg-amber-950 absolute right-0 bottom-0"></div>
                    <div className="max-h-screen flex flex-col gap-4 overflow-y-scroll scrollbar-none">
                        <img className="block w-full h-56 object-cover rounded-3xl" src="https://imgs.search.brave.com/nJ2Beh3qyiTaTjrfza_GczYmTErUqZUnM8-Ufe98y9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/Mi8xOS8wNi80OS9y/aWNlLWZpZWxkLTcw/MjE5OTdfNjQwLmpw/Zw" alt="gambar" />
                        {dataGambar.map((item) => item)}
                    </div>
                </div>
                <div className="w-2/3 pl-6">
                    <img className="w-full h-full object-cover rounded-4xl" src={selected} alt="gambar" />
                </div>
            </div>
        </section>
        </>
    )
}

export default AlbumFoto;