import React from 'react'

function Card(props){
  let face = "";

  if (!props.value.up) {
    face = "https://images.squarespace-cdn.com/content/v1/5abd8db4620b85fa99f15131/1542303561654-HXEVC7W4P5P1C6ZWA251/ke17ZwdGBToddI8pDm48kLmb52_AaM1umQfsXJ-OeXUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2jNOgpIUaFWvk_SWVQMXasJxW8tjlo6POoa0ep6ALAnEKMshLAGzx4R3EDFOm1kBS/Card+Back+2.0+-+Poker+Size+-+Red_shw.png"
  } else {
    if (props.value.face === 'ace') {
      face = "https://images-na.ssl-images-amazon.com/images/I/31vmXJ1UqTL._AC_.jpg"
    } else {
      face = "https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png"
    }
  }

  return (
    <img src={face} width = "200px" onClick={() => props.flip(props.pos)}></img>
  )
}

// const faces = {king:""}
export default Card
// () => props.cardClick()
