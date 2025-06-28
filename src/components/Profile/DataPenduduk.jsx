const DataPenduduk = () => {
    return (
        <>
            <section className="w-full min-h-screen pt-20 text-white bg-cover bg-center relative" style={{ backgroundImage: "url('/path/to/your/bg.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 px-10">
                    <h1 className="text-5xl font-bold text-center mb-10">Demografis Penduduk</h1>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-center mt-20">

                        {/* Diagram placeholder */}
                        <div className="bg-gray-200 text-black font-bold flex items-center justify-center w-[500px] h-[500px] rounded-full">
                            Diagram
                        </div>

                        {/* Data Box */}
                        <div className="bg-amber-950/40 p-6 rounded-lg w-full max-w-xl">
                            <h2 className="text-2xl font-semibold mb-6">Jumlah Penduduk dan Kepala Keluarga</h2>

                            <div className="flex flex-col gap-4">
                                {[
                                    ["Total Penduduk", "1.128"],
                                    ["Kepala Keluarga", "1.128"],
                                    ["Perempuan", "1.128"],
                                    ["Laki-laki", "1.128"]
                                ].map(([label, value]) => (
                                    <div key={label} className="flex justify-between items-center px-4 py-3 rounded-lg gap-2">
                                        <span className="font-medium text-amber-950 bg-white w-2/3 h-14 pl-2 flex items-center rounded-md">{label.toUpperCase()}</span>
                                        <span className="text-2xl font-bold text-amber-950 bg-white w-1/3 h-14 flex justify-center items-center rounded-md">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full min-h-screen pt-20 text-white bg-cover bg-center relative" style={{ backgroundImage: "url('/path/to/your/bg.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 px-10">
                    <h1 className="text-5xl font-bold text-center mb-10">Pekerjaan</h1>

                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">

                        {/* Box pekerjaan grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl text-amber-950">
                            {[
                                ["Pelajar/ Mahasiswa", "1.128"],
                                ["Belum/Tidak Bekerja", "1.128"],
                                ["Mengurus Rumah Tangga", "1.128"],
                                ["Karyawan Swasta", "1.128"],
                                ["Nelayan/Perikanan", "1.128"],
                                ["Petani/Pekebun", "1.128"]
                            ].map(([job, count]) => (
                                <div key={job} className="bg-white/30 p-4 rounded-lg text-center shadow-md">
                                    <h3 className="text-lg font-semibold uppercase mb-2">{job}</h3>
                                    <p className="text-3xl font-bold">{count}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tabel pekerjaan */}
                        <div className="bg-white/20 text-amber-950 rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-white/10 text-left">
                                    <tr>
                                        <th className="p-3 border-b border-white/30">Nama Pekerjaan</th>
                                        <th className="p-3 border-b border-white/30">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Pelajar", "1.128"],
                                        ["Petani", "1.128"],
                                        ["Nelayan", "1.128"],
                                        ["Swasta", "1.128"],
                                        ["Ibu Rumah Tangga", "1.128"],
                                        ["Belum/Tidak Bekerja", "1.128"]
                                    ].map(([job, count], idx) => (
                                        <tr key={idx} className="hover:bg-white/10 transition">
                                            <td className="p-3 border-b border-white/10">{job}</td>
                                            <td className="p-3 border-b border-white/10">{count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default DataPenduduk;