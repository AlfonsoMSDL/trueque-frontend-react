export async function getAllCategorias() {
  try {
    const response = await fetch('http://localhost:8181/api/v1/categorias');
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
}
