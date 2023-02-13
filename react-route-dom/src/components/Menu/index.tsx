import { Link } from 'react-router-dom';

import './style.css';

export const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Post</Link></li>
                <li><Link to="/posts/10?page=23">Post 10</Link></li>
                <li><Link to="/redirect">Redirect</Link></li>
            </ul>
        </div>
    );
}
