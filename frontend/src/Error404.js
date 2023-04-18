import { useLocation } from "react-router";

function Error404() {
    const location = useLocation()
    const imgUrl = `${location}/images/kittykat.jpeg`
    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src={imgUrl} alt="cute cat pic" />
        </main>
    );
}

export default Error404;
