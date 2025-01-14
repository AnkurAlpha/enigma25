import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import AnimatedText from './text';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                width: '100%',
                duration: 0.5,
                ease: 'back.out(1.6)',
            });

        } else {
            gsap.to(menuRef.current, {
                width: 'auto',
                duration: 0.5,
                ease: 'back.out(1.6)'
            });
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex justify-end">
            <div className='hidden sm:flex'>
                        <ul className='flex flex-1 justify-between gap-11 p-4 font-neuebit uppercase'>
                            <li><Link to="/prizes" onClick={handleLinkClick}><AnimatedText className="hover:p-2 text-2xl text-white  hover:bg-enigma-green hover:text-black" text="Prizes"/></Link></li>
                            <li><Link to="/timeline" onClick={handleLinkClick}><AnimatedText className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black" text="Timeline"/></Link></li>
                            <li><Link to="/rules" onClick={handleLinkClick}><AnimatedText className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black" text="Rules"/></Link></li>
                            <li><Link to="/about" onClick={handleLinkClick}><AnimatedText text="About" className="hover:p-2 text-2xl text-white hover:bg-enigma-green hover:text-black"/></Link></li>
                        </ul>
        </div>
            <div ref={menuRef} className={` sm:hidden flex flex-col justify-end text-black bg-enigma-green font-neuebit uppercase ${isOpen ? 'w-full' : 'w-auto'}`}>
                <div className="hamburger-icon cursor-pointer text-2xl select-none text-right p-4 flex items-center justify-end" onClick={toggleMenu}>
                    <AnimatedText text="MENU" className="mr-2"/>
                    <span className="text-xl mt-1">&#9776;</span> {/* Hamburger icon */}
                </div>
                {isOpen && (
                    <div className="menu text-right text-3xl p-4">
                        <ul>
                            <li><Link to="/prizes" onClick={handleLinkClick}><AnimatedText className="text-black hover:bg-white hover:text-black" text="Prizes"/></Link></li>
                            <li><Link to="/timeline" onClick={handleLinkClick}><AnimatedText className="text-black hover:bg-white hover:text-black" text="Timeline"/></Link></li>
                            <li><Link to="/rules" onClick={handleLinkClick}><AnimatedText className="text-black hover:bg-white hover:text-black" text="Rules"/></Link></li>
                            <li><Link to="/about" onClick={handleLinkClick}><AnimatedText text="About" className="text-black hover:bg-white hover:text-black"/></Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
