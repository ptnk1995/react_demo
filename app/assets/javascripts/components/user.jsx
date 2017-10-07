class User extends React.Component {
  constructor() {
     super();
     this.state = {edit: false};
     this.updateInput = this.updateInput.bind(this);
  }

  propTypes: {
    name: React.PropTypes.string,
    age: React.PropTypes.integer,
    email: React.PropTypes.string,
    address: React.PropTypes.string
  }

  updateInput(name, value) {
    this.setState({[name]: value});
  }

  handleUpdateRecord() {
    this.props.handleUpdateRecord(this.props.user, this.getDataRecord());
    this.setState({edit: false});
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

  handleToggle(e) {
    e.preventDefault();
    this.setState({edit: !this.state.edit});
  }

  renderRecord() {
    var user = this.props.user;
    return(
      <tr>
        <td><center>{user.name}</center></td>
        <td><center>{user.age}</center></td>
        <td><center>{user.email}</center></td>
        <td><center>{user.address}</center></td>
        <td>
          <center>
            <a className="btn btn-danger btn-xs" onClick={this.props.handleDeleteRecord}>delete</a>
            &emsp;
            <a className="btn btn-warning btn-xs" onClick={this.handleToggle.bind(this)}>edit</a>
          </center>
        </td>
      </tr>
    );
  }

  renderForm() {
    return(
      <tr>
        <td>
          <input name="name" defaultValue={this.props.user.name} className="form-control" type="text"
            onChange={(e) => this.updateInput(e.target.name, e.target.value)}/>
        </td>
        <td>
          <input name="age" defaultValue={this.props.user.age} className="form-control" type="number"
            min="0" onChange={(e) => this.updateInput(e.target.name, e.target.value)}/>
        </td>
        <td>
          <input name="email" defaultValue={this.props.user.email} className="form-control" type="email"
            onChange={(e) => this.updateInput(e.target.name, e.target.value)}/>
        </td>
        <td>
          <input name="address" defaultValue={this.props.user.address} className="form-control" type="text"
            onChange={(e) => this.updateInput(e.target.name, e.target.value)}/>
        </td>
        <td>
          <center>
            <a className="btn btn-success btn-xs" onClick={this.handleUpdateRecord.bind(this)}>Save</a>
            &emsp;
            <a className="btn btn-default btn-xs" onClick={this.handleToggle.bind(this)}>Cancel</a>
          </center>
        </td>
      </tr>
    );
  }

  render() {
    if (this.state.edit) {
      return(this.renderForm());
    } else {
      return(this.renderRecord());
    }
  }
}
