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

  // handleAdd(e) {
  //   e.preventDefault();
  //   var self = this;
  //   if (this.validForm()) {
  //     $.ajax({
  //       url: '/api/events',
  //       method: 'POST',
  //       data: { event: self.state },
  //       success: function(data) {
  //
  //       },
  //       error: function(xhr, status, error) {
  //         alert('Cannot add a new record: ', error);
  //       }
  //     })
  //   } else {
  //     alert('Please fill all fields.');
  //   }
  // }

  render() {
    return(
      <form className="form-inline">
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="name"
                 placeholder="Name"
                 value={this.state.name}/>
        </div>

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
}
