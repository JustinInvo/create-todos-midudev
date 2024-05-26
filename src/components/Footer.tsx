import { type FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activateCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({ 
    activateCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted,
    }) => {
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activateCount}</strong> tareas pendientes
            </span>
            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button 
                        className="clear-completed"
                        onClick={onClearCompleted}    
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
    )
}