import React from 'react';
import Teamplate from './Template.jsx';
const urlSrc = 'https://raw.githubusercontent.com/Edxael/Swap-Characters/master/src/comps/jsonData/data.json';


class TemplateComp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [] }
  }


  // componentDidMount() {
  //   fetch(urlSrc)
  //   .then((response) => { return response.json() })
  //   .then((resData) => {  return this.setState({ items: resData })  })
  //   .catch((err) => { console.log("Error while 'FETCH':", err); } )
  // }

  componentDidMount() {
    fetch(urlSrc)
    .then((response) => { return response.json() })
    .then((resData) => {  return this.setState({ items: resData })  })
    .catch((err) => { console.log("Error while 'FETCH':", err); } )
  }


  render(){
    let items = this.state.items;
    console.log(items);
    const cont1 = { border: "4px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", marginBottom: "10px", padding: "10px 0px", color: "black" }
    return(
        <div>

          {items.map((x) => { return(

            <div style={cont1} key={x.name}>
              <img src={x.pic} alt="Missing Pic."/>
              <div><strong>Name: </strong>{x.name}</div>
              <div><strong>From: </strong>{x.from}</div>
              <div><strong>Year: </strong>{x.year}</div>
            </div>

          )} )}

        </div>
    )
  }

}




class Youtube extends React.Component {
  constructor(props){
    super(props)
    this.state = { query: "", showComponent: false, }
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({ showComponent: true });
    console.log("Affection");
    // setTimeout( () => {this.setState({ showComponent: false }) } , 500);
  }


  render(){
    const inputSt = { backgroundColor: "pink", width: "90%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    const cont1 = { border: "4px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", marginBottom: "10px", padding: "10px 0px", color: "black" }
    return(
      <div>

        <input style={inputSt} type="search" placeholder="Seach Here...." value={this.state.query}
          onChange={ (event) => { this.setState({ query: event.target.value }) } } />


        <div>
          <input type="submit" onClick={this._onButtonClick} />
          <br/><br/>

          {this.state.showComponent ? <TemplateComp seq={this.state.query} /> : null }
        </div>

      </div>
    )
  }
}

export default Youtube;
