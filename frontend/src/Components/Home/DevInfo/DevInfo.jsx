import React from 'react'
import './DevInfo.css'
import linkedIn from '../../images/linkedIn.png'
import github from '../../images/github.svg'

function DevInfo() {
    return (
        <div className="devInfo">
            <h1>Developer Info</h1>
            <div className="devInfo__contents">
                <div className="devInfo__Intro">
                    <h1>Aman Kuvera</h1>
                    <h2>M.Tech-Integrated Grad Student</h2>
                    <p>Innovative, task-driven web developer proficient in front end web development and Graphic & UI Designing, experienced to work with technical teams and management teams as a leader.</p>
                </div>
                <div className="devInfo__contact">
                    <div className="devInfo__Email">
                        <a href="mailto:kuveraaman1999@gmail.com" target="_self">
                            <h2 className="devInfo__contactText">kuveraaman1999@gmail.com</h2>
                            <button><img src="https://cdn4.vectorstock.com/i/1000x1000/96/23/email-line-icon-on-black-background-black-flat-vector-25959623.jpg" alt=""/></button>
                        </a>
                    </div>
                    <div className="devInfo__LinkedIn">
                        <a href="https://www.linkedin.com/in/aman-kuvera-11b17a175/" target="_self">
                            <h2 className="devInfo__contactText">Aman Kuvera /</h2>
                            <button><img src={linkedIn} alt=""/></button>
                        </a>
                    </div>
                    <div className="devInfo__github">
                        <a href="https://github.com/AmanKuvera-Dev" target="_self">
                            <h2 className="devInfo__contactText">AmanKuvera-Dev /</h2>
                            <button><div><img src="https://p7.hiclipart.com/preview/593/30/489/github-computer-icons-commit-repository-github.jpg" alt=""/></div></button>
                        </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DevInfo
