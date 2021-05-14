import './SingleAnalyses.css'
import useSingleAnalyses from './useSingleAnalyses'

export default function SingleAnalyses() {
    const {
        commentText,
        dimension,
        attitude,
        textFeatures,
        reply,
        textAreaRef,
        analyze
    } = useSingleAnalyses()

    return (
        <main id="single-analyses" key="单条分析">
            <article className="introduction">
                <h1>使用说明</h1>
                {
                    [
                        '该页面利用人工智能分析[某行业]产品的评论。需要 Python 环境。',
                        '输入评论内容，点击开始分析按钮，将输出其评论角度，评论态度以及人工智能给出的自动回复。',
                        '评论角度分为[n]方面，分别是：string[]。',
                        '评论态度分为两种：正面和负面'
                    ].map((item, index) => <p key={index}>{item}</p>)
                }
            </article>
            <article className="input-area">
                <h1>输入评论内容</h1>
                <textarea className="text-area" ref={textAreaRef} />
                <button className="ms-button primary" onClick={analyze}>开始分析</button>
            </article>
            <article className="output-area">
                <h1>分析结果</h1>
                <h2>评论原文</h2>
                <p>{commentText}</p>
                <h2>评论态度</h2>
                <p>{attitude}</p>
                <h2>评论角度</h2>
                <p>{dimension}</p>
                <h2>文字特征</h2>
                <p>{textFeatures}</p>
                <h2>自动回复</h2>
                <p>{reply}</p>
            </article>
        </main>
    )
}