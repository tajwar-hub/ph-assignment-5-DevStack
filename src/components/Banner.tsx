import logo from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row container mx-auto justify-between items-center mt-20 '>

            <div className='flex flex-col items-center md:items-baseline gap-y-7 '>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                    Build Your Ideal <br />
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className='w-130 text-center font-sans'> Explore frontend, backend, database and tooling options,
                    compare them side by side and put together the stack that fits your
                    next project. </p>


                <div className='flex gap-4'>
                    <button className="btn border-none rounded-5 bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-8 hover:opacity-90">
                        Explore Technologies
                    </button>
                    <p className='btn border-2 w-52 '> Learn More </p>
                </div>
            </div>

            <div>

                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default Banner;