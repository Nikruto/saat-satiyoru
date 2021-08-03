import { h } from "preact";

function About() {
  return (
    <section id="about" className="sm:px-10 px-2">
      <div className="w-full max-w-7xl mx-auto bg-[#F9F9FC] py-12 px-10 flex flex-col justify-between md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-5/6 lg:max-w-xl mt-10 md:mt-0 md:pr-10">
          <img
            class="object-cover object-center rounded-lg w-full h-full max-h-96"
            alt="hero"
            src="/assets/saat.png"
          />
        </div>
        <div className="md:w-1/2 md:pr-24 mt-4 md:mt-0">
          <p className="opacity-50 text-lg text-center md:text-left">
            About me
          </p>
          <h1 className="font-medium text-3xl text-center md:text-left">
            Ali Saat Satuyoru Uysal
          </h1>
          <p className="text-lg mt-4 text-center md:text-left">
            It’s me ali saat satuyoru uysal. I love designing new things, making
            something unique and selling{" "}
            <span className="px-1 bg-purple-100 text-purple-500">saating.</span>{" "}
            I can design anything you want like websites, webapps etc.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start space-x-6">
            <a target="_blank" href="https://facebook.com">
              <svg
                width="9"
                height="18"
                viewBox="0 0 13 26"
                className="text-blue-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3186 26V13.8H0V9.40748H3.3186V5.65565C3.3186 2.70743 5.27891 0 9.79588 0C11.6247 0 12.9771 0.17043 12.9771 0.17043L12.8705 4.27235C12.8705 4.27235 11.4913 4.25929 9.98632 4.25929C8.35743 4.25929 8.09646 4.98898 8.09646 6.20009V9.40748H13L12.7866 13.8H8.09646V26H3.3186Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a target="_blank" href="https://twitter.com">
              <svg
                width="24"
                height="19"
                viewBox="0 0 29 24"
                fill="none"
                className="text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29 2.84684C27.9335 3.32792 26.7879 3.65297 25.5835 3.79989C26.8262 3.0429 27.7559 1.85148 28.1992 0.447947C27.0316 1.15395 25.7538 1.6509 24.4213 1.91719C23.5251 0.943152 22.3382 0.297546 21.0448 0.0806033C19.7513 -0.13634 18.4237 0.0875171 17.268 0.71742C16.1123 1.34732 15.1932 2.34803 14.6535 3.56417C14.1137 4.78031 13.9834 6.14385 14.2829 7.44309C11.9171 7.32216 9.60276 6.69618 7.49002 5.60576C5.37727 4.51535 3.51336 2.98487 2.01925 1.11366C1.50837 2.0108 1.21461 3.05097 1.21461 4.15875C1.21404 5.15601 1.45528 6.13799 1.91692 7.01757C2.37855 7.89715 3.04632 8.64713 3.86096 9.20098C2.91619 9.17037 1.99226 8.91049 1.16608 8.44295V8.52096C1.16598 9.91965 1.64124 11.2753 2.5112 12.3579C3.38116 13.4405 4.59225 14.1833 5.93896 14.4603C5.06253 14.7018 4.14365 14.7374 3.25174 14.5644C3.6317 15.7678 4.37183 16.8203 5.36852 17.5742C6.36521 18.3282 7.56855 18.7461 8.81009 18.7692C6.70251 20.4535 4.09965 21.3672 1.42024 21.3632C0.945611 21.3633 0.471383 21.3351 0 21.2786C2.71976 23.0589 5.88575 24.0037 9.11917 24C20.0647 24 26.0484 14.7711 26.0484 6.76698C26.0484 6.50694 26.042 6.24429 26.0305 5.98425C27.1944 5.12738 28.1991 4.0663 28.9974 2.85074L29 2.84684Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a target="_blank" href="https://instagram.com">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                className="text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.22818 0.084C9.72109 0.0152727 10.1971 0 14 0C17.8029 0 18.2789 0.0165454 19.7705 0.084C21.2622 0.151455 22.2804 0.389455 23.1713 0.734364C24.1042 1.08691 24.9505 1.638 25.6505 2.35073C26.3633 3.04945 26.9131 3.89455 27.2644 4.82873C27.6105 5.71964 27.8473 6.73782 27.916 8.22691C27.9847 9.72236 28 10.1984 28 14C28 17.8029 27.9835 18.2789 27.916 19.7718C27.8485 21.2609 27.6105 22.2791 27.2644 23.17C26.9131 24.1043 26.3624 24.9508 25.6505 25.6505C24.9505 26.3633 24.1042 26.9131 23.1713 27.2644C22.2804 27.6105 21.2622 27.8473 19.7731 27.916C18.2789 27.9847 17.8029 28 14 28C10.1971 28 9.72109 27.9835 8.22818 27.916C6.73909 27.8485 5.72091 27.6105 4.83 27.2644C3.89572 26.913 3.04923 26.3623 2.34945 25.6505C1.63721 24.9514 1.08604 24.1053 0.734364 23.1713C0.389455 22.2804 0.152727 21.2622 0.084 19.7731C0.0152727 18.2776 0 17.8016 0 14C0 10.1971 0.0165454 9.72109 0.084 8.22945C0.151455 6.73782 0.389455 5.71964 0.734364 4.82873C1.08656 3.89465 1.63815 3.04858 2.35073 2.34945C3.04951 1.63737 3.89515 1.0862 4.82873 0.734364C5.71964 0.389455 6.73782 0.152727 8.22691 0.084H8.22818ZM19.6573 2.604C18.1809 2.53655 17.738 2.52255 14 2.52255C10.262 2.52255 9.81909 2.53655 8.34273 2.604C6.97709 2.66636 6.23636 2.89418 5.74255 3.08636C5.08964 3.34091 4.62255 3.64255 4.13255 4.13255C3.66806 4.58443 3.31059 5.13454 3.08636 5.74255C2.89418 6.23636 2.66636 6.97709 2.604 8.34273C2.53655 9.81909 2.52255 10.262 2.52255 14C2.52255 17.738 2.53655 18.1809 2.604 19.6573C2.66636 21.0229 2.89418 21.7636 3.08636 22.2575C3.31036 22.8645 3.668 23.4156 4.13255 23.8675C4.58436 24.332 5.13545 24.6896 5.74255 24.9136C6.23636 25.1058 6.97709 25.3336 8.34273 25.396C9.81909 25.4635 10.2607 25.4775 14 25.4775C17.7393 25.4775 18.1809 25.4635 19.6573 25.396C21.0229 25.3336 21.7636 25.1058 22.2575 24.9136C22.9104 24.6591 23.3775 24.3575 23.8675 23.8675C24.332 23.4156 24.6896 22.8645 24.9136 22.2575C25.1058 21.7636 25.3336 21.0229 25.396 19.6573C25.4635 18.1809 25.4775 17.738 25.4775 14C25.4775 10.262 25.4635 9.81909 25.396 8.34273C25.3336 6.97709 25.1058 6.23636 24.9136 5.74255C24.6591 5.08964 24.3575 4.62255 23.8675 4.13255C23.4155 3.66809 22.8654 3.31063 22.2575 3.08636C21.7636 2.89418 21.0229 2.66636 19.6573 2.604ZM12.2118 18.3158C13.2105 18.7315 14.3225 18.7876 15.3579 18.4746C16.3933 18.1615 17.288 17.4986 17.889 16.5992C18.49 15.6998 18.7601 14.6197 18.6532 13.5432C18.5462 12.4668 18.0689 11.4609 17.3027 10.6973C16.8143 10.2092 16.2237 9.8354 15.5735 9.60291C14.9233 9.37043 14.2296 9.285 13.5424 9.35278C12.8553 9.42056 12.1916 9.63986 11.5994 9.99489C11.0071 10.3499 10.5009 10.8319 10.1173 11.406C9.73364 11.9801 9.48206 12.6322 9.38066 13.3152C9.27925 13.9983 9.33056 14.6953 9.53087 15.3561C9.73118 16.0169 10.0755 16.6251 10.5391 17.1369C11.0027 17.6487 11.574 18.0513 12.2118 18.3158ZM8.91164 8.91164C9.57985 8.24342 10.3731 7.71337 11.2462 7.35173C12.1193 6.9901 13.055 6.80397 14 6.80397C14.945 6.80397 15.8807 6.9901 16.7538 7.35173C17.6269 7.71337 18.4202 8.24342 19.0884 8.91164C19.7566 9.57985 20.2866 10.3731 20.6483 11.2462C21.0099 12.1193 21.196 13.055 21.196 14C21.196 14.945 21.0099 15.8807 20.6483 16.7538C20.2866 17.6269 19.7566 18.4202 19.0884 19.0884C17.7388 20.4379 15.9085 21.196 14 21.196C12.0915 21.196 10.2612 20.4379 8.91164 19.0884C7.56212 17.7388 6.80397 15.9085 6.80397 14C6.80397 12.0915 7.56212 10.2612 8.91164 8.91164ZM22.792 7.87564C22.9576 7.71943 23.0902 7.53159 23.1818 7.32324C23.2735 7.11489 23.3225 6.89025 23.3258 6.66264C23.3291 6.43503 23.2867 6.20906 23.2012 5.99812C23.1156 5.78718 22.9886 5.59556 22.8276 5.4346C22.6666 5.27363 22.475 5.1466 22.2641 5.06102C22.0531 4.97544 21.8272 4.93306 21.5995 4.93638C21.3719 4.9397 21.1473 4.98865 20.9389 5.08034C20.7306 5.17203 20.5427 5.30459 20.3865 5.47018C20.0828 5.79222 19.9164 6.21997 19.9229 6.66264C19.9293 7.1053 20.1081 7.52803 20.4211 7.84107C20.7342 8.15412 21.1569 8.33284 21.5995 8.33929C22.0422 8.34574 22.47 8.17942 22.792 7.87564Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
