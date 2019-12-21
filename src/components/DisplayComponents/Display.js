import React, {useState} from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";

const Display = () => {
  const [calcState, setCalcState] = useState(0);
  return <div className="display">{calcState} </div>;
};

export default Display;
