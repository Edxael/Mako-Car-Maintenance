import React from 'react';
import whyPic from '../../img/cel.jpg';
import carScanner from '../../img/scanner.jpg';

class ThreeM extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    return(
      <div>
        <h1>Check Engine Light Codes</h1>
        <img src={whyPic} alt="Miss"/>
        <p style={pSty} >Find information informatio about the Error Codes in your car.</p>
        <p style={pSty}>To be able to use this part you need to get the codes firs, to do this you nee to use any <strong>OBD-II Scanner</strong>.</p>
        <img src={carScanner} alt="Miss"/>

        <form action="" method="post" style={pSty} >
          <div>
              <label style={labelSty} for="code">Enter Code Here:</label>
              <input style={inputSty} type="text" id="code" name="code" />
          </div>
          <br/>
          
          <input type="submit" value="Find Data." />
        </form>

      </div>
    )
  }
}

export default ThreeM;
