import { h } from "preact";

function About() {
  return (
    <section id="portfolio" className="px-10">
      <div className="w-full max-w-7xl mx-auto bg-[#F9F9FC] py-12 px-10 ">
        <h1 className="font-medium text-4xl text-center">Portfolio</h1>
        <div className="grid w-full h-[30rem] gap-8 grid-rows-2 grid-cols-2 mt-10">
          <div className="col-span-1 row-span-2 bg-[#2563EB] bg-opacity-25 rounded-md">
            <img
              className="object-cover w-full h-full opacity-50 hover:opacity-75 transition"
              src="/assets/saat.png"
            />
          </div>
          <div className="col-span-1 row-span-1 bg-[#AC25EB] bg-opacity-25 rounded-md">
            <img
              className="object-cover w-full h-full opacity-50 hover:opacity-75 transition"
              src="/assets/saat.png"
            />
          </div>
          <div className="col-span-1 row-span-1 bg-[#EB2525] bg-opacity-25 rounded-md">
            <img
              className="object-cover w-full h-full opacity-50 hover:opacity-75 transition"
              src="/assets/saat.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
