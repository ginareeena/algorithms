
// <!--
// # CONTEXT
// Imagine you are working on the learner dashboard. On this page learners can see their upcoming and past classes. Your main goal is to implement pagination functionality to render these meetings. 

// # TASKS
// - [ ] Render a list of meetings. Display the title and the start time of a meeting.
// - [ ] Implement front end pagination with a limit of 2. Initially your page should only render 2 meetings. Edit listMeetings function so that it returns a subset of meetings.
// - [ ] Implement "Show More" button to display more meetings with a limit of 2.
// - [ ] Convert listMeetings to an async function and adapt your solution to work with async calls 
//       Use setTimeout to simulate an async call. For example:
//             await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000)));
// -  [ ] Hide "Show More" if no more meetings exist

// -->

<html>
<head>
<style>
body {
  font-size: 150%;
  background: white;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>
</head>

<body>
<div id="root"></div>
<script type="text/jsx"> 

const meetingsData = [{
    uid: "7376de83-3cc9-443c-a227-6bdaebbc5d09",
    activityTitle: "Activity Title 1",
    startTime: new Date(1604061202898)
}, {
    uid: "7576de83-3cc9-443c-a227-6bdaebbc5d09",
    activityTitle: "Activity Title 2",
    startTime: new Date(1605051102898)
}, {
    uid: "7176ed83-3cc9-443c-a227-6bdaebbc5d09",
    activityTitle: "Activity Title 3",
    startTime: new Date(1608061202898)
}, {
    uid: "6176de83-3cc9-443c-a227-6bdaebbc5d09",
    activityTitle: "Activity Title 4",
    startTime: new Date(1607061202898)
}, {
    uid: "7176de83-3cc9-443c-a227-6bdaebbx5d09",
    activityTitle: "Activity Title 1",
    startTime: new Date(1606061202898)
}, {
    uid: "7276de83-3cc9-443c-a227-6bdaebbc5d09",
    activityTitle: "Activity Title 6",
    startTime: new Date(1603061202898)
}];

// TODO: Edit this function to return a subset of results. Don't return JSX from this function.
const listMeetings = (meetingsNum) => {
  
  let subset= []
  
  for(let i=0;i<meetingsNum;i++){
    let currMeeting= meetingsData[i]
    subset.push(currMeeting)
  }
  
  return subset;

}

// You can either use a functional component or a class based component
function MeetingList() {
  
  const [meetingsNum,incrementMeetings]=React.useState(2)
  const [meetingsSubset,updateMeetingsSubset]=React.useState(listMeetings(meetingsNum))
  
  React.useEffect(()=>{
    updateMeetingsSubset(listMeetings(meetingsNum))
  },[meetingsNum])
  
  console.log("meetingsSubset", meetingsSubset)
  console.log("meetingsNum", meetingsNum)

  return (<div>Meetings list
      {meetingsSubset.map((meeting, index)=>{
        
        return <div key= {index}>
        <div>{meeting.activityTitle}</div>
        <div>{meeting.startTime.getTime()}</div>
          </div>
      }  
    )}
      
      <button onClick={()=>{incrementMeetings(meetingsNum+2)}}>Show More</button>
   </div>);
} 

// class MeetingList extends React.Component {
//   render() {
//     return<div> TODO: Meetings list</div>;
//   }
// }

      
ReactDOM.render(<MeetingList / > , document.getElementById('root'));

</script>
</body>

</html>