import React, { Component } from 'react';

class FooterItem extends Component {
  render() {
    return (
      <li className="footers">
        <strong>{this.props.footer.title}</strong>
      </li>
    );
  }
}

export default FooterItem;
