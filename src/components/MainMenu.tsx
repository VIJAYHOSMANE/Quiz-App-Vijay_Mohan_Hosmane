import { Container, Card, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import { useContext } from "react";
import QuizContext from "../Helpers/Contexts";
import { Button } from "@mui/material";
import "../App.css";

function RowRadioButtonsGroup() {
  return (
    <FormControl className="gender">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Male"
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="MainMenu">
      <div className="menu">
        <div>
          <h1 className="heading">Enter your details</h1>
          <input
            style={{ marginBottom: "30px" }}
            className="input"
            type="Text"
            placeholder="Enter your Name"
          ></input>
          <RowRadioButtonsGroup />
          <Link to="/quiz">
            <Button
              style={{
                marginTop: "30px",
                backgroundColor: "#023047",
                color: "whitesmoke",
              }}
              className="menubutton"
              fullWidth
              variant="contained"
              onClick={() => {
                setGameState("quiz");
              }}
            >
              Submit and Start
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

function useNavigate() {
  throw new Error("Function not implemented.");
}
