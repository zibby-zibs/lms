import { IcondBadge } from "@/components/iconbadge";
import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
};

const InfoCard = ({ variant, icon: Icon, numberOfItems, label }: Props) => {
  return (
    <main className="border rounded-mmd flex items-center gap-x-2 p-3">
      <IcondBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium ">{label}</p>
        <p>
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </main>
  );
};

export default InfoCard;
