import React, { Component } from 'react';
import axios from 'axios';
import style from './aws.less';
import { handleClearError } from '../../../utilities';


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

    handleClearStatus = () => {
        this.setState({ success: '', error: '' });
    }

    render() {
        const { submitFile, handleFileUpload, handleClearStatus } = this;
        const { file, success, error } = this.state;
        return (
            <form onSubmit={ submitFile } className={ style.awsForm }>
                <label htmlFor='file' className={ style.awsLabel }>Upload File to AWS</label>
                <input 
                    onChange={ handleFileUpload } 
                    type='file' 
                    className={ style.awsUpload } 
                    name='file'
                    />
                <button disabled={ !file } className={ style.awsButton }>Upload</button>
            { 
                success || error ? (
                    <div 
                        onClick={ () => handleClearStatus() } 
                        className={ success ? style.awsSuccess : style.awsError }
                        >
                        { success ? success + ' (X)' : error + ' (X)' } 
                    </div> 
                ) : null 
            }
            </form>
        )
    }
}


export default AWS;