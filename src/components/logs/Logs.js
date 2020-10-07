import React, { useEffect } from 'react';
// Connects redux to this perticular component, which has to be exported as a second parameter to this function
import { connect } from 'react-redux'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions'

// If there is any method to fire off, you pass it as a parameter and... (export part)
const Logs = ({ log: { logs, loading }, getLogs }) => {
    
    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);
    //We add an empty array to it only runs ONCE

    if(loading || logs === null) {
        return <Preloader/>
    }

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System logs</h4>
                </li>
                {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : (
                    logs.map(log => <LogItem log={log} key={log.id}/>)
                )}
            </ul>
        </div>
    )
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

// Function to bring anything from the upper state
const mapStateToProps = state => ({
    // "Name of the prop": "name of the reducer name at index.js [log: logReducer]"
    log: state.log
})

// ...pass any methods as parameters
export default connect(mapStateToProps, { getLogs })(Logs);
