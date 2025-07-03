
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
                        <p className="text-lg">7.8 CGPA</p>
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
                        <p className="text-lg"><span className="text-2xl font-semibold">Development</span> : Next/React Js, ASP .NET, Node/Express js, Fast API, REST API  </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Programming</span> : Python, Javascript, C , C# </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Database</span> : MongoDB, MySQL,
                            Microsoft SQl Server, PostgreSQL </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">AI / ML</span> : Predictive models, Probabilitic inference, Tensorflow </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg"><span className="text-2xl font-semibold">Other</span> : Git/Github, Postman, Abode Photoshop, Illustrator </p>
                    </li>
                </ul>
            </section>

            {/* Projects */}
            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Projects</p>
                <ul className="list-disc space-y-2.5 mt-2">
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Cinema Website</p>
                        <p className="text-lg">This is a MERN project cinema website where users can login and book tickets online. Admin module allows admins to add or remove movies and manage ticket bookings. Movie providers can login and see movie performance and current bookings. Normal user can log in and book ticket with online payment and cash payment option.</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">E-commerce Platform</p>
                        <p className="text-lg">I utilized Microsoft ASP .NET, SQL server and Bootstrap5 to develop this platform. Admin can register new products with specified categories and also modify or remove them. Customer can register with basic details and place the order with add to cart feature. Every user login is managed using session. </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">Englsih Dictionary</p>
                        <p className="text-lg">This dictionary has been created using Next Js 15. Admin can add, modify and remove words and their meanings. All words data are stored in MongoDB cluster. Other features include dynamic routing, Authentication and MongoDB search functionality. </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-2xl font-semibold">AI/ML</p>
                        <p className="text-lg">Prediction models based on past data, Probabilistic Inference models, Face Recognition, Hand written digits recognition. Created using Numpy, SciKit-Learn, MatplotLib, Tensorflow, PIL, OpenCV, Face_recognition, etc. </p>
                    </li>

                </ul>
            </section>

            {/* Internship and Qualification */}
            <section className="mx-auto mt-5 w-[95vw] md:w-[90vw] 2xl:max-w-[1300px]">
                <p className="w-full bg-black text-white p-2 font-semibold text-2xl rounded-md">Internship and Certification</p>
                <ul className="list-disc space-y-2.5 mt-2">
                    <li className="ml-5">
                        <p className="text-lg">Full Stack Developer Intern - Bookstaken (March - May-2025) </p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Web Development Internship - Octanet PVT LTD (May-Jun 2024)</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Data Analytics with Python - NPTEL (Jan-Apr 2024)</p>
                    </li>
                    <li className="ml-5">
                        <p className="text-lg">Artificial Intelligence Internship - TEACHNOOK (Jul-Aug 2022)</p>
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