export  class UserInfo {
    private _access_token: String;
    private _email: String;
    private _name: String;
    private _id: String;


    constructor(access_token: String, email: String, name: String, id: String) {
        this._access_token = access_token;
        this._email = email;
        this._name = name;
        this._id = id;
    }



    get access_token(): String {
        return this._access_token;
    }

    get email(): String {
        return this._email;
    }

    get name(): String {
        return this._name;
    }

    get id(): String {
        return this._id;
    }
}