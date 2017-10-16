import React from 'react';

class Page extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    return(
      <div>
        <h1>Add New Car</h1>
        <p style={pSty} >Add a new car to your personal account.</p>

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
            <input type="submit" value="Add Car" />
          </form>

      </div>
    )
  }
}

export default Page;
