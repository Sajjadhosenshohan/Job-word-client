
function SecondaryBtn({props, widthFull,id,handlePdf}) {
    return (
        <div>
            <button onClick={() => handlePdf(id)} className={`${widthFull} text-center relative inline-flex items-center px-6 py-2 md:px-12 md:py-3 overflow-hidden text-lg font-medium text-primary border-2 border-primary rounded-full hover:text-white group hover:bg-gray-50`}>
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">{props}</span>
            </button>
        </div>
    )
}

export default SecondaryBtn
