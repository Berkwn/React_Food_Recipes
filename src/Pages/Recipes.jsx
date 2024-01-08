import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import SiteNav from '../Components/SiteNav';





export default function Recipes() {
  const navigate=useNavigate()
  const[recipes,setRecipes]=useState(null)
 
  useEffect(() => {
    const makeApiRequest = async () => {
      try {
        const request = await fetch('/yemektarıfler.json'); 
        const response = await request.json();
        setRecipes(response);
        console.log(recipes); // setRecipes fonksiyonu asenkron çalıştığı için burada doğrudan response kullanılır
      } catch (error) {
        console.log('Hata mesajı:' ,error);
      }
    };

    makeApiRequest();
  }, []);
   
   if (recipes==null)
   return <h1 className='text-center'>veriler yükleniyor lütfen bekleyiniz..</h1>


 
  return (
    <>              <div  style={{backgroundColor:"#3D6762",height:"100%"}}>
                    <SiteNav></SiteNav>
                    <h1 className='text-center text-white mt-5' >Tariflerimiz</h1>
                    <div className='text-center'>
                    <ul  className='d-flex ' style={{flexWrap:"wrap"}}>
                      {
                        recipes.map((recipe)=>(
                            <>
                            <Card key={recipe.id} className='ms-5' style={{ width: '18rem', margin:"15px"  }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                      <Card.Title>{recipe.ad}</Card.Title>
                      
                      <Button className='btn btn-dark'  onClick={()=>navigate("/Recipedetail",{state:recipe})}  variant="primary">Yemek Detay</Button>
                      {/* <Link type='button' className='btn btn-primary w-100' to={`/urunler/${uruns.id}`}>Detaylara git</Link> */}
                    </Card.Body>
                  </Card>

                 
          
            </>
          ))
        }


      </ul>
      </div>
      </div>
  
    
    </>
  )
}
