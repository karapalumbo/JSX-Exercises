function Tweet(props) {
    const { name, username, date, message } = props;
    return (
        <div className="tweet">
            <span className="name">{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <span className="message">{message}</span>
        </div>
    )
}

