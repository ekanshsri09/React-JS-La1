function IsSubscribed(props) {
    const isSubscribed = props.status; // Change this to false to test the "not subscribed" state
    const isloggedIn = true; // Change this to false to test the "logged out" state
    return (
        <div className = 'min-h-screen bg-gray-100 p-6 flex items-center justify-center'>
            <div className = 'bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-bold mb-4 text-blue-600'>You are subscribed!</h2>
                {props.status ? <button className='bg-blue-500 text-white px-4 py-2 text-whiterounded
                 hover:bg-blue-600 transition'>Subscribed</button> : <button className='bg-red-500 
                 text-white px-4 py-2 rounded hover:bg-red-600 transition'>UnSubscribeed</button>}
                 {isloggedIn ? <p className='mt-4 text-green-600'>Welcome back, subscriber!</p> : 
                 <p className='mt-4 text-red-600'>Please log in to see your subscription status.</p>}
            </div>
        </div>
    );
}

export default IsSubscribed;