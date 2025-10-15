import jwt from 'jsonwebtoken';
import 'dotenv/config'

const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers;

        if (!dtoken) {
            return res.json({ success: false, message: 'Not authorized login failed' });
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

        
        const userId = token_decode.id;


        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }


}

export default authDoctor;