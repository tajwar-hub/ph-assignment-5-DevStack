import type { ITechnologyTypes } from '../../types/Type';

interface TechnologyCardProps {
  technologyCardPromise: ITechnologyTypes;
  isAdded: boolean;
  onAdd: (technology: ITechnologyTypes) => void;
}

const TechnologyCard = ({ technologyCardPromise, isAdded, onAdd }: TechnologyCardProps) => {
  return (
    <div className=" border border-base-200 shadow-sm p-6">

      <div className="flex justify-between mb-4">
        <div className="flex flex-col gap-1 items-center">
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
        <p className="flex justify-between items-center gap-1 text-orange-400 text-sm">
          ★<span className='text-stone-400'> {technologyCardPromise.rating}</span>
        </p>

      </div>

      <button
        onClick={() => onAdd(technologyCardPromise)}
        className="btn btn-primary w-full bg-[#0F172A] text-white hover:bg-slate-800 rounded-xl"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;