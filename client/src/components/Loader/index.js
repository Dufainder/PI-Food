import{PanLoader, PanContainer, Loader, Pan, Handle, Shadow} from "./LoaderStyled"
import React from 'react'

function LoaderFood() {
    return (

  <PanLoader>

       <Loader/>
       <PanContainer>
         <Pan/>
         <Handle/>
      </PanContainer>
      <Shadow/>

</ PanLoader>
      
    )
}

export default LoaderFood


