import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions'

import TechItem from './TechItem'

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
    // const [techs, setTechs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);
    //We add an empty array to it only runs ONCE

    // const getTechs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/techs');
    //     const data = await res.json();

    //     setTechs(data);
    //     setLoading(false);
    // };

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician list</h4>
                <ul className="collection">
                    {!loading && 
                        techs !== null && 
                        techs.map(tech => (
                            <TechItem tech={tech} key={tech.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    // [nombre del prop]: state.[nombre del reducer en index.js]
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
