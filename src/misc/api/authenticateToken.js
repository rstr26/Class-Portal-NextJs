import jwt from 'jsonwebtoken';
import { AccessToken } from '@/misc/tokens';

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).send({ message: 'Unauthorized' });

    jwt.verify(token, AccessToken, (err, user) => {
        if(err) return res.status(403).send({ message: 'Forbidden' });
        req.user = user;
        next();
    })
}

export default authenticateToken;