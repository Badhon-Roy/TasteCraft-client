import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleGoHome = ()=>{
        navigate('/')
    }
    return (
        <div className="min-h-screen">
            <div className="flex justify-center">
                <img className="md:w-1/4 mt-10" src="https://i.ibb.co/m55qGTt/404-page-best-practices-removebg-preview.png" alt="" />
            </div>
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Oops!</h1>
                <p className="text-3xl font-medium">Sorry, an unexpected error has occurred.</p>
                <p className="text-xl">
                    <i>{error.statusText || error.message}</i>
                </p>
                <div onClick={handleGoHome}>
                    <button className="btn btn-secondary">Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;