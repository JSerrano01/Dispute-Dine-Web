import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Convertir la URL del módulo a una ruta de archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Sirve los archivos estáticos de la carpeta "dist"
app.use(express.static(path.join(__dirname, "dist")));

// Redirige todas las rutas al index.html
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});