import React, { Component } from "react";

export class AmountBar extends Component {
  render() {
    const { amount, text, className, amountId } = this.props;
    return (
      <div className={className}>
        <p>{text}</p>
        <p id={amountId}>
        {React.isValidElement(amount) ? amount:"₹" + amount}
        </p>
      </div>
    );
  }
}

export default AmountBar;
