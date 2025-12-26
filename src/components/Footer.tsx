import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const links = [
    { href: 'https://discord.com/channels/@me/1043950424652251188', icon: <FaDiscord />, label: 'Discord' },
    { href: 'https://x.com/KidChoas23', icon: <FaX />, label: 'X' },
    { href: 'https://www.linkedin.com/in/genesis-enedeh-8b136833b/', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://github.com/genedeh', icon: <FaGithub />, label: 'GitHub' },
    { href: 'https://wa.me/+2348129674178', icon: <FaWhatsapp />, label: 'WhatsApp' },

]

const Footer = () => {
    return (
        <footer className="w-screen bg-(--violet-300) py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-small md:text-left">
                    &copy; 2025 Nova 0.1. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-(--blue-50)" >
                            {link.icon}
                        </a>

                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right" >
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer