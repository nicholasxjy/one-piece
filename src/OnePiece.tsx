import React from 'react'
import List from './data'
import Card from './components/Card'
import './styles/index.scss'

function OnePiece() {
  return (
    <div className="wrap">
      {List.map(item => <Card info={item} key={item.name} />)}
    </div>
  )
}

export default OnePiece