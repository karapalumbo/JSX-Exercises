function Person(props) {
    let vote = props.age >= 18 ? "Go vote!" : "Go study!";
    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                Hobbies: <ul>
                {hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}
