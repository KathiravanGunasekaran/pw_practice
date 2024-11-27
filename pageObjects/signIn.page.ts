import { Page,Locator,expect,test} from "@playwright/test";
import { signInLocator } from "../locators/signinLocator";

export class signIn{
    url="";
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
        await expect(this.page).toHaveTitle("");
        await console.log("Landed on Signin page");
    }
    async fill(){        
        let a = this.sign.signinLocator.EMAIL;
        let b = this.sign.signinLocator.PWD;
        let c = this.sign.signinLocator.BTN;
        await this.page.locator(a).type("")
        await this.page.locator(b).type("");
        await this.page.locator(c).click();
    }

}
