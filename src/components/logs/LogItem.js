import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';


const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" 
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
                    {log.message}
                </a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by{' '}
                    <span className='black-text'>{log.tech}</span> on <Moment format='MMMM Do YYYY, H:mm:ss'>{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content">
                {/* The way material icons work is you add the name of the ICON as TEXT inside the i tag */}
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
}

export default LogItem
