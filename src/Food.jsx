function Food(){

    /* Outside return statement you dont need js in curly bracket */
    const food1 = "pasta";
    const food2 = "Pizza";

    /* Js must be wrapped in curly brackets */
        return(
            <ul> 
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li> 
            </ul>
        )
}

export default Food