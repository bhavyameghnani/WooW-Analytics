import http from './http-common-servicecall'

class ServiceCall{
    
    userSignUp(userDetails){
        return http.post("/userSignUp", userDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    userSignIn(userLoginDetails){
        return http.post("/userSignIn", userLoginDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    uploadSnap(imageSrc){
        return http.post("/uploadSnap", imageSrc, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getSnap(){
        return http.post("/getSnap/snap",  {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    challenge_submission(submission_details){
        return http.post("/challenge_submission", submission_details, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    fetchChallenges(){
        return http.get("/fetchChallenges", {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    fetchChallengesEnrolled(){
        return http.get("/fetchChallengesEnrolled", {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    fetchUserName(userId){
        return http.post("/fetchUserName",userId,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    adminAddChallenge(admin_challenges){
        return http.post("/adminAddChallenge", admin_challenges, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    userChallengesEnrolled(challenges_enrolled){
        return http.post("/userChallengesEnrolled", challenges_enrolled, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    checkUserChallengesEnrolled(user_challenge){
        return http.post("/checkUserChallengesEnrolled", user_challenge, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


}

export default new ServiceCall();