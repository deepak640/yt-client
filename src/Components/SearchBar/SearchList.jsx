/* eslint-disable react/prop-types */
import './SearchList.css'
import { FaSearch } from "react-icons/fa";
const SearchList = ({ TitleArray,setSearchQuery }) => {
  return (
    <>
      <div className="Container_SearchList">  
        {
          TitleArray.map((data, i) => {
            return <p key={i} onClick={()=> setSearchQuery(data)} className="titleItem">
              <FaSearch />
              {data}</p>
          })
        }
      </div>
    </>
  )
}

export default SearchList