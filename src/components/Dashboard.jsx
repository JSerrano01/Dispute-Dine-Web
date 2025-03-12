import StatsCard from "./StatsCard";
import FinanceChart from "./FinanceChart";
import disputeImage from "../assets/img/landingpage/image1.png"; // Importar la imagen si está en src/assets

const Dashboard = () => {
  return (
    <div className="relative mt-[-7%] z-10 flex flex-wrap justify-center gap-6 px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card con Imagen */}
        <StatsCard title="DISPUTE MANAGER">
          <img src={disputeImage} alt="Dispute Icon" className="w-full h-auto rounded-lg" />
        </StatsCard>

        {/* Card con Texto */}
        <StatsCard title="REVIEWS AND RATINGS">
          <div>
            <h2 className="text-4xl font-bold">6,433</h2>
            <p className="text-gray-500">Unanswered reviews</p>
          </div>
        </StatsCard>

        {/* Card con Gráfico */}
        <StatsCard title="FINANCE">
          <FinanceChart />
          <p className="text-gray-500">Total deductions: $-8,011,191</p>
        </StatsCard>
      </div>

      {/* Card con Etiquetas de Texto */}
      <StatsCard title="MARKETPLACE MANAGEMENT">
        <div className="flex flex-wrap gap-2 text-center text-sm font-medium">
          <span className="text-red-500">DoorDash</span>
          <span className="text-green-500">Uber Eats</span>
          <span className="text-yellow-500">GrubHub</span>
          <span className="text-blue-500">Google</span>
          <span className="text-green-400">ezCater</span>
          <span className="text-red-600">Yelp</span>
        </div>
      </StatsCard>
    </div>
  );
};

export default Dashboard;
