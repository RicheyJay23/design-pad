import React from 'react';

const pads = "pads";

const DesignPadBodyTrue = () => {
    return ( 
        
        <div>
            <div class="pad_container">

                <div className={pads} 
                  style={{ backgroundColor: "yellow" }} draggable={true} > 1 </div>
                <div className={pads}  
                  style={{ backgroundColor: "orange" }} draggable={true} > 2 </div>
                <div className={pads}  
                  style={{ backgroundColor: "red" }} draggable={true} > 3 </div>
                <div className={pads}  
                  style={{ backgroundColor: "purple" }} draggable={true} > 4 </div>
                <div className={pads} 
                  style={{ backgroundColor: "blueviolet" }} draggable={true} > 5 </div>
                <div className={pads}  
                  style={{ backgroundColor: "turquoise" }} draggable={true} > 6 </div>
                <div className={pads} 
                  style={{ backgroundColor: "green" }} draggable={true} > 7 </div>
                <div className={pads} 
                  style={{ backgroundColor: "brown" }} draggable={true} > 8 </div>

            </div>
        </div>
        
    );
}

const DesignPadBodyFalse = () => {
  return ( 

      <div>
          <div class="pad_container">


              <div className={pads}  > 1 </div>
              <div className={pads}  > 2 </div>
              <div className={pads}  > 3 </div>
              <div className={pads}  > 4 </div>
              <div className={pads}  > 5 </div>
              <div className={pads}  > 6 </div>
              <div className={pads}  > 7 </div>
              <div className={pads}  > 8 </div>

          </div>
      </div>
      
  );
}

const DesignPadCondition = (props) => {

  const editState = props.editState;
  if (!editState) {
    return <DesignPadBodyTrue/>;
  }
  return <DesignPadBodyFalse/>;
}

const DesignPad = (props) => {
    return (

        <div>
            <DesignPadCondition editState={props.editState}/>
        </div>
        
    )
}

export default DesignPad;