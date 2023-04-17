function Item(props){  // to add more properties 
    console.log(props)
    return (
        <div>
            <header>{props.name}</header>
            <main> <img src={props.image} alt={props.alt}/> </main>
            <footer> <a href="#"> {props.link}</a> </footer>
        </div>
        
    )
}
export default Item;