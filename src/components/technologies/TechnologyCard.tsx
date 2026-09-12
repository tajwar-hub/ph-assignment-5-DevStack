import React from 'react';
import type { ITechnologyTypes } from '../../types/Type';


interface TechnologyCardProps {
  technologyCardPromise: ITechnologyTypes; // This component expects to receive one 'tech' object
}

const TechnologyCard = ({technologyCardPromise}:TechnologyCardProps) => {
    return (
        <div className="card border border-base-200 bg-base-100 shadow-sm p-6">
      
     
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <img src={technologyCardPromise.icon} alt={technologyCardPromise.name} className="w-8 h-8" />
          <h3 className="text-xl font-bold">{technologyCardPromise.name}</h3>
        </div>
        <div className="badge bg-blue-50 text-blue-500 border-none font-semibold text-xs py-3 px-3 rounded-full">
          {technologyCardPromise.badge}
        </div>
      </div>
      
    
      <p className="text-sm text-gray-500 mb-6 h-12">
        {technologyCardPromise.description}
      </p>
      
    
      <div className="flex justify-between items-center text-xs text-gray-400 font-semibold mb-6">
        <span className="bg-gray-100 px-2 py-1 rounded">{technologyCardPromise.category}</span>
        <span>{technologyCardPromise.difficulty}</span>
        <span className="flex items-center text-orange-400 text-sm">★ {technologyCardPromise.rating}</span>
      </div>

    
      <button className="btn w-full bg-[#0F172A] text-white hover:bg-slate-800 rounded-xl">
        Add to Stack
      </button>

    </div>
    );
};

export default TechnologyCard;