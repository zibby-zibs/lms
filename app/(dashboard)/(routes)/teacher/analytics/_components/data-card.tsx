import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/formats";
import React from "react";

type Props = {
  shouldFormat?: boolean;
  label: string;
  value: number;
};

const DataCard = ({ shouldFormat, label, value }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>{shouldFormat ? formatPrice(value) : value}</div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
