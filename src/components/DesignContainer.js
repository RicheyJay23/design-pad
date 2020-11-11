import React from 'react';
import DesignBoard from './DesignBoard';
import DesignPad from './DesignPad';
import PadInput from './PadInput';

class DesignContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBoxVisible: true
          };
    }

    toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    };

    editButton = event => {
        console.log('current state in edit button event',this.state)
    }

    render() {
        const { isBoxVisible } = this.state;
        
        return ( 
            <div className="container">

                {/* Testing feature for edit button */}
                <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                    <p>{`${isBoxVisible ? "I'm the box" : "I'm the yellow box"}`}</p>
                </div>
                
                { /*TODO - Add editButton Component */ }
                <div className="button_container">
                    <button className={`edit_button ${isBoxVisible ? "" : "hidden"}`} onClick={this.toggleBox}> Edit </button>
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