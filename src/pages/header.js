import React from "react"

export class HeaderComponent extends React.Component {
  render () {
  return (
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{this.props.title}</h1>
    )
  }
}
