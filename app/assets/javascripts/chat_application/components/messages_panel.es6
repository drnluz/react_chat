class MessagesPanel extends React.Component {
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Messages
        </div>
        <div className="panel-body">
          <Message />
        </div>
        <div className="panel-footer">
          <ChatInput />
        </div>
      </div>
    )
  }
}