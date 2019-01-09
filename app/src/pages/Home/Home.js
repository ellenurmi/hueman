import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Palette, Logo, Button } from 'components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createPalette } from 'actions/types';

import styled from 'styled-components';

const LogoWrapper = styled.div`
`;

const PaletteSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 9px;
  margin-left: 18px;
  margin-right: 18px;
  overflow: auto;
  max-width: 95%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 9px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 700;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 18px;
`;

const StyledInput = styled.input`
  outline: none;
  padding: 6px;
  margin-bottom: 18px;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLabel = styled.p`
  margin-top: 3px;
  margin-right: 9px;
`;

class HomeUI extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      paletteName: ''
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addPalette = this.addPalette.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false, paletteName: '' });
  }

  handleChange({ target }) {
    this.setState({ paletteName: target.value });
  }

  addPalette() {
    const { createPalette } = this.props;
    createPalette({ name: this.state.paletteName });
    this.hideModal();
  }

  render() {
    return (
      <Wrapper>
        <Modal isOpen={this.state.showModal} style={{content: {width: '250', height: '30%'}}}>
          <Header>
            <p>Create a new palette</p>
            <Button onClick={this.hideModal}>x</Button>
          </Header>
          <Form>
            <StyledLabelContainer>
              <StyledLabel>Palette Name</StyledLabel>
              <StyledInput onChange={this.handleChange} value={this.state.paletteName} />
            </StyledLabelContainer>
            <Button onClick={this.addPalette}>ADD</Button>
          </Form>
        </Modal>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <PaletteSet>
          {Object.values(this.props.palettes || {}).map(palette => {
            return <Palette key={palette.name} colors={palette.hues} name={palette.name} />
          })}
        </PaletteSet>
        <Button onClick={this.showModal}>ADD PALETTE</Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    palettes: state.palettes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPalette: (payload) => {
      dispatch(createPalette(payload));
    }
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);
