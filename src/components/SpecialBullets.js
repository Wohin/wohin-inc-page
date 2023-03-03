import React from 'react'

import { CheckCircle } from 'react-bootstrap-icons'

function SpecialBullets({ descriptions }) {
  return (
    <ul className="no-bullets">
      {descriptions.map((description) => {
        return (
          <li>
            <CheckCircle style={{ color: '#cda45e' }} /> {description}
          </li>
        )
      })}
    </ul>
  )
}

export default SpecialBullets
