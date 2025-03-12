export default function StatsCard ({ title, amount, description, buttonLabel }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-gray-600 text-sm font-semibold">{title}</h3>
            <p className="text-2xl font-bold">{amount}</p>
            <p className="text-gray-500 text-sm">{description}</p>
            {buttonLabel && <button className="mt-2 bg-orange-500 px-3 py-1 text-white rounded">{buttonLabel}</button>}
        </div>
    );
};