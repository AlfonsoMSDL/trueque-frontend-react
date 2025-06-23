import HeaderAdmin from '../components/HeaderAdmin';
import Footer from '../components/Footer';
import NavBarAdmin from '../components/NavBarAdmin';
export default function AdminLayout({ children, cerrarSesion,setSeccionActiva }) {
  return (
    <article className="container-inicioAdmin">
      <HeaderAdmin cerrarSesion={cerrarSesion} />
      <NavBarAdmin setSeccionActiva={setSeccionActiva} />
      <main>{children}</main>
      <Footer />
    </article>
  );
}
