import React, { Component } from 'react';
import axios from 'axios';


class AWS extends Component {

    state = {
        file: null
    }

    submitFile = e => {
        const { file } = this.state;
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file[0]);
        axios.post(`/test-upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }

    handleFileUpload = e => {
        this.setState({ file: e.target.files });
    }
}


export default AWS;