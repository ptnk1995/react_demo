class Event extends React.Component {
  constructor() {
     super();
     this.state = { edit: false };
     this.handleUpdate = this.handleUpdate.bind(this);
     this.handleToggle = this.handleToggle.bind(this);
    //  this.handleDelete = this.handleDelete.bind(this);
  }

  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  }

  handleDelete(e) {
    e.preventDefault();
    const {handleDeleteRecord} = this.props;
    const {event} = this.props;
    $.ajax({
      method: 'DELETE',
      url: '/api/v1/events/' + event.id,
      success: function(data) {
        handleDeleteRecord(data);
      },
      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error);
      }
    });
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  }

  handleUpdate(e) {
    e.preventDefault();
      var event_data = {
        name: $("#name_event").val(),
        description: $("#description").val(),
        event_date: $("#event_date").val(),
        place: $("#place").val()
      };
      const {handleUpdateRecord} = this.props;
      const {event} =  this.props;
      $.ajax({
        method: 'PUT',
        url: '/api/v1/events/' + event.id,
        data: { event: event_data },
        success: function(data) {
          handleUpdateRecord(event, data);
          this.setState({ edit: false });
        },
        error: function(xhr, status, error) {
          alert('Cannot update requested record: ', error);
        }
      });
  }


  renderRecord() {
    var event = this.props.event;
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
        <td>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete} >
            Delete
          </a>
          &emsp;
          <a className="btn btn-primary btn-xs"
             onClick={this.handleToggle} >
             Edit
          </a>
        </td>
      </tr>
    );
  }

  renderForm() {
    return(
      <tr>
        <td>
          <input name="name"
                 defaultValue={this.props.event.name}
                 className="form-control"
                 type="text"
                  id="name_event"
          />
        </td>
        <td>
          <input name="event_date"
                 defaultValue={this.props.event.event_date}
                 className="form-control"
                 type="date"
                 id="date"
          />
        </td>
        <td>
          <input name="place"
                 defaultValue={this.props.event.place}
                 className="form-control"
                 type="text"
                 id="place"
          />
        </td>
        <td>
          <input name="description"
                 defaultValue={this.props.event.description}
                 className="form-control"
                 type="text"
                id = "description"
          />
        </td>
        <td>
          <a className="btn btn-success btn-sm"
             onClick={this.handleUpdate}>
            Save
          </a>
          &emsp;
          <a className="btn btn-default btn-sm"
             onClick={this.handleToggle} >
            Cancel
          </a>
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
