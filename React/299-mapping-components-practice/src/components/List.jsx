import React from 'react'
import Item from './Item'
import {emojipedia} from "../emojipedia"
function mapper(emoji){
    return (
        <Item 
        key={emoji.id}
        emoji={emoji.emoji} name = {emoji.name} desc = {emoji.meaning}
        />
    )
}
export default function List () {
  return (
    
        <dl className="dictionary">
            {emojipedia.map(mapper)}
        
      </dl>
  )
}
