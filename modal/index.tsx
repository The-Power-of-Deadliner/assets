import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

const ModalContainer = styled.div`
  margin-top: 30px;
  text-align: center;	
  margin-right: 20px;
  margin-left: 20px;
`;


export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
				
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <ModalContainer>
                        <h1>Sync with Google Calendar</h1>						
                        <p>Do you want to synchronize your Business Profile with your Google Calendar? 
						We will recommend you the best time to take a ride.</p>
						<div className = "d-flex w-100 justify-content-between align-items-center"> //gatau knp ga jalan
                        <button href="javascript:void(0);" onClick={() => this.closeModal()}>Not Now</button>
						<button href="javascript:void(0);" onClick={() => this.closeModal()}>Activate</button>
						</div>
                    </ModalContainer>
                </Modal>
            </section>
        );
    }
}