import { useState } from "react"
import QRCode from "react-qr-code";
import "./index.css"
export default function QrCodeGenerator(params) {
    const [inputValue, setInputValue] = useState('')
    const [qrCode, setQrCode] = useState('')
    const handleQrCode = () => {
        setQrCode(inputValue)
        setInputValue('')
    }
    return (
        <div className="qr">
            <h1>QR GENERATOR</h1>
            <input type="text" name="" id="" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleQrCode} disabled={inputValue && inputValue.trim() !== "" ? false : true}>GENERATE()</button>
            <div >
                <QRCode id="qr-code" name="qr-code" value={qrCode} size={200} bgColor="blue" />
            </div>

        </div>
    )
}