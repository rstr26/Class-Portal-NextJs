import db from '@/misc/database';
import jwt from 'jsonwebtoken';
import { AccessToken } from '@/misc/tokens';

export default function handler(req, res) {
  const { username, password } = req.body;

  let qry = 
  `
  SELECT 
  ua.role,
  CONCAT(udt.first_name, ' ', udt.last_name) as full_name
  FROM user_accounts as ua
  INNER JOIN user_account_details as udt on udt.account_id = ua.account_id
  WHERE ua.username = '${username}' AND ua.password = '${password}'
  `

  db.query(qry, (err, result) => {
    if(err) {
      res.status(500).json({ message: err.message })
    }
    else {
      if(result.length > 0) {
        const role = result[0].role;
        const name = result[0].full_name;
        const user = { name, role };

        const accessToken = jwt.sign(user, AccessToken)
        res.status(200).send({ accessToken: accessToken, name: name, role: role });
      }
      else {
        res.status(401).send({ message: 'Wrong username/password combination.' });
      }
    }
  });
}