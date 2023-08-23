import { useContext } from "react"
import { AppContext } from "../Context"

const Search = () => {
    const {query,searchPost,onsubmit}=useContext(AppContext);
    
  return (
    <div className="flex items-center m-auto mb-20">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={query}
                    onChange={(e)=>searchPost(e.target.value)}
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded " onClick={onsubmit}>
                    Search
                </button>
            </div>
        </div>
  )
}

export default Search
