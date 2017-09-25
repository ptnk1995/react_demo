class EventTable extends React.Component {
  constructor() {
    super();
  }

  handleSearch(events) {
    this.setState();
  }

  handleUpdateRecord(old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  }

  handleDeleteRecord(event) {
    this.props.handleDeleteRecord(event);
  }

  sort(field){
    this.props.sortBy(field);
  }

  render() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event} key={'event' + event.id}
      handleDeleteRecord={this.handleDeleteRecord.bind(this)}
      handleUpdateRecord={this.handleUpdateRecord.bind(this)} />);
  }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3" onClick={this.sort.bind(this,'name')}>Name</th>
            <th className="col-md-2" onClick={this.sort.bind(this,'event_date')}>Date</th>
            <th className="col-md-3" onClick={this.sort.bind(this,'place')}>Place</th>
            <th className="col-md-4" onClick={this.sort.bind(this,'description')}>Description</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
}
