class UserTable extends React.Component {
  constructor() {
    super();
  }

  handleDeleteRecord(user) {
    this.props.handleDeleteRecord(user);
  }

  handleUpdateRecord(old_user, user) {
    this.props.handleUpdateRecord(old_user, user);
  }

  render() {
    var users = [];
    this.props.users.forEach(function(user) {
      users.push(<User user={user} key={'user' + user.id}
        handleDeleteRecord={this.handleDeleteRecord.bind(this, user)}
        handleUpdateRecord={this.handleUpdateRecord.bind(this)} />);
    }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2"><center>Name</center></th>
            <th className="col-md-1"><center>Age</center></th>
            <th className="col-md-2"><center>Email</center></th>
            <th className="col-md-3"><center>Address</center></th>
            <th className="col-md-2"><center>Action</center></th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
}
