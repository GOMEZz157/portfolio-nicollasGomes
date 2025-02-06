import photo from "../assets/photo.png"
import Header from "./Header"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 md:py-0">
        <div className="main-container flex flex-col-reverse md:flex-row items-center justify-around w-full md:w-4/6 gap-8 md:gap-4">
          <div className="text-(--main-text) max-w-2xl text-center md:text-left">
            <h1 className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold font-raleway text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-3 px-0  sm:animate-typing sm:border-r border-solid border-(--bg-color)">
              Nicollas Gomes
            </h1>
            <p className="font-poppins font-normal text-(--bg-color) p-3 px-0 mb-6 md:mb-10 text-center sm:text-left text-sm sm:text-base">
              I have experience with HTML, TailwindCSS, JavaScript, Git, React, and developing
              responsive and interactive layouts in academic and personal projects.
              Im always seeking to improve my skills and stay up-to-date with
              industry trends.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/about"
                className="
                  flex w-full sm:w-4/6 text-base md:text-xl justify-center items-center gap-3 
                  hover:text-(--bg-color) text-(--bg-color) font-poppins font-bold sm:bg-(--head-bg) 
                  hover:bg-(--button-color) bg-(--button-color) p-4 md:p-6 border border-solid 
                  hover:border-(--border-button) border-(--border-button) sm:border-(--main-text) rounded-sm sm:text-(--main-text)
                  hover:shadow-(--shadow-button) shadow-(--shadow-button) sm:shadow-none transition-all duration-300 ease-in-out
                "
              >
                Lets get started
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="w-48 sm:w-64 md:w-80 lg:w-96">
            <img
              src={photo}
              alt="Foto de Nicollas Gomes"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  )
}