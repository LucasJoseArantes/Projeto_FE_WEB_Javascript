import '../menu/menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
	return <div>
		
	<nav id='nav-bar'>
		<li><Link to="/contato"> Contato</Link></li>
		<li><Link to="/sobrenos"> Sobre nós</Link></li>
		<li><Link to="/"> Index</Link></li>
	</nav>
	</div>;
}
export default Menu;