// Importing components
import {Component,Injectable} from '@angular/core';
import {UserClass} from './Model/user';
@Injectable()
export class UserData{
    // Userlist Array
    userList:Array<UserClass>=new Array<UserClass>();
    // get user data
    getuserData(){
        return this.userList=[]
    }
    // now add userData
    addUserData(userDetail:UserClass){
        this.userList.unshift(userDetail);
    }
}