import './Header.scss'

export const Header = () => {

    return (
        
        <header className="header">
            <div className="header_container">
            <h1 className="header_logo"> Logo </h1>
            <nav className="navbar">
                <a className="navbar_link" href="#"> Enlace 1</a>
                <a className="navbar_link" href="#"> Enlace 2</a>
                <a className="navbar_link" href="#"> Enlace 3</a>
            </nav>
            </div>
        </header>
        
    )
}