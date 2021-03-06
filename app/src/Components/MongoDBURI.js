import React, {useState,useEffect} from "react"; // userEffect to fetch instead of component mount
import '../public/index.css';

// input field for the mongoDB uri
const MongoDBURI = ({submitbtn, geturi, toggleInput}) =>  {
    return (
        <div className="formContainer">
            <div className="formClass">
              <form className="form__group field">
                  <input className="form__field" type="input" onChange= {geturi} id='name' placeholder=" Input Your MongoDB URI" disabled={toggleInput}/>
                  <label className="form__label"> MongoDB URI </label>
                  <input className="URISubmitButton" type="submit" value="Submit" onClick={submitbtn} style={{display: "none"}}/>
              </form>
            </div>
        </div>
    )
}

export default MongoDBURI;
