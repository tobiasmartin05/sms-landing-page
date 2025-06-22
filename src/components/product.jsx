import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react"

export default function Product() {
    const timer = useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
            spacing: 16,
        },
    })

    useEffect(() => {
        if (!slider) return
        timer.current = setInterval(() => {
            slider.current?.next()
        }, 3500)
        return () => clearInterval(timer.current)
    }, [slider])

    const products = [
        {
            title: "Pallet Kayu",
            image: "./pallet-kayu.png",
            desc: "Pallet berbahan dasar kayu berkualitas tinggi yang cocok untuk pengiriman barang dalam jumlah besar. Tersedia dengan layanan fumigasi & semprot anti rayap.",
        },
        {
            title: "Pallet Plastik",
            image: "./pallet-plastik.png",
            desc: "Tahan air, ringan, dan sangat cocok untuk kebutuhan pengiriman modern dengan efisiensi tinggi dan dapat didaur ulang.",
        },
        {
            title: "Custom Pallet",
            image: "./custom-pallet.png",
            desc: "Pallet dengan ukuran dan spesifikasi sesuai kebutuhan industri Anda. Bisa pilih bahan, dimensi, dan perlakuan khusus.",
        },
    ]

    return (
        <section id="product" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="max-w-5xl mx-auto px-4 text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    <span className="text-[#002651]">Our </span>
                    <span className="text-orange-500">Products</span>
                </h2>
                <p className="text-gray-700">
                    <strong>Pallet berkualitas tinggi</strong> yang dirancang untuk penyimpanan dan pengangkutan yang efisien. <br />
                    Kami menyediakan berbagai jenis pallet yang disesuaikan dengan kebutuhan industri Anda.
                </p>
            </div>


            <div ref={sliderRef} className="keen-slider">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide flex flex-col md:flex-row items-center justify-center px-4 md:px-8 gap-4 md:gap-6"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full md:w-1/2 max-h-72 object-contain mb-6 md:mb-0"
                        />
                        <div className="text-center md:text-left md:w-1/2">
                            <h3 className="text-xl font-bold text-black mb-2">{product.title}</h3>
                            <p className="text-gray-700">{product.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}