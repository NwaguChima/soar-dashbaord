import { CardArcIcon, SimIconDark, SimIconLight } from "@/assets/icons";
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  variant?: "light" | "dark";
}

const Card: React.FC<CardProps> = ({ variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex h-[235px] min-w-[350px] flex-col overflow-hidden rounded-3xl",
        isDark
          ? "bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)] text-white"
          : "border border-[#DFEAF2] bg-white text-[#343C6A]",
      )}
      //   #718EBF
      //   #FFFFFFB2
    >
      <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0">
            <small
              className={cn(
                "text-[11px] md:text-xs",
                isDark ? "text-[#FFFFFFB2]" : "text-[#718EBF]",
              )}
            >
              Balance
            </small>
            <p className="text-base font-semibold leading-none md:text-xl">
              $5,757
            </p>
          </div>
          {isDark ? <SimIconLight /> : <SimIconDark />}
        </div>

        <div className="flex max-w-[230px] items-center justify-between gap-2">
          <div className="flex flex-col gap-0">
            <label
              className={cn(
                "text-[10px] md:text-xs",
                isDark ? "text-[#FFFFFFB2]" : "text-[#718EBF]",
              )}
            >
              CARD HOLDER
            </label>
            <p className="font-semibold">Eddy Cusuma</p>
          </div>
          <div className="flex flex-col gap-0">
            <label
              className={cn(
                "text-[10px] md:text-xs",
                isDark ? "text-[#FFFFFFB2]" : "text-[#718EBF]",
              )}
            >
              VALID THRU
            </label>
            <p className="font-semibold">12/22</p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex h-[70px] items-center justify-center",
          isDark
            ? "bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.15)_0%,_rgba(255,_255,_255,_0)_100%)]"
            : "border-t border-[#DFEAF2] bg-white",
        )}
      >
        <div className="flex w-full items-center justify-between px-4 md:px-6">
          <p className="text-base font-semibold md:text-[22px]">
            3778 **** **** 1234
          </p>
          <CardArcIcon fill={isDark ? "white" : "#9199AF"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
