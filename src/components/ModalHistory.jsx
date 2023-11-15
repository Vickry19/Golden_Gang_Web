import { useEffect, useState } from "react";

const ModalHistory = ({ isOpen, setIsOpen, history, setHistory }) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpenDialog(isOpen);
        }, 100);
    }, [isOpen]);

    const clearHistory = () => {
        localStorage.removeItem('history');
        setHistory([]);
    }

    return (
        isOpen && (
            <>
                <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50">
                    {/* Backdrop */}
                    <div className='bg-[rgba(0,0,0,0.5)] h-full w-full absolute' onClick={() => setIsOpen(false)}></div>

                    {/* Modal Dialog */}
                    <div className={`w-[450px] z-50 rounded-md modal-dialog ${isOpenDialog ? 'open' : ''} bg-slate-700 p-5`}>
                        <div className="pb-2 mb-2 border-b border-gray-400">
                            <h1 className="text-xl font-semibold text-white">History</h1>
                        </div>
                        <div className="mb-5">
                            {history.map((item, idx) => (
                                <div className="flex justify-between" key={idx}>
                                    <h5 className="text-white">{item.url}</h5>
                                    {item.result === 1
                                    ? <h5 className="text-green-500">Safe</h5>
                                    : <h5 className="text-red-500">Phishing</h5>
                                    }
                                </div>
                            ))}
                            {history.length < 1 && (
                                <div className="flex justify-center items-center h-24">
                                    <h4 className="text-gray-400 text-2xl">No History Found</h4>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end gap-2">
                            <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md" onClick={() => clearHistory()}>
                                <i className="fa-solid fa-trash mr-2"></i> Clear
                            </button>
                            <button className="bg-yellow-400 text-white px-5 py-2 rounded-md" onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </>)
    )
}

export default ModalHistory