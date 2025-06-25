import { Link } from "react-router"


export default function Widgets() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/" title="Profile" className="fas fa-user"></Link>
                </li>

                <li>
                    <Link to="/messages" title="Messages" className="fas fa-comment-dots"></Link>
                </li>

                <li>
                    <Link to="/friends" title="Friends" className="fas fa-user-friends"></Link>
                </li>

                <li>
                    <Link to="/settings" title="Settings" className="fas fa-cog"></Link>
                </li>
            </ul>
        </nav>
        </>
    )
}