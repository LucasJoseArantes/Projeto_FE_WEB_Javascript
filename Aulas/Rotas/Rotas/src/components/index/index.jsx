import { Link } from 'react-router-dom'

const Index = () => {
    return <div>
        <h1>Index Teste</h1>

        <h2>This is my Index</h2>
        <li><a href="#fim"> Ir ao final da pasta</a></li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa quia. Cupiditate quia dolore quas cumque? Iure ducimus inventore aperiam eos, dicta earum adipisci aliquam, voluptate sequi nemo ipsa laborum!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem hic, corporis deleniti autem in accusantium quisquam sunt, dignissimos consequuntur, iste iusto optio cum officia consequatur sint dolorum omnis itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui similique ullam provident obcaecati ut, accusantium sed consequuntur non porro sequi sunt, quasi eos maxime! Ex esse aut amet fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aliquid. Voluptates reprehenderit blanditiis, laudantium aperiam molestias odit tenetur porro cumque, corporis impedit ullam officia? Qui sed deleniti sunt adipisci laudantium.</p>

        <ul>
        <li><Link to="/contato"> Contato</Link></li>
		<li><Link to="/sobrenos"> Sobre nós</Link></li>
		<li><a href="#" id="fim"> Voltar ao topo</a></li>
        
        </ul>
    </div>;
}

export default Index;