import type { ITechnologyTypes } from '../../types/Type';
import TechnologyCard from './TechnologyCard';

interface TechnologiesProps{
    technologiesPromise : ITechnologyTypes[]
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    
    return (

        <div className='grid grid-cols-3 gap-5 mt-6'>
        {
            technologiesPromise.map((tech) => {

                return <TechnologyCard technologyCardPromise={tech}/>
            })
        }
      
        </div>         
        
    );
};

export default Technologies;