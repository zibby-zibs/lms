import { getAnalytics } from "@/actions/get-analytics";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import DataCard from "./_components/data-card";
import Chart from "./_components/chart";

type Props = {};

const AnalyticsPage = async ({}: Props) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { data, totalRevenue, totalSales } = await getAnalytics(userId);
  return (
    <main className="p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total sales" value={totalSales} />
        <DataCard label="Total revenue" value={totalRevenue} />
      </div>
      <Chart data={data} />
    </main>
  );
};

export default AnalyticsPage;
