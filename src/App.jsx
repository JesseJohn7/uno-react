import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
function App() {
return(
  /* <Header></Header>return header component and name of comp second one closed  or put one with forward slash*/
 /* Enclose within fragments because you can't be able to use two components  */
 /* To reuse you can copy and paste componets like food 
 You can rearrange to choice , component is a small unit of code that contains html and js
 */
<>
<Header />
<Food /> 
<Food /> 
<Food /> 
<Footer /> 
</>
);
}

export default App
