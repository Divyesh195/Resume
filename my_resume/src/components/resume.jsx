
const Resume = () => {
    return (
        <div className="">
            {/* Heading  */}
            <section>
                <p className="text-3xl mt-5 text-center font-semibold">Divyesh Parmar</p>
                <p className="text-lg text-center">Vadodara, Gujarat, India</p>
                <div className="text-lg flex flex-col md:flex-row items-center md:gap-3 justify-center">
                    <p className="w-fit">+91 9724331253</p>  <span className="hidden md:block">|</span>
                    <p className="w-fit">divyeshparmar0548@gmail.com</p>
                </div>
            </section>

            {/* Education  */}
            <section className="mx-auto mt-10 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Education</p>
                <ul className="list-disc mt-2">
                    {/* College  */}
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Parul University</p>
                        <div className="flex justify-between items-center gap-5">
                            <p className="text-lg">Compter Science and Engineering</p>
                            <p className="italic font-bold text-md hidden sm:block">2021-2025</p>
                        </div>
                        <p className="block sm:hidden text-lg">2021-2025</p>
                        <p className="text-lg">7.7 CGPA</p>
                    </li>
                    {/* School  */}
                    <li className="mt-5 ml-5">
                        <p className="text-2xl font-semibold">BAPS Swaminarayan Vidyamandir</p>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">12th Science</p>
                            <p className="italic font-bold text-md hidden sm:block">2021</p>
                        </div>
                        <p className="block sm:hidden text-lg">2021</p>
                        <p className="text-lg">80%</p>
                    </li>
                </ul>
            </section>

            {/* Skills */}
            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Skills</p>
                <ul className="list-disc space-y-2.5 mt-2">
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Frontend</span> : jQuery, React.js, Tailwind, Bootstrap </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Backend</span> : Express js, Next js, PUG, PHP, Python</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Database</span> : MongoDB, MySQL, PostgreSQL </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Other</span> : Git, Postman, Photoshop, Illustrator, After Effects </p>
                    </li>
                </ul>
            </section>

            {/* Projects */}
            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Projects</p>
                <ul className="list-disc space-y-2.5 mt-2">
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Education and Restaurant Websites</p>
                        <p className="text-lg">I created two single-page websites using pure CSS, Express js, PUG engine, and MongoDB. (Without any framework)</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Weather Application</p>
                        <p className="text-lg">This web-app provides real-time weather updates with detailed analysis. It is built using React js, Bootstrap, Tailwind css, and OpenWeatherMap API.</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Online voting system</p>
                        <p className="text-lg">A web-based application that allows users to securely log in and cast their vote; it also includes an admin panel to manage the system. I built this using HTML, CSS, Bootstrap, PHP, and MySQL.</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">House price prediction using ML</p>
                        <p className="text-lg">It is a regression machine learning model that predicts house prices based on given price history. I used various python libraries along with the jupyter Notebook platform.</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Cinema Website</p>
                        <p className="text-lg">I have been working on this MERN project for last 2 weeks. It is a cinema website where users can login and book tickets online. Admin panel allows admin to control the data, analyse bookings and add new movies. Using distributor login, movie owners can manage their earnings and take insights.</p>
                    </li>
                </ul>
            </section>

            {/* Internship and Qualification */}
            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Internship and Certification</p>
                <ul className="list-disc space-y-2.5 mt-2">
                    <li className="ml-5">
                        <p className="text-lg">Web Development Internship - Octanet PVT LTD (May-Jun 2024)</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Data Analytics with Python - NPTEL (Jan-Apr 2024)</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Artificial Intelligence Internship - TEACHNOOK (Jul-Aug 2022)</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Full Stack Developer Intern - Bookstaken (March 2025 - Ongoing) </p>
                    </li>
                </ul>
            </section>

            {/* Hobbies */}
            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Hobbies</p>
                <ul className="list-disc space-y-2.5 mt-2">
                    <li className="ml-5">
                        <p className="text-lg">I play computer games in leisure time.</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">I still study physics, which is my favorite subject from school.</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Movies & Editing</p>
                    </li>
                </ul>
            </section>

            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px] mb-10">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md text-center">Thanks for visiting my resume.</p>  
            </section>
        </div>
    )
}

export default Resume;