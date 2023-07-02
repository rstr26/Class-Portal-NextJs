import db from "@/misc/database";
import jwt from "jsonwebtoken";
import { AccessToken } from "@/misc/tokens";

export default function handler(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).send({ message: 'Unauthorized' });

    jwt.verify(token, AccessToken, (err, user) => {
        if(err) return res.status(403).send({ message: 'Forbidden' });

        res.status(200).send({ message: 'Authorized', role: user.role });
    })
}