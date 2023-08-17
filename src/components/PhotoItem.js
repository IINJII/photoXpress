import React from 'react'

const PhotoItem = (props) => {
    return (
        <div className='my-2'>
            <div className="card d-flex">
                <img src={props.url} className="rounded" alt="pic"/>
                <a href={props.download} rel='noreferrer' target='_blank' download={props.id}><span className="badge text-bg-warning" style={{position: 'absolute', bottom: '10px', right: '10px', padding: '10px', cursor: 'pointer', transition: '0.5s'}}>Download</span></a>
            </div>
        </div>
    )
}

export default PhotoItem
