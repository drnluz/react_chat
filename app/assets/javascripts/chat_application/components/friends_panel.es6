class FriendsPanel extends React.Component {
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Friends list
        </div>
        <div className="panel-body">
          <Friend />
        </div>
      </div>
    )
  }
}