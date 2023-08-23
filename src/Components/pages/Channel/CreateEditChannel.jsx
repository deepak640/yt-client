import React, { useState } from 'react'
import { login, updateChannelDate } from "../../../api";
import './CreateEditChannel.css'
import { useDispatch, useSelector } from "react-redux";
const CreateEditChannel = ({ setEditCreateChannelBtn }) => {
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const [name, setName] = useState(CurrentUser?.result.name)
    const [desc, setDesc] = useState(CurrentUser?.result.desc)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if (!name) {
            alert('Plz Enter Name !')
        } else if (!desc) {
            alert("Plz Enter Description !")
        } else {
            dispatch(updateChannelDate(CurrentUser?.result._id, { name: name, desc: desc }))
            setEditCreateChannelBtn()
            setTimeout(() => {
                dispatch(login({ email: CurrentUser?.result.email }))
            }, 5000);
        }
    }
    return (
        <div className='container_CreateEditChannel'>
            <input
                onClick={() => setEditCreateChannelBtn(false)}
                type="submit" name='text' value={'x'} className='ibtn_x' />
            <div className='container2_CreateEditChannel'>
                <h1>
                    {
                        CurrentUser?.result.name ?
                            <>Edit</> : <>Create</>
                    }
                    your Channel</h1>
                <input type="text" placeholder='Enter Your /Channel name' className='ibox' name='text' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea name="text" rows="15" type='text' placeholder='Enter Channel Description' value={desc}
                    onChange={(e) => setDesc(e.target.value)} className='ibox' />
                <input type="submit" value="Submit" onClick={handleSubmit} className='ibtn' />
            </div>
        </div>
    )
}

export default CreateEditChannel