import DateTimeChecker from "./components/DateTimeChecker/DateTimeChecker";
import { Helmet } from "react-helmet";

function App() {
    return (
        <>
            <Helmet>
                <title>Date Time Checker</title>
            </Helmet>
            <div className="App w-screen h-screen">
                <div className="w-full h-full flex justify-center items-center">
                    <DateTimeChecker></DateTimeChecker>
                </div>
            </div>
        </>
    );
}

export default App;
