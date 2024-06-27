import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";



export default function Buttons() {

   

    return (
        <div className="flex justify-between">
            <div className="mt-3 flex gap-2">
                <span className="iconButton px-3 py-2.5">
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </span>
                <span className="iconButton px-4 py-2">
                    <FontAwesomeIcon icon={faCopy} />
                </span>
                <span className="iconButton px-3.5 py-2">
                    <FontAwesomeIcon icon={faTwitter} />
                </span>

            </div>

            <button className="changeQuote px-4"
            onChange={changeQuote}
            >New Quote</button>
        </div>
    )
}