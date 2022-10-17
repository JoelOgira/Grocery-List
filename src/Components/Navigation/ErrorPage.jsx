import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage container">
        <div className="card">
            <h2 className="text-center card-title">
                Error: Missing Page
            </h2>
            <hr className="my-4" />
            <Link to='/'>Go back to our Homepage</Link>
        </div>
    </div>
  )
}

export default ErrorPage;