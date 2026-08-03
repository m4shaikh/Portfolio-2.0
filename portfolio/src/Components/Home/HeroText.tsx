

const HeroText = () => {
    return (
        <div className="md:col-span-7 flex flex-col gap-6 md:gap-4 sm:gap-2 ">
            <span className="font-tag text-blue-500 pl-2">&lt;html&gt;</span>
            <span className="font-tag text-blue-500 pl-6">&lt;body&gt;</span>

            <div className="pl-8 ">
                <span className="font-tag text-blue-500 block mb-2 inline ">&lt;h1&gt;</span>
                <span className="font-rg text-4xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold leading-tight uppercase tracking-wide">
                    Hi There, <br />
                    I'm <span className="text-primary-500">Moinuddin Shaikh</span> <br />
                    Software Engineer
                </span>
                <span className="font-tag text-blue-500 block mt-2 inline align-text-center">&lt;/h1&gt;</span>
            </div>

            <p className="font-label text-secondary-500 text-lg tracking-wide pl-8">
                Designing Scalable &amp; Secure APIs
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 pl-8">
                <button className="border-2 border-green-500 px-6 hover:bg-green-500 hover:text-black text-green-500 font-label  rounded-sm transition-all duration-300">
                    Contact Me
                </button>
                <button className="bg-primary-500 hover:opacity-90 text-white font-label px-6 py-2.5 rounded-sm transition-all duration-300 shadow-lg shadow-primary-500/20">
                    Download Resume
                </button>
            </div>
            <span className="font-tag text-blue-500 pl-6">&lt;/body&gt;</span>
            <span className="font-tag text-blue-500 pl-2">&lt;/html&gt;</span>
        </div>
    )
}

export default HeroText