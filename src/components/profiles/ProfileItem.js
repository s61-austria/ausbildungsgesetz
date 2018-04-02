import PropTypes from "prop-types";
import * as React from "react/cjs/react.development";

export class ProfileItem extends React.Component {

}

ProfileItem.propTypes = {
    profile: PropTypes.shape({
        uuid: PropTypes.string,
        kontoUser: PropTypes.shape({}),
    }).isRequired,
};