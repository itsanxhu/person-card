import { IconPlus } from "@tabler/icons-react";

const Card = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-95 w-70 bg-white rounded-3xl flex flex-col justify-between cursor-pointer">
        <div className=" flex justify-center items-center p-3">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="transition-transform duration-500 ease-out hover:scale-110">
              {/* main img */}
              <img
                className="h-72 w-65 object-cover"
                src="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />

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
                src="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />
              <div className="absolute h-2.5 w-2.5 bg-white border-3 border-green-500  rounded-full bottom-0 right-0"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px]">@sinne99</p>
              <p className="font-normal text-[9px] text-neutral-400">12m ago</p>
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
