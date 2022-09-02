const SearchItem = ({search, setSearch}) => {
  return (
    <div className='container'>
        <form className="searchForm input-group mb-4" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="form-label">Search Item</label>
            <input 
                type="text" 
                className="form-control"  
                autoFocus 
                id="search"
                role="searchbox" 
                placeholder="Search Item" 
                value={search}
                onChange={(e) => setSearch(e.target.value.trim())}
            />
        </form>
    </div>
  )
}

export default SearchItem;