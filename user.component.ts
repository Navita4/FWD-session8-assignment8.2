import {Component,Injectable} from '@angular/core';
import {UserClass} from './Model/user';
import {UserData} from './Service/user.service';
@Component({
    selector:"user-app",
    templateUrl:"./View/uesr.component.html",
    providers:[UserData]// service called in component providers

})
export class UserComponent{
// logic
currentUser:UserClass=new UserClass();
// UserList Array
userList:Array<UserClass>=new Array<UserClass>();

constructor(private _userData:UserData){

}
ngOnInit(){
    this.userList=this._userData.getUserData();
}
addUser(){
    this._userData.addUserData(this.currentUser);
    this.currentUser=new UserClass();
}
}