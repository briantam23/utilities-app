import React, { Component, Fragment } from 'react';
import axios from 'axios';
import style from './aws.less';


class AWS extends Component {

    state = {
        file: null,
        success: '',
        error: ''
    }

    submitFile = e => {
        const { file } = this.state;
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file[0]);

        axios.post(`/api/aws/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                console.log(res);
                this.setState({ success: 'File successfully uploaded!' });
            })
            .catch(e => {
                console.log(e);
                this.setState({ error: 'Error uploading file.'})
            })
    }

    handleFileUpload = e => {
        this.setState({ file: e.target.files, success: '', error: '' });
    }

    render() {
        const { submitFile, handleFileUpload } = this;
        const { success, error } = this.state;
        return (
            <Fragment>
                <form onSubmit={ submitFile } className={ style.awsForm }>
                    <label htmlFor='picture' className={ style.awsLabel }>Upload Profile Picture</label>
                    <input 
                        onChange={ handleFileUpload } 
                        type='file' 
                        className={ style.awsUpload } 
                        name='picture'
                        />
                    <button className={ style.awsButton }>Send</button>
                    { success ? <div className={ style.awsSuccess }>{ success }</div> : null }
                    { error ? <div className={ style.awsError }>{ error }</div>: null }
                </form>
            </Fragment>
        )
    }
}


export default AWS;