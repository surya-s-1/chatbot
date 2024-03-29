export default function MessageWrapper({content, sender, timestamp}) {
    const datetime = new Date(timestamp)
    const time = datetime.toLocaleTimeString()

    if (sender==='user') {
        return(
            <div className="alert alert-info p-2 m-0 float-end">
                {content}
                <div className="font-weight-light" style={{fontSize: '8px'}}>
                    {time}
                </div>
            </div>
        )
    } else {
        return(
            <div className="alert alert-secondary p-2 m-0 float-start">
                {content}
                <div className="font-weight-light" style={{fontSize: '8px'}}>
                    {time}
                </div>
            </div>
        )
    }
}