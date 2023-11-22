import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import InformationPage from './pages/InformationPage/InformationPage';
import SecretPage from './pages/SecretPage/SecretPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/projects',
                element: <ProjectsPage />,
            },
            {
                path: '/information',
                element: <InformationPage />,
            },
            {
                path: '/secret',
                element: <SecretPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
