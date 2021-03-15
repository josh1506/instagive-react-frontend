import {AppBar, Toolbar, Typography} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';


const Footer = () => {




return (
    <div>
   
   <footer style={{display: 'flex', justifyContent:'center' ,background: '#26262b', padding: '30px', color: 'white' }}
   
   
   
   
   
   >


<Typography variant="h2" gutterBottom>
    Any Questions? Contact Us! <a href="https://www.facebook.com/Instagive-114092927169420" target="_blank" ><FacebookIcon color="primary" style={{fontSize: '55px'}}></FacebookIcon></a>
    
    <a href="mailto:instagive2021@gmail.com" target="_blank" ><EmailIcon color="primary" style={{fontSize: '55px'}}></EmailIcon></a>


      </Typography>
                





   </footer>

  </div>

)
}




export default Footer;