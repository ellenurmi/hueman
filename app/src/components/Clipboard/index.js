import React, { PureComponent } from 'react';
import ClipboardJS from 'clipboard';
import styled from 'styled-components';

const StyledClipboard = styled.div`
  cursor: pointer;
`;


export class Clipboard extends PureComponent {
  constructor(props) {
    super(props);
    this.clipboard = new ClipboardJS(".clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <StyledClipboard className="clipboard" data-clipboard-text={this.props.copyText}>
        {this.props.children}
      </StyledClipboard>
    );
  }
}
