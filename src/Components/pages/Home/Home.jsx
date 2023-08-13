import LeftSideBar from '../../LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../ShowVideoGrid/ShowVideoGrid'
import './Home.css'
import { NavList } from './data'
import { useSelector } from "react-redux";
const Home = () => {
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q=>q).reverse()
  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {
            NavList.map((data, i) => {
              return (
                <p key={i} className="btn_nav_home">
                  {data}
                </p>
              )
            })
          }
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default Home

