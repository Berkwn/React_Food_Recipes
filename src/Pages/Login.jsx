
import { useNavigate } from 'react-router-dom'







export default function Login() {
const navigate=useNavigate();


  return (
     <>
     <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1412206.jpg")',textAlign:"center",flexDirection:"column",justifyContent:"center",height:"100vh",width:"100%",display:"flex"}}>
        <form onSubmit={()=>navigate("Recipes")}>
     <img
            src="https://svgsilh.com/svg/2085075.svg"
            alt="img"
            width="200px"
            draggable="false"
            className="mx-auto"
          />

        <div className='w-100'>
        <input className='m-3' style={{borderRadius:"5px", border:"none",backgroundColor:"black",color:"white",padding:"5px"}} required  type="text" placeholder='kullanıcı adınızı giriniz.' />
        </div>
        <div className='w-100'>
        <input style={{borderRadius:"5px", border:"none" ,backgroundColor:"black",color:"white",padding:"5px"}} type="password" required placeholder='Şifrenizi giriniz' />
        </div>
        <div>
            <button style={{backgroundColor:"black",border:"none",marginTop:"10px",borderRadius:"5px",color:"white",padding:"8px"}}> Giriş Yap </button>
        </div>
        
        </form>
     </div>
    </>
        
        




        
  )
}
