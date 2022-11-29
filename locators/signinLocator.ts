import { Page, Locator, expect } from "@playwright/test";

export class signInLocator{


    public get signinLocator(){
      
        return {
            EMAIL:'#login-email',
            PWD : '#login-password',
            BTN : '#login-submit-btn'
        };
               
    }

}