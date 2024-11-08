import Image from "next/image";
import React from "react";
import { FormInput } from "../ui/FormInput";
import { Button } from "../ui/Button";
import { EditIcon } from "@/assets/icons";

interface ProfileEditProps {}

const ProfileEdit: React.FC<ProfileEditProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-12 pt-4 md:grid-cols-[100px_1fr]">
      <div className="relative mx-auto flex h-[98px] w-[98px] items-center justify-center rounded-full">
        <Image src="/images/user.svg" alt="user badge" height={91} width={98} />
        <EditIcon className="absolute -right-3 bottom-1" />
      </div>

      <form className="flex flex-col gap-4 pb-3 md:gap-8">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]">
          <FormInput
            label="Your Name"
            placeholder="Chariene Reed"
            type="text"
          />
          <FormInput
            label="User Name"
            placeholder="Chariene Reed"
            type="text"
          />
          <FormInput
            label="Email"
            placeholder="charienereed@gmail.com"
            type="email"
          />
          <FormInput
            label="Password"
            placeholder="**********"
            type="password"
          />
          <FormInput
            label="Date of Birth"
            placeholder="25th January 1990"
            type="text"
          />
          <FormInput
            label="Present Address"
            placeholder="San Jose, California, USA"
          />
          <FormInput
            label="Permanent Address"
            placeholder="San Jose, California, USA"
          />
          <FormInput label="City" placeholder="San Jose" />
          <FormInput label="Postal Code" placeholder="45962" />
          <FormInput label="Country" placeholder="USA" />
        </div>

        <Button className="w-full self-end rounded-lg bg-[#232323] text-white md:w-[190px]">
          Save
        </Button>
      </form>
    </div>
  );
};

export default ProfileEdit;
