class SearchForm extends React.Component {
  constructor() {
    super();
  }

  handleSearch() {
    var query = $("#query").val();
    var self = this;
    $.ajax({
      url: '/api/v1/events/search',
      data: { query: query },
      success: function(data) {
        self.props.onSearchChange(data)
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    });
  }

  render() {
    return(
      <input onChange={this.handleSearch.bind(this)}
             type="text"
             className="form-control"
             placeholder="Type search phrase here..."
             id="query" />
    )
  }
}
