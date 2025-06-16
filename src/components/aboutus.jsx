export default function AboutUs() {
    return (
        <section id="aboutus" className="bg-white py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    <span className="text-[#002651]">About </span>
                    <span className="text-orange-500">Us</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-12">
                    <strong>Sukses Mandiri Packaging</strong> adalah distributor yang mengkhususkan diri dalam pembuatan dan distribusi pallet berkualitas tinggi untuk berbagai kebutuhan industri. Sejak didirikan pada tahun 2023, kami telah menjadi mitra utama bagi berbagai perusahaan besar, menengah, dan kecil di Indonesia yang membutuhkan solusi penyimpanan dan pengangkutan yang efisien. Kami menawarkan berbagai jenis pallet yang dibuat dari bahan berkualitas seperti kayu, plastik, dan custom size, yang didesain untuk memenuhi standar internasional dalam hal kekuatan, ketahanan, dan keamanan.
                </p>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* VISI */}
                    <div className="bg-[#f8faff] rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out p-6 text-left">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="./eye-vision.svg" alt="Visi" className="w-10 h-10" />
                            <h3 className="text-[#002651] font-bold text-lg">Visi</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Menjadi penyedia solusi pallet terkemuka yang berkomitmen untuk memberikan produk berkualitas dan pelayanan terbaik bagi pelanggan kami, mendukung keberlanjutan industri logistik dan distribusi.
                        </p>
                    </div>

                    {/* MISI */}
                    <div className="bg-[#f8faff] rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out p-6 text-left">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="./archer.svg" alt="Misi" className="w-10 h-10" />
                            <h3 className="text-[#002651] font-bold text-lg">Misi</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <img src="./checklist.svg" alt="Checklist" className="w-5 h-5 mt-1" />
                                <p className="text-gray-700 leading-relaxed">
                                    Menyediakan produk pallet yang <strong>aman</strong>, <strong>kuat</strong>, dan <strong>ramah lingkungan</strong>.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <img src="./checklist.svg" alt="Checklist" className="w-5 h-5 mt-1" />
                                <p className="text-gray-700 leading-relaxed">
                                    Mengembangkan <strong>teknologi</strong> dan <strong>inovasi</strong> dalam pembuatan pallet.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <img src="./checklist.svg" alt="Checklist" className="w-5 h-5 mt-1" />
                                <p className="text-gray-700 leading-relaxed">
                                    Memberikan layanan pelanggan yang <strong>terpercaya</strong>, <strong>responsif</strong>, dan <strong>profesional</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <img src="./checklist.svg" alt="Checklist" className="w-5 h-5 mt-1" />
                                <p className="text-gray-700 leading-relaxed">
                                    Menyediakan produk pallet yang <strong>aman</strong>, <strong>kuat</strong>, dan <strong>ramah lingkungan</strong>.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <img src="./checklist.svg" alt="Checklist" className="w-5 h-5 mt-1" />
                                <p className="text-gray-700 leading-relaxed">
                                    Mengembangkan <strong>teknologi</strong> dan <strong>inovasi</strong> dalam pembuatan pallet.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <img src="./checklist.svg" alt="Checklist" className="w-5 h-5 mt-1" />
                                <p className="text-gray-700 leading-relaxed">
                                    Memberikan layanan pelanggan yang <strong>terpercaya</strong>, <strong>responsif</strong>, dan <strong>profesional</strong>.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}