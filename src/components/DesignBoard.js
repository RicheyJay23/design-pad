import React from 'react';

const box = "box"
const box_altered = "box_altered"

const allowDrop = ev => {
    ev.preventDefault();
}

const drop = ev => {
    ev.preventDefault();

    // var x = document.getElementById(ev.target.id).setAttribute("style","background-color:blue");
    console.log(ev.target.style.backgroundColor)
    // document.getElementById(ev.target.id).innerHTML = x;

    let setData = drag
    let data = document.getElementById(ev.target.id).style.backgroundColor = 'orange'

    console.log(ev.dataTransfer)
    // let data = ev.dataTransfer.setData("style:background-color", x);
    // ev.target.appendChild(document.getElementById(x));
}

const drag = ev => {
  ev.dataTransfer.getData("background-color", ev.target.id);
  console.log(ev.dataTransfer);

}

const DesignBoardBodyTrue = event => {
    // boilerplate design board body functional component
    return ( 
        <div>
            <h1 className="header"> DESIGN PAD </h1> 

            <div className="board_container">

                <div className={box_altered} id="box1" 
                     style={{background: 'darkred'}}
                     draggable={true}
                     onDrag={drag}
                     onDrop={drop}
                     onDragOver={allowDrop}
                > Pad 1 </div>

                <div className={box_altered} id="box2" 
                     style={{background: 'lightgreen'}}
                     draggable={true}
                     onDrag={drag}
                     onDrop={drop}
                     onDragOver={allowDrop}
                > Pad 2 </div>

                <div className={box_altered} id="box3" 
                     style={{background: 'blue'}}
                     draggable={true}
                     onDrag={drag}
                     onDrop={drop}
                     onDragOver={allowDrop}
                > Pad 3 </div>

                <div className={box_altered} id="box4" 
                     style={{background: 'grey'}}
                     draggable={true}
                     onDrag={drag}
                     onDrop={drop}
                     onDragOver={allowDrop}
                > Pad 4 </div>

            </div>
        </div>
    );
}

const DesignBoardBodyFalse = () => {
    // boilerplate design board body functional component
    return ( 
        <div>
            <h1 className="header"> DESIGN PAD </h1> 
            <div className="board_container">
                <div className={box} id="box1"> Pad 1 </div>
                <div className={box} id="box2"> Pad 2 </div>
                <div className={box} id="box3"> Pad 3 </div>
                <div className={box} id="box4"> Pad 4 </div>
            </div>
        </div>
    );
}


const DesignBoardState = (props) => {
    
    const editState = props.editState;
    if (!editState) {
        return <DesignBoardBodyTrue ondrop={drop} ondragover={allowDrop}/>;
    }
    return <DesignBoardBodyFalse/>;
}

const DesignBoard = (props) => {

    return (

        <div>
            <DesignBoardState editState={props.editState}/>
        </div> 
    )
    
}

export default DesignBoard;