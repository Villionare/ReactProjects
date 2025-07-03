const SearchBar = ({search, setSearch}) => {
return(
    <>
    <input type="text" placeholder="Search movies..." className="bg-[#232323] text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-600" value={search} onChange={(event) => setSearch(event.target.value)}/>
    </>
)
}

export default SearchBar;