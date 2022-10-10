import './CardAction.css'

function CardAction() {

    const url = "https://via.placeholder.com/100"

    return (
        <div className="card">
            <div className="title">
                <span>Criar Curriculo</span>
            </div>
            <div className="icon">
                <img src={url} alt="Imagem"/>
            </div>
        </div>
    )
}

export default CardAction