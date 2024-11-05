import Logo from './../../img/neon-cocktail.png'; 
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={ s.header }>
          <img className={ s.Logo } src={Logo} /> 
        </div>
    )
}

export default Header; 
