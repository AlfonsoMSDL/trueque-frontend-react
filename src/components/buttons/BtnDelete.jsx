import '../../styles/btnDelele.css'

export default function BtnDelete(){
    return (
        <button className="btnDelete" title='Eliminar'>
            <svg className="iconDelete" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
        </button>
    );
}