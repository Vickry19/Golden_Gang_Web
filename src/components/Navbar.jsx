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
        <nav className='fixed top-0 w-full z-40 backdrop-blur-[1px]' style={{
            background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            padding: `${padding}px 20px`,
            boxShadow: `0px 0px 20px 6px rgba(255, 255, 255, ${boxShadow})`,
        }}>
            <a href="#hero">
                <img src="/logo.png" alt="" className='h-16' />
            </a>
        </nav>
    )
}

export default Navbar