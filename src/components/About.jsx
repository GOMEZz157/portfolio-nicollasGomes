import Foto from "../assets/vetor.png"

export default function About() {
    return (
        <div className="bg-[var(--bg-color)] h-screen flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[90px] w-screen">

            <img src={Foto} alt="" className="rounded-sm size-[200px] sm:size-[575px] sm:text-left" loading="lazy" />
            <div className="flex flex-col w-2/3 sm:w-1/3 gap-4">
                <h1 className="text-[var(--main-text)] font-extrabold font-raleway text-2xl sm:text-6xl sm:p-3 sm:px-0 ">
                    About <span className="text-[var(--button-color)]">Me</span>
                </h1>

                <p className="text-[#6B7280] font-lexend font-normal sm:p-6 sm:px-0 px-0 text-xs sm:text-lg max-w-full">
                    Passionate about technology and web development, I’m a junior programmer with a solid grounding in <strong className="font-bold">HTML, CSS, Tailwind, Bootstrap, React and Javascript.</strong> During my technical computer course, which I completed alongside high school, I learned how to turn ideas into practical, functional projects. I’m currently deepening my knowledge of <strong className="font-bold">JavaScript, React and TypeScript</strong>, expanding my skills to create dynamic and interactive applications.
                </p>

                <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row gap-[30px] sm:gap-0">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicksss.gomes@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você." className="p-4 sm:bg-(--head-bg) sm:text-(--main-text) sm:border-(--main-text) rounded-sm sm:w-1/3 w-full flex items-center justify-center font-lexend font-regular text-(--bg-color) bg-(--button-color) border-solid border-(--border-button) shadow-(--shadow-button) sm:shadow-none hover:text-(--bg-color) border hover:bg-(--button-color) hover:border-(--border-button) hover:shadow-(--shadow-button) transition-all duration-300 ease-in-out gap-[1rem]" target="blank">Contact Me <i className="fa-solid fa-chevron-right"></i></a>
                    <div className="flex gap-5 transition-all justify-center">
                        <a href="https://www.linkedin.com/in/nicollas-gomes-4479952b9/" target="blank">
                            <i className="fa-brands fa-linkedin sm:text-(--text-color) text-(--color-linkedin) hover:text-(--color-linkedin) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>

                        <a href="https://api.whatsapp.com/send/?phone=5511914462438&text=Ol%C3%A1%20nicollas%2C%20vim%20pelo%20portf%C3%B3lio!!&type=phone_number&app_absent=0
" target="blank">
                            <i className="fa-brands fa-whatsapp sm:text-(--text-color) text-(--color-zapzap) hover:text-(--color-zapzap) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicksss.gomes@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você." target="blank">
                            <i className="fa-solid fa-envelope sm:text-(--text-color) text-(--color-email) hover:text-(--color-email) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>
                        <a href="https://www.github.com/GOMEZz157" target="blank">
                            <i className="fa-brands fa-github sm:text-(--text-color) hover:text-(--main-text) text-4xl transition-all duration-300 ease-in-out"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

// PRECISA DE RESPONSIVIDADE

