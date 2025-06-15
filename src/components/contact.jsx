export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-cover bg-center bg-no-repeat py-20 px-4 text-white"
            style={{ backgroundImage: "url('/hero-contact-us.png')" }}
        >
            {/* Judul Contact di atas, tengah */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-500">Contact</h2>
            </div>
            <div className="max-w-6xl mx-auto mb-4">
                <h3 className="text-white font-semibold mb-4">Map Location</h3>
            </div>
            {/* Grid Konten */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start ">
                {/* Map */}
                <div className="h-full">

                    <iframe
                        title="Surabaya Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.420560879329!2d112.7308!3d-7.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf4f2d4a3cf%3A0x3027a76e352ba60!2sSurabaya!5e0!3m2!1sid!2sid!4v1710000000000"
                        className="w-full h-80 border-0 rounded-lg"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Kontak */}
                <div className="space-y-6 h-full">
                    {/* Lokasi */}
                    <div className="flex items-start gap-3 border-b border-white/30 pb-3">
                        <img src="/location.svg" alt="Location" className="w-6 h-6 mt-1" />
                        <div>
                            <h4 className="font-semibold">Lokasi</h4>
                            <p>Surabaya & Sidoarjo, Jawa Timur, Indonesia</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 border-b border-white/30 pb-3">
                        <img src="/email.svg" alt="Email" className="w-6 h-6 mt-1" />
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <p>info@suksesmandirisolution.com</p>
                        </div>
                    </div>

                    {/* Telepon */}
                    <div className="flex items-start gap-3 border-b border-white/30 pb-3">
                        <img src="/phone.svg" alt="Phone" className="w-6 h-6 mt-1" />
                        <div>
                            <h4 className="font-semibold">Phone</h4>
                            <p>+62 812 3456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}