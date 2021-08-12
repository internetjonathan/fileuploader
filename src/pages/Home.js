import React, { useState, useEffect } from 'react'

import axios from 'axios'


import UploadCards from '../components/UploadCards';

export default function Home(props) {
    axios.defaults.headers.delete['Authorization'] = localStorage.getItem('FBtoken')
    axios.defaults.headers.post['Authorization'] = localStorage.getItem('FBtoken')
    if (props.location.state === undefined) {
        return (<div id="home-img"/>)
    } else {
        return <UploadCards location={props.location.state} />
    }


}
