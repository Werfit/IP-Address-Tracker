import { useContext } from 'react'
import { GlobalContext } from 'context/GlobalContext'

import './Info.sass'

const Info = () => {
    const { state } = useContext(GlobalContext)

    return (
        <div className='address-info__div'>
            <div>
                <span>IP Address</span>

                { state.ip_address }
            </div>
            <div>
                <span>Location</span>

                { state.city }
            </div>
            <div>
                <span>Timezone</span>

                { state.timezone }
            </div>
            <div>
                <span>ISP</span>

                { state.isp }
            </div>
        </div>
    )
}

export default Info
