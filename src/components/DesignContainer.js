import React from 'react';
import DesignBoard from './DesignBoard';
import DesignPad from './DesignPad';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editState: true
          };
    }

    toggleEditState = () => {
        this.setState(prevState => ({ editState: !prevState.editState }));
    };

    render() {
        // const { editState } = this.state;
        const editButtonState = this.state.editState? "edit_button": "edit_button_altered";
        
        return ( 
            <div className="container">
                
                { /*TODO - Add editButton Component */ }
                <div className="button_container">
                    <button className={editButtonState} onClick={this.toggleEditState}> Edit </button>
                </div>
                
                <br/> 

                { /*TODO - Add PadInput Component */ } 
                <PadInput editState={this.state.editState}/>

                <br/> 
                
                { /*TODO - Add DesignPad Component */ } 
                <DesignPad editState={this.state.editState}/>

                <br/> 

                { /*TODO - Add DesignBoard Component */ } 
                <DesignBoard editState={this.state.editState}/>

            </div>
        );
    }
}

export default DesignContainer;


// import React from 'react';
// import DesignBoard from './DesignBoard';
// import PadInput from './PadInput';


// class DesignContainer extends React.Component {
//   state = { EDIT: false };


//   Edit = () => {
//     this.setState(props => ({
//       EDIT: !props.EDIT 
//     }));
//   };
    

//     render() {
//         const button = this.state.EDIT ? "edit_button" : "edit_button_after";
//         const EDIT = this.state.EDIT
//         return (
//             <div>
//                 <div>
//                     <button className={button} onClick={this.Edit}>
//                     EDIT
//                     </button>
//                 </div>

//                 <PadInput EDIT={EDIT} />
//                 <DesignBoard />
//             </div>
//     );
//     }
// }

// export default DesignContainer;