function List(listContent){
    return(
        <ul>
            {listContent.listContent.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default List;
