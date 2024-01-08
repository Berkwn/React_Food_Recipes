import SiteNav from '../Components/SiteNav'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';





export default function Recipedetail() {
 
  const { state }=useLocation()
  console.log(state)
  return (
  <>
   
                
    <SiteNav></SiteNav>
    <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1412206.jpg")',height:"110vh",width:"100%",position:"relative"}} >
    <div style={{width:"100%",display:"flex"}}>
    <Card key={state.id} className='ms-5 mt-5 ' style={{ width: '40rem' ,left:"30%", position:"absolute",border:"none"}}>
                    <Card.Img  src={state.image} />
                    <Card.Body style={{backgroundColor:"transparent", listStyleType:"none"}}>
                      <Card.Title style={{listStyleType:"none",textAlign:"center"}}>{state.ad}</Card.Title>
                     <ul>
                      <li className='ms-0' style={{listStyleType:"none"}} >{state.malzemeler}</li>
                     </ul>
                     <Card.Text>
                      {state.tarif}
                     </Card.Text>
                      
                      
                    </Card.Body>
                  </Card>
             
                  
                
                  </div>


                  </div> 
    </>
        


     

    
  
  )
}
