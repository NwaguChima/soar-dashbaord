import React from "react";
import UserBadge from "../user-badge/UserBadge";
import { Button } from "../ui/Button";
import { SendIcon } from "@/assets/icons";

interface QuickTransferProps {}

const QuickTransfer: React.FC<QuickTransferProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[22px] text-base font-semibold">Quick Transfer</h3>

      <div className="flex h-[322px] w-full flex-col justify-between rounded-3xl bg-white p-8">
        <div className="flex items-center gap-8">
          <UserBadge />
          <UserBadge />
          <UserBadge />
        </div>

        <div className="flex items-center justify-between gap-12">
          <p className="whitespace-nowrap text-[#718EBF]">Write Amount</p>
          <div className="flex max-w-[265px] items-center gap-0 rounded-[50px] bg-[#EDF1F7]">
            <input
              type="text"
              className="h-[50px] max-w-[60%] bg-transparent pl-7 outline-none placeholder:text-[#718EBF]"
              placeholder="525.50"
            />
            <Button className="h-[50px] w-[125px] rounded-[50px] bg-[#232323] text-white">
              <span>Send</span>
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
