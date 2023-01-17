import { NavLink } from "@remix-run/react";
import styles from './MainNavigation.css';

export default function MainNavigation () {
    return (
        <nav>
            <ul>
                <li className="nav-item">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/notes'>Notes</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export const links = () => [
    { rel: 'stylesheet', href: styles },
]
