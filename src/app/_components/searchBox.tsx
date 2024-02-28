`use client`
import { useAtom,atom, useAtomValue } from "jotai"
import { searchById, textToSearch } from "../stores/inputBoxState"


const searchLabel = atom((get) => {
    return get(searchById)?"Search By Id":"Search By Label"
});


/*Search Selector and search text box */
const SearchTextBox = () => {
    const [_searchById,setSearchById] = useAtom(searchById)
    const [_searchText,setSearchText] = useAtom(textToSearch)
    const _searchLabel = useAtomValue(searchLabel)

    const searchSelector = (
        <>
        <button>Id</button>
        <button>Name</button>
        </>

    )
    return (
        <div className="w-[100%] border-none flex flex-row items-baseline">
            <input className="flex-1" 
            type="text" 
            placeholder={_searchLabel}
            value={_searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        {searchSelector}
        </div>
    )
}

export default SearchTextBox;