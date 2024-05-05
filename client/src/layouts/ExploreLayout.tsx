import { Outlet } from 'react-router-dom'
import AuthWrapper from '../utils/AuthWrapper';



function ExploreLayout() {
    return (
        <div>
            <h3>Explore</h3>
            <Outlet />
        </div>
    )
}

export default AuthWrapper(ExploreLayout);