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

    editButton = event => {
        console.log('current state in edit button event',this.state)
    }

    render() {
        const { editState } = this.state;
        
        return ( 
            <div className="container">

                {/* Testing feature for edit button */}
                <div className={`box ${editState ? "" : "hidden"}`}>
                    <p>{`${editState ? "I'm the box" : "I'm the yellow box"}`}</p>
                </div>
                
                { /*TODO - Add editButton Component */ }
                <div className="button_container">
                    <button className={`edit_button ${editState ? "" : "hidden"}`} onClick={this.toggleEditState}> Edit </button>
                </div>
                
                <br/> 

                { /*TODO - Add PadInput Component */ } 
                <PadInput/>

                <br/> 
                
                { /*TODO - Add DesignPad Component */ } 
                <DesignPad/>

                <br/> 

                { /*TODO - Add DesignBoard Component */ } 
                <DesignBoard/>

            </div>
        );
    }
}

export default DesignContainer;


import React from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';


class DesignContainer extends React.Component {
  state = { EDIT: false };


  Edit = () => {
    this.setState(props => ({
      EDIT: !props.EDIT 
    }));
  };
    

    render() {
        const button = this.state.EDIT ? "edit_button" : "edit_button_after";
        const EDIT = this.state.EDIT
        return (
            <div>
                <div>
                    <button className={button} onClick={this.Edit}>
                    EDIT
                    </button>
                </div>

                <PadInput EDIT={EDIT} />
                <DesignBoard />
            </div>
    );
    }
}

export default DesignContainer;