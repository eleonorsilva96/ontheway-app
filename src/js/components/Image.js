import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import Viagem from "./Viagem";
// TODO: buscar a imagem user pelo redux - REVER

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="image-default">

            </div>);//default img
        }

        return (
            <div className="previewComponent bring-to-front m-2">
                <div className="imgPreview d-flex align-items-center">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

export default Image;