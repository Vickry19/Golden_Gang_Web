import axios from "axios";
import { useEffect, useState } from "react";
import ModalHistory from "./ModalHistory";

const Check = () => {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState({result: null, message: ""});
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("history") || '[]');
        setHistory(history)
    }, [])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post('/api/check-url', {url});
            setResult(res.data);

            localStorage.setItem('history', JSON.stringify([...history, {'url': url, result: res.data.result}]));
            setHistory(prev => [...prev, {'url': url, result: res.data.result}]);
        } catch (error) {
            console.error(error)
        }

        setIsLoading(false)
    }

    return (
        <>
        <section id="check" className="bg-slate-700 py-32 px-5">
            <h2 className='text-center font-semibold text-yellow-400 text-4xl mb-10'>Check Website</h2>

            <div className='max-w-[700px] mx-auto'>
                <form className='relative mb-2' onSubmit={handleSubmit} data-aos="fade-up">
                    <label htmlFor="check-input" className='absolute top-1/2 -translate-y-1/2 left-5'>
                        <i className="fa-solid fa-globe text-2xl text-yellow-400"></i>
                    </label>
                    <input type="text" id='check-input' placeholder='Enter URL' className='mx-auto text-2xl px-16 py-3 border border-gray-400 w-full rounded-lg' value={url} onChange={e => setUrl(e.target.value)} />

                    <button type="submit" className='absolute right-0 top-0 px-4 bg-yellow-400 rounded-r-md text-white font-semibold h-full flex items-center'>
                        <i className="fa-solid fa-magnifying-glass-chart text-2xl"></i>
                    </button>
                </form>

                <div className="flex justify-between mb-10">
                    <p className='text-gray-400' data-aos="fade-right">ex: https://google.com</p>

                    <button className='px-4 py-2 rounded-md border border-yellow-400 text-yellow-400' onClick={() => setIsOpen(true)} data-aos="fade-left">
                        <i className="fa-solid fa-clock-rotate-left mr-2"></i> History
                    </button>
                </div>

                {isLoading
                    ? <h4 className="text-center font-semibold text-2xl text-white">Loading...</h4>
                    : <h4 className="text-center font-semibold text-2xl text-white">{result.message}</h4>}
            </div>
        </section>

        <ModalHistory isOpen={isOpen} setIsOpen={setIsOpen} history={history} setHistory={setHistory} />
        </>
    )
}

export default Check