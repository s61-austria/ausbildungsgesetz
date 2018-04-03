import PropTypes from "prop-types";
import * as React from "react/cjs/react.development";

export class KontoUserItem extends React.Component {

}

KontoUserItem.propTypes = {
    kontoUser:{
        uuid: PropTypes.string,
        userName: PropTypes.string,
    }.isRequired,
}