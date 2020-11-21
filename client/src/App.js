import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './createApolloClient';
import Products from './components/Products';
import Cart from './components/Cart';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Row>
            <Col xs="9">
              <Products />
            </Col>
            <Col>
              <Cart />
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    )
  }
}

export default App;