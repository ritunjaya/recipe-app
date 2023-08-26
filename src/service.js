const queryStrings={
  app_id: process.env.REACT_APP_APP_ID,
  app_key:process.env.REACT_APP_APP_KEY
}
//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=e17fa658&app_key=d84e264dcb69600451db5f1e9e83ab00	
//https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}

export const fetchData = async(defaultQuery) => {
  const{app_id,app_key} = queryStrings
try{
  const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
  const response = data.json()
  return response
}
catch(e)
{
  console.log(e,'something went wrong')
  return e
}
}

export const fetchTabData = async(defaultQuery) => {
  
try{
  const{app_id,app_key} = queryStrings
  const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}/?type=public&q=&app_id=${app_id}&app_key=${app_key}`)
  const response = data.json()
  console.log(response)
  return response
}
catch(e)
{
  console.log(e,'something went wrong')
  return e
}
}
