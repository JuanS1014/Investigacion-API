import express from 'express';
import { getDatabase, ref, get, set, push, remove } from "firebase/database";
import appFirebase from "./firebaseConfig.js";

const app = express();
const db = getDatabase(appFirebase);


app.use(express.json());

app.get("/tiburones", async (req, res) => {
    try {
      // Parámetros de búsqueda opcionales (nombre y especie)
      const { nombre, especie } = req.query;
  
      // Obtener todos los tiburones de la base de datos
      const snapshot = await get(ref(db, "Tiburones"));
  
      if (snapshot.exists()) {
        const tiburones = snapshot.val();
        
        // Formatear los datos en un array
        const listaTiburones = Object.keys(tiburones).map((key) => ({
          id: key,
          ...tiburones[key],
        }));
  
        // Filtrar los tiburones según los parámetros de búsqueda
        let resultado = listaTiburones;
  
        if (nombre) {
          resultado = resultado.filter(tiburon => tiburon.Nombre.toLowerCase().includes(nombre.toLowerCase()));
        }
  
        if (especie) {
          resultado = resultado.filter(tiburon => tiburon.Especie.toLowerCase().includes(especie.toLowerCase()));
        }
  
        // Si se encontró algún tiburón, lo devolvemos; si no, devolvemos un mensaje
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(404).json({ mensaje: "No se encontraron tiburones que coincidan con los parámetros de búsqueda." });
        }
      } else {
        res.status(404).json({ mensaje: "No se encontraron tiburones." });
      }
    } catch (error) {
      res.status(500).json({ error: `Error al obtener los tiburones: ${error.message}` });
    }
  });
  


// Configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});