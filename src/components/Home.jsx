import photo from "../assets/photo.png"
import Header from "./Header"

export default function Home() {
  return (
    <body className="bg-(--bg-color) overflow-hidden max-h-screen">
      <Header/>
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
