//#cyan
import React, {useEffect, useState} from 'react';
import Card  from '../Card';
import Navbar from '../navbar/indexNavbar';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipesAll,getTypes} from '../actions/index'
import  {  
  CreateRecipeSVG, 
  LogoSVG, LogoDietsSVG, 
  TextDietsSVG, 
  ContenedorDiets, 
  ContainerCards,
  ContainerPagination,
  MarginContenedor,
 }from './HomeStyled'
import SearchBar from '../SearchBar'
import Pagination from '../pagination'
import LoaderFood from '../Loader';
import FilterOptions from '../FilterOptions';
// import{PagedButton} from '../pagination/PaginationStyled'
//#


function Home() {
  //const second = useSelector((state) => state.recipesAll)


  const dispatch = useDispatch();
  const recipesAll = useSelector((state) => state.recipes)
  const typesAll = useSelector(state => state.types)
  
  const [order, setOrder] = useState('')
  const [currenPage, setCurrentPage] = useState(1)
  const recipesPage = 9; 

  const indexLastRecipe = currenPage * recipesPage
  const indexFirstRecipe = indexLastRecipe - recipesPage
  const currentRecipes = recipesAll.length ? recipesAll.slice(indexFirstRecipe, indexLastRecipe) : []
  
  
  useEffect(() => {
    dispatch(getRecipesAll())
  },[])  
  
  useEffect(() => {
    dispatch(getTypes())
  }, [])

    
  const Page = (pageNumber) => {
      setCurrentPage(pageNumber)
  }

   
    return (
        
            <>
            <header>

              <Navbar>

              {/* <SearchBar/>
              <LogoSVG/>
              
              <Link to='/create'>
                  <CreateRecipeSVG/>
              </Link> */}
              </Navbar>
            </header>
                 
              {/* <Link to='/diets'>
                <ContenedorDiets>
                  <LogoDietsSVG/>
                  <TextDietsSVG/>
                </ContenedorDiets>
              </Link> */}

               <body>

              <FilterOptions typesAll={typesAll}  setOrder={setOrder} setCurrentPage={setCurrentPage} />
             
              <div >
                    {recipesAll.length > 0 ?
                    <ContainerCards>
                      <MarginContenedor>


                    {currentRecipes?.map((recipe, index) => {
                      return(    
                        <> 
                            <Card key={recipe.id} id={recipe.idApi ? recipe.idApi : recipe.id} name={recipe.name} image={recipe.image} types={recipe.types} diets={recipe.diets}/>
                        </>
                        )
                      })}
                      </MarginContenedor>
                    </ContainerCards>
                    : <LoaderFood/>}
                </div>
               </body>
                
                <ContainerPagination>
                    <Pagination
                        recipesPage = {recipesPage}
                        recipesAll = {recipesAll.length}
                        Page = {Page}
                    />

                
                </ContainerPagination>


            

            </>
    
    )
}
//#
export default Home;
