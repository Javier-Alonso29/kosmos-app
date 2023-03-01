import { useEffect, useState } from "react";
import { getImages } from "../services/getImages";

export const useFetchImages = (id) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    
    
    useEffect(() => {
        
        getImages(id).then(imgs => setState({
            data: imgs,
            loading: false,
        }))
        
    }, [id]);
    
    return state;
}