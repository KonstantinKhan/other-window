import React, {useEffect} from "react";

export const App: React.FC = () => {

    useEffect(() => {
        window.addEventListener("message", listener)
    }, [])

    const listener = (event: MessageEvent) => {
        if (event.origin !== "http://localhost:3000") {

        } else {
            console.log("data", event.data)
        }
    }

    return (
        <div>
            <a href={"http://localhost:3000/"} target="_top _blank">Loodsman</a>
            <button onClick={() => window.open("http://localhost:3000")}>Click</button>
        </div>
    )
}