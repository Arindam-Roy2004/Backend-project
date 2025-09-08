import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';

const registerUser = asyncHandler(async (req, res) => {
    // Registration logic here
    
    // get details from user
    //validate details
    // check if user already exists
    // check for images , check for avatar
    // upload to cloudinary,avatar
    // create user object - create entry in db
    // remove password from response and refresh token
    //check for user creation
    // return result

    const { fullName , email , password , username } = req.body;
    console.log(req.body);

    if(
        [fullName , email , password , username].some(field => field?.trim()==="")
    ) {
        throw new ApiError(400,"All fields are required");
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if(existingUser){
        throw new ApiError(409,"User with this email or username already exists");
    }



});

export { registerUser };
