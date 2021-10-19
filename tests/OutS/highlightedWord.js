// write a function that takes a string "query" and a string "result" 
// and returns the query highlighted if in the result
// highlightedResult("read", "reading is fun")
// should return "<b>read</b>ing is fun"

function getResult(query, result){
    if(!result.includes(query)){
      return result
    }  

    let highlightedResult= ""
    let idxs= []
    let endIdx= query.length
  
    for(let i=0;i<result.length;i++){
      let currSlice= result.slice(i)
      console.log('currSlice', currSlice)
      if(!currSlice.includes(query)){
        break
      }
      let currWord= result.slice(i, i+endIdx)
   
      if(currWord === query){
      idxs.push(i)
      }
    }
  
     for(let i=0;i<result.length;i++){
      if(idxs.includes(i)){
        highlightedResult += `<b>${result.slice(i, i+endIdx)}</b>`
      i+= endIdx - 1
      }
      else {
        highlightedResult += result[i]
      }
     }
  
    return highlightedResult
  }
  
  
  console.log(getResult("read", "reading is fun reading"))