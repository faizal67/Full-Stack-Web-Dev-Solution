import Person from './Person'

const Search = ({ name, changefun, search, searchPerson }) => {
    return (
        <div>
            <h3>Search :</h3>
            <input value={name} onChange={changefun} />
            <button onClick={search}>Search</button>
            <Person key={searchPerson.name} person={searchPerson} />
        </div>
    )
}
export default Search