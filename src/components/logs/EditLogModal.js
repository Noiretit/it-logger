import React, { useState, useEffect } from 'react';
import TechSelectOption from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js';


const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }

            updateLog(updLog);
            M.toast({ html: `Log updated by ${tech}` })
            // Clear fields
            setMessage('');
            setTech('');
            setAttention(false)
        }
    };

    return (
        // This modal is opened when user clicks on any log (LogItem.js, line 10)
        <div id='edit-log-modal' className="modal" style={modalStyle}> 
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
                            <TechSelectOption />
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
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);
