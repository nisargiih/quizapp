export default function Result(props){
    var percentage = props.data.questions/props.data.score*100
    console.log(typeof(props.data.score))
    return(
        <>
        <h1>Your Resutlt</h1>
        { props.data.score === 0 ? <p>0%</p> : <p>{percentage}%</p> }
        <p>Attempted questions {props.data.score}/{props.data.questions}</p>
        </>
    )
}