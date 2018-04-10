import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Divider, Drawer, IconButton, MenuItem} from "material-ui";
import Home from 'material-ui/svg-icons/action/home';
import Receipt from 'material-ui/svg-icons/action/receipt';
import Car from 'material-ui/svg-icons/maps/directions-car';
import Toll from 'material-ui/svg-icons/action/toll';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import {Link} from "react-router";
import '../index.css';

export const SERVER_URL = "PTS61-4-1.0-SNAPSHOT";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title="KontoFahren"
                    onClick={this.handleToggle}/>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <AppBar title="Menu" iconElementLeft={<IconButton onClick={this.handleToggle}><BackArrow/></IconButton>}/>

                    <Link to="/" style={{ textDecoration: 'none' }}><MenuItem leftIcon={<Home />}>Home</MenuItem></Link>
                    <Divider />
                    <Link to="/invoices" style={{ textDecoration: 'none' }}><MenuItem leftIcon={<Receipt />}>Invoices</MenuItem></Link>
                    <Divider />
                    <Link to="/vehicles" style={{ textDecoration: 'none' }}><MenuItem leftIcon={<Car />}>Vehicles</MenuItem></Link>
                    <Divider />
                    <Link to="/rates" style={{ textDecoration: 'none' }}><MenuItem leftIcon={<Toll />}>Rates</MenuItem></Link>
                    <Divider />
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}