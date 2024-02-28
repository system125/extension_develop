'use client'
import { useAtom,atom, useAtomValue } from "jotai"
import { searchById, textToSearch } from "../stores/inputBoxState"
import "./searchBox.tsx.css"


const searchLabel = atom((get) => {
    return get(searchById)?"Search By Id":"Search By Label"
});

const SearchBar = () => {
    const [_searchText,setSearchText] = useAtom(textToSearch)
    const _searchLabel = useAtomValue(searchLabel)


    return (
        <div className="relative flex-1 flex flex-row pr-4">
            <div className="hidden sm:flex-1"></div>
            <div  className="w-[100%] sm:w-[55%] md:w-[55%] pl-2 bg-white rounded-lg relative">
                <input className="w-[100%] bg-transparent border-none text-black active:border-none"
                    type="text" 
                    placeholder={_searchLabel}
                    value={_searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            
            <div className="hidden sm:flex-1 sm:inline"></div>

        </div>
    )
}




const SearchSelector = () => {
    const [_searchById,setSearchById] = useAtom(searchById)

    return (
        <>
        <div className="pr-4">
        <button 
        className={"base-btn " +  (!_searchById?"active-btn":"")}
        onClick={()=> setSearchById(_=> false)}>
            Name
        </button>
        </div>
        <button 
            className={"base-btn " + (_searchById?"active-btn":"")}
            onClick={() => setSearchById(_=> true)}>
                <p>Id</p>
            </button>
        </>

    )
}

/*Search Selector and search text box */
const SearchTextBox = () => {
        return (
        <div className="abosolute pt-4 sticky border-none flex flex-row items-baseline">
        <SearchBar />
        <SearchSelector />
        </div>
    )
}

export default SearchTextBox;