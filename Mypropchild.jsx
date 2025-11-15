const Mypropchild = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Brand: {props.brand}</p>
            <p>Year: {props.year}</p>
            <p>New: {props.isNew? "Yes" : "No"}</p>
        </div>
    )

}
Mypropchild.defaultProps = {
    name: "Guest",
    brand: "Unknown",
    year: 0,
    isNew: false
};
export default Mypropchild;