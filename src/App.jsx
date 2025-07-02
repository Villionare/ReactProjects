import { useEffect, useState } from 'react';
import './App.css'

function MovieTitles({ name, ratings }) {

    //it counts the no of times the movies has been liked or clicked
    const [count, setCount] = useState(0);

    //it sets wheather the movie has been linked or Disliked
    const [likeCount, setLikeCount] = useState(false);

    //it run everytimes and given a effect when something changes
    useEffect(() => {
        console.log(`${name} The movie has been ${likeCount ? 'liked' : 'disliked'}`);
    }, [likeCount, name]);

    // useEffect(()=> {
    //     console.log("the Component has been rendered!");
    // }, []); - when the dependency array is Empty [] - this useEffect is activated only ones, 
    // just for some info...when first time rendred.
    
    return (
        <>
        {/*onClick={() => setCount(count + 1)} - set count should be called by arrow fucntion only*/}
        <div className='movie-conatainer' onClick={() => setCount(count + 1)}>
             <h3>Movie Name: {name} - {count}</h3>
            <p>Ratings: {ratings}</p>
            <button onClick={() => setLikeCount(!likeCount)}>{likeCount ? 'Unlike' : 'Like'}</button>
            </div>
        </>
    )
}

function App() {
    return(
        <>
        <h1>MovieList</h1>
            {/* props */}
        <MovieTitles name="RRR" ratings="5/5"/>
        <MovieTitles name="Krish 4" ratings="4.5/5"/>
        <MovieTitles name="Baahubali" ratings="4.8/5"/>
        </>
    )
}

export default App
