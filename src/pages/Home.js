import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';

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
