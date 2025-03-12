const TransparentCard = ({ title, children }) => {
  return (
    <div className="relative w-fit max-w-md p-3 rounded-2xl bg-white bg-opacity-50 backdrop-blur-md shadow-2xl flex flex-col">
      {/* Título con mejor contraste */}
      <div className="text-white font-semibold text-base mb-2 p-1">
        {title}
      </div>

      {/* Contenedor flexible sin margen extra */}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default TransparentCard;
