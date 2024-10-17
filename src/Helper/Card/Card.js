import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
