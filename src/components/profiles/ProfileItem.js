import PropTypes from "prop-types";
import * as React from "react/cjs/react.development";

export class ProfileItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card>
                <CardHeader
                    title={`Name: ${this.props.profile.kontoUser.userName} | ID: ${this.props.profile.uuid}`}
                />
            </Card>
        )
    }
}

ProfileItem.propTypes = {
    profile: PropTypes.shape({
        uuid: PropTypes.string,
        kontoUser: PropTypes.shape({}),

    }).isRequired,
};