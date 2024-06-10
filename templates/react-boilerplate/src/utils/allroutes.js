import Bootstrap from "../pages/Bootstrap";
import MaterialUI from "../pages/MaterialUI";
import Tailwind from "../pages/Tailwind";
import Redux from "../pages/Redux";
import Overmind from "../pages/Overmind";
import ContextAPI from "../pages/ContextAPI";

export const mainroutes = [
    {
        path: '/',
        element: 'This is the Main page'
    },
    {
        path: '/bootstrap',
        element: <Bootstrap />
    },
    {
        path: '/tailwind',
        element: <Tailwind />
    },
    {
        path: '/materialui',
        element: <MaterialUI />
    },
    {
        path: '/redux',
        element: <Redux />
    },
    {
        path: '/overmind',
        element: <Overmind />
    },
    {
        path: '/contextapi',
        element: <ContextAPI />
    },
]