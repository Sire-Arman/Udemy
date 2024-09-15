import React from 'react'

export default function Item
(props) {
  return (
    
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.desc}
          </dd>
        </div>
  )
}
