import PropTypes from 'prop-types';
import { FiSave, FiEdit2 } from "react-icons/fi";

const FloatingActionButton = ({ actionName }) => {
    return (
        <button
            className="form-fab-btn"
            type="submit"
        >
            {actionName === 'save' ? <FiSave /> : <FiEdit2 />}
        </button>
    );
}

FloatingActionButton.propTypes = {
    actionName: PropTypes.string.isRequired,
};

export default FloatingActionButton;