import React from 'react';

const pads = "pads";
const pads_altered = "pads_altered";

const drag = ev => {
  ev.dataTransfer.getData("background-color", ev.target.id);
}

const DesignPadBodyTrue = () => {
    return ( 
        <div>
            <div className="pad_container">

                <div className={pads_altered}  id={"pad1"}
                  style={{ backgroundColor: "yellow" }} 
                  draggable={true} ondrag={drag}  > 1 </div>

                <div className={pads_altered}  id={"pad2"}
                  style={{ backgroundColor: "orange" }} 
                  draggable={true} ondrag={drag} > 2 </div>

                <div className={pads_altered}  id={"pad3"}
                  style={{ backgroundColor: "red" }} 
                  draggable={true} ondrag={drag} > 3 </div>

                <div className={pads_altered}  id={"pad4"}
                  style={{ backgroundColor: "purple" }} 
                  draggable={true} ondrag={drag} > 4 </div>

                <div className={pads_altered}  id={"pad5"}
                  style={{ backgroundColor: "blueviolet" }} 
                  draggable={true} ondrag={drag} > 5 </div>

                <div className={pads_altered}  id={"pad6"}
                  style={{ backgroundColor: "pink" }} 
                  draggable={true} ondrag={drag} > 6 </div>

                <div className={pads_altered}  id={"pad7"}
                  style={{ backgroundColor: "green" }} 
                  draggable={true} ondrag={drag} > 7 </div>
                  
                <div className={pads_altered}  id={"pad8"}
                  style={{ backgroundColor: "brown" }} 
                  draggable={true} ondrag={drag} > 8 </div>

            </div>
        </div>
    );
}

const DesignPadBodyFalse = () => {
  return ( 
      <div>
          <div className="pad_container">

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

const DesignPadState = (props) => {
  const editState = props.editState;
  if (!editState) {
    return <DesignPadBodyTrue/>;
  }
  return <DesignPadBodyFalse/>;
}

const DesignPad = (props) => {
    return (

        <div>
            <DesignPadState editState={props.editState}/>
        </div>

    )
}

export default DesignPad;