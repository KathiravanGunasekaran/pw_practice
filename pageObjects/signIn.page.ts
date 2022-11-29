import { Page,Locator,expect,test} from "@playwright/test";
import { signInLocator } from "../locators/signinLocator";

export class signIn{
    url="https://connect.mheducation.com/";
    page:Page;
    email:Locator;
    pwd:Locator;
    signinBtn:Locator;
    private sign : signInLocator;

    constructor(page:Page){
        this.page=page;
        this.sign = new signInLocator();
        // this.email = page.locator('#login-email');
        // this.pwd = page.locator('#login-password');
        // this.signinBtn = page.locator('#login-submit-btn');

    }


    async goto(){
        await this.page.goto(this.url);
        await this.page.waitForTimeout(5000);
    }

    async check(){
        await expect(this.page).toHaveTitle("Sign In | Connect | McGraw Hill");
        await console.log("Landed on Signin page");
    }
    async fill(){
        // await this.email.fill("gaayathrim@connect.com");
        // await this.pwd.fill("Connect5");
        // await this.signinBtn.click();
        
        // await console.log(this.sign.signinLocator.EMAIL);
        // await console.log(this.sign.signinLocator.PWD);
        // await console.log(this.sign.signinLocator.BTN);

        
        let a = this.sign.signinLocator.EMAIL;
        let b = this.sign.signinLocator.PWD;
        let c = this.sign.signinLocator.BTN;
        await this.page.locator(a).type("gaayathrim@connect.com")
        await this.page.locator(b).type("Connect5");
        await this.page.locator(c).click();
        
        //this.sign.signinLocator.EMAIL.type("gaayathrim@connect.com")

    }

}