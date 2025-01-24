import profilePic from './assets/Linkedln.jpg'

function Card(props){
    return(
        /* Instead of class we use className */
        <div className ="card">  
            <img src={profilePic} alt="Pfp" /> 
            <h2>Jesse John</h2>
            <p> I am  a frontend developer i build web apps and websites that day to day,I am learning how to build on the solana blockchain using Rust.When not coding i enjoy reading books on personal Development </p>
            <a>
            <span className='html'>Html and CSS 🦾 </span>
            <span className='js'>Javascript 🦾</span> 
            <span className='re'>React 🦾</span> 
            <span className='gi'>Git and Github 🦾</span>
            </a>
        </div>
    )
}

export default Card

