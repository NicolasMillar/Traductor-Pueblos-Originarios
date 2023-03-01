import { Outlet } from 'react-router-dom';
import './index.scss';
import Header from '../Header';

const Layout = () =>{
    return (
        <div className="App">
            <Header />
            <div className='page'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout