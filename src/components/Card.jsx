import { IconPlus } from "@tabler/icons-react";

const Card = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-80 w-65 bg-white rounded-3xl flex flex-col justify-between">
        <div className=" flex justify-center items-center p-3">
          <img
            className="rounded-2xl h-60 w-65 object-cover"
            src="https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
          />
        </div>
        <div className="flex justify-between p-3">
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
          <div className="flex justify-center items-center rounded-lg px-2 bg-neutral-900 text-white gap-0.5">
            <IconPlus stroke={2} size={11} />
            <p className="text-[10px] font-light tracking-tight">Add member</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
