import React, {Component} from "react";

class Listing extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            items:['Apple','Banana','Cherry']
        };
    }
   render()
   {
    return(
        <div>
            <ul>
                    {this.state.items.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
   }
}
export default Listing;