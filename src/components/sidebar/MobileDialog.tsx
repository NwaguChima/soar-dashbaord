"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/Dialog";
import { HamburgerIcon } from "@/assets/icons";
import Sidebar from "./Sidebar";

const MobileDialog: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <HamburgerIcon onClick={() => setOpen(true)} />
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="h-screen bg-white">
          <DialogTitle title="Nav Items" />
          <Sidebar handleClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileDialog;
