import { Comment } from "@/lib/types"
import StarRating from "./Rating";


export const OneComment = ({ comment }: { comment: Comment }) =>{
    return(
        <div className="pt-4 flex flex-col border-t border-[#E4E4E7] gap-1 w-full">
            <div className="flex gap-1">
                {JSON.stringify(comment.userId.userName)}
                <StarRating rating={comment.star}/>
            </div>
            <p className="font-normal text-sm text-[#71717A]"> {comment.comment} </p>
        </div>
    )
}