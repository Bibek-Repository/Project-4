import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function DashboardChart({ contacts }) {

  const monthlyData = {};

  contacts.forEach((contact) => {

    const month = new Date(contact.createdAt)
      .toLocaleString("default", {
        month: "short"
      });

    monthlyData[month] =
      (monthlyData[month] || 0) + 1;

  });

  const chartData = Object.keys(monthlyData).map(
    (month) => ({
      month,
      enquiries: monthlyData[month]
    })
  );

  return (

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <LineChart data={chartData}>

        <CartesianGrid strokeDasharray="3 3"/>

        <XAxis dataKey="month"/>

        <YAxis/>

        <Tooltip/>

        <Line

          type="monotone"

          dataKey="enquiries"

          stroke="#2563eb"

          strokeWidth={3}

        />

      </LineChart>

    </ResponsiveContainer>

  );

}

export default DashboardChart;