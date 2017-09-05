class NewForm extends React.Component {
  constructor() {
    super();
     this.state = {
       name: '',
       place: '',
       event_date: '',
       description: ''
     }
  }

  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  }

  handleAdd(e) {
    e.preventDefault();
    var self = this;
    self.state.name = $('#name').val();
    $.ajax({
      url: '/api/v1/events',
      method: 'POST',
      data: { event: self.state },
      success: function(data) {
        self.props.addData(data);
        $('#name').val('');
      },
      error: function(xhr, status, error) {
        alert('Cannot add a new record: ', error);
      }
    });
  }

  render() {
    return(
      <form className="form-inline">
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 id="name"
                 placeholder="Name" />
        </div>

        <button type="button" onClick={this.handleAdd.bind(this)} className="btn btn-primary">Add</button>
      </form>
    )
  }
}
