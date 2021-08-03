import { h } from "preact";

function Statistics() {
  return (
    <section id="services" className="sm:px-10 px-2">
      <div className="w-full max-w-7xl mx-auto py-12 md:py-24 flex flex-col items-center">
        <h1 className="font-medium text-4xl">Services</h1>
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-16 mt-10">
          <div className=" flex flex-col items-center">
            <div className="bg-[#2563EB] bg-opacity-25 p-3 rounded-full">
              <svg
                width="30"
                height="30"
                viewBox="0 0 36 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.40707 24.4983L11.5946 21.7648L4.55257 16.1315L11.5946 10.4983L9.40707 7.76475L0.657071 14.7648C0.45205 14.9287 0.28654 15.1367 0.172799 15.3733C0.0590577 15.6098 0 15.869 0 16.1315C0 16.394 0.0590577 16.6532 0.172799 16.8897C0.28654 17.1263 0.45205 17.3343 0.657071 17.4983L9.40707 24.4983ZM25.5946 7.76475L23.4071 10.4983L30.4491 16.1315L23.4071 21.7648L25.5946 24.4983L34.3446 17.4983C34.5496 17.3343 34.7151 17.1263 34.8288 16.8897C34.9426 16.6532 35.0016 16.394 35.0016 16.1315C35.0016 15.869 34.9426 15.6098 34.8288 15.3733C34.7151 15.1367 34.5496 14.9287 34.3446 14.7648L25.5946 7.76475ZM22.7088 0.7595L15.7088 32.2595L12.2911 31.5L19.2911 0L22.7088 0.7595Z"
                  fill="#2563EB"
                />
              </svg>
            </div>

            <h1 className="font-medium text-2xl text-center mt-2">
              Web Development
            </h1>
            <p className="text-center">
              I can create responsive websites from designs with modern
              technologies
            </p>
          </div>

          <div className=" flex flex-col items-center">
            <div className="bg-[#AC25EB] bg-opacity-25 p-3   rounded-full">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4854 24.7142C10.9066 23.5428 9.6242 22.0177 8.74114 20.2613C7.85807 18.5049 7.39889 16.5659 7.40039 14.6C7.40039 7.6412 13.0416 2 20.0004 2C26.9592 2 32.6004 7.6412 32.6004 14.6C32.6004 18.6815 30.6591 22.3103 27.6504 24.6125"
                  stroke="#AC25EB"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 14.7141L38 39.0141H2L20 14.7141Z"
                  stroke="#AC25EB"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="font-medium text-2xl text-center mt-2">Design</h1>
            <p className="text-center">
              I can design websites which looks unique and awesome
            </p>
          </div>

          <div className=" flex flex-col items-center">
            <div className="bg-[#EB2525] bg-opacity-25 p-3   rounded-full">
              <svg
                width="30"
                height="30"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9902 29.64C15.1382 29.5051 12.4477 28.2762 10.4776 26.2085C8.50749 24.1408 7.40926 21.3932 7.41102 18.5366C7.41102 12.401 12.3949 7.41463 18.5275 7.41463C24.4934 7.41463 29.3476 12.1044 29.6255 17.999L25.7348 16.8312C25.4319 15.5462 24.7916 14.3655 23.8799 13.411C22.9682 12.4565 21.8183 11.763 20.549 11.402C19.2797 11.0411 17.937 11.0258 16.6599 11.3579C15.3827 11.6899 14.2174 12.3572 13.2843 13.2907C12.3512 14.2243 11.6842 15.3902 11.3523 16.668C11.0205 17.9458 11.0357 19.2891 11.3965 20.559C11.7572 21.8289 12.4504 22.9794 13.4045 23.8915C14.3585 24.8037 15.5386 25.4443 16.823 25.7473L17.9902 29.64ZM37.0551 18.5366C37.0551 19.0927 37.0366 19.6488 36.981 20.2049L33.3311 19.1112C33.3496 18.9259 33.3496 18.722 33.3496 18.5366C33.3496 10.3434 26.7167 3.70732 18.5275 3.70732C10.3384 3.70732 3.70551 10.3434 3.70551 18.5366C3.70551 26.7298 10.3384 33.3659 18.5275 33.3659C18.7128 33.3659 18.9166 33.3659 19.1019 33.3473L20.195 36.999C19.6392 37.0546 19.0834 37.0732 18.5275 37.0732C8.30034 37.0732 0 28.7688 0 18.5366C0 8.30439 8.30034 0 18.5275 0C28.7548 0 37.0551 8.30439 37.0551 18.5366ZM30.0702 26.4332L37.0551 24.0976L18.5275 18.5366L24.0858 37.0732L26.4203 30.0849L34.3315 38L38 34.3298L30.0702 26.4332Z"
                  fill="#EB2525"
                />
              </svg>
            </div>

            <h1 className="font-medium text-2xl text-center mt-2">Marketing</h1>
            <p className="text-center mt-1">
              I can create marketing campaings which boosts your audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Statistics;
