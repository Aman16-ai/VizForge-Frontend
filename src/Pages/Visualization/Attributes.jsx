import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useParams } from "react-router-dom";
import { getattributesWithType } from "../../service/AnaylsisService";
import { useDispatch } from "react-redux";
import { setAttributeValue } from "../../store/Visualization/attributesSlice";
export default function Attributes() {
  const dispatch = useDispatch()
  const { fileId } = useParams();

  // {attribute : {checked:bool,type:string}}
  const [state, setState] = React.useState({});
  const [isXaxis,setIsXaxis] = React.useState(true)
  const [attributesState, setAttributesState] = React.useState([
    {
      attribute: "",
      type: "",
    },
  ]);
  const [categoricalAttributes, setCategoricalAttributes] = React.useState([
    {
      attribute: "",
      type: "",
    },
  ]);
  const handleChange = (event) => {
    console.log(event.target.name);
    console.log({ ...state[event.target.name] });
    if(isXaxis && event.target.checked) {
      dispatch(setAttributeValue({'name':'xaxis','value':event.target.name}))
    }
    else if(!isXaxis && event.target.checked) {
      dispatch(setAttributeValue({'name':'yaxis','value':event.target.name}))
    }
    setState({
      ...state,
      [event.target.name]: {
        ...state[event.target.name],
        checked: event.target.checked,
      },
    });
    setIsXaxis(!isXaxis)
  };
  // const { gilad, jason, antoine } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const fetchAttributes = async () => {
    const result = await getattributesWithType(fileId);
    console.log("result", result);
    if (result.success) {
      console.log("attributes", result?.data);
    }

    // getting a attributes and saving it in the numerical and categorical list state according to the type
    const numericalTypesValues = [];
    const categoricalTpesValues = []
    result?.data.forEach((d) => {
      if (d["type"] === "numerical") {
        numericalTypesValues.push({ ...d });
      }
      else if(d['type'] == 'categorical') {
        categoricalTpesValues.push({...d})
      }
    });
    setAttributesState([...numericalTypesValues]);
    setCategoricalAttributes([...categoricalTpesValues])
    const temp = {};
    result?.data.forEach((d) => {
      temp[d.attribute] = { checked: false, type: d['type'] };
    });
    setState({ ...temp });
  };
  React.useEffect(() => {
    console.log("running");
    fetchAttributes();
  }, []);

  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <Box sx={{ display: "flex","flexDirection":"column" }}>
      <FormControl sx={{ m: 3 }} component="fieldset">
        <FormLabel style={{ color: "gray", fontSize: "small" }}>
          Numerical Attributes
        </FormLabel>
        <FormGroup>
          {attributesState?.map((s) => {
            return (
              <FormControlLabel
                sx={{fontSize:"2px"}}
                control={
                  <Checkbox
                    checked={state[s.attribute]?.checked}
                    onChange={handleChange}
                    name={s.attribute}
                  />
                }
                label={s.attribute}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ marginLeft: 3,marginRight:3 }} component="fieldset">
        <FormLabel style={{ color: "gray", fontSize: "small" }}>
          Categorical Attributes
        </FormLabel>
        <FormGroup>
          {categoricalAttributes?.map((s) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state[s.attribute]?.checked}
                    onChange={handleChange}
                    name={s.attribute}
                  />
                }
                label={s.attribute}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
