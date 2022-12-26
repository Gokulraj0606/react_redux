import { useState } from 'react';


function Counter() {
    let [like, setLike] = useState(0);
    let [dislike, setDisLike] = useState(0);
    return (
        <>
            <button onClick={() => setLike(like + 1)}>👍{like}</button>
            <button onClick={() => setDisLike(dislike + 1)}>👎{dislike}</button>
        </>

    );
}
export default Counter
