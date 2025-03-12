export default function Dashboard () {
  return (
    <div className="flex space-x-4 justify-center p-8">
      <StatsCard title="Dispute Manager" amount="$84,000" description="Disputed orders: 8,700" buttonLabel="Dispute" />
      <StatsCard title="Reviews and Ratings" amount="6,433" description="Unanswered reviews" buttonLabel="Auto reply" />
      <StatsCard title="Finance" amount="$-8,011,191" description="Total deductions" />
    </div>
  );
};