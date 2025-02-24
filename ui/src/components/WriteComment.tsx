"use client";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import {AiFillStar} from "react-icons/ai"
import axios from "axios";

type WriteCommentProps  ={
    userId : string;
    productId : string;
    commentCreate : boolean;
    setCommentCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

export const WriteComment = ({userId, productId , commentCreate, setCommentCreate} : WriteCommentProps ) =>{
    const [star, setStar] = useState<number>(0);
    const [comment , setComment] = useState<string>("");
    const starArray = [1,2,3,4,5];
    const onStar = (clicked : number) =>{
        setStar(clicked);
    }
    const writeComment =async () =>{
        try{
            const response =await axios.post(`${API_URL}/comment/createComment`, {userId, productId, star, comment});
            alert("Амжилттай сэтгэгдэл үлдээлээ.");
            setComment("");
            setStar(0);
            setCommentCreate(!commentCreate);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    console.log(star);

    return(
        <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col">
                <p className="font-medium text-[#09090B]"> Одоор үнэлэх: </p>
                <div className="flex">
                    {starArray.map((oneStar, index) =>{
                        let color = "white";
                        {
                            color = oneStar > star ? "white" : "yellow";
                        }
                        return <button key={index} onClick={() => onStar(oneStar)}><AiFillStar className="drop-shadow-[0_0_2px_black]" size={24} color={`${color}`}/></button>
                    })}
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-medium text-[#09090B]"> Сэтгэгдэл үлдээх: </p>
                <input value={comment} onChange={(event) => setComment(event.target.value)} className="w-[463px] shadow-sm border border-[#E4E4E7] py-2 px-3 rounded-md text-[#09090B]" placeholder="Энд бичнэ үү"/>
            </div>
            <button onClick={writeComment} className="px-9 py-2 bg-[#2563EB] shadow-sm rounded-3xl font-medium text-[#FFFFFF] w-fit"> Үнэлэх </button>
        </div>
    )
}