import './BodyNav.css'

export default function BodyNav() {
    return (
        <ul className="nav nav-pills nav-fill p-4">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Disabled</a>
            </li>
        </ul>
    )
}