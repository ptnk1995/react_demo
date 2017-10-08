class UserTemplate extends React.Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  componentDidMount() {
    this.getDataUserFromApi();
  }

  getDataUserFromApi() {
    var self = this;
    $.ajax({
      url: '/api/v1/users',
      success: function(data) {
        self.setState({users: data});
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }

  handleDeleteRecord(user) {
    var data = user;
    const {users} = this.state;
    const update_state = (state) => this.setState(state);
    $.ajax({
      method: 'DELETE',
      url: '/api/v1/users/' + user.id,
      success: function() {
        let index = users.findIndex(function(e) {return e.id == data.id});
        users.splice(index, 1);
        update_state({users: users});
      },
      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error);
      }
    });
  }

  validRecord(object) {
    if((object.name == undefined && object.email == undefined && object.age == undefined && object.address == undefined) ||
      (object.name == "" && object.email == "" && object.age == "" && object.address == "")) {
      return false;
    } else {
      return true;
    }
  }

  handleUpdateRecord(old_user, user) {
    var data_old = old_user;
    const {users} = this.state;
    const update_state = (state) => this.setState(state);
    if(this.validRecord(user)){
      $.ajax({
        method: 'PUT',
        url: '/api/v1/users/' + data_old.id,
        data: {user: user},
        success: function(data) {
          let index = users.findIndex(function(e) {return e.id == data_old.id});
          users.splice(index, 1, data);
          update_state({users: users});
        },
        error: function(xhr, status, error) {
          alert('Cannot update requested record: ', error);
        }
      });
    }
  }

  handleAddRecord(user) {
    const {users} = this.state;
    const update_state = (state) => this.setState(state);
    if(this.validRecord(user)) {
      $.ajax({
        url: '/api/v1/users',
        method: 'POST',
        data: {user: user},
        success: function(data) {
          users.push(data);
          update_state({users: users});
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      });
    }
  }

  handleSearch(data) {
    const {users} = this.state;
    const update_state = (state) => this.setState(state);
    $.ajax({
      url: '/api/v1/users',
      data: {data: data},
      success: function(data) {
        update_state({users: data})
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    });
  }

  render() {
    return(
      <div className="container">
        <h2>REACTJS DEMO</h2>
        <br />
        <div className="row">
          <div className="col-md-12">
            <h3>New User</h3>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <NewUser handleAddRecord={this.handleAddRecord.bind(this)} />
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <SearchUser handleSearch={this.handleSearch.bind(this)} />
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-12">
            <h3>List User</h3>
          </div>
          <div className="col-md-12">
            <UserTable users={this.state.users}
              handleDeleteRecord={this.handleDeleteRecord.bind(this)}
              handleUpdateRecord={this.handleUpdateRecord.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
