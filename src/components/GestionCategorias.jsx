import "../styles/gestionCategorias.css";
import { getAllCategorias } from "../service/categoriaService";
import BtnAgregar from "../components/buttons/BtnAgregar";
import BtnDelete from "../components/buttons/BtnDelete";
import BtnEdit from "../components/buttons/BtnEdit";
import { useEffect, useState } from "react";
export default function GestionUsuarios() {
  const [listaCategorias, setListaCategorias] = useState([]);
  useEffect(() => {
    const categoriasAlmacenadas = localStorage.getItem("listaCategorias");
    if (categoriasAlmacenadas == null) {
      getAllCategorias().then((categorias) => {
        setListaCategorias(categorias);
        localStorage.setItem("listaCategorias",JSON.stringify(categorias)); //Esto siempre debe guardar un string por eso usamos JSON.stringify
      });
    }
    else{
        setListaCategorias(JSON.parse(categoriasAlmacenadas));
    }
  }, []);

  return (
    <section id="gestionar-categorias" className="section">
      <div id="addCategoria">
        <h2>Gestionar Categorías</h2>
        <BtnAgregar nuevaPagina="/login" />
      </div>

      <p>Aquí podrás gestionar las categorías de los productos.</p>

      <div className="card">
        <div className="table-responsive">
          <table id="dataTableCategorias">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaCategorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.nombre}</td>
                  <td>{categoria.descripcion}</td>
                  <td className="columIconActions">
                    <BtnEdit></BtnEdit>
                    <BtnDelete></BtnDelete>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
