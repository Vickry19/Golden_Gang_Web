const Hero = () => {
    return (
        <section id='hero' className="relative px-5 min-h-screen flex justify-center items-center overflow-x-hidden">
            <div className="max-w-4xl">
                <h4 className='text-center font-semibold mb-5 text-white' data-aos="fade-bottom">Security Awareness</h4>
                <h1 className='text-center font-bold text-6xl mb-8 text-white' data-aos="zoom-in">Keamanan untuk mendeteksi Website Phishing</h1>

                <p className="text-center px-10 text-white text-lg" data-aos="fade-up">Ayo Manfaatkan Teknologi Kecerdasan Buatan untuk Mengidentifikasi Ancaman Keamanan dalam Email dan Konten Berbahaya (Phishing dan Malware Detection)</p>
            </div>

            <a href="#check" className='z-30 absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center border border-white'>
                <i className="fa-solid fa-chevron-down text-white"></i>
            </a>
        </section>
    )
}

export default Hero