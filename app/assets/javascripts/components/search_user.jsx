class SearchUser extends React.Component {
  constructor() {
    super();
    this.defaultRecord();
  }

   componentWillUpdate(nextProps, nextState) {
     if(this.state != nextState) {
       this.handleSearch(nextState);
     }
   }

  updateInput(name, value) {
    this.setState({[name]: value});
  }

  handleSearch(data) {
    this.props.handleSearch(data);
  }

  getDataRecord() {
    user_data = {
      name: this.state["name"],
      age: this.state["age"],
      email: this.state["email"],
      address: this.state["address"]
    };
    return user_data;
  }

  defaultRecord() {
    this.state = {name: "", age: "", email: "", address: ""}
  }

  render() {
    return(
      <form className="form-inline">
        <div className="form-group">
          <input name="name" value={this.state.name} className="form-control" type="text"
            placeholder="Enter name" onChange={(e) => {this.updateInput(e.target.name, e.target.value)}} />
          &emsp;
          <input name="age" value={this.state.age} className="form-control" type="number" min="0"
            placeholder="Enter age" onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          &emsp;
          <input name="email" value={this.state.email} className="form-control" type="email"
            placeholder="Enter email" onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          &emsp;
          <input name="address" value={this.state.address} className="form-control" type="text"
            placeholder="Enter address" onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
        </div>
      </form>
    )
  }
}
