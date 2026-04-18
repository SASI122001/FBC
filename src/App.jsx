import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Believe from './pages/Believe';
import Connect from './pages/Connect';
import Sermons from './pages/Sermons';
import Give from './pages/Give';
import Visit from './pages/Visit';
import Leadership from './pages/Leadership';
import History from './pages/History';
import Confession from './pages/Confession';
import Homeschool from './pages/Homeschool';
import Portal from './pages/Portal';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'believe', element: <Believe /> },
            { path: 'connect', element: <Connect /> },
            { path: 'sermons', element: <Sermons /> },
            { path: 'give', element: <Give /> },
            { path: 'visit', element: <Visit /> },
            { path: 'leadership', element: <Leadership /> },
            { path: 'history', element: <History /> },
            { path: 'confession', element: <Confession /> },
            { path: 'membership', element: <Navigate to="/confession" replace /> },
            { path: 'homeschool', element: <Homeschool /> },
            { path: 'portal', element: <Portal /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
