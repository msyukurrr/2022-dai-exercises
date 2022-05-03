import styled, {keyframes} from 'styled-components'
import {useState, useEffect} from 'react'


const SwitchCont = styled.div `
padding: 20px;
`

const SwitchBox = styled.div `
background: ${props=>props.bg || "#CCC"}; //2 states for the box as well
width: 100px;
height: 30px;
border-radius: 15px;
display: flex;
align-items: center;
transition: background 0.3s;
`
const SwitchToggle = styled.div `
background: ${props=>props.bg || "#999"}; // 2 colours for active/inactive
width: 50px;
height: 50px;
border-radius: 50px;
position: relative;
left: ${props=>props.left || "0px"}; //2 left units for active/inactive
transition: left 0.3s, background 0.3s;
`

const comp_data = {
  active:{
    togglebg: "#99F",
    toggleleft:"50px",
    boxbg: "#CCF"
  },
  inactive:{
    togglebg: "#999",
    toggleleft: "0px",
    boxbg:"#CCC"
  }
}

/*
if there are attributes that triggers the different state of the UI
and the component has interactions that also triggers the user's interface
then you must use useEffect to synchronize the state and the attributes together
*/

export default function Switch({
  //attributes / props
  active=false,
  onSwitch=()=>{}
}){
    const [a_state, setAstate] = useState("inactive");
    
    //detect the attribute / prop to trigger a different state
    useEffect(()=>{
      if(active){
        setAstate("active");
      }else{
        setAstate("inactive");
      }
    }, [active]);

    //whenever a_state changes its value it will trigger onSWtich and
    //pass a boolean back out
    useEffect(()=>{
      if(a_state === "inactive"){
        onSwitch(false);
      }else{
        onSwitch(true);
      }
    }, [a_state])
    // const [a_state, setAstate] = useState(true); 

  return <SwitchCont>
    <SwitchBox bg={
      //a_state ? comp_data.active.boxbg : comp_data.inactive.boxbg
    comp_data[a_state].boxbg
    }
    onClick={
      //click on the toggle to change the styles in comp-data
      //a_state ? false : true => !a_state
      ()=>setAstate(a_state === "inactive" ? "active" : "inactive")
    }>
      <SwitchToggle 
      bg={comp_data[a_state].togglebg}
      left={comp_data[a_state].toggleleft}
      />
    </SwitchBox>
    </SwitchCont>
}