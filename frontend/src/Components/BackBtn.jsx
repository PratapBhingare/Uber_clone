import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import "../Css/backBtn.css"

function BackBtn() {
    const navigate = useNavigate();

    return (
        <div className='flex uber '>
            <button className='backBtn'
                onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <img className='w-16 mb-7 uberIcon' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.sTMT4JmgohDLQg2_HkwWlAHaCr%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=d609e9261c212bd061f4c7da7c5b936666c5aa9f11003fabb162e5099c8b94de&ipo=images" alt="" />
        </div>
    )
}

export default BackBtn