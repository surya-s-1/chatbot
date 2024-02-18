export default function MessageWrapper({content, sender}) {
    if (sender==='user') {
        return(
            <div className="alert alert-info float-end">
                {content}
            </div>
        )
    } else {
        return(
            <div className="alert alert-secondary float-start">
                {content}
            </div>
        )
    }
}