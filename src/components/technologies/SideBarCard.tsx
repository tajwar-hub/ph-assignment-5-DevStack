import type { ITechnologyTypes } from "../../types/Type";

interface SideBarCardProps {
  selectedStack: ITechnologyTypes[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const SideBarCard = ({ selectedStack, onRemove, onRemoveAll }: SideBarCardProps) => {
  return (

    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">

      <h2 className="font-bold text-lg">Your Stack</h2>
      <p className="text-sm text-gray-400 mb-4">
        {selectedStack.length} Technologies Selected
      </p>

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg py-10 flex items-center justify-center">
          <p className="text-sm text-gray-400"> Your stack is empty! </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {selectedStack.map((technology) => (
            <div key={technology.id} className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2" >
              <div className="flex items-center gap-2">
                <img src={technology.icon} alt={technology.name} className="w-6 h-6" />

                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{technology.name}</span>
                  <span className="text-xs text-gray-400">{technology.category}</span>
                </div>
              </div>

              <button onClick={() => onRemove(technology.id)} className="text-gray-400 hover:text-gray-600" >  ✕  </button>
            </div>
          ))}
        </div>
      )}

      {selectedStack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 border border-red-300 text-red-500 rounded-xl py-2 text-sm font-semibold hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SideBarCard;