import React, { useContext, useEffect } from 'react'
import photoContext from '../context/photos/photoContext'
import PhotoItem from './PhotoItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'
import LoadingBar from 'react-top-loading-bar'
import { useLocation } from 'react-router-dom'

const Photos = (props) => {
    const context = useContext(photoContext)
    const location = useLocation();
    const { callApi, photos, callApiAgain, loading, setProgress, progress } = context;

    useEffect(() => {
        // eslint-disable-next-line
        if(props.category === '')
        {

        }
        else
        {
            callApi(props.category);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
        <LoadingBar
        color='#ffc107'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}

        style={{height: '3px'}}
      />
        <div className='container' style={{marginTop: '80px'}}>
            <div style={{ border: '2px solid black', borderRadius: '15px', textAlign: 'center', padding: '15px', color: 'white', backgroundColor: 'black' }}><h2 className='my-0'>{location.pathname === '/search' ? props.category : props.title + " Photos To Look For"}</h2></div>

            {photos.length !== 0 && <InfiniteScroll style={{overflowX: ''}}
                dataLength={photos.length} //This is important field to render the next data
                next={callApiAgain}
                hasMore={photos.length !== 100}
                loader={<Spinner/>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>You are all caught up!</b>
                    </p>
                }
            >
                <div className='row my-4'>
                    {!loading && photos.map((ele, index) => {
                        return (<div key={index} className='col-md-4'>
                            <PhotoItem url={ele.src.large} download={ele.src.original}/>
                        </div>)
                    })}
                </div>
            </InfiniteScroll>}

            
        </div>
        </>
    )
}

export default Photos
