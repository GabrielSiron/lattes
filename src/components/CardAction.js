import './CardAction.css'
import document from '../assets/img/new-document.png';
import { Link } from 'react-router-dom';

function CardAction() {

    return (
        <div className="card">
            <Link to="/signup">
            <div className="title">
                <span>Criar Curriculo</span>
            </div>
            <div className="icon">
                <img src={document} alt="Imagem"/>
            </div>
            </Link>
        </div>
    )
}

export default CardAction