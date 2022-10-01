import { useState, useEffect } from "react"


const Challenge = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [fetchError, setfetchError] = useState(null);
    const apiKey = `https://jsonplaceholder.typicode.com/users`;

    useEffect(() => {

        const loadData = async () => {
            try {
                const response = await fetch(apiKey);
                if (!response.ok) throw Error('Could not fetch data');
                const data = await response.json();
                setUsers(data);
                setfetchError(null)
            } catch (error) {
                setfetchError(error.message);
            } finally {
                setisLoading(false);
            }
        }
        // getData();
        (async () => await loadData())();
    }, []);

    // const getData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(receivedData => setUsers(receivedData));
    // }

    
    return (
    <div className="container">
        {isLoading && <p className="text-center text-success my-4 py-4">Loading Data ... </p>}
        {fetchError && <p className="text-center text-success my-4 py-4">{`Error! ${fetchError}`}</p>}
        {/* {!isLoading && !fetchError && <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}, {user.email}</li>
            ))}
        </ul>} */}
        {!isLoading && !fetchError && <ul>
            {users.map(user => (
                <li key={user.id}>{JSON.stringify(user)}</li>
            ))}
        </ul>}
    </div>
    )
}

export default Challenge