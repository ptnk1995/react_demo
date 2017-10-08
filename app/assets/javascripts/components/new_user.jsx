class NewUser extends React.Component {
  constructor() {
    super();
    this.defaultRecord();
    this.updateInput = this.updateInput.bind(this);
  }

  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  }

  updateInput(name, value) {
    this.setState({[name]: value});
  }

  handleAddRecord() {
    user_data = {
      name: this.state["name"],
      age: this.state["age"],
      email: this.state["email"],
      address: this.state["address"]
    };
    this.props.handleAddRecord(user_data);
    this.defaultRecord();
  }

  defaultRecord() {
    this.state = {name: "", age: "", email: "", address: ""}
  }

  render() {
    return(
      <form className="form-inline">
        <div className="form-group">
          <input name="name" value={this.state.name} className="form-control" type="text"
            placeholder="Enter name" onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          &emsp;
          <input name="age" value={this.state.age} className="form-control" type="number" min="0"
            placeholder="Enter age" onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          &emsp;
          <input name="email" value={this.state.email} className="form-control" type="email"
            placeholder="Enter email" onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          &emsp;
          <input name="address" value={this.state.address} className="form-control" type="text"
            placeholder="Enter address"  onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
        </div>
        &emsp;
        <button type="button" onClick={this.handleAddRecord.bind(this)}
          className="btn btn-primary btn-sm">Add</button>
      </form>
    )
  }
}
