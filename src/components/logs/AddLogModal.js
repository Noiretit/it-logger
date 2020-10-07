import React, { useState } from 'react';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        console.log(message, tech, attention);
    };

    return (
        // This ID has to match the href of AddBtn, so when clicked it will open this
        <div id='add-log-modal' className="modal" style={modalStyle}> 
            <div className="modal-content">
                <h4>Enter system log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="message" 
                            value={message} 
                            onChange={e => setMessage(e.target.value)} 
                        />
                        <label htmlFor='message' className='active'>
                            Log message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className="browser-default" 
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox" 
                                    className="filled-in" 
                                    checked={attention} 
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>
            <div className="modal-footer" style={{textAlign: "center"}}>
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect blue waves-light btn"
                >
                    Enter
                </a>
            </div>
        </div>
    )
};

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal
