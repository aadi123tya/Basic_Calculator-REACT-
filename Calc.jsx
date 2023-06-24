
import Add ,{product,divide,subtract} from "./App";
function App(){
    return (
        <>
        <ol>
            <li>Add = {Add(2,4)}</li>
            <li>divide={divide(2,4)}</li>
            <li>subtract={subtract(4,5)}</li>
            <li>product={product(6,5)}</li>
        </ol>
    </>

    );
}
export default App;