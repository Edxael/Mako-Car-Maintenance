import React from 'react';
import whyPic from '../../img/cel.jpg';
import carScanner from '../../img/scanner.jpg';

class ThreeM extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    const picSty = { margin: "0px auto", display: "block", width: "100%", height: "auto" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "50%" }
    const picCont =  { margin: "0px auto", display:"block", border: "3px solid black", maxWidth: "50%" }
    return(
      <div>
        <h1>Check Engine Light Codes</h1>
        <img style={picSty} src={whyPic} alt="Miss"/>
        <br/>
        <p style={pSty} >Find information informatio about the Error Codes in your car.</p>

        <form action="" method="post" style={pSty} >
          <div>
              <label style={labelSty} for="code">Enter Code Here:</label>
              <input style={inputSty} type="text" id="code" name="code" />
          </div>
          <br/>

          <input type="submit" value="Find Data." />
        </form>

        <br/>

        <p style={pSty}><strong>NOTE: </strong>To be able to use this part you need to get the codes firs, to do this you nee to use any <strong>OBD-II Scanner</strong>.</p>
        <div style={picCont}>
          <img style={picSty} src={carScanner} alt="Miss"/>
        </div>

      </div>
    )
  }
}

export default ThreeM;
