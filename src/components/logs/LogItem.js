import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';


const LogItem = ({ log, deleteLog, setCurrent }) => {

    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: 'Log deleted '});
    }
    return (
        <li className="collection-item">
            <div>
            {/* This href will opnen EditLogModal.js */}
                <a href="#edit-log-modal" 
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)}
                >
                    {log.message}
                </a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by{' '}
                    <span className='black-text'>{log.tech}</span> on <Moment format='MMMM Do YYYY, H:mm:ss'>{log.date}</Moment>
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                {/* The way material icons work is you add the name of the ICON as TEXT inside the i tag */}
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem);
