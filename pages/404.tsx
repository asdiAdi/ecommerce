import Topbar from "../components/topbar";
import Topnav from "../components/topnav";
import Footer from "../components/footer";
export default function Error404() {
    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <header>
                <Topbar />
                <Topnav />
            </header>
            <main style={{
                textAlign: 'center'
            }}>
                <h1>404</h1>
                <h2 style={{marginBottom:'60px'}}>PAGE NOT FOUND</h2>
                <p>The page you are looking for doesn't exist or an other error occured.</p>
            </main>
            <Footer />
        </div>
    )
}