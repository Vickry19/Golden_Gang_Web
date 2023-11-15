import { useState } from 'react';
import contact from '../assets/contact.svg';
import axios from "axios";
import { PulseLoader } from 'react-spinners';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post('/api/contact-us', data);
            setMessage(res.data.message);
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
    }

    return (
        <section id='contact' className="py-32 px-5 md:px-20 bg-[#171720] relative">
            <h2 className="text-4xl text-center text-white mb-20 font-semibold">Contact Us</h2>

            <div className="flex flex-wrap justify-between items-center gap-10">
                <div className="w-full lg:grow lg:basis-0 z-10" data-aos="fade-left" data-aos-offset='-50'>
                    <p className="text-3xl text-white">Ada saran dan pendapat yang ingin disampaikan?</p>
                </div>

                <div className="w-full lg:grow lg:basis-0 z-10">
                    <form className="bg-white rounded-2xl w-full p-10" onSubmit={handleSubmit} data-aos="fade-right">
                        <input type="text" placeholder="Name" className="w-full border border-black px-4 py-2 rounded-lg mb-10" value={data.name} onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} />
                        <input type="text" placeholder="Email Address" className="w-full border border-black px-4 py-2 rounded-lg mb-10" value={data.email} onChange={e => setData(prev => ({ ...prev, email: e.target.value }))} />
                        <input type="text" placeholder="No. Telephone" className="w-full border border-black px-4 py-2 rounded-lg mb-10" value={data.phone} onChange={e => setData(prev => ({ ...prev, phone: e.target.value }))} />
                        <textarea placeholder="Message" rows={5} className="w-full border border-black px-4 py-2 rounded-lg mb-10" value={data.message} onChange={e => setData(prev => ({ ...prev, message: e.target.value }))}></textarea>

                        <div className="flex justify-between items-center">
                            {isLoading
                                ? <button className="px-10 py-3 bg-yellow-200 text-white rounded-lg" disabled><PulseLoader color="white" size={9} /></button>
                                : <button className="px-5 py-3 bg-yellow-400 text-white rounded-lg">Enter Message</button>}

                                <p className='text-green-700 text-lg'>{message}</p>
                        </div>
                    </form>
                </div>
            </div>

            <img src={contact} alt="" className='absolute bottom-0 left-0 w-full' />
        </section>
    )
}

export default Contact