import{Button} from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection(){
    return(<div className='hero-container'>
    <img src="/public/Images/Literature.jpeg" alt="" />
     <h1>one book away ,Adventure awaits</h1>
     <p>Expand your mind, <br/> reading a book</p>
     <div className='hero-btn'>
        <Button className='btns' 
         buttonStyle='btn--outline'
         buttonSize='btn--large'
        
        > Get started </Button> 

        <Button className='btns' 
         buttonStyle='btn--primary'
         buttonSize='btn--large'
        
        > Read  <i className='far fa-play-circle'/>
          </Button>
     </div>


    </div>
    
)
}
export default HeroSection;