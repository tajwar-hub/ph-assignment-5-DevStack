import type { ITechnologyTypes } from '../../types/Type';
import TechnologyCard from './TechnologyCard';

interface TechnologiesProps{
    technologiesPromise : ITechnologyTypes[]
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    
    return (
        
       
        <div className='container mx-auto mt-20'>
            
            <div>
                <p className="font-bold text-4xl"> Explore The 
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span>
                </p>
                <p className=" text-gray-500">Pick one technology per catagory to build your ideal stack </p>
            </div>

         <div className='grid grid-cols-3 gap-5 mt-6'>   

          {
            
            technologiesPromise.map((tech) => {

                return <TechnologyCard technologyCardPromise={tech}/>
            })
          }
        
         </div> 
      
        </div>         
        
    );
};

export default Technologies;