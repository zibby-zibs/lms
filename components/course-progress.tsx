import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
};

const colorByVaraint = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

const CourseProgress = ({ value, variant, size }: Props) => {
  return (
    <div>
      <Progress className="h-2" value={value} varaint={variant} />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVaraint[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value)}% complete
      </p>
    </div>
  );
};

export default CourseProgress;
