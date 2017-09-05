class Event extends React.Component {
  constructor() {
    super();
  }

  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  }

  handleDelete(e) {
    e.preventDefault();
    let event = this.props.event;
    $.ajax({
      method: 'DELETE',
      url: '/api/v1/events/' + event.id,
      success: function(data) {
        $("#" + event.id).hide();
      },
      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error);
      }
    });
  }

  render() {
    var event = this.props.event;
    return(
      <tr id={event.id}>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
        <td>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete.bind(this)} >
            Delete
          </a>
        </td>
      </tr>
    )
  }
}
