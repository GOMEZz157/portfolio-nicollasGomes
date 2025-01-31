import photo from "../assets/photo.png"

export default function Home() {
  return (
    <body className="bg-(--bg-color) overflow-hidden max-h-screen">

      <header className="flex justify-center">
        <nav className="bg-(--head-bg) text-(--text-color) flex justify-evenly w-5/6 p-5 rounded-b-lg">
          <div className="flex gap-15">
            <a href="#" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">Home</a>
            <a href="" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">About me</a>
            <a href="" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">Projects</a>
            <a href="" className="hover:text-(--main-text) font-IBM font-normal transition-all duration-300 ease-in-out">Skills</a>
          </div>
          <div className="flex gap-5 transition-all">
            <a href="https://www.linkedin.com/in/nicollas-gomes-4479952b9/" target="blank">
              <i className="fa-brands fa-linkedin hover:text-(--color-linkedin) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5511914462438&text=Ol%C3%A1%20nicollas%2C%20vim%20pelo%20portf%C3%B3lio!&type=phone_number&app_absent=0
" target="blank">
              <i className="fa-brands fa-whatsapp  hover:text-(--color-zapzap) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
            <a href="" target="blank">
              <i className="fa-solid fa-envelope hover:text-(--color-email) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
            <a href="" target="blank">
              <i className="fa-brands fa-github hover:text-(--main-text) text-2xl transition-all duration-300 ease-in-out"></i>
            </a>
          </div>
        </nav>
      </header>
      <main className="flex items-center justify-center h-screen">
        <div className="main-container flex items-center justify-around w-4/6">
        <div className="text-(--main-text) max-w-2xl">
          <h1 className="overflow-hidden whitespace-nowrap font-extrabold font-raleway text-7xl p-3 px-0 animate-typing border-r border-solid border-(--main-text)">Nicollas Gomes</h1>
          <p className="font-IBM font-normal p-3 px-0 mb-10">
            I have experience with HTML, TailwindCSS, JavaScript, Git, React, and developing
            responsive and interactive layouts in academic and personal projects.
            I’m always seeking to improve my skills and stay up-to-date with
            industry trends.
          </p>
          <a href="" className="flex w-4/6 text-xl justify-center items-center gap-3 font-IBM font-bold bg-(--head-bg) hover:bg-(--button-color) p-6 border border-solid hover:border-(--border-button) rounded-sm hover:shadow-(--shadow-button) transition-all duration-300 ease-in-out">
            Let’s get started
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
        <img src={photo} alt="Foto de Nicollas Gomes" className="w-md"/>
        </div>
      </main>


    </body>
  )
}
