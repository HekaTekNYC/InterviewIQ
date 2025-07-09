import { Outlet } from 'react-router-dom';
import Navbar from '../Navigation/NavbarMain/NavbarMain';

const Layout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <main
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '70px',
      }}
    >
      <Outlet />
    </main>
    {/* <Footer /> */}
  </div>
);

export default Layout;
