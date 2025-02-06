import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Skills', to: '/skills' },
    { title: 'Projects', to: '/projects' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/nicollas-gomes-4479952b9/',
      icon: 'fa-brands fa-linkedin',
      hoverColor: 'hover:text-(--color-linkedin)'
    },
    {
      href: 'https://api.whatsapp.com/send/?phone=5511914462438&text=Ol%C3%A1%20nicollas%2C%20vim%20pelo%20portf%C3%B3lio!!&type=phone_number&app_absent=0',
      icon: 'fa-brands fa-whatsapp',
      hoverColor: 'hover:text-(--color-zapzap)'
    },
    {
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nicksss.gomes@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você.',
      icon: 'fa-solid fa-envelope',
      hoverColor: 'hover:text-(--color-email)'
    },
    {
      href: 'https://www.github.com/GOMEZz157',
      icon: 'fa-brands fa-github',
      hoverColor: 'hover:text-(--main-text)'
    }
  ];

  return (
    <header className="flex justify-center">
      <nav className="bg-(--head-bg) text-(--text-color) flex flex-col md:flex-row justify-between w-5/6 p-5 rounded-b-lg relative">
        {/* Botão Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-5 top-2"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Links de Navegação */}
        <div className={`
          flex flex-col md:flex-row gap-8 
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex mt-8 md:mt-0
          transition-all duration-300 ease-in-out
        `}>
          {menuItems.map(item => (
            <Link
              key={item.title}
              to={item.to}
              className="hover:text-(--color-linkedin) font-poppins font-bold transition-all duration-300 ease-in-out text-center md:text-left"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Links Sociais */}
        <div className={`
          flex justify-center md:justify-end gap-5
          ${isOpen ? 'flex' : 'hidden'}
          md:flex mt-4 md:mt-0
        `}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <i className={`${link.icon} ${link.hoverColor} text-2xl transition-all duration-300 ease-in-out`}></i>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}