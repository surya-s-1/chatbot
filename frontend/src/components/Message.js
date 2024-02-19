export default function MessageWrapper({content, sender}) {
    if (sender==='user') {
        return(
            <div className="alert alert-info p-2 m-0 float-end">
                {content}
            </div>
        )
    } else {
        return(
            <div className="alert alert-secondary p-2 m-0 float-start">
                {content}
            </div>
        )
    }
}