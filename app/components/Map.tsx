import React from "react";

function Map() {
  return (
    <div>
      <div>
        <iframe
          className="h-[50svh] w-full rounded-xl border-2 border-gray-300"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CSII%20INDIA,%20C-56,%20A,%202,%20C%20Block,%20Phase%202,%20Industrial%20Area,%20Sector%2062,%20Noida,%20Uttar%20Pradesh%20201309+(AK%20Enterprises)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>

        <div className="flex items-center justify-center gap-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M522.24 81.984a308.288 308.288 0 0 0-308.352 308.352c0 224.96 308.352 461.632 308.352 461.632s85.056-65.6 165.888-160.256a22.4 22.4 0 0 0-15.744-38.4 22.016 22.016 0 0 0-17.152 8.512l-0.064-0.064 74.496-109.376 3.52 2.176a21.568 21.568 0 0 0-3.968 11.968 22.4 22.4 0 0 0 22.4 22.464 22.272 22.272 0 0 0 20.992-15.36c33.92-58.56 57.92-121.216 57.92-183.232A308.224 308.224 0 0 0 522.24 81.984z"
              fill=""
            />
            <path
              d="M716.864 620.416m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z"
              fill=""
            />
            <path
              d="M522.24 126.784a263.808 263.808 0 0 0-263.552 263.552c0 163.008 191.168 341.824 263.552 403.648 72.384-61.824 263.552-240.64 263.552-403.648A263.872 263.872 0 0 0 522.24 126.784z m0 432.576a172.032 172.032 0 1 1 0-344.064 172.032 172.032 0 0 1 0 344.064z"
              fill="#FF6749"
            />
            <path
              d="M522.24 387.328m-127.168 0a127.168 127.168 0 1 0 254.336 0 127.168 127.168 0 1 0-254.336 0Z"
              fill="#FFFFFF"
            />
            <path
              d="M186.304 936.384m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z"
              fill=""
            />
            <path
              d="M263.04 913.984a22.464 22.464 0 0 0-22.4 22.4v0.064c0 12.288 10.112 22.4 22.4 22.4h595.2c12.288 0 22.4-10.048 22.4-22.4v-0.064a22.464 22.464 0 0 0-22.4-22.4h-595.2z"
              fill=""
            />
            <path
              d="M292.8 359.36a16 16 0 0 1-15.744-18.816c25.6-144 153.28-183.616 158.656-185.216a16 16 0 0 1 9.152 30.656c-4.672 1.408-114.24 35.968-136.384 160.192a16 16 0 0 1-15.68 13.184z"
              fill="#FFFFFF"
            />
          </svg>
          <p className="text-gray-500 text-sm py-5">
            CSII INDIA, C-56, A, 2, C Block, Phase 2, Industrial Area, Sector
            62, Noida, Uttar Pradesh 201309
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;