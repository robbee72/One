import React, { Component } from 'react';
import FooterItem from './FooterItem';

class Footers extends Component {
  render() {
    let footerItems;
    if(this.props.footers){
      footerItems = this.props.footers.map(footer => {
        return (
          <FooterItem key={footer.title} footer={footer} />
        );
      });
    }
    return (
      <div className="Footers">
        <h3>Footer List</h3>
        {footerItems}
      </div>
    );
  }
}

export default Footers;
