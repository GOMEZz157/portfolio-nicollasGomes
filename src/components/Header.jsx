


export default function Header() {
  return (
    <header className="flex justify-center">
        <nav className="bg-(--head-bg) text-(--text-color) flex justify-evenly w-5/6 p-5 rounded-b-lg">
          <div className="flex gap-15">
            <a href="/" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">Home</a>
            <a href="/About" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">About me</a>
            <a href="/Projects" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">Projects</a>
            <a href="/Skills" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">Skills</a>
          </div>
          <div className="flex gap-5 transition-all">
            <a href="https://www.linkedin.com/in/nicollas-gomes-4479952b9/" target="blank">
              <i className="fa-brands fa-linkedin hover:text-(--color-linkedin) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5511914462438&text=Ol%C3%A1%20nicollas%2C%20vim%20pelo%20portf%C3%B3lio!!&type=phone_number&app_absent=0
" target="blank">
              <i className="fa-brands fa-whatsapp  hover:text-(--color-zapzap) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicksss.gomes@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você." target="blank">
              <i className="fa-solid fa-envelope hover:text-(--color-email) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
            <a href="https://www.github.com/GOMEZz157" target="blank">
              <i className="fa-brands fa-github hover:text-(--main-text) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
          </div>
        </nav>
      </header>
  )
}
