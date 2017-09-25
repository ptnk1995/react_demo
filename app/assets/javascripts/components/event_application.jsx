class EventApplication extends React.Component {
  constructor() {
    super();
    this.state = {events: []};
    this.handleUpdateRecord = this.handleUpdateRecord.bind(this);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    var self = this;
    $.ajax({
      url: '/api/v1/events',
      success: function(data) {
        self.setState({ events: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }

  handleSearch(events) {
    this.setState({ events: events });
  }

  handleAdd(event) {
    let events = this.state.events;
    events.push(event);
    this.setState({ events: events });
  }

  handleDeleteRecord(event) {
    let events = this.state.events.slice();
    let index = events.findIndex(function(e) {return e.id == event.id});
    events.splice(index, 1);
    this.setState({ events: events });
  }

  handleUpdateRecord(old_event, event) {
    let events = this.state.events.slice();
    let index = events.findIndex(function(e) {return e.id == old_event.id});
    events.splice(index, 1, event);
    this.setState({ events: events });
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by Piotr Jaworski</p>
        </div>
        <div className="row">
          <div className="col-md-4">
          <SearchForm onSearchChange={this.handleSearch.bind(this)}/>
          </div>
          <div className="col-md-8">
            <NewForm addData={this.handleAdd.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events}
              handleDeleteRecord={this.handleDeleteRecord.bind(this)}
              handleUpdateRecord={this.handleUpdateRecord} />
          </div>
        </div>
      </div>
    )
  }
}
