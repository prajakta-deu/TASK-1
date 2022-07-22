import Lottie from "lottie-react";
import anim from "../Animations/team.json"

const Header=()=>{
    return(
        <>
        <div class="container">
  <div class="row">
    <div class="col">
    <Lottie animationData={anim} loop={true}  />
    
    </div>
    
  
  </div>
</div>

        </>
    )
}
export default Header;