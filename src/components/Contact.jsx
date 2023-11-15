import contact from '../assets/contact.svg';

const Contact = () => {
    return (
        <section id='contact' className="py-32 px-5 md:px-20 bg-[#171720] relative">
            <h2 className="text-4xl text-center text-white mb-20 font-semibold">Contact Us</h2>

            <div className="flex flex-wrap justify-between items-center gap-10">
                <div className="w-full lg:grow lg:basis-0 z-10" data-aos="fade-left" data-aos-offset='-50'>
                    <p className="text-3xl">Ada saran dan pendapat yang ingin disampaikan?</p>
                </div>

                <div className="w-full lg:grow lg:basis-0 z-10">
                    <form className="bg-white rounded-2xl w-full p-10" data-aos="fade-right">
                        <input type="text" placeholder="Name" className="w-full border border-black px-4 py-2 rounded-lg mb-10" />
                        <input type="text" placeholder="Email Address" className="w-full border border-black px-4 py-2 rounded-lg mb-10" />
                        <input type="text" placeholder="No. Telephone" className="w-full border border-black px-4 py-2 rounded-lg mb-10" />
                        <textarea placeholder="Message" rows={5} className="w-full border border-black px-4 py-2 rounded-lg mb-10"></textarea>

                        <button className="px-5 py-3 bg-yellow-400 rounded-lg">Enter Message</button>
                    </form>
                </div>
            </div>

            <img src={contact} alt="" className='absolute bottom-0 left-0 w-full' />
        </section>
    )
}

export default Contact