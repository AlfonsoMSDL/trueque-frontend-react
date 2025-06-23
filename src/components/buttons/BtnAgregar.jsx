import '../../styles/btnAgregar.css';
import { useNavigate } from "react-router-dom";
export default function BtnAgregar({ nuevaPagina }) {
  const navigate = useNavigate();
  return (
    <button className="btnAgregar" onClick={() => navigate(nuevaPagina)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"/></svg>
      Agregar
    </button>
  );
}