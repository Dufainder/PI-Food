import {InputCity, InputButton, SearchContainer, ButtonSVG} from './SearchBarStyled'


export default function SearchBar() {
    // function ValidarONSearch (){
    //   if(typeof(onSearch) === "function"){
    //     const input=document.getElementById("src-bar-input");
    //     onSearch(input.value);
    //     input.value = "";
    //   } 
    // }
    return( 
            <>
              <SearchContainer>
                 <InputCity type="text" placeholder="Buscar Receta..."></InputCity>
                 {/* <InputButton>Buscar</InputButton> */}
                 <ButtonSVG/>
               
              </SearchContainer>
           </>
    )};