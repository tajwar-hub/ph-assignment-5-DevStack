import { useState } from 'react';
import type { ITechnologyTypes } from '../../types/Type';
import TechnologyCard from './TechnologyCard';
import SideBarCard from './SideBarCard';

interface TechnologiesProps {
  technologiesPromise: ITechnologyTypes[];
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const [selectedStack, setSelectedStack] = useState<ITechnologyTypes[]>([]);

  const handleRemove = (id: string) => {
    setSelectedStack(selectedStack.filter((technology) => technology.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  const handleAdd = (technology: ITechnologyTypes) => {
    const alreadyAdded = selectedStack.some((t) => t.id === technology.id);
    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, technology]);
  };

  return (
    <div className='container mx-auto mt-20'>
      <div>
        <p className="font-bold text-4xl"> Explore The
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent"> Technologies</span>
        </p>
        <p className="text-gray-500 mt-2"> Pick one technology per catagory to build your ideal stack </p>
      </div>

      <div className="flex gap-6 mt-6 items-start">
        <div className='grid grid-cols-3 gap-5 flex-1'>
          {
            technologiesPromise.map((tech) => {
              const isAdded = selectedStack.some((t) => t.id === tech.id);
              return (
                <TechnologyCard
                  key={tech.id}
                  technologyCardPromise={tech}
                  isAdded={isAdded}
                  onAdd={handleAdd}
                />
              );
            })
          }
        </div>

        <div className="w-72 ">
          <SideBarCard
            selectedStack={selectedStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;