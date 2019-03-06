import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModalRoot from './ModalRoot';
import logo from './logo.svg';

import './dist/css/template.css';
import './App.css';

import { showModal, hideModal } from './redux/actions/modalActions'

const MESSAGE = "A redux modal component.";

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

class App extends Component {

  closeModal = () => { 
    this.props.hideModal();
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  showInput = () =>  {
    console.log(this.state);
  }

  openAlertModal = () =>  {
    this.props.showModal({
      open: true,
      title: 'Alert Modal',
      message: MESSAGE,
      closeModal: this.closeModal
    }, 'alert')
  }

  openConfirmModal = () =>  {
    this.props.showModal({
      open: true,
      title: 'Confirm Modal',
      message: MESSAGE,
      confirmAction: this.closeModal,
      closeModal: this.closeModal
    }, 'confirm')
  }

  openDeleteModal = () =>  {
    this.props.showModal({
      open: true,
      title: 'Delete Modal',
      message: MESSAGE,
      deleteAction: this.closeModal,
      closeModal: this.closeModal,
      deleteText: 'delete'
    }, 'delete')
  }

  openPromptModal = () =>  {
    this.props.showModal({
      open: true,
      title: 'Prompt Modal',
      fields: [{
        label: 'Address name',
        name: 'addressName',
        placeholder: 'Enter address name',
      }],
      onInputChange: this.onInputChange,
      confirmAction: this.showInput
    }, 'prompt')
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">A Redux Modal Component</h1>
          </header>
          <div className="modal-types row d-flex justify-content-center align-items-center">
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openAlertModal}
              >alert</button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openConfirmModal}
              >confirm</button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openDeleteModal}
              >delete</button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openPromptModal}
              >prompt</button>
            </div>
          </div>
        </div>
        <ModalRoot />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
