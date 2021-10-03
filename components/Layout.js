import Navbar from './Navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'


const Layout = ( {children, footer = true } ) => {

    const router = useRouter()

    useEffect(() => {

        const hanldeRouterCahnge = url => {
            // console.log(url)
            NProgress.start()
        }

        router.events.on('routeChangeStart', hanldeRouterCahnge)
        router.events.on('routeChangeComplete', () => NProgress.done() )

        return () => {
            router.events.off('routeChangeStart', hanldeRouterCahnge)
        }
    }, [])

    return (
    <>
        <Navbar />
        <div className="container py-4">
            { children }
        </div>
        {
            footer &&
            <footer className="footer bg-dark text-light text-center">
                <div className="container p-4 bg-dark">
                    <h1>&copy; Esmeralda Arista Posrtfolio</h1>
                    <p>2010 - { new Date().getFullYear()}</p>
                    <p>All rights Reserver</p>
                </div>
            </footer>
        }

    </>
)}

export default Layout