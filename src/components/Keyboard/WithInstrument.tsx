import React, { FunctionComponent } from "react"
import { useAudioContext } from "../AudioContextProvider"
import { withInstrument } from "../../adapters/Soundfont"
import { Keyboard } from "../Keyboard"
import { useInstrument } from "../../state/Instrument"
import "./style.css"


const WrappedKeyboard = withInstrument(Keyboard)

export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()


    return (
        <WrappedKeyboard
            AudioContext={AudioContext}
            instrument={instrument}
        />
    )
}