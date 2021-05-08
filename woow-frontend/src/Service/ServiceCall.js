import http from './http-common-servicecall'

class ServiceCall {

    userSignUp(userDetails) {
        return http.post("/addUser", userDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }




    userSignIn(userLoginDetails) {
        return http.post("/login", userLoginDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    addProject(projectDetails) {
        return http.post("/addProject", projectDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getProject(id){
        return http.get("/getProject/"+id, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getAllUser(){
        return http.get("/getAllUser", {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getAllProjects(){
        return http.get("/getAllProjects", {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    

}

export default new ServiceCall();