class EventApplication extends React.Component {
  constructor() {
    super();
    this.state = {events: []}
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
    var events = this.state.events;
    events.push(event);
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
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events} />
          </div>
        </div>
      </div>
    )
  }
}
