import { useContext, useState } from 'react'
import './Header.sass'

import { ReactComponent as IconArrow } from 'images/icon-arrow.svg'
import { GlobalContext } from 'context/GlobalContext'

import Info from 'components/Info'

const Header = () => {
    const [IPAddress, setIPAddress] = useState('')
    const { findIP } = useContext(GlobalContext)

    const find = () => {
        setIPAddress('')
        findIP(IPAddress)
    }

    return (
        <header className='app__header'>
            <p>IP Address Tracker</p>
            <label htmlFor='ip-address__input'>
                <input type='text' id='ip-address__input' name='ip-address__input' spellCheck='false' autoCapitalize='off' autoComplete='off' placeholder='Search for any IP address or domain...' value={ IPAddress } onChange={ (e) => setIPAddress(e.target.value) } />
                <span onClick={ find }>
                    <IconArrow />
                </span>
            </label>

            <Info />
        </header>
    )
}

export default Header
