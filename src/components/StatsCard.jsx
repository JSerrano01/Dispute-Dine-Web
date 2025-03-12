const TransparentCard = ({ title, children }) => {
    return (
      <div className="relative w-80 max-w-md p-4 rounded-2xl bg-white bg-opacity-50 backdrop-blur-md shadow-2xl">
        {/* Título con mejor contraste */}
        <div className="text-white font-semibold text-base mb-0">{title}</div>
        
        {/* Contenedor con fondo blanco y flexibilidad */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          {children}
        </div>
      </div>
    );
  };
  
  export default TransparentCard;
  