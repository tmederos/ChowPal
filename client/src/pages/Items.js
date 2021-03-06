import React, { Component } from 'react';
import { Row, Container } from '../components/Grid';
import { PantryList } from '../components/PantryList';
import PantryCard from '../components/PantryCard';
import './Main.css';
import API from '../utils/API';

class Items extends Component {
    state = {
      pendingItems: [],
      user_id: null,
    }

    componentDidMount = () => {
      this.getUserData();
    }

    getUserData = () => {
      API.getUserData().then((result) => {
        console.log(result);
        this.setState({ user_id: result.data.id });
        this.getPendingItems(this.state.user_id);
      });
    }

    getPendingItems = (id) => {
      API.getPendingItems({ id })
        .then(result => this.setState({ pendingItems: result.data }));
    }


    handleDeleteButton = (event) => {
      console.log(event.target.id);
      API.deleteItem({ id: event.target.id }).then(this.getPendingItems(this.state.user_id));
    }

      renderItems = () => (this.state.pendingItems.length > 0 ?
        this.state.pendingItems.map(item => (
          <PantryCard
            id={item.id}
            name={item.product_name}
            // date={item.purchase_date}
            handleDeleteButton={this.handleDeleteButton}
          />
        )) : <h5>No Pending Items!</h5>
      )

      render() {
        return (
          <div>
            <Container main>
              <Row params='pt-5 pb-3'>
                <h1 className='centered'>My Items</h1>
              </Row>
              <Row params='pt-3 pb-3'>
                <a href='/'><h6 className='pl-3'>&laquo; Back to My Pantry</h6></a>
              </Row>
              <PantryList title='My Items'>
                {this.state.user_id ? this.renderItems() : <h5 className='grey-text pt-3 pb-3'>Log in to see your items!</h5>}
              </PantryList>
            </Container>
          </div>
        );
      }
}

export default Items;
