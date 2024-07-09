function Present( props){
    return (
    <div className="content-container">
        <h2> {props.title} :</h2>
        <p> {props.description} </p>
    </div>
    )
}

export default Present;
