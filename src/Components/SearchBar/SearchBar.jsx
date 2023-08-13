import './search.css'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import SearchList from './SearchList'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchList, setSearchList] = useState(false)
  const TitleArray = useSelector(s => s.videoReducer)?.data?.filter(q => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m => m?.videoTitle)
  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className='search_div'>
            <input type="text" value={searchQuery} onClick={() => setSearchList(true)} onChange={(e) => setSearchQuery(e.target.value)} className='iBox_SearchBar' placeholder='Search' />
            <Link to={`/search/${searchQuery}`}>
              <FaSearch className='searchIcon_SearchBar' onClick={() => setSearchList(false)} />
            </Link>
            <BsMicFill className='Mic_SearchBar' />
            {searchQuery && searchList && <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar