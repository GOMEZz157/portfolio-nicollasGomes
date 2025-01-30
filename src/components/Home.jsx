import photo from "../assets/photo.png"

export default function Home() {
  return (
    <>
        
    <header>
      <nav>
        <div>
          <a href="#">Home</a>
          <a href="">About me</a>
          <a href="">Projects</a>
          <a href="">Skills</a>
        </div>
        <div>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>
    </header>
    <main>
      <div>
        <h1>Nicollas Gomes.</h1>
        <p>
          I have experience with HTML, CSS, JavaScript, Git, and developing
          responsive and interactive layouts in academic and personal projects.
          I’m always seeking to improve my skills and stay up-to-date with
          industry trends.
        </p>
        <a href="">
          Lets get started
          <i className="fa-solid fa-chevron-right"></i>
        </a>
      </div>
      <img src={photo} alt="Foto de Nicollas Gomes" />
    </main>


    </>
  )
}
