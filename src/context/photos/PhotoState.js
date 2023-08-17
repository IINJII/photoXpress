import { useState } from 'react';
import photoContext from './photoContext';

const PhotoState = (props) => {
    let url = 'https://api.pexels.com/v1/';
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([])
    const [total, setTotal] = useState(null);
    const [next, setNext] = useState("");
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const key = process.env.REACT_APP_CLIENT_ID;




    // Fetching random photos
    const callApi = async (category) => {
        setLoading(true);
        setProgress(10);
        let response = await fetch(`${url}search/?page=${page}&per_page=10&query=${category}`, {
            method: 'GET',
            headers: {
                'Authorization': `${key}`,
                'Content-Type': 'application/json'
            }
        })
        setProgress(40);
        response = await response.json();
        setProgress(70);

        setPhotos(response.photos);
        setTotal(photos.total)
        setNext(response.next_page)
        setLoading(false);
        setProgress(100);
    }




    // Fetching next data
    const callApiAgain = async (category) => {
        setPage(page+1)
        let response = await fetch(next, {
            method: 'GET',
            headers: {
                'Authorization': `${key}`,
                'Content-Type': 'application/json'
            }
        })
        let json = await response.json();

        setPhotos(photos.concat(json.photos));
        setNext(json.next_page)
    }




    return (
        <photoContext.Provider value={{photos, callApi, callApiAgain, total, loading, setProgress, progress}}>
            {props.children}
        </photoContext.Provider>
    )
}

export default PhotoState;