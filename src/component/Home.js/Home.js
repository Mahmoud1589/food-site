import react, { Fragment } from 'react';
import './home.css';
import Header from './Header';
import prideimg from './../../photo/OIP.jpeg';
const Home = ()=>{
return(
    <Fragment>
    <Header/>
    <section className='numbers'>
     <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                <h2>1287+</h2>
                <h6>SAVING</h6>
            </div>
            <div className='col-md-3'>
                <h2>5786+</h2>
                <h6>PHOTOS</h6>
            </div>
            <div className='col-md-3'>
                <h2>1440+</h2>
                <h6>BOCKETS</h6>
            </div>
            <div className='col-md-3'>
                <h2>2541+</h2>
                <h6>GLOBES</h6>
            </div>
        </div>
     </div>
    </section>
    <section className='pride'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>

            </div>
            <div className='col-md-6'>
                <img src='prideimg' title='prideimg'></img>
                <h2>we pride ourselves on making real food from the best ingredients</h2>
                <p>lorem ipsum dolor sit amet , consectetur adipiscing alit , Etiam et purus odio finibus in sit amrt leo . Mauis feugiat erat tellus .</p>
            <button><a href='#'>learn more</a></button>
            </div>
        </div>
    </div>
    </section>
    </Fragment>
)

}
export default Home;