import { IconPlus } from "@tabler/icons-react";

const Card = ({ img, profileImg, username, online, time }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-neutral-300/90 h-95 w-70 bg-white rounded-3xl flex flex-col justify-between cursor-pointer shadow-md">
        <div className=" flex justify-center items-center p-3">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="transition-transform duration-500 ease-out hover:scale-110">
              {/* main img */}
              <img className=" h-72 w-65 object-cover" src={img} alt="img" />

              {/* BLUR LAYER */}
              <div
                className="absolute bottom-0 left-0 w-full h-28"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  maskImage:
                    "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between p-3 pb-12">
          <div className="flex gap-2">
            <div className=" relative">
              <img
                className="h-8 w-8 object-cover rounded-full"
                src={profileImg}
                alt="img"
              />
              <div
                className={`absolute h-2.5 w-2.5 bg-white border-3 rounded-full bottom-0 right-0 ${online ? "border-green-500" : "border-gray-400"} `}
              ></div>
            </div>
            <div>
              <p className="font-semibold text-[12px]">@{username}</p>
              <p className="font-normal text-[9px] text-neutral-400">{time}</p>
            </div>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 text-neutral-200 text-[12px] px-2.5 rounded-md gap-0.5 transition-all duration-200 active:scale-95">
            <div className="">
              <IconPlus stroke={2} size={12} />
            </div>
            <p className="tracking-tight font-light text-xs"> Add members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
