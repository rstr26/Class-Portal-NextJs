// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '@/misc/database';

export default function handler(req, res) {
  const { username, password } = req.body;

  let qry = 
  `
  SELECT role FROM user_accounts WHERE username = '${username}' AND password = '${password}'
  `

  db.query(qry, (err, result) => {
    if(err) {
      res.status(500).json({ message: err.message })
    }
    else {
      if(result.length > 0) {
        res.status(200).send({role: result[0].role});
      }
      else {
        res.status(401).send({ message: 'Wrong username/password combination.' });
      }
    }
  });
}
