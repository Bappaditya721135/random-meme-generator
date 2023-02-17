import React from 'react';
import btnImg from '../img/btn-img.png';


export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        img: "https://i.imgflip.com/1g8my4.jpg",
    });
    const [memesData, setMemesData] = React.useState([])


    // when the form is submitted run this function 
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    // this function is to store the input value for top text and bottom text 
    function handleChange(e) {
        setMeme(prevMeme=> {
            return {
                ...prevMeme,
                [e.target.name]: e.target.value,
            }
        })
    }

    React.useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data=> setMemesData(data.data.memes))
    },[])

    // display a random image url from the meme data when button is clicked 
    function handleOnClick() {
        const random = Math.trunc(Math.random()*100);
        const memeArray = memesData;
        setMeme(prevMeme=> {
            return {
                ...prevMeme,
                img: memeArray[random].url,
            }
        });
    }


    return(
    <>
        <form id="my-form" onSubmit={handleOnSubmit}>
            <input className="first input" name="topText" type="text" onChange={handleChange} value={meme.topText} />
            <input className="second input" name="bottomText" type="text" onChange={handleChange} value={meme.bottomText} />
            <button onClick={handleOnClick}>
                <img className="btn-img" src={btnImg} alt="button-img" />
            </button>
        </form>
        <figure className="meme-img-container">
            <p className="top-text">{meme.topText}</p>
            <p className="bottom-text">{meme.bottomText}</p>
            <img className="meme-img" src={meme.img} alt="" />
        </figure>
    </>
    );
}