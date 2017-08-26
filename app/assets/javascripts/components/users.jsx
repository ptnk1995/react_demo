class Users extends React.Component {
  render() {
    var users = this.props.users.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </tr>
      )
    })

    return(
      <tbody>
        {users}
      </tbody>
    )
  }
}

class Table extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: this.props.users
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <Users users={this.state.users} />
      </table>
    )
  };
}

var NewUser = React.createClass({
    handleClick() {
      console.log("abcd");
        var name = this.refs.name.value;
        var age = this.refs.age.value;
        $.ajax({
            url: '/api/v1/users',
            type: 'POST',
            data: { user: { name: name, description: age } },
            success: (user) => {
                console.log('it worked!', user);
            }
        });
    },

    render() {
        return (
            <div>
                <input ref='name' placeholder='Enter the name of the item' />
                <input ref='age' placeholder='Enter a description' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
