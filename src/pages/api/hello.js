// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.body.username === 'admin' && req.body.password === 'admin') {
    res.status(200).json({ message: 'ok' })
  }
  else{
    res.status(401).json({ message: 'unauthorized' })
  }
}
