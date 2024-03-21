const Header =()=>{
    return(
        <div className='header'>
            <div className='logo'>
                <img src = {require('../../assets/logo.png')} title="Burger-Surger" alt="FoodAdda"></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;