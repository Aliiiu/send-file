import Home from '@/pages/home'
import { Cog8ToothIcon, HomeIcon, FolderOpenIcon, WifiIcon, ArrowRightOnRectangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import AppLogo from './AppLogo'
import Link from 'next/link'

interface Route {
    path: string,
    component: React.FC
    icon: any
}
// the routes
const routes: Route[] = [{
    path: '/',
    component: Home,
    icon: <HomeIcon />
},
{
    path: '/files',
    component: Home,
    icon: <FolderOpenIcon />
},
{
    path: '/wifi',
    component: Home,
    icon: <WifiIcon />
},
{
    path: '/settings',
    component: Home,
    icon: <Cog8ToothIcon />
},
{
    path: '/help',
    component: Home,
    icon: <InformationCircleIcon />
},
{
    path: '/settings',
    component: Home,
    icon: <ArrowRightOnRectangleIcon />
},

]


export default function Nav() {
    return (
        <nav className='col-span-1 bg-[rgba(249,250,254,255)] dark:text-shilo-500   dark:border-r-mirage-xx-800 dark:border-r text-gray-600  dark:bg-mirage-600 pt-10' style={
            {
                height: "calc(100vh-200px)",
                overflowY:"hidden"
            }
        }>
            <AppLogo />
            <ul className=' h-full flex flex-col items-center'>
                {routes.map((route, index) => (
                    <li key={index} className='w-6 h-6 my-5 first:mt-10 last:mt-auto last:mb-20 text-app-500'>
                        <Link href={route.path}>
                            <span className='sr-only'>
                                {route.path}
                            </span>
                            {route.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}