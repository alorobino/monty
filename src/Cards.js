import React from 'react'
import Card from './Card'

function Cards(props) {



  return (
    <div>
    <Card value={props.cards[0]} pos={0} flip={(x) => props.flip(x)}/>
    <Card value={props.cards[1]} pos={1} flip={(x) => props.flip(x)}/>
    <Card value={props.cards[2]} pos={2} flip={(x) => props.flip(x)}/>
    </div>
  )

}

export default Cards

// import React from 'react'
// import Card from './Card'
//
// class Cards extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       face: 'king',
//       hide: true
//     }
//   }
//
//   showHide() {
//     if (this.state.hide) {
//       this.setState({hide: false})
//     } else {
//       this.setState({hide: true})
//     }
//   }
//
//   render(){
//     return (
//       <div>
//       <Card value = {this.state.face} cardClick = {() => this.showHide()} hide = {this.state.hide}/>
//       <Card value = {this.state.face} cardClick = {() => this.showHide()} hide = {this.state.hide}/>
//       <Card value = {this.state.face} cardClick = {() => this.showHide()} hide = {this.state.hide}/>
//       </div>
//     )
//   }
// }
//
// export default Cards
