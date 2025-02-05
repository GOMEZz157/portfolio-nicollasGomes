import Foto from "../assets/vetor.png"

export default function About() {
    return (
        <div className="bg-[var(--bg-color)] h-screen flex flex-row items-center justify-center gap-[90px]">

            <img src={Foto} alt="" className="rounded-sm w-[575px] h-[575px]" loading="lazy"/>
            <div className="flex flex-col w-1/3">
                <h1 className="text-[var(--main-text)] font-extrabold font-raleway text-6xl p-3 px-0">
                    About <span className="text-[var(--button-color)]">Me</span>
                </h1>
                <p className="text-[#6B7280] font-lexend font-normal p-3 px-0 text-md">
                    Passionate about technology and web development, I’m a junior programmer with a solid grounding in <strong className="font-bold">HTML, CSS, Tailwind, Bootstrap, React and Javascript.</strong> During my technical computer course, which I completed alongside high school, I learned how to turn ideas into practical, functional projects. I’m currently deepening my knowledge of <strong className="font-bold">JavaScript, React and TypeScript</strong>, expanding my skills to create dynamic and interactive applications.
                </p>
                <p className="text-[#6B7280] font-lexend font-normal p-3 px-0 text-md ">
                    Although I don’t have any professional experience yet, I’m eager to apply my knowledge, learn from experienced teams and contribute to challenging projects. I am easy to learn, proactive and value collaboration as an essential tool for professional growth.
                </p>
                <p className="text-[#6B7280] font-lexend font-normal p-3 px-0 text-md mb-[2rem]">
                    If you’re looking for a committed professional who is constantly learning and motivated to grow in the development field, I’d love to connect and exchange ideas! 🚀
                </p>
                <div className="flex items-center justify-between">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicksss.gomes@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você." className="p-4 bg-(--head-bg) text-(--main-text) rounded-sm w-1/3 flex items-center justify-center font-lexend font-regular hover:text-(--bg-color) border hover:bg-(--button-color) border-solid hover:border-(--border-button) hover:shadow-(--shadow-button) transition-all duration-300 ease-in-out gap-[1rem]" target="blank">Contact Me <i className="fa-solid fa-chevron-right"></i></a>
                    <div className="flex gap-5 transition-all">
                        <a href="https://www.linkedin.com/in/nicollas-gomes-4479952b9/" target="blank">
                            <i className="fa-brands fa-linkedin text-(--text-color) hover:text-(--color-linkedin) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>

                        <a href="https://api.whatsapp.com/send/?phone=5511914462438&text=Ol%C3%A1%20nicollas%2C%20vim%20pelo%20portf%C3%B3lio!!&type=phone_number&app_absent=0
" target="blank">
                            <i className="fa-brands fa-whatsapp text-(--text-color) hover:text-(--color-zapzap) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicksss.gomes@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você." target="blank">
                            <i className="fa-solid fa-envelope text-(--text-color) hover:text-(--color-email) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>
                        <a href="https://www.github.com/GOMEZz157" target="blank">
                            <i className="fa-brands fa-github text-(--text-color) hover:text-(--main-text) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

// PRECISA DE RESPONSIVIDADE

