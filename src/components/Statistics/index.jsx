import { h } from "preact";

function Statistics() {
  return (
    <section id="home" className="px-10">
      <div className="w-full max-w-7xl mx-auto py-24 flex flex-col justify-around md:flex-row space-y-10 md:space-y-0 items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium">100+</h1>
          <p className="opacity-50">Saat tasarımı</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium">12</h1>
          <p className="opacity-50">Mesai saati</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium">100+</h1>
          <p className="opacity-50">Saat satıldı</p>
        </div>
      </div>
    </section>
  );
}
export default Statistics;
