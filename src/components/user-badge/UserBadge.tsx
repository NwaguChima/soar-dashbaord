import Image from "next/image";
import React from "react";

const UserBadge: React.FC = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative mx-auto flex h-[98px] w-[98px] items-center justify-center rounded-full">
        <Image src="/images/user.svg" alt="user badge" height={91} width={98} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p>Livia Bator</p>
        <h6 className="text-[#718EBF]">CEO</h6>
      </div>
    </div>
  );
};

export default UserBadge;
