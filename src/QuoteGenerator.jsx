import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";

import { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteGenerator() {

    const[quote, setQuote] = useState("");
    const[author, setAuthor] = useState("");
    const[popup, setPopup] = useState(false);

    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        generateQuote()
    }, [])

    // fetches api and generates quotes
    const generateQuote = () => {
        axios.get('https://type.fit/api/quotes')
            .then(response => {
                const quotes = response.data;
                let random = Math.floor(Math.random() * quotes.length);
                setAuthor(quotes[random].author)
                setQuote(quotes[random].text);
                setLoading(false);
                //console.log(quotes)
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }


    //copy text function
    const copyText = () => {
        navigator.clipboard.writeText(quote)
            .then(() => {
                setPopup(true);
                setTimeout(() => {
                    setPopup(false)
                }, 2000);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // text to speech
    const textSpeak = () => {
        if(quote != "") {
            const speech = new SpeechSynthesisUtterance(quote);
            window.speechSynthesis.speak(speech);
        }
    }



    // for loading screen
    if(loading) {
        return <h1>is loading ..........</h1>
    }

    // for error screen
    if(error) {
        return <h1>Error: {error}</h1>
    }


    return (
        <>
        {/* Quotes section */}
        <div className="min-h-[80%] max-h-[80%] justify-between overflow-auto">
            <h1 className="text-4xl text-center font-bold">Quotes of the day</h1>
            <div  className="mt-16">
                <p className="quoteFont text-center">
                    <FontAwesomeIcon icon={faQuoteLeft} className="pr-4" />
                    {quote}
                    <FontAwesomeIcon icon={faQuoteRight} className="pl-4"/>
                </p>
            </div>
            
            <p className="text-right mt-5 mb-5"> - {author}</p>
        </div>

        <p className="text-center">Made with <FontAwesomeIcon icon={faHeart} className="text-red-600" /> Zephyr</p>
        <hr className="border-black" />

        {/* icons */}
        <div className="flex justify-between mt-4">
            <div className="flex gap-2">
                <span className="iconButton px-3 py-2.5" onClick={textSpeak}>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </span>
                <span className="iconButton px-4 py-2" onClick={copyText}>
                    <FontAwesomeIcon icon={faCopy} />
                </span>
                <a className="iconButton px-3.5 py-2" href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

            </div>

            <button className="changeQuote px-4"
            onClick={generateQuote}>
                New Quote
            </button>

            {/* generate pop up */}
            {popup && <div className="popupText">Text Copied!</div>}
        </div>


        </>
    )
}