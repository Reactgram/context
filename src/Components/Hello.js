import React,{useContext} from "react";
import PackageContext from "../context/CricketContext";

const Hello = () => {
    let playerDetails = useContext(PackageContext)
    // console.log(playerDetails)
    let {cricketer, setCricketer} = playerDetails

    function update100(){
        setCricketer({...cricketer, total100s: cricketer.total100s + 1})
    }
    
    return (
        <div>
            <h1>Hello World</h1>
            <div>
                Name: {cricketer.name} <br/>
                HighestScore: {cricketer.highestScore} <br/>
                Total100s: {cricketer.total100s} <br/>
                Total200s: {cricketer.total200s} <br/>

                <button onClick={update100}> Update Total100s</button>

            </div>
        </div>
    );
}

export default Hello;