import logo from "../assets/logo.jpg" 
const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo" 
    src={logo}/>
    </a>
    );

    const Header = () => {
        return (
            <div className="header">
            <Title />
    
            <div className="navlist">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Cart</a>
                <div className="navlist-right">
                <button className="login">Login</button>
                </div>
    
            </div>
            </div>
            
        );
    };

export default Header;    
