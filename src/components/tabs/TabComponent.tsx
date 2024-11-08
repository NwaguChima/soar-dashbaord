"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ProfileEdit from "../profile-edit/ProfileEdit";

const tabs = ["Edit Profile", "Preferences", "Security"];

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="text-[#718EBF]">
      <div className="mb-4 flex gap-4 border-b border-[#F4F5F7] md:gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={cn(
              "whitespace-nowrap px-4 pb-4 text-xs font-semibold text-[#718EBF] md:text-base",
              activeTab === tab ? "tab-link text-[#232323]" : "",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Edit Profile" && (
          <div>
            <ProfileEdit />
          </div>
        )}

        {activeTab === "Preferences" && (
          <div>This is the Preferences content.</div>
        )}
        {activeTab === "Security" && <div>This is the Security content.</div>}
      </div>
    </section>
  );
};

export default TabComponent;
