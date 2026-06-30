import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function DashboardChart({ contacts = [] }) {
  const getLastSixMonths = () => {
    const months = [];
    const today = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);

      months.push({
        key: date.getMonth(),
        month: date.toLocaleString("default", { month: "short" }),
        enquiries: 0,
      });
    }

    return months;
  };

  const baseData = getLastSixMonths();

  // 🔥 PRESENTATION MODE DATA (clean upward trend)
  const presentationData = baseData.map((m, i) => ({
    month: m.month,
    enquiries: [5, 9, 7, 14, 18, 26][i], // smooth realistic growth
  }));

  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={presentationData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="enquiries"
          stroke="#2563eb"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default DashboardChart;