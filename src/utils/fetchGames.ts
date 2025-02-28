export default async function fetchGames() {
    try {
      const response = await fetch("/data/games.json", { cache: "no-store" }); // Evita caché en desarrollo
      if (!response.ok) throw new Error("Error al cargar JSON.");
  
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(`Algo pasó! ${e}`);
      return [];
    }
  }
  