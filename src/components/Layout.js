import React, { Component } from 'react';
import { Grid, Header, Container, Message} from 'semantic-ui-react';
import { web3Service } from '../services';
import Content from './Content';
import Information from './Information';
import Footer from './Footer';
import { contentStyle } from '../styles';
import '../styles/new-design.css';

export default class Layout extends Component {
    constructor (props) {
        super(props);
        this.showUserAddress = this.showUserAddress.bind(this);
    }

    state = {
        address: '',
        visible: true
    }

    showUserAddress (address) {
        this.setState({ address });
    }
    handleDismiss = () => {
        this.setState({ visible: false });
    }

    render () {
        return (
            <div>
              <div>
                  <Container style={{ paddingTop: '3em', paddingBottom: '3em' }}>
                      <Grid>
                          <Grid.Row>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                              <a href="" onClick={this.handleDismiss} >Dismiss</a>
                          </Grid.Row>
                      </Grid>
                  </Container>
              </div>
            <div style={contentStyle.yellowBg}>
                <Container style={{ paddingTop: '3em', paddingBottom: '3em' }}>
                <Header as='h1' dividing  >
                    <Grid columns={2}>
                    <Grid.Column className="logo-wrapper">
                        Token Transfer Dapp
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <small style={{ fontSize: '55%' }} > (
                            <a href={`${web3Service.explorer}address/${this.state.address}`} target='_blank' rel="noopener noreferrer">
                                {this.state.address}
                            </a>)
                        </small>
                        { !web3Service.isWeb3Viewable &&
                        <small> Loading Network ...</small>
                        }
                    </Grid.Column>
                    </Grid>
                </Header>
                <Content {...{ displayAddress: this.showUserAddress }}/>
                </Container>
            </div>
            <Container style={{ marginTop: '3em' }}>
                <Information/>
            </Container>
             <div className="footer-section">
                 <Container style={{ marginTop: '3em' }}>
                 <Footer/>
                 </Container>
             </div>
            </div>
        );
    }
}
