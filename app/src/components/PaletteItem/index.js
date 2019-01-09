import React, { Component } from 'react';
import { Clipboard, Button } from 'components';
import styled from 'styled-components';

const StyledPaletteItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex: 1;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  padding: 6px;
`;

const PaletteLabel = styled.p`
  font-weight: 700;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 9px;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled(Button)`
  color: white;
  font-size: 4px;
`;

export class PaletteItem extends Component {
  static defaultProps = {
    hideDelete: false
  };

  render() {
    return (
      <StyledPaletteItem backgroundColor={this.props.backgroundColor}>
        <Footer>
          <Clipboard copyText={this.props.backgroundColor}>
            <PaletteLabel>
              {this.props.backgroundColor}
            </PaletteLabel>
          </Clipboard>
          {!this.props.hideDelete && <StyledButton onClick={() => this.props.removeHue(this.props.backgroundColor)}>
            —
          </StyledButton>}
        </Footer>
      </StyledPaletteItem>
    );
  }
};
