import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () =>{
    return (
        <div className="App">
            <div className='Header'>
                <p>Prueba</p>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout