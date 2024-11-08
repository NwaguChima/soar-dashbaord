import React from "react";
import UserBadge from "../user-badge/UserBadge";
import { Button } from "../ui/Button";
import { SendIcon } from "@/assets/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../caurasel/Carousel";

interface QuickTransferProps {}

const QuickTransfer: React.FC<QuickTransferProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4 md:max-w-[445px]">
      <h3 className="text-[22px] text-base font-semibold">Quick Transfer</h3>

      <div className="flex h-[322px] w-full flex-col justify-between rounded-3xl bg-white p-4 md:p-8">
        <div className="mx-auto w-[95%] md:w-[86%]">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <UserBadge />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <UserBadge />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <UserBadge />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <UserBadge />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <UserBadge />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="whitespace-nowrap text-[#718EBF]">Write Amount</p>
          <div className="flex max-w-[187px] items-center gap-0 rounded-[50px] bg-[#EDF1F7] md:max-w-[265px]">
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
