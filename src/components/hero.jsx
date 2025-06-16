export default function Hero() {
    return (
        <>
            <section
                id="hero"
                className="w-full bg-cover bg-center min-h-[760px] flex items-center"
                style={{ backgroundImage: "url('./hero.png')" }}
            >
                <div className="max-w-6xl mx-auto px-4 w-full">
                    <div className="flex flex-col text-white text-center md:text-left items-center md:items-start justify-center h-full">
                        <h1 className="font-montserrat text-3xl md:text-7xl font-bold leading-tight mb-4">
                            Solusi <span className="text-orange-400">Pallet</span> Berkualitas untuk Industri Anda
                        </h1>
                        <p className="text-lg md:text-4xl mb-8">
                            Distributor Pallet Industrial Terpercaya di Surabaya dan Sidoarjo
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="#product"
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                            >
                                Our Products
                            </a>
                            <a
                                href="#contact"
                                className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100 transition"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer tagline di bawah hero */}
            <div className="w-full bg-[#002651] text-white text-center py-8">
                <h2 className="font-oswald text-lg md:text-xl font-bold tracking-widest">
                    SUKSES <span className="text-orange-400">PACKAGING</span> SOLUTION
                </h2>
                <p className="text-sm md:text-base mt-2">
                    Produsen dan Distributor Pallet Berkualitas Tinggi untuk Kebutuhan Industri
                </p>
            </div>
        </>
    );
}
