const SeachBtn = () => {
    return (
        <div className="search-container">
            <label htmlFor="searchInput">Søk</label>
            <input name="search" type="text" id="searchInput" placeholder="Søk..." title="search" />
            <div className="search-icon"></div>
        </div>
    )

}

export default SeachBtn;