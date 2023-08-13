import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'
const WHLVideoList = ({ page, videoList, CurrentUser }) => {
    return (

        <>
            {CurrentUser ? (<>
                {
                    videoList?.data?.filter(q => q?.Viewer === CurrentUser).map((data, i) => {
                        return (
                            <>
                                <ShowVideoList videoId={data?.videoId} key={data?._id} />
                            </>
                        )
                    })
                }
            </>) : (<>
                <h2 style={{ color: 'white' }}>Plz login to Watch Your  {page}</h2>
            </>)
            }
        </>
    )
}

export default WHLVideoList