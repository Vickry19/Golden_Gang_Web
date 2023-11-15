import { useEffect, useState } from 'react';

const Navbar = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(20);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 800;

        if (!(backgroundTransparacyVar <= 0.8)) {
            backgroundTransparacyVar = 0.8;
        }

        let paddingVar = 20 - backgroundTransparacyVar * 20;
        let boxShadowVar = backgroundTransparacyVar;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
    }, [clientWindowHeight]);

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])
    return (
        <nav className='fixed top-0 w-full z-40 backdrop-blur-[1px] flex justify-between gap-10' style={{
            background: `rgba(51, 65, 85, ${backgroundTransparacy})`,
            padding: `${padding}px 50px`,
            boxShadow: `0px 0px 20px 6px rgba(51, 65, 85, ${boxShadow})`,
        }}>
            <a href="#hero">
                <img src="/logo.png" alt="" className='h-16' />
            </a>

            <div className='flex gap-5 items-center'>
                <a href="#check" className='text-white'>Check</a>
                <a href="#contact" className='text-white'>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar