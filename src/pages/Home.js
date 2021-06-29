import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';
import UploadCards from '../components/UploadCards';

export default function Home(props) {
    if (props.location.state === undefined) {
        return (<div>hello world</div>)
    } else {
        return <UploadCards location={props.location.state} />
    }


}
