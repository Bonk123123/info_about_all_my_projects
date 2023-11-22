import { Outlet } from 'react-router-dom';
import CanvasBG from '../components/CanvasBG/CanvasBG';

const Layout = () => {
    return (
        <div className="bg-black h-[100vh] flex justify-center items-center overflow-hidden font-mono text-center">
            <CanvasBG />
            <Outlet />
        </div>
    );
};

export default Layout;
