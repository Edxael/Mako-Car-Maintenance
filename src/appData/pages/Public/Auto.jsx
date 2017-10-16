import React from 'react';

class Page extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    return(
      <div>
        <h1>Auto-Data</h1>
        <p style={pSty} >Find information in how to keep your ride rolling...</p>

          <form action="" method="post" style={pSty} >
            <div>
                <label style={labelSty} for="make">Make:</label>
                <input style={inputSty} type="text" id="make" name="make" />
            </div>
            <div>
                <label style={labelSty} for="model">Model:</label>
                <input style={inputSty} type="text" id="model" name="model" />
            </div>
            <div>
                <label style={labelSty} for="year">Year:</label>
                <input style={inputSty} type="text" id="year" name="year" />
            </div>


            <br/>
            <input type="submit" value="Find Data." />
          </form>

      </div>
    )
  }
}

export default Page;
