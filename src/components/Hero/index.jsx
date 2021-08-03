import { h } from 'preact';

function Hero() {
    return (
        <section id="home" className="px-10">
            <div className="w-full max-w-7xl mx-auto bg-[#F9F9FC] py-24 px-20 flex flex-col justify-between md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 lg:pr-24">
                    <h1 className="text-6xl font-medium leading-tight text-center md:text-left">I build digital<br />products<br /> brands with<br /> <span className="text-blue-600">experience</span></h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-5/6 lg:max-w-lg mt-10 md:mt-0">
                    <img class="object-cover object-center rounded-lg w-full h-full max-h-96 max-w-md" alt="hero" src="/assets/saat.png" />
                </div>
            </div>
        </section>
    );
}
export default Hero;
