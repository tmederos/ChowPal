
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import Modal from '../Modal/Modal.js';
import Form from '../Form/Form.js';
import { Link } from 'react-router-dom';
import MaterialButton from '../SelectButton/MaterialButton.js';
import './MaterialNav.css';
import API from "../../utils/API";

export default class MaterialNav extends React.Component {

    state = {
        user_id: null
    }
    
    componentDidMount(){
        this.getUserData();
    }

    getUserData(){
        API.getUserData().then(result => {
            this.setState({user_id: result.data.id})
        });
    }

    render() {
        return (
            <div>
                <Navbar color="special-color-dark" dark expand="md" scrolling>
                    <NavbarBrand>
                    <NavLink to="/"><img src="/logoChowPalNew.png" height="50"/></NavLink>
                    </NavbarBrand>
                        <NavbarNav left>
                          <NavItem>
                              <NavLink to="/">My Pantry</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/items">Pending Items</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/upload">Upload an Item</NavLink>
                                {/* <MaterialButton href="/auth/login" buttonColor='white' iconClass='fa fa-cutlery ml-2' buttonText='Login'></MaterialButton> */}
                          </NavItem>
                          <NavItem>
                            {(this.state.user_id ? <a className="nav-link" href="/auth/logout">Logout</a> : <a className="nav-link" href="/auth/login">Login</a>)}
                          </NavItem>
                        </NavbarNav>
                </Navbar>

                
                {/* <BootstrapModal visible={this.state.visible}   /> */}
                {/* <NavModal modal={this.state.modal} toggle={this.state.toggle} buttonLabel='Modal' modalHead='Receipt Upload' modalBody='Choose a file to upload by clicking the button below' /> */}
            </div>
        );
    }
}
