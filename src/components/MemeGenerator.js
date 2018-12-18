import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            topText: "",
            bottomText: "",
            allMemeImages: [],
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        this.setState({loading: true})

        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                console.log(memes[0]);
                this.setState({
                    allMemeImages: memes,
                    loading: false
                });  
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        let randomNum = Math.floor(Math.random() * this.state.allMemeImages.length);
        let randomImage = this.state.allMemeImages[randomNum].url
        this.setState({
            randomImg: randomImage
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}/>
                    <br />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator