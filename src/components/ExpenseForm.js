import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
    //Educational note:
    // You can use
    //e.persist() to hold the event after using it in callback
    //this.setState(() => ({note: e.target.value}))
  };

  onAmountChange = e => {
    const amount = e.target.value;
    this.setState({ amount });
    // if (amount.match(^\d{1,}(\.\d{0,2})?$)) {
    //     this.setState(()=> ({ amount }))
    // }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
