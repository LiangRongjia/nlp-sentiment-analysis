import React, { useState } from "react"
import { fetchResult } from '../../APIs'

export default function useSingleAnalyses() {
    const [commentText, setCommentText] = useState('等待输入评论')
    const [attitude, setAttitude] = useState('等待输入评论')
    const [reply, setReply] = useState('等待输入评论')

    const textAreaRef = React.createRef<HTMLTextAreaElement>()

    async function analyze() {
        if (!(textAreaRef.current?.value)) return
        const data = await fetchResult(textAreaRef.current?.value || '')
        setCommentText(data[0].commentText)
        setAttitude(data[0].attitude)
        setReply(data[0].reply)
    }

    return {
        commentText,
        attitude,
        reply,
        textAreaRef,
        analyze
    }
}