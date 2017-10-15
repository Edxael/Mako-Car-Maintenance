import React from 'react';
import carPic from '../img/check.jpg';

class Week extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const radioDiv = { padding: "15px 0px 0px 15px" }
    const titleLab = { width: "35%" }
    const radioLab = { padding: "0px 3px 0px 15px"}
    const radioBut = { height: "25px", width: "25px", verticalAlign: "middle", marginTop: "-1px" }
    return(
      <div>
        <h1>Montly Check-List</h1>
        <img src={carPic} alt="Miss"/>
        <p style={pSty} >Here is a basic checklist that you can use to take care of your vehicle, you can print the PDF version to use when working on your car and then come back and save the data on the server. </p>
        <p style={pSty} >Remember that all cars are different and this list is just a start point, and your car might need some special and unique love, make sure to read the owners manual to complement this list.</p>

        <br/><br/>
        <button>Download PDF</button>


        <form action="" method="post" style={pSty} >
          <div>
              <label style={labelSty} for="name">Vehicle:</label>
              <input style={inputSty} type="text" id="name" name="car_name" />
          </div>
          <div>
              <label style={labelSty} for="Date">Date:</label>
              <input style={inputSty} type="date" id="Date" name="date" />
          </div>
          <div>
            <label style={labelSty} for="miles">Miles:</label>
            <input style={inputSty} type="number" id="miles" name="miles" />
          </div>


          <div style={radioDiv} >
            <label style={titleLab} for="belts">CHECK BELTS FOR SIGNS OF FRAY OR CRACKS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="belts" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="belts" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">CHECK HOSES FOR LEAKS OR BULGES: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="hoses" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="hoses" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">CHECK ENGINE AND GROUND FOR SIGNS OF LEAKS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="leakoil" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="leakoil" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">MAKE CERTAIN HEATER AND AIR CONDITIONING WORK: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="ac" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="ac" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">CHECK WIPERS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="wipers" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="wipers" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">HEADLIGHTS - HIGH BEAM: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="highlight" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="highlight" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">HEADLIGHTS - LOW BEAM: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="lowlight" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="lowlight" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">FOG OR DRIVING LIGHTS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="fog" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="fog" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">TURN SIGNALS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="turnsignals" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="turnsignals" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">BRAKE LIGHTS / TAIL LIGHTS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="brakelights" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="brakelights" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">HAZARD LIGHTS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="hazardlights" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="hazardlights" value="notok" />
          </div>


          <div style={radioDiv} >
            <label style={titleLab} for="belts">DOOR LOCKS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="locks" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="locks" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">WINDOWS / WINDSHIELD FUNCTION OR CRACKS: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="windows" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="windows" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">RADIO: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="sterio" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="sterio" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">HORN: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="horn" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="horn" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">TIRES – TREAD/CONDITION: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="tirestread" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="tirestread" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">TIRES – PROPER INFLATION: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="tireinflation" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="tireinflation" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">FIRE EXTINGUISHER: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="fireexting" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="fireexting" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">FIRST AID KIT: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="firstaid" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="firstaid" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">ACCIDENT INFORMATION PACKET IN GLOVE BOX: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="packageInfo" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="packageInfo" value="notok" />
          </div>

          <br/>
          <h4>LIQUID LEVEL CHECK:</h4>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">COOLANT: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="coolant" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="coolant" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">OIL: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="motorOil" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="motorOil" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">AUTO TRANSMISSION: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="transmOil" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="transmOil" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">POWER STEERING: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="stering" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="stering" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">BRAKES: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="brakes" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="brakes" value="notok" />
          </div>

          <div style={radioDiv} >
            <label style={titleLab} for="belts">WINDOW WASHER: </label>
            <label style={radioLab} for="ok"> OK </label>
            <input style={radioBut} type="radio" id="ok" name="windowWasher" value="ok" />
            <label style={radioLab} for="notok">Not Ok </label>
            <input style={radioBut} type="radio" id="notok" name="windowWasher" value="notok" />
          </div>

          <br/>
          <div>
              <label style={labelSty} for="msg">Extra Notes & Remarks:</label>
              <textarea style={inputSty} id="msg" name="user_message"></textarea>
          </div>

          <br/>
          <input type="submit" value="Save to DataBase" />
        </form>

      </div>
    )
  }
}

export default Week;
