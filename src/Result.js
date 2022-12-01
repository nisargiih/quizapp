export default function Result(props){
    var percentage = props.data.score/props.data.questions*100
    console.log(typeof(props.data.score))
    return(
        <>
        <h1>Your Result</h1>
        { props.data.score === 0 ? <p>Percentage : 0%</p> : <p>Percentage : {percentage}%</p> }
        <p>Correct Answer : {props.data.score}</p>
        <p>Total question : {props.data.questions}</p>
        </>
    )
}