// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const body = req.body;

  let placeHolderResponse = await fetch('https://jsonplaceholder.typicode.com/posts', 
    {
      method:"POST",
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
        'x-token-access': 'random'
      },
      body: body
    })
    res.statusCode = placeHolderResponse.status
    res.end( await placeHolderResponse.text());
}
