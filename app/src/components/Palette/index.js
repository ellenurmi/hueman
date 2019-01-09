import React, { Component, Fragment } from 'react';
import { PaletteItem, Button } from 'components';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addHue, removeHue, removePalette } from 'actions/types';
import { SketchPicker } from 'react-color';

const PaletteWrapper = styled.div`
  height: 350px;
  flex-direction: column;
  display: flex;
  min-width: 100px;
  margin-right: 12px;
  flex: 1;
`;

const PaletteLabel = styled.p`
  padding-left: 3px;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PickerContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  margin-top: 27px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 9px;
  height: 100%;
  width: 25%;
`;

const StyledButton = styled(Button)`
  padding: 3px;
  font-size: 12px;
`;

const AddHueButton = styled(Button)`
  margin-top: 27px;
  font-size: 14px;
`;

class PaletteUI extends Component {
  static defaultProps = {
    colors: ['#1e96ff', '#aaa']
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedColor: '#fff'
    };
    this.addColorToPalette = this.addColorToPalette.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.removeColorFromPalette = this.removeColorFromPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  addColorToPalette() {
    const { name, addHue } = this.props;
    const { selectedColor } = this.state;
    addHue({hue: selectedColor, palette: name});
    this.hideModal();
  }

  removeColorFromPalette(hue) {
    const { name, removeHue } = this.props;
    removeHue({palette: name, hue});
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  selectColor(color, event) {
    this.setState({ selectedColor: color.hex });
  }

  deletePalette() {
    const { name, removePalette } = this.props;
    removePalette({ name });
  }

  render() {
    return (
      <Fragment>
        <Modal isOpen={this.state.showModal} ariaHideApp={false}>
            <Header>
              <p>Add color to palette {this.props.name}</p>
              <Button onClick={this.hideModal}>x</Button>
            </Header>
            <PickerContainer>
              <SketchPicker onChangeComplete={this.selectColor} color={this.state.selectedColor} />
              <ButtonContainer>
                <PaletteItem backgroundColor={this.state.selectedColor} hideDelete />
                <AddHueButton onClick={this.addColorToPalette}>OK</AddHueButton>
              </ButtonContainer>
            </PickerContainer>
        </Modal>
        <PaletteWrapper>
          <StyledButton onClick={this.deletePalette}>x</StyledButton>
          {this.props.colors.map(color => {
            return <PaletteItem backgroundColor={color} key={color} removeHue={this.removeColorFromPalette} />
          })}
          <LabelWrapper>
            <PaletteLabel>{this.props.name}</PaletteLabel>
            <Button onClick={this.showModal}>+</Button>
          </LabelWrapper>
        </PaletteWrapper>
      </Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    addHue: (payload) => {
      dispatch(addHue(payload));
    },
    removeHue: (payload) => {
      dispatch(removeHue(payload))
    },
    removePalette: (payload) => {
      dispatch(removePalette(payload))
    }
  }
}

export const Palette = connect(mapStateToProps, mapDispatchToProps)(PaletteUI);
