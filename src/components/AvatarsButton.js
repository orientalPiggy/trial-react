import React from 'react'

import { Dropdown, Image } from 'semantic-ui-react'

const trigger = (
    <span>
    <Image avatar alt="Remy Sharp" src="https://unsplash.com/photos/Jztmx9yqjBw" />
  </span>
)

const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

const DropdownImageTriggerExample = () => (
    <Dropdown
        trigger={trigger}
        options={options}
        pointing='top left'
        icon={null}
    />
)

export default DropdownImageTriggerExample
