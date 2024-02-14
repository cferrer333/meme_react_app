import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetData: any = () => {
    const [topText] = useState("");
    const [bottomText] = useState("");
    const [ allMemeImgs, setAllMemeImgs ] = useState<[]>([]);
    const [randomImg] = useState("");

    async function handleDataFetch(){
        const result = await server_calls.get();
        setAllMemeImgs(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { allMemeImgs, randomImg, topText, bottomText, getData: handleDataFetch }
}